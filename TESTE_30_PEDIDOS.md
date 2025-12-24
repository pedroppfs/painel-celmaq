# 🧪 Teste - 30 Pedidos no Sistema

## 🎯 Objetivo

Verificar se o sistema está carregando corretamente os **30 pedidos** da sua planilha.

---

## ✅ Checklist de Verificação

### Passo 1: Abrir o Painel

1. Abra o arquivo `index.html` no navegador
2. Pressione **F12** para abrir o Console
3. Recarregue a página (**F5** ou **Cmd+R**)

---

### Passo 2: Verificar Logs Automáticos

No console, procure por estas mensagens:

#### ✅ Range Correto

```
📍 Buscando range: Planilha1!A2:K1000 (até 999 pedidos)
```

**O que significa:**
- ✅ Sistema vai buscar até 1000 linhas
- ✅ Começa da linha 2 (pula cabeçalho)

#### ✅ Linhas Recebidas

```
🔄 Iniciando conversão de 30 linhas brutas...
   ✅ Após filtro inicial: 30 linhas válidas (0 removidas)
   ✅ Conversão finalizada: 30 pedidos prontos
```

**O que significa:**
- ✅ Google Sheets retornou 30 linhas
- ✅ Todas as 30 linhas são válidas
- ✅ Nenhuma linha foi removida por estar vazia

#### ✅ Dados Carregados

```
✅ Google Sheets - Dados carregados com sucesso:
   • Linhas brutas recebidas: 30
   • Pedidos válidos após filtro: 30
   • Primeiro ID: 131977704
   • Último ID: 131977733
   • Última atualização: 14:30:25
```

**O que significa:**
- ✅ 30 pedidos foram carregados
- ✅ Primeiro ID: 131977704 (linha 2 da planilha)
- ✅ Último ID: 131977733 (linha 31 da planilha)

#### ✅ Paginação

```
📊 Sistema de paginação inicializado:
   • Total de registros: 30
   • Itens por página: 8
   • Total de páginas: 4
   • Cálculo: 30 ÷ 8 = 3.75 (arredondado para 4)
```

**O que significa:**
- ✅ 30 pedidos divididos em 4 páginas
- ✅ Página 1: 8 pedidos
- ✅ Página 2: 8 pedidos
- ✅ Página 3: 8 pedidos
- ✅ Página 4: 6 pedidos (30 - 24 = 6)

---

### Passo 3: Executar Debug Manual

No console, digite:

```javascript
PainelCelmaq.debug()
```

**Resultado esperado:**

```
🔍 DEBUG - Status do Painel:
──────────────────────────────────────────────────
📊 Total de registros: 30
📄 Página atual: 1 de 4
📏 Itens por página: 8
🔢 Total de páginas: 4
🔄 Rotação automática: Ativa
──────────────────────────────────────────────────
📋 IDs dos pedidos por página:
   Página 1: 8 pedidos [131977704, 131977705, 131977706, ...]
   Página 2: 8 pedidos [131977712, 131977713, 131977714, ...]
   Página 3: 8 pedidos [131977720, 131977721, 131977722, ...]
   Página 4: 6 pedidos [131977728, 131977729, 131977730, ...]
──────────────────────────────────────────────────
```

---

## 🔍 Problemas Possíveis

### ❌ Problema 1: "Só mostra 24 pedidos"

**Console mostra:**
```
Pedidos válidos após filtro: 24
```

**Possíveis causas:**

1. **Linhas 25-31 estão vazias no Sheets**
   - Solução: Verifique se há dados nessas linhas

2. **Linhas 25-31 não têm ID na coluna A**
   - Console mostrará:
     ```
     ⚠️ Linha 25: Removida (sem ID)
     ⚠️ Linha 26: Removida (sem ID)
     ...
     ```
   - Solução: Adicione IDs na coluna A dessas linhas

3. **Range ainda está limitado**
   - Verifique se o log mostra:
     ```
     📍 Buscando range: Planilha1!A2:K1000
     ```
   - Se mostrar `A2:K` sem número, o arquivo não foi atualizado
   - Solução: Recarregue a página com Ctrl+F5 (limpa cache)

---

### ❌ Problema 2: "Mostra mais de 30 pedidos"

**Console mostra:**
```
Pedidos válidos após filtro: 35
```

**Causa:**
- Há linhas extras no Google Sheets

**Solução:**
1. Abra o Google Sheets
2. Role até o final dos dados
3. Delete linhas vazias ou desnecessárias

---

### ❌ Problema 3: "Algumas linhas foram removidas"

**Console mostra:**
```
⚠️ Linha 15: Removida (sem ID) - Conteúdo: [, Cliente XYZ, ...]
```

**Causa:**
- Linha 15 não tem ID na coluna A

**Solução:**
1. Abra o Google Sheets
2. Vá para linha 15
3. Adicione um ID na coluna A

---

## 📊 Distribuição Esperada

### Com 30 Pedidos:

| **Página** | **Pedidos** | **IDs** |
|------------|-------------|---------|
| Página 1   | 8 pedidos   | 131977704 - 131977711 |
| Página 2   | 8 pedidos   | 131977712 - 131977719 |
| Página 3   | 8 pedidos   | 131977720 - 131977727 |
| Página 4   | 6 pedidos   | 131977728 - 131977733 |

**Total:** 4 páginas  
**Rotação:** 8 segundos por página (32 segundos para ciclo completo)

---

## 🎯 Validação Final

Execute no console:

```javascript
// Verificar total de pedidos
console.log('Total:', PainelCelmaq.dadosAtuais.length);

// Verificar primeiro e último ID
console.log('Primeiro ID:', PainelCelmaq.dadosAtuais[0].id);
console.log('Último ID:', PainelCelmaq.dadosAtuais[29].id);
```

**Resultado esperado:**
```
Total: 30
Primeiro ID: 131977704
Último ID: 131977733
```

---

## ✅ Status dos Arquivos Atualizados

### `config.js`
```javascript
✅ maxRows: 1000  // Suporta até 1000 pedidos
✅ updateIntervalMinutes: 0.5  // Atualiza a cada 30s
✅ enabled: true  // Integração ativa
```

### `googleSheets.js`
```javascript
✅ Range: A2:K1000  // Busca até 1000 linhas
✅ Logs detalhados de conversão
✅ Filtro robusto de linhas vazias
✅ Identificação de linhas problemáticas
```

### `app.js`
```javascript
✅ Paginação dinâmica
✅ Função debug() disponível
✅ Logs detalhados de inicialização
```

---

## 🚀 Teste de Escalabilidade

### Teste 1: Adicionar Mais Pedidos

1. Adicione 20 novos pedidos no Sheets (total: 50)
2. Aguarde 30 segundos
3. Execute: `PainelCelmaq.debug()`

**Esperado:**
```
Total de registros: 50
Total de páginas: 7
```

### Teste 2: Remover Pedidos

1. Delete 10 linhas no Sheets (total: 20)
2. Aguarde 30 segundos
3. Execute: `PainelCelmaq.debug()`

**Esperado:**
```
Total de registros: 20
Total de páginas: 3
```

---

## 📝 Relatório de Teste

Após executar os testes, preencha:

```
✅ Total de registros carregados: ______
✅ Total de páginas criadas: ______
✅ Primeiro ID: ______
✅ Último ID: ______
✅ Linhas removidas (se houver): ______
✅ Rotação automática funcionando? SIM / NÃO
✅ Atualização a cada 30s funcionando? SIM / NÃO
```

---

## 🆘 Se Algo Der Errado

### Limpar Cache do Navegador

1. Pressione **Ctrl+Shift+Delete** (ou **Cmd+Shift+Delete**)
2. Selecione "Imagens e arquivos em cache"
3. Clique em "Limpar dados"
4. Recarregue a página com **Ctrl+F5** (ou **Cmd+Shift+R**)

### Verificar Configuração

No console:

```javascript
// Verificar se integração está ativa
console.log('Enabled:', GOOGLE_SHEETS_CONFIG.enabled);

// Verificar API Key
console.log('API Key:', GOOGLE_SHEETS_CONFIG.apiKey ? 'Configurada' : 'Não configurada');

// Verificar maxRows
console.log('Max Rows:', GOOGLE_SHEETS_CONFIG.maxRows);
```

---

## ✅ Tudo Funcionando?

Se você viu nos logs:

```
✅ Linhas brutas recebidas: 30
✅ Pedidos válidos após filtro: 30
✅ Total de páginas: 4
```

**🎉 PARABÉNS! O sistema está 100% funcional e escalável!**

---

**📅 23 de Dezembro de 2024**  
**👨‍💻 Desenvolvido por High Digital para CELMAQ**

