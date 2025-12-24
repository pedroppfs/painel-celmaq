# ⚡ Início Rápido - Google Sheets

## 🎯 5 Passos para Conectar

### ✅ PASSO 1: Criar a Planilha (5 minutos)

1. Acesse [Google Sheets](https://sheets.google.com)
2. Criar **planilha em branco**
3. Nomear: **"Painel Celmaq"**
4. Na **Linha 1**, cole os cabeçalhos:

```
A1: ID Pedido
B1: Cliente
C1: Data Entrega
D1: Tensão
E1: Produto
F1: Montador
G1: Ajudante
H1: Local Entrega
I1: Status
J1: Método Envio
K1: Etapa
```

5. A partir da **Linha 2**, adicione seus pedidos
6. **Salvar** (salva automaticamente)

---

### ✅ PASSO 2: Tornar Pública (2 minutos)

1. Clicar em **"Compartilhar"** (botão verde no canto)
2. Clicar em **"Alterar para qualquer pessoa com o link"**
3. Selecionar **"Leitor"** (não Editor!)
4. Clicar em **"Concluído"**

---

### ✅ PASSO 3: Publicar na Web (2 minutos)

1. Menu **Arquivo → Compartilhar → Publicar na Web**
2. Primeira lista: Selecionar **a aba com seus dados** (geralmente "Planilha1")
3. Segunda lista: Selecionar **"Valores separados por vírgula (.csv)"**
4. Marcar: ✅ **"Publicar automaticamente quando alterações forem feitas"**
5. Clicar em **"Publicar"**
6. Confirmar **"OK"**

---

### ✅ PASSO 4: Obter o ID (1 minuto)

1. Olhe a URL da sua planilha:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit
                                        ↑
                                Este é o ID
```

2. **Copiar** apenas o ID: `1ABC123XYZ456`

---

### ✅ PASSO 5: Criar API Key (5 minutos)

#### 5.1 Acessar Google Cloud

1. Acesse: [console.cloud.google.com](https://console.cloud.google.com)
2. Login com sua conta Google

#### 5.2 Criar Projeto

1. Clicar em **"Selecionar projeto"** (topo da página)
2. Clicar em **"Novo Projeto"**
3. Nome: `Painel Celmaq`
4. Clicar em **"Criar"**
5. Aguardar alguns segundos

#### 5.3 Ativar Google Sheets API

1. No menu (☰), ir em **APIs e Serviços → Biblioteca**
2. Buscar: **"Google Sheets API"**
3. Clicar na API
4. Clicar em **"Ativar"**

#### 5.4 Criar Chave

1. Ir em **APIs e Serviços → Credenciais**
2. Clicar em **"+ Criar Credenciais"**
3. Selecionar **"Chave de API"**
4. **Copiar a chave** (algo como: `AIzaSyABC123...`)
5. Opcional mas recomendado:
   - Clicar em **"Restringir chave"**
   - Em "Restrições de API", marcar **"Restringir chave"**
   - Selecionar apenas **"Google Sheets API"**
   - Clicar em **"Salvar"**

---

## 🔧 Configurar no Código

### Abrir o Arquivo

Arquivo: `src/scripts/config.js`

### Colar suas Credenciais

```javascript
const GOOGLE_SHEETS_CONFIG = {
    spreadsheetId: '1ABC123XYZ456',           // ← Cole seu ID aqui
    sheetName: 'Planilha1',                   // ← Nome da aba
    apiKey: 'AIzaSyABC123...',                // ← Cole sua API Key aqui
    updateIntervalMinutes: 0.5,               // ← 30 segundos
    enabled: true                             // ← true = ativo
};
```

### Salvar o Arquivo

Pressione **Ctrl+S** (Cmd+S no Mac)

---

## 🧪 Testar

### Teste 1: Abrir o Painel

1. Abrir `index.html` no navegador
2. Pressionar **F12** (abrir Console)
3. Procurar por:

```
✅ Configuração válida
✅ Dados carregados com sucesso: X pedidos
```

### Teste 2: Editar e Atualizar

1. Com o painel aberto
2. Editar algo na planilha (trocar um status, por exemplo)
3. Aguardar 30 segundos
4. Ver a mudança no painel automaticamente

---

## ✅ Pronto!

Se você viu estas mensagens no Console:

```
📊 Configuração Google Sheets
Integração: ✅ Ativada
✅ Configuração válida
✅ Dados carregados com sucesso: 8 pedidos
🔄 Rotação automática iniciada
```

**Está funcionando perfeitamente!** 🎉

---

## ⚠️ Problemas Comuns

### "API key not valid"
- ✅ Verificar se copiou a key corretamente
- ✅ Confirmar que Google Sheets API está ativada
- ✅ Aguardar 1-2 minutos após criar a key

### "Unable to parse range"
- ✅ Verificar o nome da aba em `sheetName`
- ✅ Confirmar que está exatamente como na planilha

### Dados não aparecem
- ✅ Abrir Console (F12) e ver os erros
- ✅ Verificar se a planilha está pública
- ✅ Confirmar se o ID está correto

### Nenhuma mensagem de erro, mas usa dados mockados
- ✅ Verificar se `enabled: true` em config.js
- ✅ Recarregar a página (F5)

---

## 🎮 Comandos Úteis (Console)

Abra o Console (F12) e teste:

### Ver configuração:
```javascript
logConfiguracao()
```

### Testar conexão:
```javascript
GoogleSheets.testarConexao()
```

### Ver status:
```javascript
GoogleSheets.obterStatus()
```

### Buscar dados manualmente:
```javascript
GoogleSheets.buscarDados()
```

---

## 📚 Próximos Passos

1. ✅ Personalizar dados na planilha
2. ✅ Ajustar tempo de atualização se quiser
3. ✅ Testar em TV real
4. ✅ Validar legibilidade
5. ✅ Colocar em produção!

---

## 🆘 Precisa de Ajuda Detalhada?

- 📖 `GUIA_GOOGLE_SHEETS.md` - Guia completo
- 📊 `TEMPLATE_PLANILHA.md` - Template da planilha
- 🔧 `config.js` - Arquivo de configuração

---

**Tempo total estimado: 15 minutos** ⏱️

**Desenvolvido por:** High Digital  
**Cliente:** CELMAQ  
**Data:** 23 de Dezembro de 2024

