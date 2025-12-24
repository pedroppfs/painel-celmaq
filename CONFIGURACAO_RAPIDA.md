# ⚡ Configuração Rápida - Rotação Automática

## 🎯 Como Ajustar a Rotação

### 📍 Localização
Arquivo: `src/scripts/app.js`  
Linhas: 9-18

### 🔧 Configurações Disponíveis

```javascript
const CONFIG = {
    updateInterval: 1000,
    locale: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    
    // ⬇️ AJUSTE AQUI ⬇️
    itemsPerPage: 8,        // Linhas por página
    pageDisplayTime: 8000,  // Tempo em ms (8000 = 8 segundos)
    transitionTime: 400,    // Transição entre páginas
    autoRotate: true        // true = ativo | false = desativado
};
```

---

## 📝 Exemplos Práticos

### Exemplo 1: Rotação Mais Rápida (5 segundos)
```javascript
pageDisplayTime: 5000,  // 5 segundos
```

### Exemplo 2: Rotação Mais Lenta (12 segundos)
```javascript
pageDisplayTime: 12000,  // 12 segundos
```

### Exemplo 3: Mais Linhas (10 por página)
```javascript
itemsPerPage: 10,
```

### Exemplo 4: Menos Linhas (6 por página)
```javascript
itemsPerPage: 6,
```

### Exemplo 5: Desativar Rotação
```javascript
autoRotate: false,
```

---

## 🧮 Calculadora de Tempo

### Tempo Total do Ciclo
```
Tempo Total = (Total de Pedidos ÷ Linhas por Página) × Tempo por Página

Exemplo Atual:
(24 ÷ 8) × 8 = 3 × 8 = 24 segundos
```

### Quantas Páginas?
```
Páginas = Total de Pedidos ÷ Linhas por Página (arredondado para cima)

Exemplos:
- 24 pedidos ÷ 8 linhas = 3 páginas
- 30 pedidos ÷ 8 linhas = 4 páginas
- 15 pedidos ÷ 8 linhas = 2 páginas
```

---

## 💡 Recomendações por Cenário

### 🏭 Fábrica Grande (30+ pedidos)
```javascript
itemsPerPage: 10,
pageDisplayTime: 6000,  // 6 segundos
```
**Resultado:** Ciclo mais rápido, mais informação

### 🏢 Fábrica Média (15-30 pedidos)
```javascript
itemsPerPage: 8,        // ✅ ATUAL
pageDisplayTime: 8000,  // ✅ ATUAL
```
**Resultado:** Equilíbrio perfeito

### 🏪 Fábrica Pequena (até 15 pedidos)
```javascript
itemsPerPage: 8,
pageDisplayTime: 10000,  // 10 segundos
```
**Resultado:** Mais tempo para visualização

### 📺 TV Muito Distante (5+ metros)
```javascript
itemsPerPage: 6,
pageDisplayTime: 10000,
```
**Resultado:** Máxima legibilidade

---

## 🔄 Após Alterar

1. **Salve o arquivo** `app.js`
2. **Recarregue a página** (F5 ou Cmd+R)
3. **Teste** e ajuste se necessário

---

## 🎮 Controles pelo Console

Abra o Console (F12) e digite:

### Pausar
```javascript
PainelCelmaq.pararRotacao()
```

### Retomar
```javascript
PainelCelmaq.iniciarRotacao()
```

### Próxima Página
```javascript
PainelCelmaq.proximaPagina()
```

---

## ⚠️ Importante

- Valores em **milissegundos** (1000 = 1 segundo)
- Mínimo recomendado: 3000ms (3 segundos)
- Máximo recomendado: 15000ms (15 segundos)
- Se `autoRotate = false`, não há rotação

---

**Dúvidas?** Consulte `ROTACAO_AUTOMATICA.md` para detalhes completos.

