 # Guide Rapport Hiérarchique — Maladies Professionnelles

Application Next.js livrant un guide détaillé pour rédiger un rapport hiérarchique lorsque qu’un dossier de maladie professionnelle est ouvert.

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Accédez ensuite à `http://localhost:3000`.

## 🧱 Pile technique

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript strict

## 📁 Arborescence

```
app/
  layout.tsx         # Template global et métadonnées
  page.tsx           # Guide étape par étape
  globals.css        # Styles Tailwind
tailwind.config.ts   # Configuration Tailwind
postcss.config.mjs   # Pipeline PostCSS
next.config.mjs      # Paramètres Next.js
```

## 📦 Scripts

- `npm run dev` — serveur de développement
- `npm run build` — compilation production
- `npm start` — serveur production
- `npm run lint` — vérification ESLint

## 📝 Licence

Code distribué sous licence MIT.
