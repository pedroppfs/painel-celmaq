/*
 * ======================================
 * PAINEL DE CONTROLE CELMAQ
 * JavaScript Principal
 * ======================================
 */

// ========== CONFIGURAÇÕES E CONSTANTES ==========
const CONFIG = {
    updateInterval: 1000, // Atualização do relógio em ms
    locale: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    // Configurações de Paginação
    itemsPerPage: 8, // Número de linhas por página
    pageDisplayTime: 8000, // Tempo em ms que cada página fica visível (8 segundos)
    transitionTime: 400, // Tempo de transição entre páginas em ms
    autoRotate: true // Ativar/desativar rotação automática
};

// ========== DADOS MOCKADOS ==========
// Array com dados de exemplo para simular a tabela
// Posteriormente estes dados virão do Google Sheets
const dadosMockados = [
    {
        id: '131977721',
        cliente: 'PADARIA E LANCHONETE TRIGO DE MINAS',
        dataEntrega: '22/01/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_6.3E',
        montador: 'Vai Montador',
        ajudante: 'ADEMIR',
        localEntrega: 'TABOÃO DA SERRA/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'EMBALAGEM 90%'
    },
    {
        id: '131977722',
        cliente: 'PANIFICADORA BOM DIA LTDA',
        dataEntrega: '23/01/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_8.5E',
        montador: 'CARLOS SILVA',
        ajudante: 'JOÃO PEDRO',
        localEntrega: 'SÃO PAULO/SP',
        status: 'producao',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'MONTAGEM 45%'
    },
    {
        id: '131977723',
        cliente: 'CONFEITARIA DOCE SABOR',
        dataEntrega: '24/01/2025',
        tensao: '220V MONO',
        produto: 'CRONOS_4.2E',
        montador: 'RICARDO SANTOS',
        ajudante: 'MARCOS',
        localEntrega: 'CAMPINAS/SP',
        status: 'pendente',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'AGUARDANDO PEÇAS'
    },
    {
        id: '131977724',
        cliente: 'PADARIA CENTRAL DO PÃO',
        dataEntrega: '20/01/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_6.3E',
        montador: 'ANTONIO LIMA',
        ajudante: 'PEDRO',
        localEntrega: 'GUARULHOS/SP',
        status: 'atrasado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'TESTE FINAL 80%'
    },
    {
        id: '131977725',
        cliente: 'LANCHONETE DO BAIRRO',
        dataEntrega: '15/01/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_10.0E',
        montador: 'FERNANDO COSTA',
        ajudante: 'LUCAS',
        localEntrega: 'SANTO ANDRÉ/SP',
        status: 'entregue',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'CONCLUÍDO'
    },
    {
        id: '131977726',
        cliente: 'PADARIA MODERNA EXPRESS',
        dataEntrega: '25/01/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_6.3E',
        montador: 'Vai Montador',
        ajudante: 'ROBERTO',
        localEntrega: 'SÃO BERNARDO/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'PINTURA 60%'
    },
    {
        id: '131977727',
        cliente: 'CONFEITARIA ARTS & SABORES',
        dataEntrega: '26/01/2025',
        tensao: '220V MONO',
        produto: 'CRONOS_5.5E',
        montador: 'JOSÉ MARIA',
        ajudante: 'ANDERSON',
        localEntrega: 'OSASCO/SP',
        status: 'producao',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'SOLDAGEM 30%'
    },
    {
        id: '131977728',
        cliente: 'PANIFICADORA ESTRELA DA MANHÃ',
        dataEntrega: '27/01/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_9.0E',
        montador: 'PAULO HENRIQUE',
        ajudante: 'DIEGO',
        localEntrega: 'DIADEMA/SP',
        status: 'confirmado',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'PREPARAÇÃO'
    },
    {
        id: '131977729',
        cliente: 'PADARIA PÃO QUENTINHO',
        dataEntrega: '28/01/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_7.2E',
        montador: 'RAFAEL ALVES',
        ajudante: 'THIAGO',
        localEntrega: 'MAUÁ/SP',
        status: 'pendente',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'AGUARDANDO INÍCIO'
    },
    {
        id: '131977730',
        cliente: 'LANCHONETE & CAFÉ DO CENTRO',
        dataEntrega: '29/01/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_6.3E',
        montador: 'Vai Montador',
        ajudante: 'GUSTAVO',
        localEntrega: 'SUZANO/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'FIAÇÃO 50%'
    },
    {
        id: '131977731',
        cliente: 'PADARIA PÃES & DELÍCIAS',
        dataEntrega: '30/01/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_5.8E',
        montador: 'BRUNO COSTA',
        ajudante: 'FELIPE',
        localEntrega: 'MOGI DAS CRUZES/SP',
        status: 'pendente',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'AGUARDANDO APROVAÇÃO'
    },
    {
        id: '131977732',
        cliente: 'CONFEITARIA SABOR ESPECIAL',
        dataEntrega: '31/01/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_7.5E',
        montador: 'EDUARDO LIMA',
        ajudante: 'MATHEUS',
        localEntrega: 'SANTO ANDRÉ/SP',
        status: 'producao',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'MONTAGEM 25%'
    },
    {
        id: '131977733',
        cliente: 'PANIFICADORA MASSA FINA',
        dataEntrega: '01/02/2025',
        tensao: '220V MONO',
        produto: 'CRONOS_4.8E',
        montador: 'RENATO SILVA',
        ajudante: 'VINICIUS',
        localEntrega: 'SÃO CAETANO/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'PREPARAÇÃO'
    },
    {
        id: '131977734',
        cliente: 'LANCHONETE BOM GOSTO',
        dataEntrega: '02/02/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_6.0E',
        montador: 'MARCELO SANTOS',
        ajudante: 'RAFAEL',
        localEntrega: 'RIBEIRÃO PIRES/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'SOLDAGEM 40%'
    },
    {
        id: '131977735',
        cliente: 'PADARIA ARTESANAL DO BAIRRO',
        dataEntrega: '03/02/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_9.2E',
        montador: 'LEANDRO COSTA',
        ajudante: 'CAIO',
        localEntrega: 'ITAQUAQUECETUBA/SP',
        status: 'producao',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'PINTURA 70%'
    },
    {
        id: '131977736',
        cliente: 'CONFEITARIA DOCE MOMENTO',
        dataEntrega: '04/02/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_5.5E',
        montador: 'ANDRÉ OLIVEIRA',
        ajudante: 'BRUNO',
        localEntrega: 'FERRAZ DE VASCONCELOS/SP',
        status: 'atrasado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'TESTE FINAL 95%'
    },
    {
        id: '131977737',
        cliente: 'PANIFICADORA SABOR DA CASA',
        dataEntrega: '05/02/2025',
        tensao: '220V MONO',
        produto: 'CRONOS_4.5E',
        montador: 'FÁBIO ALVES',
        ajudante: 'HENRIQUE',
        localEntrega: 'POÁ/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'EMBALAGEM 30%'
    },
    {
        id: '131977738',
        cliente: 'LANCHONETE POINT DO SABOR',
        dataEntrega: '06/02/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_8.0E',
        montador: 'GUILHERME ROCHA',
        ajudante: 'IGOR',
        localEntrega: 'ARUJÁ/SP',
        status: 'pendente',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'AGUARDANDO PEÇAS'
    },
    {
        id: '131977739',
        cliente: 'PADARIA TRADICIONAL LTDA',
        dataEntrega: '07/02/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_6.8E',
        montador: 'HUGO MARTINS',
        ajudante: 'JULIO',
        localEntrega: 'BARUERI/SP',
        status: 'producao',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'FIAÇÃO 60%'
    },
    {
        id: '131977740',
        cliente: 'CONFEITARIA ARTE & SABOR',
        dataEntrega: '08/02/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_5.2E',
        montador: 'IVAN PEREIRA',
        ajudante: 'KEVIN',
        localEntrega: 'CARAPICUÍBA/SP',
        status: 'confirmado',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'MONTAGEM 80%'
    },
    {
        id: '131977741',
        cliente: 'PANIFICADORA ESTRELA DOURADA',
        dataEntrega: '09/02/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_10.5E',
        montador: 'JORGE LIMA',
        ajudante: 'LEONARDO',
        localEntrega: 'COTIA/SP',
        status: 'confirmado',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'PREPARAÇÃO'
    },
    {
        id: '131977742',
        cliente: 'LANCHONETE SABOR EXPRESS',
        dataEntrega: '10/02/2025',
        tensao: '220V MONO',
        produto: 'CRONOS_4.0E',
        montador: 'KLEBER SANTOS',
        ajudante: 'MARCIO',
        localEntrega: 'EMBU DAS ARTES/SP',
        status: 'entregue',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'CONCLUÍDO'
    },
    {
        id: '131977743',
        cliente: 'PADARIA MASSA FRESCA',
        dataEntrega: '11/02/2025',
        tensao: '220V TRIF',
        produto: 'CRONOS_7.0E',
        montador: 'LUCAS FERREIRA',
        ajudante: 'NICOLAS',
        localEntrega: 'ITAPECERICA DA SERRA/SP',
        status: 'producao',
        metodoEnvio: 'TRANSPORTADORA',
        etapa: 'SOLDAGEM 55%'
    },
    {
        id: '131977744',
        cliente: 'CONFEITARIA DOCE ENCANTO',
        dataEntrega: '12/02/2025',
        tensao: '380V TRIF',
        produto: 'CRONOS_9.8E',
        montador: 'MAURÍCIO COSTA',
        ajudante: 'OTÁVIO',
        localEntrega: 'JANDIRA/SP',
        status: 'confirmado',
        metodoEnvio: 'PRÓPRIA',
        etapa: 'PINTURA 20%'
    }
];

// ========== FUNÇÕES DE DATA E HORA ==========

/**
 * Atualiza o relógio em tempo real
 */
function atualizarRelogio() {
    const agora = new Date();
    
    // Formatar hora (HH:MM:SS)
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    
    // Atualizar elemento HTML
    const elementoRelogio = document.getElementById('clock');
    if (elementoRelogio) {
        elementoRelogio.textContent = horaFormatada;
    }
}

/**
 * Formata e exibe a data atual por extenso
 */
function atualizarData() {
    const agora = new Date();
    
    // Configuração para formato brasileiro
    const opcoes = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
    // Formatar data
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    
    // Capitalizar primeira letra
    const dataCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    
    // Atualizar elemento HTML
    const elementoData = document.getElementById('date');
    if (elementoData) {
        elementoData.textContent = dataCapitalizada;
    }
}

// ========== VARIÁVEIS DE CONTROLE DE PAGINAÇÃO ==========
let dadosAtuais = []; // Armazena os dados carregados (Google Sheets ou mockados)
let paginaAtual = 0;
let totalPaginas = 0;
let intervalRotacao = null;
let intervalProgresso = null;
let progressoAtual = 0;

// ========== FUNÇÕES DA TABELA ==========

/**
 * Mapeia o status para a classe CSS correspondente
 */
function obterClasseStatus(status) {
    const mapeamento = {
        'confirmado': 'status-confirmado',
        'pendente': 'status-pendente',
        'producao': 'status-producao',
        'atrasado': 'status-atrasado',
        'entregue': 'status-entregue'
    };
    
    return mapeamento[status] || 'status-pendente';
}

/**
 * Formata o texto do status para exibição
 */
function formatarTextoStatus(status) {
    const mapeamento = {
        'confirmado': 'CONFIRMADO',
        'pendente': 'PENDENTE',
        'producao': 'EM PRODUÇÃO',
        'atrasado': 'ATRASADO',
        'entregue': 'ENTREGUE'
    };
    
    return mapeamento[status] || status.toUpperCase();
}

/**
 * Cria uma linha da tabela com os dados fornecidos
 */
function criarLinhaTabela(dados) {
    const tr = document.createElement('tr');
    
    // ID do Pedido
    const tdId = document.createElement('td');
    tdId.className = 'cell-id col-id';
    tdId.textContent = dados.id;
    tr.appendChild(tdId);
    
    // Cliente
    const tdCliente = document.createElement('td');
    tdCliente.className = 'cell-cliente col-cliente';
    tdCliente.textContent = dados.cliente;
    tdCliente.title = dados.cliente; // Tooltip com texto completo
    tr.appendChild(tdCliente);
    
    // Data de Entrega
    const tdData = document.createElement('td');
    tdData.className = 'cell-data col-data';
    tdData.textContent = dados.dataEntrega;
    tr.appendChild(tdData);
    
    // Tensão
    const tdTensao = document.createElement('td');
    tdTensao.className = 'cell-tensao col-tensao';
    tdTensao.textContent = dados.tensao;
    tr.appendChild(tdTensao);
    
    // Produto
    const tdProduto = document.createElement('td');
    tdProduto.className = 'cell-produto col-produto';
    tdProduto.textContent = dados.produto;
    tr.appendChild(tdProduto);
    
    // Montador
    const tdMontador = document.createElement('td');
    tdMontador.className = 'cell-montador col-montador';
    tdMontador.textContent = dados.montador;
    tr.appendChild(tdMontador);
    
    // Ajudante
    const tdAjudante = document.createElement('td');
    tdAjudante.className = 'cell-ajudante col-ajudante';
    tdAjudante.textContent = dados.ajudante;
    tr.appendChild(tdAjudante);
    
    // Local de Entrega
    const tdLocal = document.createElement('td');
    tdLocal.className = 'cell-local col-local';
    tdLocal.textContent = dados.localEntrega;
    tdLocal.title = dados.localEntrega; // Tooltip
    tr.appendChild(tdLocal);
    
    // Status (com Badge)
    const tdStatus = document.createElement('td');
    tdStatus.className = 'cell-status col-status';
    const spanStatus = document.createElement('span');
    spanStatus.className = `status-badge ${obterClasseStatus(dados.status)}`;
    spanStatus.textContent = formatarTextoStatus(dados.status);
    tdStatus.appendChild(spanStatus);
    tr.appendChild(tdStatus);
    
    // Método de Envio
    const tdMetodo = document.createElement('td');
    tdMetodo.className = 'cell-metodo col-metodo';
    tdMetodo.textContent = dados.metodoEnvio;
    tr.appendChild(tdMetodo);
    
    // Etapa
    const tdEtapa = document.createElement('td');
    tdEtapa.className = 'cell-etapa col-etapa';
    tdEtapa.textContent = dados.etapa;
    tr.appendChild(tdEtapa);
    
    return tr;
}

/**
 * Renderiza uma página específica da tabela
 */
function renderizarPagina(dados, numeroPagina) {
    const tbody = document.getElementById('tableBody');
    
    if (!tbody) {
        console.error('Elemento tbody não encontrado');
        return;
    }
    
    // Calcular índices da página
    const inicio = numeroPagina * CONFIG.itemsPerPage;
    const fim = inicio + CONFIG.itemsPerPage;
    const dadosPagina = dados.slice(inicio, fim);
    
    // Adicionar classe de fade out antes de limpar
    tbody.classList.add('fade-out');
    
    // Aguardar animação de fade out
    setTimeout(() => {
        // Limpar tabela existente
        tbody.innerHTML = '';
        tbody.classList.remove('fade-out');
        
        // Adicionar linhas da página atual
        dadosPagina.forEach(item => {
            const linha = criarLinhaTabela(item);
            tbody.appendChild(linha);
        });
        
        console.log(`📄 Página ${numeroPagina + 1}/${totalPaginas} renderizada (${dadosPagina.length} registros)`);
    }, CONFIG.transitionTime);
}

/**
 * Renderiza todas as linhas da tabela (modo sem paginação)
 */
function renderizarTabela(dados) {
    // CRÍTICO: Armazenar dados carregados na variável global
    dadosAtuais = dados;
    
    const tbody = document.getElementById('tableBody');
    
    if (!tbody) {
        console.error('Elemento tbody não encontrado');
        return;
    }
    
    // Limpar tabela existente
    tbody.innerHTML = '';
    
    // Adicionar cada linha
    dados.forEach(item => {
        const linha = criarLinhaTabela(item);
        tbody.appendChild(linha);
    });
    
    console.log(`✅ Tabela renderizada com ${dados.length} registros`);
}

// ========== FUNÇÕES DE PAGINAÇÃO E ROTAÇÃO ==========

/**
 * Atualiza o indicador de página
 */
function atualizarIndicadorPagina() {
    const pageInfo = document.getElementById('pageInfo');
    const pageDots = document.getElementById('pageDots');
    
    if (pageInfo) {
        pageInfo.textContent = `Página ${paginaAtual + 1} de ${totalPaginas}`;
    }
    
    if (pageDots) {
        pageDots.innerHTML = '';
        for (let i = 0; i < totalPaginas; i++) {
            const dot = document.createElement('div');
            dot.className = `page-dot ${i === paginaAtual ? 'active' : ''}`;
            pageDots.appendChild(dot);
        }
    }
}

/**
 * Atualiza a barra de progresso
 */
function atualizarBarraProgresso(porcentagem) {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${porcentagem}%`;
    }
}

/**
 * Avança para a próxima página
 */
function proximaPagina() {
    paginaAtual = (paginaAtual + 1) % totalPaginas;
    renderizarPagina(dadosAtuais, paginaAtual); // CORRIGIDO: usar dadosAtuais
    atualizarIndicadorPagina();
    resetarProgresso();
}

/**
 * Reseta o progresso da barra
 */
function resetarProgresso() {
    progressoAtual = 0;
    atualizarBarraProgresso(0);
}

/**
 * Inicia a rotação automática
 */
function iniciarRotacao() {
    if (!CONFIG.autoRotate || totalPaginas <= 1) {
        console.log('ℹ️ Rotação desativada ou apenas 1 página');
        return;
    }
    
    // Limpar intervalos existentes
    pararRotacao();
    
    // Intervalo para trocar de página
    intervalRotacao = setInterval(() => {
        proximaPagina();
    }, CONFIG.pageDisplayTime);
    
    // Intervalo para atualizar barra de progresso (a cada 100ms)
    const incrementoPorcentagem = (100 / CONFIG.pageDisplayTime) * 100;
    intervalProgresso = setInterval(() => {
        progressoAtual += incrementoPorcentagem;
        if (progressoAtual > 100) progressoAtual = 100;
        atualizarBarraProgresso(progressoAtual);
    }, 100);
    
    console.log('🔄 Rotação automática iniciada');
}

/**
 * Para a rotação automática
 */
function pararRotacao() {
    if (intervalRotacao) {
        clearInterval(intervalRotacao);
        intervalRotacao = null;
    }
    if (intervalProgresso) {
        clearInterval(intervalProgresso);
        intervalProgresso = null;
    }
    console.log('⏸️ Rotação automática pausada');
}

/**
 * Inicializa o sistema de paginação
 */
function inicializarPaginacao(dados) {
    // CRÍTICO: Armazenar dados carregados na variável global
    dadosAtuais = dados;
    
    totalPaginas = Math.ceil(dados.length / CONFIG.itemsPerPage);
    paginaAtual = 0;
    
    console.log(`📊 Sistema de paginação inicializado:`);
    console.log(`   • Total de registros: ${dados.length}`);
    console.log(`   • Itens por página: ${CONFIG.itemsPerPage}`);
    console.log(`   • Total de páginas: ${totalPaginas}`);
    console.log(`   • Cálculo: ${dados.length} ÷ ${CONFIG.itemsPerPage} = ${dados.length / CONFIG.itemsPerPage} (arredondado para ${totalPaginas})`);
    
    // Log dos IDs para debug
    if (dados.length > 0) {
        console.log(`   • Primeiro pedido: ID ${dados[0].id}`);
        console.log(`   • Último pedido: ID ${dados[dados.length - 1].id}`);
    }
    
    // Renderizar primeira página
    renderizarPagina(dadosAtuais, paginaAtual);
    atualizarIndicadorPagina();
    
    // Iniciar rotação automática
    if (CONFIG.autoRotate && totalPaginas > 1) {
        iniciarRotacao();
    }
}

/**
 * Atualiza os dados da tabela
 * Busca dados do Google Sheets se configurado, senão usa dados mockados
 */
async function atualizarDados() {
    try {
        let dados = dadosMockados; // Padrão: dados mockados
        
        // Verificar se Google Sheets está configurado e ativado
        if (window.GOOGLE_SHEETS_CONFIG && GOOGLE_SHEETS_CONFIG.enabled) {
            const validacao = validarConfiguracao();
            
            if (validacao.valido) {
                console.log('📊 Buscando dados do Google Sheets...');
                dados = await GoogleSheets.buscarDados();
                
                if (!dados || dados.length === 0) {
                    console.warn('⚠️ Nenhum dado retornado do Google Sheets, usando dados mockados');
                    dados = dadosMockados;
                }
            } else {
                console.warn('⚠️ Configuração Google Sheets inválida, usando dados mockados');
                console.warn(validacao.mensagem);
            }
        } else {
            console.log('ℹ️ Google Sheets desativado, usando dados mockados');
        }
        
        // Renderizar dados (com ou sem paginação)
        if (CONFIG.autoRotate && dados.length > CONFIG.itemsPerPage) {
            // Modo paginação com rotação
            inicializarPaginacao(dados);
        } else {
            // Modo normal sem paginação
            renderizarTabela(dados);
        }
        
    } catch (error) {
        console.error('❌ Erro ao atualizar dados:', error);
        console.warn('⚠️ Usando dados mockados como fallback');
        
        // Fallback para dados mockados em caso de erro
        if (CONFIG.autoRotate && dadosMockados.length > CONFIG.itemsPerPage) {
            inicializarPaginacao(dadosMockados);
        } else {
            renderizarTabela(dadosMockados);
        }
    }
}

// ========== INICIALIZAÇÃO ==========

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 */
async function inicializar() {
    console.log('🚀 Inicializando Painel de Controle Celmaq...');
    
    // Log de configuração do Google Sheets
    if (window.logConfiguracao) {
        logConfiguracao();
    }
    
    // Atualizar data e hora inicialmente
    atualizarData();
    atualizarRelogio();
    
    // Configurar intervalo para atualizar o relógio
    setInterval(atualizarRelogio, CONFIG.updateInterval);
    
    // Atualizar a data a cada minuto (caso o dia mude)
    setInterval(atualizarData, 60000);
    
    // Renderizar tabela (com dados do Sheets ou mockados)
    await atualizarDados();
    
    // Iniciar atualização automática do Google Sheets (se configurado)
    if (window.GoogleSheets && GOOGLE_SHEETS_CONFIG?.enabled) {
        GoogleSheets.iniciarAtualizacao();
    }
    
    // Listener para evento de dados atualizados
    window.addEventListener('dadosAtualizados', async (event) => {
        console.log('🔄 Dados atualizados, recarregando tabela...');
        await atualizarDados();
    });
    
    console.log('✅ Painel inicializado com sucesso!');
}

// ========== EVENTOS ==========

// Executar quando o DOM estiver completamente carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    // DOM já está carregado
    inicializar();
}

// ========== EXPORTAÇÕES (para uso futuro) ==========
// Funções disponíveis globalmente para integração futura
window.PainelCelmaq = {
    atualizarDados,
    renderizarTabela,
    dadosMockados,
    // Dados atuais (Google Sheets ou mockados)
    get dadosAtuais() { return dadosAtuais; },
    // Controles de paginação
    proximaPagina,
    iniciarRotacao,
    pararRotacao,
    // Configurações
    config: CONFIG,
    
    // Função de debug
    debug: () => {
        console.log('🔍 DEBUG - Status do Painel:');
        console.log('─'.repeat(50));
        console.log(`📊 Total de registros: ${dadosAtuais.length}`);
        console.log(`📄 Página atual: ${paginaAtual + 1} de ${totalPaginas}`);
        console.log(`📏 Itens por página: ${CONFIG.itemsPerPage}`);
        console.log(`🔢 Total de páginas: ${totalPaginas}`);
        console.log(`🔄 Rotação automática: ${CONFIG.autoRotate ? 'Ativa' : 'Desativada'}`);
        console.log('─'.repeat(50));
        console.log('📋 IDs dos pedidos por página:');
        for (let i = 0; i < totalPaginas; i++) {
            const inicio = i * CONFIG.itemsPerPage;
            const fim = Math.min(inicio + CONFIG.itemsPerPage, dadosAtuais.length);
            const pedidosPagina = dadosAtuais.slice(inicio, fim);
            const ids = pedidosPagina.map(p => p.id).join(', ');
            console.log(`   Página ${i + 1}: ${pedidosPagina.length} pedidos [${ids}]`);
        }
        console.log('─'.repeat(50));
        return {
            totalRegistros: dadosAtuais.length,
            paginaAtual: paginaAtual + 1,
            totalPaginas,
            itensPorPagina: CONFIG.itemsPerPage,
            rotacaoAtiva: CONFIG.autoRotate
        };
    }
};

