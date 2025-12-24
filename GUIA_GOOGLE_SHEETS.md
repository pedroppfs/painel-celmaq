# 📊 Guia Completo - Integração Google Sheets

## 🎯 Objetivo
Conectar o painel com uma planilha Google Sheets para alimentação automática dos dados em tempo real.

---

## 📋 Passo a Passo

### **ETAPA 1: Preparar a Planilha Google Sheets**

#### 1.1 Criar/Configurar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha ou use uma existente
3. Nomeie a planilha: **"Painel Celmaq - Produção"**

#### 1.2 Estrutura das Colunas (IMPORTANTE!)

A planilha deve ter **exatamente estas colunas na ordem**:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| ID Pedido | Cliente | Data Entrega | Tensão | Produto | Montador | Ajudante | Local Entrega | Status | Método Envio | Etapa |

**Exemplo de dados:**

```
A1: ID Pedido       B1: Cliente                           C1: Data Entrega
A2: 131977721       B2: PADARIA TRIGO DE MINAS           C2: 22/01/2025
A3: 131977722       B3: PANIFICADORA BOM DIA LTDA        C3: 23/01/2025
```

#### 1.3 Valores Permitidos para Status

Use **exatamente** um destes valores na coluna "Status":

- `confirmado` → Badge verde
- `pendente` → Badge amarelo
- `producao` → Badge azul
- `atrasado` → Badge vermelho
- `entregue` → Badge verde

⚠️ **Importante:** Digite tudo em **minúsculas** sem acentos!

---

### **ETAPA 2: Publicar a Planilha como Web**

#### 2.1 Tornar Pública

1. Na planilha, clique em **"Compartilhar"** (canto superior direito)
2. Clique em **"Alterar para qualquer pessoa com o link"**
3. Selecione **"Leitor"** (visualizador)
4. Clique em **"Concluído"**

#### 2.2 Publicar como Web

1. Vá em **Arquivo → Compartilhar → Publicar na Web**
2. Na primeira lista, selecione a aba/planilha desejada
3. Na segunda lista, selecione **"Valores separados por vírgula (.csv)"**
4. Marque as opções:
   - ✅ "Publicar automaticamente quando alterações forem feitas"
   - ✅ "Exigir que os visualizadores e comentadores entrem novamente"
5. Clique em **"Publicar"**
6. **Copie o link gerado** (você vai usar!)

#### 2.3 Obter o ID da Planilha

O link da sua planilha tem este formato:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit#gid=0
                                    ↑
                           Este é o ID da planilha
```

**Copie apenas a parte:** `1ABC123XYZ456`

---

### **ETAPA 3: Configurar o Código**

#### 3.1 Abrir o Arquivo de Configuração

Abra o arquivo: `src/scripts/config.js` (vou criar)

#### 3.2 Adicionar suas Credenciais

```javascript
const GOOGLE_SHEETS_CONFIG = {
    spreadsheetId: 'SEU_ID_AQUI',  // ← Cole o ID copiado
    sheetName: 'Planilha1',         // ← Nome da aba (geralmente "Planilha1")
    apiKey: 'SUA_API_KEY_AQUI'      // ← Vamos gerar isso
};
```

---

### **ETAPA 4: Criar API Key do Google**

#### 4.1 Acessar Google Cloud Console

1. Acesse: [Google Cloud Console](https://console.cloud.google.com)
2. Faça login com sua conta Google

#### 4.2 Criar um Projeto

1. Clique em **"Selecionar projeto"** no topo
2. Clique em **"Novo Projeto"**
3. Nome: `Painel Celmaq`
4. Clique em **"Criar"**

#### 4.3 Ativar Google Sheets API

1. No menu lateral, vá em **"APIs e Serviços" → "Biblioteca"**
2. Busque por: **"Google Sheets API"**
3. Clique na API
4. Clique em **"Ativar"**

#### 4.4 Criar Credenciais (API Key)

1. Vá em **"APIs e Serviços" → "Credenciais"**
2. Clique em **"+ Criar Credenciais"**
3. Selecione **"Chave de API"**
4. **Copie a chave gerada** (algo como: `AIzaSyABC123XYZ...`)
5. Clique em **"Restringir chave"** (recomendado)
6. Em "Restrições de API":
   - Marque **"Restringir chave"**
   - Selecione **"Google Sheets API"**
7. Clique em **"Salvar"**

---

### **ETAPA 5: Implementar no Código**

Vou criar os arquivos necessários automaticamente! ✅

---

## 🔒 Segurança

### Opção 1: API Key Pública (Mais Fácil)
- ✅ Fácil de implementar
- ✅ Funciona direto no navegador
- ⚠️ Qualquer pessoa pode ver sua API Key
- 💡 Solução: Restringir a key para apenas Google Sheets API

### Opção 2: Backend com Credenciais (Mais Seguro)
- ✅ Mais seguro
- ✅ Protege credenciais
- ⚠️ Requer servidor backend
- 💡 Recomendado para produção

**Para começar, vamos usar Opção 1 (mais rápida)**

---

## 📊 Estrutura da Planilha - Template

Baixe este template e preencha com seus dados:

### Cabeçalhos (Linha 1):
```
ID Pedido | Cliente | Data Entrega | Tensão | Produto | Montador | Ajudante | Local Entrega | Status | Método Envio | Etapa
```

### Exemplo (Linha 2):
```
131977721 | PADARIA TRIGO DE MINAS | 22/01/2025 | 220V TRIF | CRONOS_6.3E | Vai Montador | ADEMIR | TABOÃO DA SERRA/SP | confirmado | TRANSPORTADORA | EMBALAGEM 90%
```

---

## 🔄 Como Funcionará

### Fluxo de Dados:

```
┌─────────────────────────────────────────────────────────┐
│  GOOGLE SHEETS                                          │
│  (Você edita a planilha)                                │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ Atualização automática
                 │ a cada 30 segundos
                 ↓
┌─────────────────────────────────────────────────────────┐
│  PAINEL CELMAQ                                          │
│  (Dados atualizados na TV)                              │
│  • Rotação automática continua                          │
│  • Transições suaves                                    │
└─────────────────────────────────────────────────────────┘
```

### Configurações de Atualização:

```javascript
const CONFIG = {
    // ... outras configs
    
    updateIntervalMinutes: 0.5,  // Buscar dados a cada 30 segundos
    // ou
    updateIntervalMinutes: 1,    // Buscar dados a cada 1 minuto
    // ou
    updateIntervalMinutes: 5,    // Buscar dados a cada 5 minutos
};
```

---

## ✅ Checklist de Implementação

### Antes de Começar
- [ ] Planilha criada no Google Sheets
- [ ] Colunas configuradas corretamente
- [ ] Dados de exemplo preenchidos
- [ ] Planilha publicada na web
- [ ] ID da planilha copiado
- [ ] API Key criada e copiada

### Após Implementar
- [ ] Arquivo config.js criado
- [ ] ID e API Key configurados
- [ ] Código testado
- [ ] Dados aparecendo na tela
- [ ] Atualização automática funcionando

---

## 🧪 Testando a Integração

### Teste 1: Conexão Básica
1. Abra o painel no navegador
2. Abra o Console (F12)
3. Procure por: `✅ Dados carregados do Google Sheets`
4. Verifique se os dados aparecem

### Teste 2: Atualização Automática
1. Com o painel aberto
2. Edite algo na planilha
3. Aguarde 30 segundos (ou tempo configurado)
4. Veja se os dados atualizam automaticamente

### Teste 3: Rotação com Dados Reais
1. Adicione mais de 8 pedidos na planilha
2. Veja se a paginação funciona
3. Verifique se a rotação continua

---

## 🚨 Solução de Problemas

### Erro: "API key not valid"
**Solução:** 
- Verifique se a API Key está correta
- Confirme que Google Sheets API está ativada
- Aguarde alguns minutos após criar a key

### Erro: "Unable to parse range"
**Solução:**
- Verifique o nome da aba (sheetName)
- Confirme que está digitado corretamente

### Dados não aparecem
**Solução:**
- Abra o Console (F12) e veja os erros
- Verifique se a planilha está pública
- Confirme se o ID está correto

### Dados desatualizados
**Solução:**
- Verifique se marcou "Publicar automaticamente"
- Aguarde alguns segundos para propagar
- Recarregue a página

---

## 📝 Próximos Passos

Após este guia:
1. ✅ Vou criar o arquivo `config.js`
2. ✅ Vou criar o arquivo `googleSheets.js`
3. ✅ Vou atualizar o `app.js`
4. ✅ Tudo pronto para usar!

---

**Preparado?** Vamos à implementação! 🚀

---

**Desenvolvido por:** High Digital  
**Cliente:** CELMAQ  
**Data:** 23 de Dezembro de 2024

