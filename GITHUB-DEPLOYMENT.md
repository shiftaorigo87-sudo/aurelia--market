# 🚀 GitHub Pages Deployment Guide

## Steg 1: Skapa GitHub Repository

1. Gå till [GitHub](https://github.com)
2. Klicka på "New repository"
3. Namnge det: `aurelia-market`
4. Välj "Public" eller "Private"
5. **Skapa INTE** README, .gitignore eller license (vi har redan dessa)
6. Klicka "Create repository"

## Steg 2: Pusha koden till GitHub

Öppna PowerShell i projektmappen (`C:\Intel`) och kör:

\`\`\`powershell
# Initiera git (om inte redan gjort)
git init

# Lägg till alla filer
git add .

# Skapa första commit
git commit -m "Initial commit: Professional e-commerce platform"

# Lägg till remote (ersätt DITTANVANDARNAMN med ditt GitHub-användarnamn)
git remote add origin https://github.com/DITTANVANDARNAMN/aurelia-market.git

# Pusha till GitHub
git push -u origin main
\`\`\`

**OBS:** Om du får fel om "main" branch, prova:
\`\`\`powershell
git branch -M main
git push -u origin main
\`\`\`

## Steg 3: Aktivera GitHub Pages

1. Gå till ditt repository på GitHub
2. Klicka på "Settings" (Inställningar)
3. Klicka på "Pages" i vänstermenyn
4. Under "Build and deployment":
   - **Source**: Välj "GitHub Actions"
5. Spara

## Steg 4: Vänta på Deployment

1. Gå till "Actions" tab i ditt repository
2. Du ser en workflow som körs: "Deploy to GitHub Pages"
3. Vänta tills den blir grön (✓)
4. Detta tar cirka 2-5 minuter

## Steg 5: Besök din webbplats!

Din webbplats är nu live på:

\`\`\`
https://DITTANVANDARNAMN.github.io/aurelia-market
\`\`\`

Ersätt `DITTANVANDARNAMN` med ditt GitHub-användarnamn.

## 🔄 Uppdatera webbplatsen

När du vill uppdatera webbplatsen:

\`\`\`powershell
# Gör dina ändringar i koden

# Lägg till ändringarna
git add .

# Commit
git commit -m "Beskrivning av ändringarna"

# Pusha
git push
\`\`\`

GitHub Actions kommer automatiskt att bygga och deploya den nya versionen!

## ⚙️ Anpassa Repository-namnet

Om du vill använda ett annat namn än "aurelia-market":

1. Uppdatera `basePath` och `assetPrefix` i `next.config.js`
2. Ändra till ditt repository-namn

## 🆘 Felsökning

### Problem: Sidan visar 404

**Lösning:**
1. Kontrollera att GitHub Pages är aktiverat
2. Kontrollera att "Source" är satt till "GitHub Actions"
3. Vänta 5 minuter efter deployment

### Problem: CSS fungerar inte

**Lösning:**
1. Kontrollera att `basePath` i `next.config.js` matchar ditt repository-namn
2. Kör `git push` igen för att trigga en ny build

### Problem: Git push nekas

**Lösning:**
1. Kontrollera att du är inloggad på GitHub
2. Använd Personal Access Token istället för lösenord
3. Gå till GitHub Settings → Developer settings → Personal access tokens

## ✅ Checklista

- [ ] Repository skapat på GitHub
- [ ] Kod pushad till GitHub
- [ ] GitHub Pages aktiverat
- [ ] Source satt till "GitHub Actions"
- [ ] Workflow körts framgångsrikt
- [ ] Webbplats fungerar på GitHub Pages URL

## 📝 Nästa Steg

När din statiska sida fungerar kan du:
1. Lägga till backend (Supabase, Firebase)
2. Integrera Stripe för riktiga betalningar
3. Lägga till databas för produkter
4. Implementera autentisering

Men för nu har du en professionell, fungerande e-handelsfront!
