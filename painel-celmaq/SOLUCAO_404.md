# 🔧 Solução para Erro 404 no Deploy

## 🎯 Problema Identificado

Você está tendo erro 404 tanto no **Vercel** quanto no **GitHub Pages**. O problema principal é a estrutura do repositório:

```
Painel de Controle Produção - CELMAQ/  ← Repositório Git está aqui
└── painel-celmaq/                      ← Projeto está aqui
    ├── index.html
    ├── vercel.json
    └── src/
```

## ✅ Soluções Aplicadas

### 1. ✅ Vercel.json Corrigido

O arquivo `vercel.json` foi atualizado com a configuração correta para servir sites estáticos HTML.

**O que foi corrigido:**
- ✅ Adicionada configuração `builds` para arquivos estáticos
- ✅ Adicionadas rotas para servir `index.html` e todos os arquivos
- ✅ Configuração adequada para HTML puro

---

## 🚀 Como Fazer Deploy Agora

### Opção 1: Vercel (Recomendado)

#### Passo 1: Fazer Commit das Correções

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"

git add vercel.json
git commit -m "Fix: Corrigir configuração Vercel para site estático"
git push
```

#### Passo 2: Configurar Vercel

1. Acesse: https://vercel.com
2. Clique em **"Add New..."** → **"Project"**
3. Importe o repositório `painel-celmaq`
4. **IMPORTANTE**: Configure o **Root Directory**:
   - Clique em **"Configure Project"**
   - Em **"Root Directory"**, selecione: **`painel-celmaq`** ✅
   - Framework Preset: **Other**
   - Build Command: **(deixe vazio)**
   - Output Directory: **(deixe vazio)**
5. Clique em **"Deploy"**

**✅ O Root Directory é CRÍTICO!** Sem isso, a Vercel procura o `index.html` na raiz do repositório, mas ele está em `painel-celmaq/`.

---

### Opção 2: GitHub Pages

#### Passo 1: Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, configure:
   - **Branch**: `main` (ou `master`)
   - **Folder**: **`/painel-celmaq`** ✅ (IMPORTANTE!)
4. Clique em **Save**

#### Passo 2: Verificar URL

A URL será:
```
https://seu-usuario.github.io/nome-do-repo/painel-celmaq/
```

**⚠️ Nota**: Se você quiser que a URL seja mais limpa (`https://seu-usuario.github.io/painel-celmaq/`), você precisa mover o conteúdo de `painel-celmaq/` para a raiz do repositório.

---

## 🔄 Alternativa: Mover Projeto para Raiz (Opcional)

Se você quiser URLs mais limpas e configuração mais simples, pode mover o projeto para a raiz do repositório:

### Passo 1: Mover Arquivos

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ"

# Mover tudo de painel-celmaq para a raiz
mv painel-celmaq/* .
mv painel-celmaq/.* . 2>/dev/null || true

# Remover pasta vazia
rmdir painel-celmaq
```

### Passo 2: Commit

```bash
git add .
git commit -m "Move project to repository root"
git push
```

### Passo 3: Reconfigurar Deploy

**Vercel:**
- Root Directory: **`./`** (raiz)

**GitHub Pages:**
- Folder: **`/ (root)`**

---

## 🧪 Testar Localmente

Antes de fazer deploy, teste localmente:

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"

# Abrir no navegador
open index.html
```

Ou use um servidor local:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (se tiver instalado)
npx serve
```

Acesse: http://localhost:8000

---

## ✅ Checklist de Verificação

Antes de fazer deploy, verifique:

- [ ] `vercel.json` está na pasta `painel-celmaq/`
- [ ] `index.html` está na pasta `painel-celmaq/`
- [ ] Todos os arquivos foram commitados e enviados ao GitHub
- [ ] **Vercel**: Root Directory configurado como `painel-celmaq`
- [ ] **GitHub Pages**: Folder configurado como `/painel-celmaq`

---

## 🐛 Se Ainda Der Erro 404

### Verificar no Console do Navegador

1. Abra o site deployado
2. Pressione `F12` (DevTools)
3. Vá na aba **Console**
4. Veja se há erros de carregamento de arquivos

### Erros Comuns:

**Erro: "Failed to load resource: 404"**
- ✅ Verifique se os caminhos no HTML estão corretos
- ✅ Verifique se os arquivos existem no repositório

**Erro: "CORS policy"**
- ✅ Normal para Google Sheets API
- ✅ Configure a API Key com o domínio correto

---

## 📞 Próximos Passos

1. ✅ Fazer commit do `vercel.json` corrigido
2. ✅ Configurar Vercel com Root Directory correto
3. ✅ Testar o deploy
4. ✅ Configurar Google Sheets API com o domínio Vercel

---

**Última atualização**: 24/12/2024

