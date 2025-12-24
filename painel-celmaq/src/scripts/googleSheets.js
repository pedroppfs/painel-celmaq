/*
 * ======================================
 * MÓDULO GOOGLE SHEETS API
 * Responsável por buscar dados da planilha
 * ======================================
 */

// ========== VARIÁVEIS DE CONTROLE ==========
let ultimaBuscaBemSucedida = null;
let dadosCache = null;
let intervaloBusca = null;

// ========== FUNÇÃO PRINCIPAL: BUSCAR DADOS ==========
/**
 * Busca dados da planilha Google Sheets
 * @returns {Promise<Array>} Array com dados dos pedidos
 */
async function buscarDadosGoogleSheets() {
    // Validar configuração
    const validacao = validarConfiguracao();
    if (!validacao.valido) {
        console.error('⚠️ Configuração inválida:', validacao.mensagem);
        throw new Error('Configuração do Google Sheets incompleta');
    }
    
    const { spreadsheetId, sheetName, apiKey, maxRows } = GOOGLE_SHEETS_CONFIG;
    
    // Construir URL da API
    // A2:K{maxRows} = Da linha 2 até maxRows, colunas A até K
    // Isso garante escalabilidade - busca todas as linhas até o limite configurado
    const maxLinhaRange = maxRows || 1000;  // Padrão: 1000 linhas
    const range = `${sheetName}!A2:K${maxLinhaRange}`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    
    console.log(`📍 Buscando range: ${range} (até ${maxLinhaRange - 1} pedidos)`);
    
    try {
        console.log('🔄 Buscando dados do Google Sheets...');
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro na API: ${errorData.error?.message || response.statusText}`);
        }
        
        const data = await response.json();
        
        // Verificar se há dados
        if (!data.values || data.values.length === 0) {
            console.warn('⚠️ Planilha vazia ou sem dados');
            return [];
        }
        
        // Converter dados da planilha para formato do painel
        const dadosConvertidos = converterDadosPlanilha(data.values);
        
        // Atualizar cache e timestamp
        dadosCache = dadosConvertidos;
        ultimaBuscaBemSucedida = new Date();
        
        console.log(`✅ Google Sheets - Dados carregados com sucesso:`);
        console.log(`   • Linhas brutas recebidas: ${data.values.length}`);
        console.log(`   • Pedidos válidos após filtro: ${dadosConvertidos.length}`);
        if (dadosConvertidos.length > 0) {
            console.log(`   • Primeiro ID: ${dadosConvertidos[0].id}`);
            console.log(`   • Último ID: ${dadosConvertidos[dadosConvertidos.length - 1].id}`);
        }
        console.log(`   • Última atualização: ${ultimaBuscaBemSucedida.toLocaleTimeString('pt-BR')}`);
        
        return dadosConvertidos;
        
    } catch (error) {
        console.error('❌ Erro ao buscar dados do Google Sheets:', error);
        console.error('Detalhes:', error.message);
        
        // Se temos cache, usar cache
        if (dadosCache && dadosCache.length > 0) {
            console.warn('⚠️ Usando dados em cache da última busca bem-sucedida');
            return dadosCache;
        }
        
        throw error;
    }
}

// ========== CONVERSÃO DE DADOS ==========
/**
 * Converte dados da planilha para formato do painel
 * @param {Array} linhas - Array de linhas da planilha
 * @returns {Array} Array formatado para o painel
 */
function converterDadosPlanilha(linhas) {
    console.log(`🔄 Iniciando conversão de ${linhas.length} linhas brutas...`);
    
    let linhasRemovidas = 0;
    let errosProcessamento = 0;
    
    // Primeira filtragem - remover linhas vazias
    const linhasFiltradas = linhas.filter((linha, index) => {
        // Remover linhas completamente vazias
        if (!linha || linha.length === 0) {
            linhasRemovidas++;
            console.log(`   ⚠️ Linha ${index + 2}: Removida (vazia)`);
            return false;
        }
        
        // Remover linhas onde o ID está vazio
        const id = linha[COLUMN_MAPPING.id];
        if (!id || id.toString().trim() === '') {
            linhasRemovidas++;
            console.log(`   ⚠️ Linha ${index + 2}: Removida (sem ID) - Conteúdo: [${linha.slice(0, 3).join(', ')}...]`);
            return false;
        }
        
        return true;
    });
    
    console.log(`   ✅ Após filtro inicial: ${linhasFiltradas.length} linhas válidas (${linhasRemovidas} removidas)`);
    
    // Conversão
    const dadosConvertidos = linhasFiltradas
        .map((linha, index) => {
            try {
                return {
                    id: linha[COLUMN_MAPPING.id] || '',
                    cliente: linha[COLUMN_MAPPING.cliente] || '',
                    dataEntrega: linha[COLUMN_MAPPING.dataEntrega] || '',
                    tensao: linha[COLUMN_MAPPING.tensao] || '',
                    produto: linha[COLUMN_MAPPING.produto] || '',
                    montador: linha[COLUMN_MAPPING.montador] || '',
                    ajudante: linha[COLUMN_MAPPING.ajudante] || '',
                    localEntrega: linha[COLUMN_MAPPING.localEntrega] || '',
                    status: normalizarStatus(linha[COLUMN_MAPPING.status]),
                    metodoEnvio: linha[COLUMN_MAPPING.metodoEnvio] || '',
                    etapa: linha[COLUMN_MAPPING.etapa] || ''
                };
            } catch (error) {
                errosProcessamento++;
                console.error(`   ❌ Erro ao processar linha ${index + 2}:`, error);
                return null;
            }
        })
        .filter(item => {
            // Remover linhas com erro
            if (item === null) return false;
            
            // Remover linhas onde o ID está vazio (dupla verificação)
            if (!item.id || item.id.toString().trim() === '') return false;
            
            return true;
        });
    
    if (errosProcessamento > 0) {
        console.warn(`   ⚠️ ${errosProcessamento} linha(s) com erro de processamento`);
    }
    
    console.log(`   ✅ Conversão finalizada: ${dadosConvertidos.length} pedidos prontos`);
    
    return dadosConvertidos;
}

// ========== NORMALIZAÇÃO DE STATUS ==========
/**
 * Normaliza o valor do status para padrões aceitos
 * @param {string} status - Status vindo da planilha
 * @returns {string} Status normalizado
 */
function normalizarStatus(status) {
    if (!status) return 'pendente';
    
    const statusLimpo = status.toLowerCase().trim();
    
    // Mapeamento de possíveis variações
    const mapeamento = {
        'confirmado': 'confirmado',
        'confirm': 'confirmado',
        'ok': 'confirmado',
        
        'pendente': 'pendente',
        'pend': 'pendente',
        'aguardando': 'pendente',
        
        'producao': 'producao',
        'produção': 'producao',
        'em producao': 'producao',
        'em produção': 'producao',
        'produzindo': 'producao',
        
        'atrasado': 'atrasado',
        'atraso': 'atrasado',
        'atrasada': 'atrasado',
        
        'entregue': 'entregue',
        'entregado': 'entregue',
        'concluido': 'entregue',
        'concluído': 'entregue',
        'finalizado': 'entregue'
    };
    
    return mapeamento[statusLimpo] || 'pendente';
}

// ========== ATUALIZAÇÃO AUTOMÁTICA ==========
/**
 * Inicia busca automática de dados
 */
function iniciarAtualizacaoAutomatica() {
    if (!GOOGLE_SHEETS_CONFIG.enabled) {
        console.log('ℹ️ Integração Google Sheets desativada');
        return;
    }
    
    // Parar intervalo existente
    pararAtualizacaoAutomatica();
    
    // Converter minutos para milissegundos
    const intervaloMs = GOOGLE_SHEETS_CONFIG.updateIntervalMinutes * 60 * 1000;
    
    console.log(`🔄 Atualização automática iniciada (a cada ${GOOGLE_SHEETS_CONFIG.updateIntervalMinutes} minuto(s))`);
    
    // Configurar intervalo
    intervaloBusca = setInterval(async () => {
        try {
            const dados = await buscarDadosGoogleSheets();
            
            // Disparar evento customizado para notificar que há novos dados
            window.dispatchEvent(new CustomEvent('dadosAtualizados', { 
                detail: { dados, origem: 'google-sheets' } 
            }));
            
        } catch (error) {
            console.error('❌ Erro na atualização automática:', error);
        }
    }, intervaloMs);
}

/**
 * Para a atualização automática
 */
function pararAtualizacaoAutomatica() {
    if (intervaloBusca) {
        clearInterval(intervaloBusca);
        intervaloBusca = null;
        console.log('⏸️ Atualização automática pausada');
    }
}

// ========== INFORMAÇÕES DO STATUS ==========
/**
 * Retorna informações sobre o status da integração
 */
function obterStatusIntegracao() {
    return {
        ativa: GOOGLE_SHEETS_CONFIG.enabled,
        configurada: validarConfiguracao().valido,
        ultimaBusca: ultimaBuscaBemSucedida,
        temCache: dadosCache !== null,
        quantidadeCache: dadosCache ? dadosCache.length : 0,
        intervaloMinutos: GOOGLE_SHEETS_CONFIG.updateIntervalMinutes
    };
}

// ========== FUNÇÕES DE TESTE ==========
/**
 * Testa a conexão com Google Sheets
 */
async function testarConexao() {
    console.group('🧪 Teste de Conexão Google Sheets');
    
    try {
        const validacao = validarConfiguracao();
        console.log('1. Validação:', validacao.valido ? '✅' : '❌');
        
        if (!validacao.valido) {
            console.error(validacao.mensagem);
            validacao.erros?.forEach(erro => console.error(erro));
            console.groupEnd();
            return false;
        }
        
        console.log('2. Buscando dados...');
        const dados = await buscarDadosGoogleSheets();
        
        console.log('3. Resultado:', dados.length > 0 ? '✅' : '⚠️');
        console.log(`   - ${dados.length} pedidos encontrados`);
        
        if (dados.length > 0) {
            console.log('4. Exemplo do primeiro pedido:');
            console.table([dados[0]]);
        }
        
        console.groupEnd();
        return true;
        
    } catch (error) {
        console.error('❌ Teste falhou:', error.message);
        console.groupEnd();
        return false;
    }
}

// ========== EXPORTAÇÕES ==========
window.GoogleSheets = {
    buscarDados: buscarDadosGoogleSheets,
    iniciarAtualizacao: iniciarAtualizacaoAutomatica,
    pararAtualizacao: pararAtualizacaoAutomatica,
    obterStatus: obterStatusIntegracao,
    testarConexao: testarConexao
};

