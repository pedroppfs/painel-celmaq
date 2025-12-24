# 🔄 Sistema de Rotação Automática - Estilo Aeroporto

## ✅ Implementação Concluída!

O sistema de rotação automática foi implementado com sucesso, funcionando exatamente como painéis de voos de aeroporto.

---

## 📊 Configuração Atual

### Parâmetros Principais

| Configuração | Valor | Descrição |
|--------------|-------|-----------|
| **Linhas por página** | 8 | Número de pedidos visíveis simultaneamente |
| **Tempo por página** | 8 segundos | Duração de exibição de cada página |
| **Tempo de transição** | 0.4 segundos | Duração da animação entre páginas |
| **Rotação automática** | ✅ Ativada | Liga/desliga o sistema |
| **Total de pedidos** | 24 | Dados mockados de exemplo |
| **Total de páginas** | 3 | 24 ÷ 8 = 3 páginas |

### Cálculo Automático

```javascript
Total de Páginas = Math.ceil(Total de Pedidos ÷ Linhas por Página)

Exemplo:
- 24 pedidos ÷ 8 linhas = 3 páginas
- 20 pedidos ÷ 8 linhas = 3 páginas (última com 4 itens)
- 8 pedidos ÷ 8 linhas = 1 página (rotação desativada)
```

---

## 🎬 Como Funciona

### Ciclo de Rotação

```
┌─────────────────────────────────────────────────────────┐
│                    PÁGINA 1 (8 seg)                     │
│  Pedidos 1-8                                            │
│  [████████░░░░░░░░░░░░░░░░░░░░░░] Barra de progresso   │
└─────────────────────────────────────────────────────────┘
                        ↓ Fade out (0.4s)
┌─────────────────────────────────────────────────────────┐
│                    PÁGINA 2 (8 seg)                     │
│  Pedidos 9-16                                           │
│  [████████░░░░░░░░░░░░░░░░░░░░░░] Barra de progresso   │
└─────────────────────────────────────────────────────────┘
                        ↓ Fade out (0.4s)
┌─────────────────────────────────────────────────────────┐
│                    PÁGINA 3 (8 seg)                     │
│  Pedidos 17-24                                          │
│  [████████░░░░░░░░░░░░░░░░░░░░░░] Barra de progresso   │
└─────────────────────────────────────────────────────────┘
                        ↓ Volta para Página 1
```

### Indicadores Visuais

1. **Texto de Página**
   - Formato: "Página 1 de 3"
   - Atualiza automaticamente

2. **Bolinhas Indicadoras**
   - ⚪ Página inativa
   - 🟢 Página ativa (verde, formato pill)

3. **Barra de Progresso**
   - Preenche gradualmente durante os 8 segundos
   - Reseta ao trocar de página
   - Gradiente verde-azul

---

## 🎨 Animações Implementadas

### 1. Fade Out (Saída)
```css
Duração: 0.3s
Efeito: Opacidade 1 → 0
        Movimento: 0 → -10px (para cima)
```

### 2. Slide Up (Entrada)
```css
Duração: 0.4s
Efeito: Opacidade 0 → 1
        Movimento: +20px → 0 (de baixo para cima)
```

### 3. Transição de Bolinhas
```css
Duração: 0.3s
Efeito: Círculo (10px) ↔ Pill (24px)
        Cor: Cinza ↔ Verde
```

---

## ⚙️ Personalização

### Como Alterar as Configurações

Edite o arquivo `src/scripts/app.js`, na seção de configurações:

```javascript
const CONFIG = {
    // ... outras configs
    
    itemsPerPage: 8,        // ← Linhas por página
    pageDisplayTime: 8000,  // ← Tempo em ms (8000 = 8 segundos)
    transitionTime: 400,    // ← Tempo de transição em ms
    autoRotate: true        // ← true = ativado, false = desativado
};
```

### Exemplos de Personalização

#### Exemplo 1: Mais linhas, rotação mais rápida
```javascript
itemsPerPage: 10,       // 10 linhas por página
pageDisplayTime: 5000,  // 5 segundos por página
```

#### Exemplo 2: Menos linhas, rotação mais lenta
```javascript
itemsPerPage: 6,        // 6 linhas por página
pageDisplayTime: 12000, // 12 segundos por página
```

#### Exemplo 3: Desativar rotação
```javascript
autoRotate: false,      // Desativa rotação automática
```

---

## 🎯 Dimensões Otimizadas para 1920x1080

### Breakdown Vertical

| Elemento | Altura | Observação |
|----------|--------|------------|
| **Cabeçalho** | 90px | Logo + Título + Relógio |
| **Espaçamento** | 20px | Margem superior tabela |
| **Header Tabela** | 66px | Cabeçalho com labels |
| **8 Linhas** | 800px | 8 × 100px cada |
| **Indicador** | 60px | Paginação + progresso |
| **Padding** | 44px | Espaçamento inferior |
| **TOTAL** | 1080px | ✅ Perfeito! |

### Tamanhos de Fonte Aumentados

Para melhor legibilidade com 8 linhas:

| Elemento | Tamanho Anterior | Tamanho Atual |
|----------|------------------|---------------|
| Células da tabela | 15px | **16px** |
| Padding vertical | 24px | **28px** |
| Altura da linha | 80px | **100px** |

---

## 🧪 Como Testar

### Teste 1: Visualização Básica
1. Abra o `index.html` no navegador
2. Verifique se aparecem 8 linhas
3. Observe o indicador "Página 1 de 3" na parte inferior
4. Veja a barra de progresso preenchendo

### Teste 2: Rotação Automática
1. Aguarde 8 segundos
2. Observe a transição suave (fade out → fade in)
3. Verifique se mudou para "Página 2 de 3"
4. As bolinhas devem mudar (segunda fica verde)
5. Barra de progresso reseta e começa novamente

### Teste 3: Ciclo Completo
1. Aguarde 24 segundos (3 páginas × 8 segundos)
2. Após página 3, deve voltar para página 1
3. Ciclo continua infinitamente

### Teste 4: Console do Navegador
Abra o Console (F12) e verifique as mensagens:
```
🚀 Inicializando Painel de Controle Celmaq...
📊 Sistema de paginação: 24 registros, 3 páginas, 8 itens/página
📄 Página 1/3 renderizada (8 registros)
🔄 Rotação automática iniciada
📄 Página 2/3 renderizada (8 registros)
📄 Página 3/3 renderizada (8 registros)
```

---

## 🎮 Controles Manuais (Console)

Você pode controlar a rotação manualmente via Console do navegador:

### Pausar Rotação
```javascript
PainelCelmaq.pararRotacao();
```

### Retomar Rotação
```javascript
PainelCelmaq.iniciarRotacao();
```

### Avançar Manualmente
```javascript
PainelCelmaq.proximaPagina();
```

### Verificar Configurações
```javascript
console.log(PainelCelmaq.config);
```

---

## 📊 Comportamento com Diferentes Quantidades de Dados

### Cenário 1: Menos de 8 pedidos
- **Resultado:** Rotação desativada automaticamente
- **Exibição:** Todos os pedidos em uma única tela
- **Indicador:** Oculto ou mostra "Página 1 de 1"

### Cenário 2: Exatamente 8 pedidos
- **Resultado:** Rotação desativada (apenas 1 página)
- **Exibição:** Todos visíveis

### Cenário 3: 9-16 pedidos
- **Resultado:** 2 páginas
- **Rotação:** Alterna entre página 1 e 2

### Cenário 4: 17-24 pedidos
- **Resultado:** 3 páginas (implementado)
- **Rotação:** Ciclo completo de 24 segundos

### Cenário 5: 25+ pedidos
- **Resultado:** 4+ páginas
- **Rotação:** Ciclo proporcional ao número de páginas

---

## 🔧 Integração Futura com Google Sheets

Quando os dados vierem do Google Sheets:

1. **Atualização Automática**
   - Buscar dados a cada X minutos
   - Recalcular número de páginas
   - Reiniciar rotação se necessário

2. **Manter Sincronização**
   - Se dados mudarem durante rotação
   - Completar página atual antes de atualizar
   - Evitar "pulo" visual

3. **Exemplo de Implementação**
```javascript
async function buscarDadosGoogleSheets() {
    const dados = await fetch('URL_DA_API').then(r => r.json());
    
    // Parar rotação atual
    pararRotacao();
    
    // Atualizar dados
    dadosMockados = dados;
    
    // Reiniciar com novos dados
    inicializarPaginacao(dados);
}
```

---

## 💡 Dicas de Uso

### Para Ambientes com Muitos Pedidos (30+)
```javascript
itemsPerPage: 10,       // Aumentar para 10 linhas
pageDisplayTime: 6000,  // Reduzir para 6 segundos
```

### Para Ambientes com Poucos Pedidos (10-15)
```javascript
itemsPerPage: 8,        // Manter 8 linhas
pageDisplayTime: 10000, // Aumentar para 10 segundos
```

### Para Máxima Legibilidade
```javascript
itemsPerPage: 6,        // Apenas 6 linhas (muito espaçoso)
pageDisplayTime: 12000, // 12 segundos por página
```

---

## ✅ Checklist de Validação

- [x] 8 linhas visíveis por página
- [x] Rotação automática a cada 8 segundos
- [x] Transições suaves (fade out/in)
- [x] Indicador de página funcionando
- [x] Bolinhas indicadoras animadas
- [x] Barra de progresso preenchendo
- [x] Ciclo infinito (volta para página 1)
- [x] 24 pedidos mockados
- [x] Console sem erros
- [x] Animações fluidas
- [x] Layout otimizado para 1920x1080

---

## 🎯 Resultado Final

```
✅ 8 linhas por página (legibilidade máxima)
✅ 24 pedidos de exemplo (3 páginas)
✅ Rotação automática a cada 8 segundos
✅ Transições suaves estilo aeroporto
✅ Indicadores visuais profissionais
✅ Barra de progresso animada
✅ Pronto para integração com Google Sheets
```

---

**🏆 Sistema de Rotação Automática Implementado com Sucesso!**

**Desenvolvido por:** High Digital  
**Data:** 23 de Dezembro de 2024  
**Cliente:** CELMAQ  
**Status:** ✅ PRONTO PARA USO

