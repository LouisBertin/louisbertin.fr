---
path: /fr/get-context-variable-with-gatsby
language: fr
title: Récupérer les variables du context des pages dans GatsbyJS
date: 2019-08-14T18:12:00
---
Aujourd'hui je travaillais sur mon site développé avec GatsbyJS (cette techno est plutôt cool, je ferai un article dessus quand j'aurai terminé la v1 de mon blog.)
Cependant, je voudrais mettre en lumière un problème qui m'est arrivé et qui pourrait aider beaucoup de monde. Effectivement, cette feature est un peu cachée dans la documentation et elle est très utile.

J'utilise le plugin `gatsby-plugin-intl` pour avoir un blog en multilangue et il m'arrive souvent de vouloir passer la locale à mes requêtes GraphQL. Ainsi, je dois fournir la locale dans le `context` de chaque page pour construire ma requête ensuite.

- Premièrement, j'édite le fichier `gatsby-node.js` et j'ajoute les lignes qui vont permettre de modifier les pages par défauts et de leur passer des paramètres :
```
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "locale" in your page queries now

  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}
```
- Ensuite, je peux simplement récupérer la valeur de la variable `locale` dans la requête de ma page :
```
query ($locale: String) {
  posts: allMarkdownRemark(filter: {frontmatter: {language: {eq: $locale}}}) {
    nodes {
      id
      frontmatter {
        title
        language
        date(formatString: "MMMM Do, YYYY", locale: $locale)
        path
      }
    }
  }
}
```
**Problème résolu!** Libre à vous d'envoyer n'importe qu'elle variable dans vos pages maintenant