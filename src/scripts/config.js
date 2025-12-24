/*
 * ======================================
 * CONFIGURAÇÃO GOOGLE SHEETS
 * ======================================
 */

// ========== CREDENCIAIS GOOGLE SHEETS ==========
const GOOGLE_SHEETS_CONFIG = {
    // ID da sua planilha (copie da URL)
    // Exemplo: https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit
    //                                                    ↑ Este é o ID
    spreadsheetId: '19kSbkmMB2EePIlybs-IdX-19OYh5H-H-BiYvdYLMF5c',
    
    // Nome da aba/planilha (geralmente "Planilha1")
    sheetName: 'Planilha1',
    
    // API Key do Google Cloud Console
    // Como obter: Veja GUIA_GOOGLE_SHEETS.md
    apiKey: 'AIzaSyCgPSHMuzSS5a5iSD3nyLYGkQV6DI7QR0A',
    
    // Intervalo de atualização (em minutos)
    updateIntervalMinutes: 0.5,  // 30 segundos (0.5 minutos)
    
    // Limite máximo de linhas a buscar (escalabilidade)
    maxRows: 1000,  // Busca até 1000 linhas (mais que suficiente para produção)
    
    // Ativar/desativar integração
    enabled: true  // true = usar Google Sheets | false = usar dados mockados
};

// ========== MAPEAMENTO DE COLUNAS ==========
// Define quais colunas da planilha correspondem a quais campos
// Formato: A=0, B=1, C=2, etc.
const COLUMN_MAPPING = {
    id: 0,              // Coluna A - ID Pedido
    cliente: 1,         // Coluna B - Cliente
    dataEntrega: 2,     // Coluna C - Data Entrega
    tensao: 3,          // Coluna D - Tensão
    produto: 4,         // Coluna E - Produto
    montador: 5,        // Coluna F - Montador
    ajudante: 6,        // Coluna G - Ajudante
    localEntrega: 7,    // Coluna H - Local de Entrega
    status: 8,          // Coluna I - Status
    metodoEnvio: 9,     // Coluna J - Método Envio
    etapa: 10           // Coluna K - Etapa
};

// ========== VALIDAÇÃO DE CONFIGURAÇÃO ==========
function validarConfiguracao() {
    const erros = [];
    
    if (!GOOGLE_SHEETS_CONFIG.enabled) {
        return { valido: true, mensagem: 'Integração Google Sheets desativada' };
    }
    
    if (!GOOGLE_SHEETS_CONFIG.spreadsheetId || GOOGLE_SHEETS_CONFIG.spreadsheetId === 'COLE_SEU_ID_AQUI') {
        erros.push('❌ ID da planilha não configurado');
    }
    
    if (!GOOGLE_SHEETS_CONFIG.apiKey || GOOGLE_SHEETS_CONFIG.apiKey === 'COLE_SUA_API_KEY_AQUI') {
        erros.push('❌ API Key não configurada');
    }
    
    if (!GOOGLE_SHEETS_CONFIG.sheetName) {
        erros.push('❌ Nome da aba não configurado');
    }
    
    if (erros.length > 0) {
        return {
            valido: false,
            erros: erros,
            mensagem: 'Configuração incompleta. Veja GUIA_GOOGLE_SHEETS.md'
        };
    }
    
    return { valido: true, mensagem: '✅ Configuração válida' };
}

// ========== LOG DE CONFIGURAÇÃO ==========
function logConfiguracao() {
    console.group('📊 Configuração Google Sheets');
    console.log('Integração:', GOOGLE_SHEETS_CONFIG.enabled ? '✅ Ativada' : '⏸️ Desativada');
    
    if (GOOGLE_SHEETS_CONFIG.enabled) {
        console.log('Planilha ID:', GOOGLE_SHEETS_CONFIG.spreadsheetId);
        console.log('Aba:', GOOGLE_SHEETS_CONFIG.sheetName);
        console.log('API Key:', GOOGLE_SHEETS_CONFIG.apiKey ? '✅ Configurada' : '❌ Não configurada');
        console.log('Atualização:', `A cada ${GOOGLE_SHEETS_CONFIG.updateIntervalMinutes} minuto(s)`);
        
        const validacao = validarConfiguracao();
        if (validacao.valido) {
            console.log('✅', validacao.mensagem);
        } else {
            console.error('⚠️', validacao.mensagem);
            validacao.erros?.forEach(erro => console.error(erro));
        }
    }
    
    console.groupEnd();
}

// Exportar para uso global
window.GOOGLE_SHEETS_CONFIG = GOOGLE_SHEETS_CONFIG;
window.COLUMN_MAPPING = COLUMN_MAPPING;
window.validarConfiguracao = validarConfiguracao;
window.logConfiguracao = logConfiguracao;

