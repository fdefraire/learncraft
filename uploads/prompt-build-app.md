# Prompt — Build prototype Masterclass Distribution Craft

> **Mode d'emploi** : copie-colle l'intégralité de ce prompt dans une nouvelle conversation Claude.ai. Joins en pièces les 3 fichiers JSON (`lecon-01.json`, `lecon-02.json`, `lecon-03.json`) et les 2 fichiers HTML de référence design (`beermyself-hq.html`, `brasseurs-crm.html`).

---

## Contexte

Je suis Flav, je construis BeerMyself, un écosystème média et produit autour de la culture craft beer en France. Je ne suis pas commercial expérimenté en bière — mon rôle est celui d'un **connecteur d'écosystème**. Je veux pouvoir tenir des conversations crédibles avec des brasseurs français sur les sujets de distribution, sans bluffer ni me griller.

Pour ça, je construis une masterclass en 12 leçons qui me forme aux fondamentaux du métier. La présente conversation a pour objectif de produire la **v1 d'un artefact React** qui packagera les 3 premières leçons en une expérience d'apprentissage utilisable.

Le contenu pédagogique est déjà rédigé et fourni au format JSON structuré. Tu n'as **pas** à le modifier ni à en générer de nouveau.

## Mission

Build un artefact React unique, mobile-first, qui :
- Affiche une page d'accueil avec la liste des 3 leçons disponibles et leur statut (locked / unlocked / completed)
- Permet de dérouler une leçon section par section
- Propose un quiz de validation à la fin de chaque leçon
- Persiste la progression entre sessions via `window.storage`
- Applique le design system BeerMyself (voir Specs design)

C'est un **prototype de validation**, pas une app de production. L'objectif est que je puisse l'utiliser réellement sur 10-15 sessions pour valider le format avant d'envisager une migration vers Next.js.

## Specs techniques

**Stack** : artefact React unique. Pas de routing externe, pas de backend, pas d'auth. Tout vit dans un seul fichier `.jsx`.

**Persistence** : `window.storage` natif des artefacts Claude.
- Clé unique : `masterclass:progress` avec `shared: false`
- Structure stockée :
  ```json
  {
    "lessons": {
      "lecon-01": { "completed": true, "score": 6, "completed_at": "2026-04-24T10:00:00Z" },
      "lecon-02": { "completed": false, "score": null }
    },
    "current_lesson": "lecon-02",
    "current_section": 0
  }
  ```
- Wrap toutes les opérations storage dans try/catch.
- Au mount : récupère l'existant. Si rien : initialise état vide.
- À chaque action significative (fin de section, fin de quiz) : `set` immédiatement.
- **Important** : `window.storage.get` lève une erreur si la clé n'existe pas, ne retourne pas null. Gère ce cas comme première visite, pas comme erreur.

**Logique de déblocage** :
- Leçon 1 : toujours unlocked
- Leçon N>1 : unlocked si Leçon N-1 a `completed: true` ET `score >= passing_score` (5/6 dans nos leçons)
- Si score < passing_score : leçon "à reprendre", pas marquée completed

**Pas de browser storage classique** : pas de `localStorage`, pas de `sessionStorage`. Uniquement `window.storage`.

## Specs design — BeerMyself

Je joins en pièces deux fichiers HTML d'autres produits BeerMyself déjà en prod (`beermyself-hq.html` et `brasseurs-crm.html`). Ces deux fichiers utilisent **exactement le même design system**. Avant de coder, **lis ces fichiers et extrait** :
- La palette de couleurs (CSS variables)
- Les fonts (familles, weights, tailles)
- Les border-radius
- Les transitions et animations
- Le pattern de noise overlay
- Les composants récurrents (cartes, boutons, badges)

Applique fidèlement ce système. Quelques ancres garanties à respecter même si tu manques un détail :

- **Fonts** : Playfair Display (titres, italic amber pour accents) / IBM Plex Sans (body) / IBM Plex Mono (labels, meta uppercase tracké)
- **Background** : noir en trois stops (~#0e0e0e, surfaces légèrement plus claires)
- **Accent** : amber `#F5A800` signature
- **Texte** : cream `#f0ead6` ou équivalent doux
- **Sémantiques** : couleurs toujours **dim** (jamais saturées)
- **Border-radius** : sobre (2-6px max, jamais pill)
- **Transitions** : 0.15s
- **Uppercase** : tracking large sur labels mono

**Adaptation mobile-first** : les fichiers de référence sont desktop-dense. Pour la masterclass, garde les tokens et l'âme mais allège la densité — touch targets larges, sections plus aérées verticalement, taille de police body confortable à lire sur téléphone.

**Inspiration UX patterns acceptables** (mais pas l'esthétique) : Duolingo pour la progression, Masterclass.com pour l'éditorial. Garde la **structure** de ces apps, jette leur **vert pétant** ou leur **luxe Hollywood**. On reste dark editorial.

**Ce qu'on bannit absolument** :
- Vert Duolingo, hibou, mascotte
- Pill buttons
- Dégradés violents
- Emojis dans l'UI
- Gamification arcade (XP, coins, niveaux RPG, streaks de feu)
- Notifications push simulées
- Tout ce qui sent le Duolingo générique

## Specs UX — Flow utilisateur

### Écran 1 : Home

Header sobre :
- Titre : "Distribution Craft"
- Sous-titre mono uppercase : "MASTERCLASS · MODULE 1 — FONDAMENTAUX"

Trois jauges de progression (sans valeurs RPG, juste % progressé sur l'ensemble) :
- Leçons complétées : X / 3
- Score moyen : X / 6
- Temps total : XX min (basé sur duration_min des leçons complétées)

Liste des leçons (cartes) :
- Chaque carte affiche : numéro, titre, durée estimée, statut visuel (locked / unlocked / completed)
- Carte locked : grisée, icône cadenas discret, click affiche tooltip "Termine la leçon précédente"
- Carte unlocked : pleine, click ouvre la leçon
- Carte completed : badge amber subtil, score affiché en mono ("6/6"), click permet de rejouer

### Écran 2 : Leçon

Header :
- Bouton retour ("← Retour")
- Progress bar en haut indiquant la position dans la leçon (intro → sections → quiz)

Corps de la leçon :
- Affiche **une section à la fois**, pas tout d'un coup. Mobile = pas de murs de texte.
- Pour chaque terme dans une section, affiche :
  - Le terme en titre (Playfair Display)
  - Définition (body)
  - Bloc "PIÈGE" (label mono uppercase, contenu body, couleur sémantique discrète)
  - Bloc "EXEMPLE" (italique, encadré subtil)
  - Bloc "SIGNAL" (label mono uppercase, contenu body)
- Bouton "Section suivante →" en bas de chaque section
- À la fin de la dernière section : bouton "Passer au quiz"

### Écran 3 : Quiz

- Affiche **une question à la fois**
- Choix multiples (radio visuel custom, pas le radio HTML par défaut)
- Bouton "Valider" en bas, désactivé tant qu'aucun choix
- Après validation :
  - Si correct : feedback visuel discret (accent amber), affichage de l'explication
  - Si incorrect : feedback visuel sémantique dim, affichage de la bonne réponse + explication
  - Bouton "Question suivante →"
- À la fin : écran de score avec :
  - Score sur 6
  - Statut : "Validé" (≥5), "À retravailler" (3-4), "À reprendre" (<3)
  - Si validé : bouton "Débloque la suite"
  - Si non validé : bouton "Recommencer le quiz" + "Relire la leçon"

### Écran 4 : Retour Home après leçon validée

- La leçon vient d'être marquée completed
- La suivante est désormais unlocked
- Animation discrète (fade + slight scale) sur la nouvelle carte unlocked
- Mise à jour des jauges de progression

## Inputs fournis

**3 fichiers JSON** (joints à la conversation) :
- `lecon-01.json` — "Le vocabulaire pour ne pas se griller" (5 sections, 25 termes)
- `lecon-02.json` — "Les acteurs du marché : qui est qui en 2026" (4 sections)
- `lecon-03.json` — "Les marges et les flux : la carte économique" (5 sections)

Chaque fichier suit ce schema :
```
{
  id, title, module, module_label, duration_min,
  prerequisites[], learning_objectives[], intro,
  sections[] (chaque section a id, title, et content_blocks ou terms),
  takeaways[],
  validation_quiz: { passing_score, max_score, questions[] },
  unlock_conditions: { next_lesson_id, next_lesson_title }
}
```

**Important** : la structure interne des sections varie légèrement entre L1, L2 et L3 (L1 utilise `terms[]`, L2 et L3 utilisent `content_blocks[]` plus libres). Ton composant section doit être **flexible** : il accepte un section et rend ce qui est dedans, sans présumer un format strict. Utilise du rendu conditionnel sur les clés présentes (`section.terms` vs `section.content_blocks`).

**2 fichiers HTML de référence design** (joints) :
- `beermyself-hq.html`
- `brasseurs-crm.html`

À lire en premier avant de coder. Extraire le design system, l'appliquer.

## Definition of Done — v1

La v1 est validée si :
- ✅ L'artefact charge sans erreur
- ✅ Les 3 leçons sont navigables (sections, quiz, validation)
- ✅ La persistence fonctionne (refresh = progression conservée)
- ✅ Le design est fidèle à BeerMyself (palette, fonts, ambiance)
- ✅ Mobile-first effectif (testable en mode responsive étroit)
- ✅ Le déblocage progressif fonctionne (L2 locked tant que L1 non validée)
- ✅ Pas d'erreur console
- ✅ Le bouton "Recommencer la leçon" / "Reset progression" existe (utilité QA)

## Hors-scope explicite — NE PAS faire dans cette v1

- ❌ **Pas d'auth, pas de comptes utilisateurs** — un seul utilisateur, c'est moi
- ❌ **Pas de sharing, pas d'export PDF, pas de social** — c'est privé et perso
- ❌ **Pas d'IA dans l'app** — pas de chatbot tuteur, pas de génération dynamique. C'est une masterclass statique.
- ❌ **Pas de notifications, pas de rappels, pas de streaks** — pas du Duolingo
- ❌ **Pas d'animations excessives** — discret, sobre, éditorial
- ❌ **Pas de gamification arcade** — pas d'XP, badges, niveaux, médailles, sons de victoire
- ❌ **Pas de "mode prof"** — c'est l'app de l'apprenant, pas un LMS
- ❌ **Pas de plus de 3 leçons** — même si le code permet, on n'ajoute pas de leçons fictives. 3 leçons fournies, 3 leçons affichées.
- ❌ **Pas de localStorage / sessionStorage** — uniquement window.storage
- ❌ **Pas de bibliothèques lourdes** — useState, useEffect, ce qui est dans React de base. Tailwind utility classes uniquement.

## Posture pour ce build

- Lis d'abord les 2 fichiers HTML de référence design.
- Lis ensuite les 3 JSON pour comprendre les structures.
- Pose des questions seulement si quelque chose est réellement bloquant. Pour le reste, prends des décisions tranchées et documente-les en commentaire dans le code.
- Livre l'artefact en une seule fois quand il est complet, pas en plusieurs morceaux.
- Préfère la sobriété à la sophistication. Si tu hésites entre deux options, choisis la plus simple.

C'est un prototype perso pour 1 utilisateur, pas un produit SaaS. Le code doit être **lisible et modifiable**, pas optimisé prématurément.
