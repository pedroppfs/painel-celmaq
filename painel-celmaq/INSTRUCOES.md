# 📖 Instruções de Uso - Painel Celmaq

## 🎯 Início Rápido

### 1. Substituir a Logo

**⚠️ IMPORTANTE**: A logo atual é um placeholder temporário!

Para usar a logo real da Celmaq do Figma:

1. Acesse o Figma e localize a logo Celmaq
2. Exporte a logo como PNG (fundo transparente)
3. Substitua o arquivo: `src/assets/logo-celmaq.svg` 
4. Renomeie para: `logo-celmaq.png`
5. Atualize o HTML se necessário (linha 24 do `index.html`)

**Especificações da Logo:**
- Formato: PNG ou SVG
- Dimensões: ~192px de largura x 31px de altura
- Fundo: Transparente
- Qualidade: Alta resolução para TV

### 2. Abrir o Painel

**Opção A - Duplo Clique**
```
Simplesmente dê duplo clique no arquivo index.html
```

**Opção B - Via Terminal**
```bash
# No Mac
open index.html

# No Windows
start index.html

# No Linux
xdg-open index.html
```

### 3. Configurar para TV

1. Conecte o computador na TV via HDMI
2. Configure resolução para 1920x1080 (Full HD)
3. Abra o painel no navegador Chrome (recomendado)
4. Pressione `F11` para tela cheia
5. Para sair do modo tela cheia, pressione `F11` novamente

## 📝 Customização dos Dados

### Editar Dados Mockados

Abra o arquivo `src/scripts/app.js` e localize o array `dadosMockados`:

```javascript
const dadosMockados = [
    {
        id: '131977721',                              // ID do pedido
        cliente: 'PADARIA E LANCHONETE TRIGO DE MINAS', // Nome do cliente
        dataEntrega: '22/01/2025',                    // Data (DD/MM/YYYY)
        tensao: '220V TRIF',                          // Tensão
        produto: 'CRONOS_6.3E',                       // Código do produto
        montador: 'Vai Montador',                     // Nome do montador
        ajudante: 'ADEMIR',                           // Nome do ajudante
        localEntrega: 'TABOÃO DA SERRA/SP',           // Cidade/Estado
        status: 'confirmado',                         // Status (veja opções abaixo)
        metodoEnvio: 'TRANSPORTADORA',                // Método de envio
        etapa: 'EMBALAGEM 90%'                        // Etapa atual
    },
    // Adicione mais pedidos aqui...
];
```

### Opções de Status

| Status       | Cor    | Quando usar                      |
|--------------|--------|----------------------------------|
| `confirmado` | Verde  | Pedido confirmado                |
| `pendente`   | Amarelo| Aguardando confirmação           |
| `producao`   | Azul   | Em processo de fabricação        |
| `atrasado`   | Vermelho| Prazo de entrega ultrapassado   |
| `entregue`   | Verde  | Pedido já entregue ao cliente    |

## 🎨 Personalização Visual

### Cores

Edite `src/styles/main.css` para alterar cores:

```css
/* Linha ~15 - Fundo principal */
background-color: #0a0a0b;

/* Linha ~126 - Cor do relógio */
color: #4ade80;

/* Linha ~207 - Cor da data de entrega */
color: #fbbf24;
```

### Fontes

Para alterar a fonte, modifique no `index.html` (linha 8):

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

E no CSS (linha ~12):

```css
font-family: 'SuaFonte', sans-serif;
```

## 🔧 Resolução de Problemas

### Logo não aparece
- Verifique se o arquivo está em `src/assets/`
- Confirme o nome do arquivo no `index.html`
- Tente usar caminho absoluto temporariamente

### Relógio não atualiza
- Abra o Console do navegador (F12)
- Verifique se há erros JavaScript
- Recarregue a página (Ctrl+R ou Cmd+R)

### Tabela vazia
- Verifique se o arquivo `app.js` está carregando
- Abra o Console (F12) e procure mensagens de erro
- Confirme que `dadosMockados` tem dados

### Layout quebrado na TV
- Confirme resolução da TV: 1920x1080
- Pressione F11 para modo tela cheia
- Tente zoom 100% (Ctrl+0 ou Cmd+0)

## 🚀 Próximos Passos

Após validar o layout e os dados mockados:

1. **Integração Google Sheets**
   - Conectar com planilha real
   - Atualização automática de dados

2. **Rotação Automática**
   - Scroll automático de linhas
   - Modo "carrossel" como aeroporto

3. **Notificações**
   - Alertas visuais para atrasos
   - Destaque para mudanças de status

## 📞 Suporte

Para dúvidas ou problemas:
- Revise este guia
- Consulte o README.md
- Entre em contato com a High Digital

---

**Desenvolvido por High Digital para CELMAQ** 🏭

