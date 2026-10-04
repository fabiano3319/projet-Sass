# Picarial Agency - Page d'accueil

Intégration en HTML et SCSS de la maquette Figma d'une agence digitale, avec un rendu fidèle au design et une mise en page responsive.

<img width="1440" height="4457" alt="picarial-homepage" src="https://github.com/user-attachments/assets/43f737d6-d93c-4a0a-8b26-a0cbba8d8b81" />

## Technologies

- HTML5
- SCSS (Dart Sass)
- Figma (maquette de référence)

## Structure du projet

```
mon-projet-sass/
├── index.html
├── assets/                  (images, icônes, polices)
├── css/
│   └── style.css            (CSS compilé)
├── js/                      (scripts JavaScript)
└── scss/
    ├── style.scss           (fichier principal qui importe les partiels)
    ├── _variables.scss
    ├── _mixins.scss
    ├── _reset.scss
    ├── _typography.scss
    ├── components/          (navbar, hero, about, services...)
    └── responsives/         (styles responsive)
```

## Lancer le projet

Le CSS compilé est déjà fourni : il suffit d'ouvrir `index.html` dans un navigateur (ou avec l'extension Live Server de VS Code).

Pour modifier les styles, installe [Dart Sass](https://sass-lang.com/install) puis lance :

```bash
sass --watch scss/style.scss:css/style.css
```
```bash
sass --watch scss/style.scss:css/style.css
```
