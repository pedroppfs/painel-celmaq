# 🚀 Deploy na Vercel - COMECE AQUI

## ✅ Passo 1: Commit do vercel.json (2 min)

### No Terminal, cole estes comandos:

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"
```

```bash
git status
```

**Deve aparecer:** `vercel.json` em vermelho (não rastreado) ✅

```bash
git add vercel.json
```

```bash
git commit -m "Add Vercel configuration for static site"
```

```bash
git push
```

**✅ Pronto! O vercel.json está no GitHub!**

---

## ✅ Passo 2: Criar/Acessar Conta Vercel (2 min)

### Se ainda não tem conta:

1. [ ] Acesse: https://vercel.com/signup
2. [ ] Clique: **"Continue with GitHub"**
3. [ ] Faça login no GitHub (se pedir)
4. [ ] Autorize a Vercel

### Se já tem conta:

1. [ ] Acesse: https://vercel.com/login
2. [ ] Faça login

**✅ Logado na Vercel!**

---

## ✅ Passo 3: Importar Projeto (2 min)

### Na Dashboard da Vercel:

1. [ ] Clique no botão: **"Add New..."** (canto superior direito)
2. [ ] Selecione: **"Project"**
3. [ ] Procure na lista: **"painel-celmaq"** (ou nome do seu repositório)
4. [ ] Clique: **"Import"**

**✅ Projeto selecionado!**

---

## ✅ Passo 4: Configurar Deploy (1 min)

### Na tela de configuração:

**Configure Project:**

```
Project Name: painel-celmaq (pode deixar)
Framework Preset: Other ✅ (deixe assim)
Root Directory: ./ (deixe assim)
Build Command: (deixe vazio) ✅
Output Directory: (deixe vazio) ✅
Install Command: (deixe vazio) ✅
```

**IMPORTANTE:**
- ❌ NÃO mude nada!
- ❌ NÃO adicione comandos de build
- ✅ Deixe tudo padrão/vazio

### Environment Variables:

- ❌ NÃO precisa adicionar nada aqui

### Clique: **"Deploy"** (botão azul)

**✅ Deploy iniciado!**

---

## ✅ Passo 5: Aguardar Build (1 min)

### Você verá uma tela com:

```
Building...
├─ Installing dependencies
├─ Analyzing source code
├─ Building production bundle
└─ Uploading to CDN
```

**Aguarde ~30-60 segundos...**

### ✅ Sucesso!

Quando terminar, você verá:

```
🎉 Congratulations!
Your project has been deployed!
```

**✅ Deploy concluído!**

---

## ✅ Passo 6: Acessar seu Painel (30 seg)

### Você verá um link como:

```
https://painel-celmaq.vercel.app
```

ou

```
https://painel-celmaq-seu-username.vercel.app
```

### Clique no link para abrir!

**✅ Painel online!**

---

## ✅ Passo 7: Testar (1 min)

### Verifique:

- [ ] Header com logo aparece
- [ ] Relógio está funcionando
- [ ] Data está correta
- [ ] Tabela carrega (pode estar vazia ou com dados mockados)

### ⚠️ Se aparecer erro 403 ou dados mockados:

**Isso é esperado!** Vamos configurar a API Key agora.

**✅ Visual funcionando!**

---

## ✅ Passo 8: Configurar Google Sheets API (3 min)

### IMPORTANTE: Para o Google Sheets funcionar

### 1. Copie sua URL da Vercel:

```
https://painel-celmaq-XXXXX.vercel.app
```

**Anote essa URL!**

### 2. Acesse Google Cloud Console:

1. [ ] Abra: https://console.cloud.google.com
2. [ ] Faça login
3. [ ] Vá em: **APIs & Services** → **Credentials**

### 3. Edite a API Key:

1. [ ] Clique na sua API Key (AIzaSy...)
2. [ ] Em **"Application restrictions"**, selecione:
   - **"HTTP referrers (web sites)"**
3. [ ] Clique: **"+ ADD AN ITEM"**
4. [ ] Cole sua URL da Vercel com `/*` no final:

```
https://painel-celmaq-XXXXX.vercel.app/*
```

**Exemplo:**
```
https://painel-celmaq-pedropdzn.vercel.app/*
```

5. [ ] Se já tinha outras URLs, mantenha todas:
   ```
   https://pedropdzn.github.io/*
   https://painel-celmaq-pedropdzn.vercel.app/*
   ```

6. [ ] Em **"API restrictions"**, selecione:
   - **"Restrict key"**
   - Marque apenas: ✅ **"Google Sheets API"**

7. [ ] Clique: **"Save"**

### 4. Aguarde propagação:

- Aguarde **5 minutos** para as mudanças tomarem efeito
- Tome um café ☕

**✅ API Key configurada!**

---

## ✅ Passo 9: Testar Google Sheets (2 min)

### Após 5 minutos:

1. [ ] Volte para sua URL da Vercel
2. [ ] Recarregue a página: **Ctrl+Shift+R** (ou **Cmd+Shift+R**)
3. [ ] Abra o Console: **F12**
4. [ ] Procure por:

```
✅ Google Sheets - Dados carregados com sucesso:
   • Total de registros: 30
```

### Se aparecer isso: 🎉 FUNCIONOU!

### Se aparecer erro 403:

```
❌ Erro 403: API key not valid
```

**Soluções:**
1. Aguarde mais 5 minutos (pode demorar)
2. Verifique se a URL está correta (com `/*`)
3. Verifique se salvou no Google Cloud Console

**✅ Dados carregando do Google Sheets!**

---

## ✅ Passo 10: Testar nas TVs (2 min)

### Abra o Chrome nas TVs:

1. [ ] Acesse: Sua URL da Vercel
2. [ ] Pressione: **F11** (tela cheia)
3. [ ] Aguarde carregar

### Deve funcionar:

- ✅ Rotação automática (8 segundos por página)
- ✅ Dados do Google Sheets
- ✅ Atualização automática (30 segundos)

**✅ Funcionando nas TVs!**

---

## 🔄 Passo 11: Deploys Automáticos (Bônus)

### Como funciona agora:

```
Você edita arquivo local
       ↓
   git add .
   git commit -m "..."
   git push
       ↓
GitHub atualiza
       ↓
Vercel detecta automaticamente
       ↓
Deploy automático em ~30s!
       ↓
   Painel atualizado
```

### Para atualizar no futuro:

```bash
cd "/Users/pedropaulofigueiredo/Library/CloudStorage/GoogleDrive-pedropdzn@gmail.com/Outros computadores/Meu laptop/High Digital/Clientes/CELMAQ/Painel de Controle Produção - CELMAQ/painel-celmaq"

# Fazer mudanças nos arquivos...

git add .
git commit -m "Descrição da mudança"
git push
```

**Aguarde 30 segundos → Site atualizado!** 🚀

**✅ Deploys automáticos configurados!**

---

## 📱 Adicionar às TVs da Fábrica

### Opção 1: Atalho na Área de Trabalho

**No Chrome:**
1. [ ] Acesse sua URL da Vercel
2. [ ] Clique nos 3 pontinhos (⋮)
3. [ ] "Mais ferramentas" → "Criar atalho"
4. [ ] Nome: "Painel Celmaq"
5. [ ] Marque: ✅ "Abrir como janela"
6. [ ] Clique: "Criar"

**Agora você tem um ícone na área de trabalho!**

### Opção 2: Configurar como Página Inicial

**No Chrome:**
1. [ ] Settings → "On startup"
2. [ ] Selecione: "Open a specific page or set of pages"
3. [ ] Adicione sua URL da Vercel
4. [ ] Marque para abrir em tela cheia

**✅ TVs configuradas!**

---

## 🎯 URLs Importantes

### Anote suas URLs:

```
Painel Online:
https://painel-celmaq-__________.vercel.app

Dashboard Vercel:
https://vercel.com/seu-usuario/painel-celmaq

Repositório GitHub:
https://github.com/seu-usuario/painel-celmaq

Google Sheets:
https://docs.google.com/spreadsheets/d/19kSbkmMB2EePIlybs-IdX-19OYh5H-H-BiYvdYLMF5c/
```

---

## ✅ Checklist Final

```
☑ vercel.json criado e commitado
☑ Projeto importado na Vercel
☑ Deploy realizado com sucesso
☑ URL da Vercel acessível
☑ API Key configurada no Google Cloud
☑ Google Sheets carregando dados
☑ Testado nas TVs da fábrica
☑ Deploys automáticos funcionando
```

---

## ❓ Problemas Comuns

### 1. "Build Failed" na Vercel

**Causa:** vercel.json não foi commitado

**Solução:**
```bash
git status
git add vercel.json
git commit -m "Add vercel.json"
git push
```

Depois, na Vercel: Deployments → Redeploy

---

### 2. CSS/JS não carregam

**Sintoma:** Painel sem estilo ou sem interatividade

**Solução:**
1. Abra DevTools (F12)
2. Veja os erros no Console
3. Se vir "404" para arquivos CSS/JS:
   - Verifique paths no HTML
   - Devem ser relativos: `src/styles/main.css`

---

### 3. Google Sheets retorna 403

**Sintoma:** Dados mockados aparecem no lugar dos reais

**Soluções:**

**a) Aguardar mais tempo**
- API Key pode levar até 10 minutos para propagar

**b) Verificar URL**
- Acesse: Google Cloud Console → Credentials
- Verifique se a URL está correta
- Deve ter `/*` no final

**c) Verificar restrições**
- API restrictions: Apenas "Google Sheets API"
- Application restrictions: "HTTP referrers"

**d) Testar a API Key**
No Console (F12):
```javascript
// Ver se está tentando carregar do Sheets
console.log('Enabled:', GOOGLE_SHEETS_CONFIG.enabled)

// Ver se tem erro
// Procure por mensagens de erro 403
```

---

### 4. Rotação não funciona

**Sintoma:** Fica sempre na página 1

**Solução:**
1. Abra Console (F12)
2. Execute:
```javascript
PainelCelmaq.debug()
```
3. Verifique se tem mais de 8 pedidos
4. Se tiver menos de 8, não vai rotacionar (esperado)

---

## 🎉 PARABÉNS!

### Seu painel agora está:

```
✅ Online 24/7 na Vercel
✅ CDN global ultra-rápido
✅ Deploy automático via Git
✅ Sincronizado com Google Sheets
✅ Funcionando nas TVs da fábrica
✅ Atualização automática (30s)
✅ Escalável até 1000 pedidos
```

---

## 🔄 Workflow Diário

### Manhã:
```bash
cd painel-celmaq
git pull  # Baixar atualizações
```

### Fazer mudanças:
```bash
# Edite arquivos...
git add .
git commit -m "Descrição"
git push
# Aguarde 30s → Online!
```

---

## 📊 Monitoramento

### Ver deploys:

1. [ ] Acesse: https://vercel.com
2. [ ] Clique no projeto "painel-celmaq"
3. [ ] Veja todos os deploys

### Analytics (opcional):

1. [ ] No projeto, clique em "Analytics"
2. [ ] Veja quantas visitas/requisições

---

## 🆘 Precisa de Ajuda?

### Se algo não funcionar:

1. **Verifique este checklist acima**
2. **Leia DEPLOY_VERCEL.md** (guia completo)
3. **Me envie:**
   - URL da Vercel
   - Print do erro
   - Console logs (F12)

---

**📅 23 de Dezembro de 2024**  
**👨‍💻 Desenvolvido por High Digital para CELMAQ**

---

**🎯 PRÓXIMO PASSO:**  
→ Execute os comandos do Passo 1 agora!

