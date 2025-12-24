# 📊 Template da Planilha Google Sheets

## 🎯 Como Usar Este Template

1. Copie as colunas abaixo para sua planilha
2. Cole na **Linha 1** (cabeçalho)
3. Preencha os dados a partir da **Linha 2**

---

## 📋 Cabeçalhos (Linha 1)

Cole exatamente assim na sua planilha:

```
ID Pedido | Cliente | Data Entrega | Tensão | Produto | Montador | Ajudante | Local Entrega | Status | Método Envio | Etapa
```

### Disposição por Coluna:

| Coluna | Campo | Tipo | Exemplo |
|--------|-------|------|---------|
| **A** | ID Pedido | Texto/Número | 131977721 |
| **B** | Cliente | Texto | PADARIA TRIGO DE MINAS |
| **C** | Data Entrega | Data | 22/01/2025 |
| **D** | Tensão | Texto | 220V TRIF |
| **E** | Produto | Texto | CRONOS_6.3E |
| **F** | Montador | Texto | Vai Montador |
| **G** | Ajudante | Texto | ADEMIR |
| **H** | Local Entrega | Texto | TABOÃO DA SERRA/SP |
| **I** | Status | Texto | confirmado |
| **J** | Método Envio | Texto | TRANSPORTADORA |
| **K** | Etapa | Texto | EMBALAGEM 90% |

---

## 📝 Dados de Exemplo (Linhas 2+)

### Linha 2 (Exemplo 1):
```
131977721 | PADARIA E LANCHONETE TRIGO DE MINAS | 22/01/2025 | 220V TRIF | CRONOS_6.3E | Vai Montador | ADEMIR | TABOÃO DA SERRA/SP | confirmado | TRANSPORTADORA | EMBALAGEM 90%
```

### Linha 3 (Exemplo 2):
```
131977722 | PANIFICADORA BOM DIA LTDA | 23/01/2025 | 380V TRIF | CRONOS_8.5E | CARLOS SILVA | JOÃO PEDRO | SÃO PAULO/SP | producao | PRÓPRIA | MONTAGEM 45%
```

### Linha 4 (Exemplo 3):
```
131977723 | CONFEITARIA DOCE SABOR | 24/01/2025 | 220V MONO | CRONOS_4.2E | RICARDO SANTOS | MARCOS | CAMPINAS/SP | pendente | TRANSPORTADORA | AGUARDANDO PEÇAS
```

---

## ⚠️ IMPORTANTE: Valores de Status

A coluna **Status (I)** deve ter **exatamente** um destes valores:

| Digite na Planilha | Resultado no Painel | Cor do Badge |
|--------------------|---------------------|--------------|
| `confirmado` | CONFIRMADO | 🟢 Verde |
| `pendente` | PENDENTE | 🟡 Amarelo |
| `producao` | EM PRODUÇÃO | 🔵 Azul |
| `atrasado` | ATRASADO | 🔴 Vermelho |
| `entregue` | ENTREGUE | 🟢 Verde |

**Dica:** Digite tudo em **minúsculas** e **sem acentos**!

### Variações Aceitas (são convertidas automaticamente):

| Você pode digitar | Será convertido para |
|-------------------|----------------------|
| Confirmado, CONFIRMADO, confirm, ok | confirmado |
| Pendente, PENDENTE, pend, aguardando | pendente |
| Produção, PRODUCAO, em produção | producao |
| Atrasado, ATRASADO, atraso | atrasado |
| Entregue, ENTREGUE, concluido, finalizado | entregue |

---

## 🎨 Formatação Recomendada

### Na Linha 1 (Cabeçalho):
- ✅ Negrito
- ✅ Fundo cinza claro
- ✅ Texto centralizado
- ✅ Bordas

### Nas Linhas de Dados:
- ✅ Texto normal
- ✅ Alinhamento à esquerda
- ✅ Zebrado (cores alternadas) - opcional

### Largura das Colunas:
- **A (ID):** 100px
- **B (Cliente):** 250px
- **C (Data):** 110px
- **D (Tensão):** 100px
- **E (Produto):** 120px
- **F (Montador):** 150px
- **G (Ajudante):** 120px
- **H (Local):** 200px
- **I (Status):** 120px
- **J (Método):** 140px
- **K (Etapa):** 180px

---

## 📥 Como Criar a Planilha

### Passo 1: Criar Nova Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Clique em **"Em branco"**
3. Nomeie: **"Painel Celmaq - Produção"**

### Passo 2: Colar Cabeçalhos
1. Selecione célula **A1**
2. Cole: `ID Pedido`
3. Selecione célula **B1**
4. Cole: `Cliente`
5. Continue até **K1** (`Etapa`)

### Passo 3: Adicionar Dados
1. A partir da linha 2, adicione seus pedidos
2. Use os exemplos acima como referência
3. Preencha todas as 11 colunas

### Passo 4: Formatar (Opcional)
1. Selecione linha 1
2. Negrito: **Ctrl+B** (Cmd+B no Mac)
3. Fundo cinza: Menu **Formato → Formatação condicional**

---

## 🔄 Atualização Automática

Após configurar:
- ✅ Edite a planilha normalmente
- ✅ Salva automaticamente
- ✅ Painel atualiza em ~30 segundos
- ✅ Não precisa recarregar a página

---

## 🧪 Testar com Dados de Exemplo

Quer testar rapidamente? Cole esta tabela completa:

| ID Pedido | Cliente | Data Entrega | Tensão | Produto | Montador | Ajudante | Local Entrega | Status | Método Envio | Etapa |
|-----------|---------|--------------|--------|---------|----------|----------|---------------|--------|--------------|-------|
| 131977721 | PADARIA TRIGO DE MINAS | 22/01/2025 | 220V TRIF | CRONOS_6.3E | Vai Montador | ADEMIR | TABOÃO DA SERRA/SP | confirmado | TRANSPORTADORA | EMBALAGEM 90% |
| 131977722 | PANIFICADORA BOM DIA | 23/01/2025 | 380V TRIF | CRONOS_8.5E | CARLOS | JOÃO | SÃO PAULO/SP | producao | PRÓPRIA | MONTAGEM 45% |
| 131977723 | CONFEITARIA DOCE SABOR | 24/01/2025 | 220V MONO | CRONOS_4.2E | RICARDO | MARCOS | CAMPINAS/SP | pendente | TRANSPORTADORA | AGUARDANDO |
| 131977724 | PADARIA CENTRAL | 20/01/2025 | 220V TRIF | CRONOS_6.3E | ANTONIO | PEDRO | GUARULHOS/SP | atrasado | TRANSPORTADORA | TESTE 80% |
| 131977725 | LANCHONETE DO BAIRRO | 15/01/2025 | 380V TRIF | CRONOS_10.0E | FERNANDO | LUCAS | SANTO ANDRÉ/SP | entregue | PRÓPRIA | CONCLUÍDO |
| 131977726 | PADARIA MODERNA | 25/01/2025 | 220V TRIF | CRONOS_6.3E | Vai Montador | ROBERTO | SÃO BERNARDO/SP | confirmado | TRANSPORTADORA | PINTURA 60% |
| 131977727 | CONFEITARIA ARTS | 26/01/2025 | 220V MONO | CRONOS_5.5E | JOSÉ | ANDERSON | OSASCO/SP | producao | TRANSPORTADORA | SOLDAGEM 30% |
| 131977728 | PANIFICADORA ESTRELA | 27/01/2025 | 380V TRIF | CRONOS_9.0E | PAULO | DIEGO | DIADEMA/SP | confirmado | PRÓPRIA | PREPARAÇÃO |

---

## 📞 Precisa de Ajuda?

- 📖 Veja: `GUIA_GOOGLE_SHEETS.md` - Guia completo
- ⚡ Veja: `INICIO_RAPIDO_SHEETS.md` - Tutorial passo a passo
- 🔧 Veja: `src/scripts/config.js` - Arquivo de configuração

---

**Desenvolvido por:** High Digital  
**Cliente:** CELMAQ  
**Data:** 23 de Dezembro de 2024

