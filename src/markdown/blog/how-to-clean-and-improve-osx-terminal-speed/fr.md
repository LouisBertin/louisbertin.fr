---
path: blog/how-to-clean-and-improve-osx-terminal-speed/en.md
language: fr
title: Comment nettoyer et améliorer la vitesse de votre terminal sur OSX
date: 2019-08-06T16:04:03.242Z
---
Aujourd'hui je veux parler de quelque chose très simple mais essentiel pour un ingénieur logiciel. 
Après plusieurs mois d'utilisation, mon terminal met quelques secondes à se lancer :

- Premièrement, vous devez supprimer vos fichiers de log avec cette ligne de commande : `sudo rm -rf /private/var/log/asl/*.asl`
- Ensuite, mon terminal (Zsh pour moi) m'a donné une liste de Path incorrect qui ralentissait mon terminal à chaque démarrage. Cette étape peut-être optionnel si vos fichiers de configuration sont corrects.

Maintenant, quand je démarre mon terminal tout est instantané!
