# 🏭 Painel de Controle Celmaq

Sistema de controle de produção e entregas otimizado para exibição em TVs de fábrica (1920x1080).

## 📋 Características

- ✨ Design dark, clean e flat
- 🖥️ Otimizado para TVs Full HD (1920x1080)
- ⏰ Relógio em tempo real
- 📅 Data por extenso
- 📊 Tabela dinâmica com dados de produção
- 🎨 Layout fiel ao design do Figma
- 🚀 Código puro (HTML, CSS, JavaScript - sem frameworks)
- 🔄 Rotação automática estilo aeroporto (8 itens por página)
- 📡 Integração com Google Sheets em tempo real
- 📈 **100% Escalável** - Suporta até 1000 pedidos (configurável)
- 🔄 Sincronização automática a cada 30 segundos
- 📱 Responsivo - Ajusta altura automaticamente em diferentes resoluções

## 📁 Estrutura do Projeto

```
painel-celmaq/
├── index.html                 # Página principal
├── src/
│   ├── styles/
│   │   └── main.css          # Estilos CSS
│   ├── scripts/
│   │   └── app.js            # Lógica JavaScript
│   └── assets/
│       └── logo-celmaq.png   # Logo da empresa
├── public/                    # Arquivos públicos
└── README.md                  # Este arquivo
```

## 🚀 Como Usar

### 1. Adicionar a Logo

Substitua o arquivo `src/assets/logo-celmaq.png` pela logo oficial da Celmaq.
- Formato recomendado: PNG com fundo transparente
- Dimensões: ~192x31 pixels (proporções do Figma)

### 2. Abrir o Painel

Simplesmente abra o arquivo `index.html` em um navegador moderno:

- **Chrome** (recomendado)
- **Firefox**
- **Edge**

### 3. Modo Tela Cheia (para TVs)

Pressione `F11` no teclado para entrar em modo tela cheia.

## 📊 Dados Mockados

O painel atualmente exibe dados de exemplo (mockados) definidos no arquivo `src/scripts/app.js`.

### Estrutura dos Dados

Cada registro na tabela contém:

```javascript
{
    id: 'Número do pedido',
    cliente: 'Nome do cliente',
    dataEntrega: 'Data de entrega (DD/MM/YYYY)',
    tensao: 'Tensão elétrica',
    produto: 'Código do produto',
    montador: 'Nome do montador',
    ajudante: 'Nome do ajudante',
    localEntrega: 'Cidade/Estado',
    status: 'confirmado | pendente | producao | atrasado | entregue',
    metodoEnvio: 'TRANSPORTADORA | PRÓPRIA',
    etapa: 'Descrição da etapa atual'
}
```

### Status Disponíveis

- **CONFIRMADO** - Badge verde
- **PENDENTE** - Badge amarelo
- **EM PRODUÇÃO** - Badge azul
- **ATRASADO** - Badge vermelho
- **ENTREGUE** - Badge verde

## 🔧 Personalização

### Modificar Dados Mockados

Edite o array `dadosMockados` em `src/scripts/app.js`:

```javascript
const dadosMockados = [
    {
        id: '131977721',
        cliente: 'NOME DO CLIENTE',
        // ... outros campos
    },
    // Adicione mais registros aqui
];
```

### Ajustar Cores

Todas as cores estão definidas em `src/styles/main.css`:

```css
/* Cores principais */
--bg-primary: #0a0a0b;        /* Fundo principal */
--bg-secondary: #0e0e10;      /* Fundo da tabela */
--border-color: #28272a;      /* Bordas */
--text-primary: #ffffff;      /* Texto branco */
--text-secondary: #d1d1d6;    /* Texto cinza claro */
--text-muted: #acacac;        /* Texto cinza */
--color-clock: #4ade80;       /* Verde do relógio */
--color-warning: #fbbf24;     /* Amarelo */
--color-info: #60a5fa;        /* Azul */
--color-danger: #ef4444;      /* Vermelho */
```

## 📱 Funcionalidades Futuras

### 🔄 Próximos Passos (Não Implementados)

1. **Integração com Google Sheets**
   - Buscar dados em tempo real da planilha
   - Atualização automática a cada X segundos

2. **Rotação Automática (Estilo Painel de Aeroporto)**
   - Scroll automático de linhas
   - Transições suaves
   - Configuração de velocidade

3. **Notificações Visuais**
   - Destaque para pedidos atrasados
   - Alertas de mudança de status

4. **Modo Noturno Automático**
   - Ajuste de brilho conforme horário

## 🎨 Design Fiel ao Figma

Este projeto foi desenvolvido com base no layout do Figma, respeitando:

- ✅ Cores exatas
- ✅ Tipografia (Roboto, Courier New)
- ✅ Espaçamentos
- ✅ Tamanhos de fonte
- ✅ Bordas e arredondamentos
- ✅ Layout responsivo

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
- **JavaScript (ES6+)** - Lógica e interatividade
- **Google Fonts** - Tipografia (Roboto)
- **Google Sheets API** - Integração de dados em tempo real

## 📈 Escalabilidade

O sistema é **100% escalável** e reflete fielmente qualquer alteração no Google Sheets:

### Capacidade
- ✅ Suporta até **1000 pedidos** (padrão, configurável)
- ✅ Paginação dinâmica (8 pedidos por página)
- ✅ Atualização automática a cada **30 segundos**
- ✅ Sincronização em tempo real com Google Sheets

### Operações Suportadas
| Ação no Sheets | Resultado no Painel | Tempo |
|----------------|---------------------|-------|
| ➕ Adicionar linha | Aparece automaticamente | ~30s |
| ✏️ Editar célula | Atualiza em tempo real | ~30s |
| 🗑️ Deletar linha | Remove automaticamente | ~30s |
| 🔄 Reordenar | Ordem atualizada | ~30s |

### Configuração
Arquivo: `src/scripts/config.js`

```javascript
maxRows: 1000,              // Até 1000 pedidos
updateIntervalMinutes: 0.5  // Atualiza a cada 30s
```

📖 **Documentação completa:** Veja `ESCALABILIDADE.md`

## 📝 Observações

- O painel atualiza o relógio a cada segundo
- A data é atualizada automaticamente à meia-noite
- Todos os textos estão em MAIÚSCULAS conforme design
- Layout otimizado para leitura à distância

## 👨‍💻 Desenvolvimento

Desenvolvido por: **High Digital**  
Cliente: **CELMAQ**  
Data: Dezembro 2024

---

**Próximas etapas**: Integração com Google Sheets e sistema de rotação automática.

