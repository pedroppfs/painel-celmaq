# ⚡ Comandos Rápidos - Git & GitHub

## 🚀 Deploy Inicial (Primeira Vez)

```bash
# 1. Navegar até a pasta do projeto
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"

# 2. Configurar Git (primeira vez no computador)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"

# 3. Inicializar Git
git init

# 4. Adicionar todos os arquivos
git add .

# 5. Fazer primeiro commit
git commit -m "Initial commit - Painel de Controle Celmaq"

# 6. Conectar com GitHub (substitua SEU-USUARIO e NOME-DO-REPO)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# 7. Renomear branch para main
git branch -M main

# 8. Enviar para GitHub
git push -u origin main
```

---

## 🔄 Atualizar o Painel (Quando Fizer Mudanças)

```bash
# 1. Navegar até a pasta do projeto
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"

# 2. Ver o que mudou
git status

# 3. Adicionar mudanças
git add .

# 4. Fazer commit (troque a mensagem)
git commit -m "Descrição da mudança"

# 5. Enviar para GitHub
git push
```

---

## 📋 Copiar e Colar - Setup Completo

**Cole tudo de uma vez no Terminal:**

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq" && \
git init && \
git add . && \
git commit -m "Initial commit - Painel de Controle Celmaq" && \
git branch -M main && \
echo "✅ Git configurado! Agora execute:"
echo "git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git"
echo "git push -u origin main"
```

**Depois execute separadamente:**
```bash
# Substitua pela URL do seu repositório:
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

---

## 🎯 Sequência Típica (Dia a Dia)

### Manhã (Começar a trabalhar)

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"
git pull  # Baixa atualizações
```

### Durante o Trabalho (Após fazer mudanças)

```bash
git add .
git commit -m "Descrição do que você fez"
git push
```

### Final do Dia (Salvar tudo)

```bash
git add .
git commit -m "Atualizações do dia $(date +%d/%m/%Y)"
git push
```

---

## 🔍 Comandos de Verificação

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças não commitadas
git diff

# Ver branches
git branch

# Ver remoto configurado
git remote -v
```

---

## 🆘 Comandos de Emergência

### Desfazer mudanças não salvas (CUIDADO!)

```bash
# Desfazer mudanças em um arquivo específico
git checkout -- nome-do-arquivo.js

# Desfazer TODAS as mudanças não commitadas (CUIDADO!)
git reset --hard
```

### Corrigir último commit

```bash
# Adicionar mais arquivos ao último commit
git add arquivo-esquecido.js
git commit --amend --no-edit

# Mudar mensagem do último commit
git commit --amend -m "Nova mensagem"
```

### Remover arquivo do Git (mas manter no computador)

```bash
git rm --cached nome-do-arquivo.js
git commit -m "Removido arquivo do Git"
git push
```

---

## 📝 Template de Mensagens de Commit

### Boas Práticas

```bash
# ✅ BOM - Claro e descritivo
git commit -m "Corrigido erro de paginação na página 4"
git commit -m "Adicionado filtro de status na tabela"
git commit -m "Atualizado layout para 1920x1080"

# ❌ RUIM - Vago
git commit -m "update"
git commit -m "fix"
git commit -m "mudanças"
```

### Categorias Sugeridas

```bash
# Novos recursos
git commit -m "feat: Adicionado sistema de notificações"

# Correções
git commit -m "fix: Corrigido erro na rotação automática"

# Estilo/Design
git commit -m "style: Ajustado espaçamento da tabela"

# Documentação
git commit -m "docs: Atualizado README com instruções"

# Performance
git commit -m "perf: Otimizado carregamento do Google Sheets"

# Refatoração
git commit -m "refactor: Melhorado código da paginação"
```

---

## 🌐 URLs Importantes

```bash
# Seu repositório (substitua):
https://github.com/SEU-USUARIO/painel-celmaq

# Seu painel online (substitua):
https://SEU-USUARIO.github.io/painel-celmaq/

# Configurações do repositório:
https://github.com/SEU-USUARIO/painel-celmaq/settings

# GitHub Pages:
https://github.com/SEU-USUARIO/painel-celmaq/settings/pages
```

---

## ⚙️ Aliases Úteis (Opcional)

**Configure atalhos para comandos longos:**

```bash
# Configurar aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.cm commit
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --decorate"

# Agora você pode usar:
git st    # ao invés de: git status
git cm    # ao invés de: git commit
git lg    # ao invés de: git log --oneline --graph --decorate
```

---

## 🎯 Fluxo Completo Passo a Passo

### 1️⃣ Criar Repositório no GitHub
- Acesse github.com
- Clique no `+` → New repository
- Nome: `painel-celmaq`
- Clique: Create repository

### 2️⃣ No Terminal (Cole todos juntos)
```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"
git init
git add .
git commit -m "Initial commit - Painel de Controle Celmaq"
git branch -M main
```

### 3️⃣ Conectar e Enviar (Substitua a URL)
```bash
git remote add origin https://github.com/SEU-USUARIO/painel-celmaq.git
git push -u origin main
```

### 4️⃣ Ativar GitHub Pages
- Vá em Settings → Pages
- Source: main / root
- Save
- Aguarde 1 minuto

### 5️⃣ Acessar Online
```
https://SEU-USUARIO.github.io/painel-celmaq/
```

---

## 📱 Adicionar às TVs da Fábrica

```bash
# URL para adicionar nos favoritos das TVs:
https://SEU-USUARIO.github.io/painel-celmaq/

# Ou criar QR Code:
# Use: https://qr.io
# Cole a URL do painel
# Baixe o QR Code
# Imprima e cole perto das TVs
```

---

## 🔄 Rotina Diária Recomendada

**Ao começar o dia:**
```bash
cd painel-celmaq
git pull
```

**Após cada mudança significativa:**
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

**Antes de sair:**
```bash
git status  # Ver se tem algo não salvo
git add .
git commit -m "Fim do expediente $(date +%d/%m/%Y)"
git push
```

---

## ✅ Checklist Rápido

```
☐ Criei repositório no GitHub
☐ Executei: git init
☐ Executei: git add .
☐ Executei: git commit -m "..."
☐ Executei: git remote add origin ...
☐ Executei: git push -u origin main
☐ Ativei GitHub Pages
☐ Testei a URL online
☐ Configurei nas TVs
```

---

**📅 23 de Dezembro de 2024**  
**👨‍💻 Desenvolvido por High Digital para CELMAQ**

