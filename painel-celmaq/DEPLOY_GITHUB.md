# 🚀 Deploy no GitHub - Guia Completo

## 📋 Pré-requisitos

Antes de começar, você precisa:

1. **Conta no GitHub** - [Criar conta](https://github.com/join)
2. **Git instalado** no seu computador

### Verificar se o Git está instalado

Abra o Terminal e digite:

```bash
git --version
```

**Se aparecer algo como:** `git version 2.39.0` ✅ Git está instalado

**Se der erro:** Você precisa instalar o Git:
- **Mac:** Abra o Terminal e digite `git` (o sistema vai pedir para instalar)
- **Windows:** Baixe em [git-scm.com](https://git-scm.com/download/win)

---

## 🔐 IMPORTANTE: Segurança da API Key

⚠️ **ATENÇÃO:** A API Key do Google Sheets está no arquivo `config.js` e será pública no GitHub!

### Opção 1: Deixar Pública (Mais Fácil)

**Prós:**
- ✅ Funciona imediatamente
- ✅ Sem configuração extra

**Contras:**
- ⚠️ Qualquer pessoa pode ver sua API Key
- ⚠️ Pode ter uso indevido

**Se escolher esta opção:**
- Configure restrições na API Key (veja seção "Protegendo a API Key" abaixo)

### Opção 2: Usar Variáveis de Ambiente (Recomendado para Produção)

**Prós:**
- ✅ API Key fica privada
- ✅ Mais seguro

**Contras:**
- ⚠️ Requer configuração adicional
- ⚠️ Mais complexo para iniciantes

**Para este guia, vamos usar a Opção 1** (mais fácil para começar).

---

## 📝 Passo a Passo

### PASSO 1: Criar Repositório no GitHub

1. **Acesse:** [github.com](https://github.com)
2. **Faça login** na sua conta
3. **Clique no botão `+`** (canto superior direito)
4. **Selecione:** "New repository"

**Preencha:**
- **Repository name:** `painel-celmaq` (ou outro nome)
- **Description:** "Painel de Controle de Produção - CELMAQ"
- **Visibility:** 
  - ✅ **Public** (se quiser que seja público e hospedado de graça)
  - 🔒 **Private** (se quiser que seja privado, mas não terá GitHub Pages grátis)
- **NÃO marque:** "Add a README file"
- **NÃO marque:** "Add .gitignore"
- **NÃO marque:** "Choose a license"

5. **Clique em:** "Create repository"

**Guarde a URL do repositório!** Exemplo:
```
https://github.com/SEU-USUARIO/painel-celmaq
```

---

### PASSO 2: Configurar Git no seu Computador (Primeira Vez)

**Abra o Terminal** e configure seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

**Exemplo:**
```bash
git config --global user.name "Pedro Paulo"
git config --global user.email "pedropdzn@gmail.com"
```

**⚠️ Use o mesmo email da sua conta GitHub!**

---

### PASSO 3: Inicializar Git no Projeto

**1. Abra o Terminal**

**2. Navegue até a pasta do projeto:**

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"
```

**3. Inicialize o Git:**

```bash
git init
```

**Você verá:** `Initialized empty Git repository...` ✅

---

### PASSO 4: Adicionar Arquivos ao Git

**1. Verificar arquivos:**

```bash
git status
```

**Você verá:** Lista de arquivos em vermelho (não rastreados)

**2. Adicionar todos os arquivos:**

```bash
git add .
```

**3. Verificar novamente:**

```bash
git status
```

**Agora os arquivos devem estar em verde!** ✅

---

### PASSO 5: Fazer o Primeiro Commit

```bash
git commit -m "Initial commit - Painel de Controle Celmaq"
```

**Você verá:** Lista de arquivos criados ✅

---

### PASSO 6: Conectar com o GitHub

**1. Adicionar o repositório remoto:**

Substitua `SEU-USUARIO` e `NOME-DO-REPO` pela sua URL do GitHub:

```bash
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
```

**Exemplo:**
```bash
git remote add origin https://github.com/pedropdzn/painel-celmaq.git
```

**2. Verificar:**

```bash
git remote -v
```

**Você verá:** Duas linhas com a URL do seu repositório ✅

---

### PASSO 7: Enviar para o GitHub (Push)

**1. Renomear branch para `main`:**

```bash
git branch -M main
```

**2. Enviar para o GitHub:**

```bash
git push -u origin main
```

**⚠️ Você será solicitado a fazer login:**

**No Mac:**
- Uma janela vai abrir pedindo suas credenciais do GitHub
- Faça login normalmente

**No Windows:**
- Digite seu username e password do GitHub
- **OU** use um Personal Access Token (se tiver autenticação de 2 fatores)

**Após autenticar, você verá:** Barras de progresso e "done" ✅

---

### PASSO 8: Verificar no GitHub

1. **Acesse:** `https://github.com/SEU-USUARIO/NOME-DO-REPO`
2. **Você deve ver:** Todos os seus arquivos! ✅

---

### PASSO 9: Ativar GitHub Pages (Hospedagem Grátis)

**1. No repositório do GitHub, clique em:** "Settings"

**2. No menu lateral esquerdo, clique em:** "Pages"

**3. Em "Source", selecione:**
- **Branch:** `main`
- **Folder:** `/ (root)`

**4. Clique em:** "Save"

**5. Aguarde ~1 minuto**

**6. Recarregue a página**

**7. Você verá uma mensagem:**
```
Your site is live at https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

**8. Clique no link para abrir seu painel!** 🎉

---

## 🌐 Acessar o Painel Online

Seu painel estará disponível em:

```
https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

**Exemplo:**
```
https://pedropdzn.github.io/painel-celmaq/
```

**Você pode:**
- ✅ Acessar de qualquer computador
- ✅ Compartilhar o link com outras pessoas
- ✅ Abrir nas TVs da fábrica

---

## 🔄 Atualizar o Painel (Quando Fizer Mudanças)

Sempre que você editar algum arquivo, siga estes passos:

### 1. Verificar mudanças

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"

git status
```

### 2. Adicionar mudanças

```bash
git add .
```

### 3. Fazer commit

```bash
git commit -m "Descrição da mudança"
```

**Exemplo:**
```bash
git commit -m "Ajuste no layout da tabela"
git commit -m "Adicionado novo status"
git commit -m "Corrigido bug na paginação"
```

### 4. Enviar para GitHub

```bash
git push
```

**Aguarde ~1 minuto e o site será atualizado automaticamente!** 🚀

---

## 🔐 Protegendo a API Key

### No Google Cloud Console

1. **Acesse:** [console.cloud.google.com](https://console.cloud.google.com)
2. **Navegue para:** APIs & Services → Credentials
3. **Clique na sua API Key**
4. **Em "Application restrictions":**
   - Selecione: "HTTP referrers (web sites)"
   - Adicione: `https://SEU-USUARIO.github.io/*`
   - Exemplo: `https://pedropdzn.github.io/*`
5. **Em "API restrictions":**
   - Selecione: "Restrict key"
   - Marque apenas: "Google Sheets API"
6. **Clique em:** "Save"

**Agora sua API Key só funciona no seu domínio!** ✅

---

## 📱 Abrir nas TVs da Fábrica

### Opção 1: Direto no Navegador

1. Abra o Chrome nas TVs
2. Acesse: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`
3. Pressione **F11** para tela cheia
4. Pronto! ✅

### Opção 2: Criar Atalho na Área de Trabalho

**No Chrome:**
1. Acesse o painel
2. Clique nos 3 pontinhos (⋮)
3. "Mais ferramentas" → "Criar atalho"
4. Marque "Abrir como janela"
5. Clique em "Criar"

**Agora você tem um ícone na área de trabalho!**

---

## 🛠️ Comandos Git Úteis

### Ver histórico de commits

```bash
git log
```

### Ver mudanças não commitadas

```bash
git diff
```

### Desfazer mudanças não commitadas

```bash
git checkout -- nome-do-arquivo.js
```

### Ver branches

```bash
git branch
```

### Criar nova branch

```bash
git checkout -b nome-da-branch
```

---

## ❓ Problemas Comuns

### Erro: "failed to push some refs"

**Causa:** Alguém fez mudanças no GitHub que você não tem localmente.

**Solução:**
```bash
git pull origin main
git push
```

---

### Erro: "remote: Permission denied"

**Causa:** Credenciais incorretas.

**Solução Mac:**
1. Abra "Keychain Access"
2. Procure por "github.com"
3. Delete a entrada
4. Tente `git push` novamente

**Solução Windows:**
1. Painel de Controle → Credenciais
2. Delete credenciais do GitHub
3. Tente `git push` novamente

---

### Site não atualiza após push

**Causa:** GitHub Pages leva ~1-2 minutos para atualizar.

**Solução:**
1. Aguarde 2 minutos
2. Limpe o cache: Ctrl+Shift+R (ou Cmd+Shift+R)
3. Se ainda não funcionou, vá em Settings → Pages e verifique se está ativo

---

### API Key não funciona no GitHub Pages

**Causa:** Restrições da API Key.

**Solução:**
1. Vá em Google Cloud Console
2. Edite a API Key
3. Adicione `https://SEU-USUARIO.github.io/*` nos HTTP referrers
4. Aguarde ~5 minutos para propagar

---

## 📊 Resumo dos Comandos

```bash
# Primeira vez (setup)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU-USUARIO/REPO.git
git branch -M main
git push -u origin main

# Atualizações futuras
git add .
git commit -m "Descrição da mudança"
git push
```

---

## ✅ Checklist Completo

```
☐ Criei conta no GitHub
☐ Instalei/verifiquei Git no computador
☐ Configurei git config (nome e email)
☐ Criei repositório no GitHub
☐ Inicializei Git no projeto (git init)
☐ Adicionei arquivos (git add .)
☐ Fiz primeiro commit (git commit)
☐ Conectei com GitHub (git remote add)
☐ Enviei para GitHub (git push)
☐ Verifiquei arquivos no GitHub
☐ Ativei GitHub Pages
☐ Acessei o painel online
☐ Configurei restrições da API Key
☐ Testei nas TVs da fábrica
```

---

## 🎓 Recursos Adicionais

### Tutoriais em Vídeo (Português)
- [Git e GitHub para Iniciantes - Curso Completo](https://www.youtube.com/results?search_query=git+github+iniciantes+português)

### Documentação Oficial
- [GitHub Docs](https://docs.github.com/pt)
- [Git Book (PT-BR)](https://git-scm.com/book/pt-br/v2)

---

## 🆘 Precisa de Ajuda?

Se tiver algum erro, me envie:

1. A mensagem de erro completa
2. O comando que você executou
3. Print da tela se possível

---

## 🎉 Parabéns!

Seu painel agora está:
- ✅ Versionado no GitHub
- ✅ Hospedado gratuitamente
- ✅ Acessível de qualquer lugar
- ✅ Atualizado automaticamente
- ✅ Sincronizado com Google Sheets

---

**📅 23 de Dezembro de 2024**  
**👨‍💻 Desenvolvido por High Digital para CELMAQ**

