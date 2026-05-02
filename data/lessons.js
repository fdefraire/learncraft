// Distribution Craft — données des 3 leçons
// Structure inspirée du JSON schema décrit dans le brief.
// Section types : "terms" (L1) ou "blocks" (L2/L3, plus libre).

window.LESSONS = [
  /* ════════════════════════════════════════════════════════
     LEÇON 01 — Le vocabulaire pour ne pas se griller
     ════════════════════════════════════════════════════════ */
  {
    id: "lecon-01",
    number: 1,
    title: "Le vocabulaire pour ne pas se griller",
    module_label: "MODULE 01 — FONDAMENTAUX",
    duration_min: 50,
    intro: "Un brasseur qui te parle ne va pas définir les termes qu'il utilise. Il va dire \"je suis au tirage chez trois CHR du coin mais le franco me tue sur la Mayenne\", et il s'attend à ce que tu comprennes. Ta première mission n'est pas d'apprendre à conseiller. C'est d'apprendre à écouter sans décrocher.",
    objectives: [
      "Comprendre 25 termes que les brasseurs utilisent sans les expliquer",
      "Repérer ce qui te grillerait si tu le disais de travers",
      "Reconnaître le niveau de pro de ton interlocuteur à ses mots"
    ],
    sections: [
      {
        id: "s1",
        title: "Les circuits — où se vend la bière",
        kind: "terms",
        terms: [
          {
            term: "CHR",
            sub: "Café · Hôtel · Restaurant",
            definition: "Désigne l'ensemble des débits où la bière est consommée sur place : bars, brasseries (au sens restauration), restaurants, hôtels, brewpubs. Représente environ 20-25% du volume national bière.",
            piege: "Ne pas confondre avec \"brasserie\" tout court. \"Brasserie\" est piégé en français — peut désigner le producteur (brewery) ou l'établissement de restauration. En contexte distri, \"brasserie\" = producteur. L'établissement, c'est \"un CHR\" ou \"un bar\".",
            exemple: "On pousse sur le CHR cette année, on a laissé tomber deux cavistes qui tournaient mal.",
            signal: "Un brasseur qui parle beaucoup de CHR vise le volume et accepte la complexité logistique. S'il les évite, c'est souvent par choix de marge ou par dégoût des contrats d'exclusivité industriels qui verrouillent le parc."
          },
          {
            term: "GMS",
            sub: "Grandes et Moyennes Surfaces",
            definition: "Hypers, supers, supérettes, drives. Environ 75% du volume bière en France. Le CA bière en GMS a dépassé celui du vin depuis 2023.",
            piege: "Dire \"supermarché\" à un brasseur qui vend en GMS, c'est te situer immédiatement en novice. Les pros disent GMS. Sous-catégories : hyper (Carrefour, Auchan, Leclerc, Cora), super (Intermarché, Super U, Casino, Monoprix), proxi, hard-discount (Lidl, Aldi).",
            exemple: "On a été référencés en régional Leclerc Ouest en mars, on attend de voir la rotation avant de discuter national.",
            signal: "Brasseur en GMS = volume et visibilité, mais marges serrées et conditions dures. Un brasseur qui refuse la GMS par principe le dira tôt — respecte ce positionnement."
          },
          {
            term: "Cavistes spé vs généralistes",
            definition: "Deux familles. Les cavistes généralistes (Nicolas, Repaire de Bacchus) sont historiquement vin, ont ouvert un rayon bière. Les spé bière (Cave à Bulles, Bieronomy, Houblonnerie) travaillent 100-200 références craft, ont un vendeur qui sait conseiller, organisent des dégustations.",
            piege: "Ne pas mettre V&B dans la catégorie cavistes traditionnels — c'est un concept hybride cave + bar à part.",
            exemple: "Notre Saison tourne super bien chez les cavistes spé, mais en GMS on galère à la faire comprendre.",
            signal: "Distribution majoritairement cavistes spé = positionnement premium assumé, volumes modestes, marge correcte, forte dépendance au bouche-à-oreille pro."
          },
          {
            term: "V&B",
            sub: "Le cas à part",
            definition: "Réseau de franchise cave-bar créé en 2001 à Château-Gontier (Mayenne). En 2022 : 255 magasins dont 210 franchisés, 180 M€ de CA. Catalogue ~3500 références dont 300-350 bières. Partenaires craft historiques : La Débauche, Grand Paris Brewing, Hoppy Road.",
            piege: "Croire qu'on entre chez V&B comme chez un caviste indé. C'est un réseau franchisé avec une centrale qui valide les référencements nationaux, mais chaque franchisé a une marge d'autonomie sur les locales.",
            exemple: "On est chez deux V&B dans le 44, on attend que le troisième ouvre en avril pour pousser un dossier centrale.",
            signal: "V&B est né en Mayenne. Sujet de conversation naturel avec un brasseur local qui a tenté le réseau."
          },
          {
            term: "On-trade / Off-trade",
            definition: "Jargon importé. On-trade = consommation sur place (= CHR). Off-trade = consommation à emporter (GMS, cavistes, e-commerce). Tu entendras plus \"on/off-trade\" chez les brasseurs internationaux ou MBA marketing.",
            piege: "Si un brasseur te sort \"on-trade\", tu ne cherches pas à redéfinir en français — tu enchaînes. Ça signale qu'il a baigné dans la culture craft anglo-saxonne.",
            exemple: "Notre mix on-trade / off-trade est à 30/70, on aimerait rééquilibrer vers 40/60."
          }
        ]
      },
      {
        id: "s2",
        title: "Termes commerciaux et financiers",
        kind: "terms",
        terms: [
          {
            term: "Référencement vs implantation",
            definition: "Deux étapes distinctes. Le référencement = ton produit est accepté au catalogue (il existe dans leurs systèmes). L'implantation = il est physiquement en rayon. Être référencé sans être implanté arrive souvent — la douleur n°1 du brasseur en GMS.",
            piege: "Dire \"je suis chez Système U\" quand on n'est que référencé mais pas implanté, c'est le signe d'un amateur ou d'un vantard. Un pro précise : \"référencé centrale Système U Ouest, implanté dans 40 magasins sur 180\".",
            exemple: "On a décroché le référencement national Monoprix en octobre mais l'implantation traîne, on est en rayon dans 12 magasins parisiens sur 300.",
            signal: "Un brasseur fier de son référencement sans parler d'implantation est soit débutant, soit en train de te vendre du rêve."
          },
          {
            term: "DN / DV",
            sub: "Distribution Numérique / Distribution Valeur",
            definition: "Deux métriques GMS clés. DN = % de magasins où ton produit est présent. DV = % pondéré par leur CA. Un produit peut avoir une DN faible mais une DV forte s'il est dans les gros magasins.",
            piege: "Quand un brasseur dit \"on est à 30%\", demande DN ou DV. La différence peut être énorme.",
            exemple: "On est passés de DN 22 à DN 38 sur Leclerc Ouest ce semestre, ça commence à payer le travail commercial.",
            signal: "Un brasseur qui suit ses DN/DV a atteint un niveau de pro GMS. Probablement un commercial dédié ou un broker."
          },
          {
            term: "Rotation",
            definition: "La vitesse à laquelle ton produit se vend une fois en rayon. Unité : cartons par magasin par semaine. C'est la métrique qui décide de ton maintien ou ton déréférencement.",
            piege: "Dépend radicalement du circuit. En GMS classique, une bière craft à moins de 2 cartons/mag/semaine est fragile. Chez un caviste spé, 1 carton/mois peut suffire. Ne jamais donner de seuil absolu.",
            exemple: "Notre IPA tourne à 3,5 cartons/mag/semaine en régional, c'est ce qui nous sauve malgré les marges serrées.",
            signal: "Un brasseur qui ne connaît pas sa rotation par SKU et par circuit est en danger — il pilote à l'aveugle."
          },
          {
            term: "Franco (de port)",
            definition: "Montant minimum de commande pour que le brasseur livre gratuitement. En-dessous, soit frais de port, soit refus. Type micro : \"franco à 180€ HT\" ou \"franco à 3 cartons\".",
            piege: "Un franco trop bas ruine en logistique. Trop haut bloque les petits cavistes. Un des équilibres les plus douloureux à régler.",
            exemple: "Le caviste du 15e me fait une commande par mois mais jamais au franco, c'est un cauchemar.",
            signal: "Brasseur qui se plaint du franco = il n'ose pas le durcir de peur de perdre des clients. Vraie ouverture conversationnelle."
          },
          {
            term: "BFA · coopération commerciale",
            definition: "BFA = Budget de Fin d'Année, somme due par le brasseur au distributeur en fin d'année, % du CA, contractualisée en début d'année. La coopé inclut BFA + remises + tracts + animations. Cumule souvent 15-30% du CA facturé en GMS.",
            piege: "Un brasseur qui signe en GMS sans anticiper la BFA découvre en janvier qu'il doit 8% du CA annuel sous forme d'avoir. Peut le mettre à genoux.",
            exemple: "La coopé chez Intermarché a explosé cette année, on a fait la contre-marque qu'il fallait pour pas sortir du référencement.",
            signal: "Brasseur qui parle coopé = il est au cœur du jeu GMS. Respect et vigilance."
          }
        ]
      },
      {
        id: "s3",
        title: "Matériel et logistique",
        kind: "terms",
        terms: [
          {
            term: "Fût · 20L, 30L, KeyKeg",
            definition: "Trois formats. Fût 20L (inox consigné) standard craft FR. Fût 30L (inox consigné) historique industriel. KeyKeg (plastique recyclable, usage unique) pour export, événements, brasseries sans logistique de retour.",
            piege: "Ne jamais dire \"tonneau\" — c'est un mot civil. Le pro dit \"fût\". Ne pas confondre fût perdu (KeyKeg) et fût consigné (inox à récupérer, laver, renvoyer).",
            exemple: "On envoie la Saison en KeyKeg pour le festival de Strasbourg, pas question de gérer la consigne sur 400 km.",
            signal: "Un brasseur qui gère sa consigne avec rigueur = logistique pro. Un brasseur qui passe au KeyKeg = soit il exporte, soit il a abandonné le suivi consigne."
          },
          {
            term: "Tireuse en prêt · contrat brasseur",
            definition: "Dans un CHR, la tireuse peut être prêtée gratuitement par un brasseur en échange d'un contrat d'exclusivité ou de volume minimum sur plusieurs années. \"Être au tirage chez X\" = ton produit est servi à la pression.",
            piege: "Les trois géants (Heineken, Carlsberg, AB InBev) dominent ~70% des ventes GMS et verrouillent le parc CHR via ces contrats. Un micro qui dit \"j'ai été refusé par le bar du coin\" — 8 fois sur 10, c'est un contrat industriel.",
            exemple: "Le bar voulait nous prendre mais il est sous contrat Heineken jusqu'en 2027, on revient dans trois ans.",
            signal: "Brasseur qui a prêté des tireuses sans contrat solide et se fait rendre le matos = gouffre financier. Sujet sensible."
          },
          {
            term: "DLUO",
            sub: "Date Limite d'Utilisation Optimale",
            definition: "Depuis 2015 on dit DDM (Date de Durabilité Minimale) mais \"DLUO\" reste massivement utilisé. Pour la bière : 6 à 24 mois selon style (IPA fraîche = court, triple bouteille = long).",
            piege: "Une IPA proche DLUO en rayon = bière qui a perdu son houblonnage = expérience client dégradée = déréférencement possible. Enjeu vital pour les brasseurs houblonneurs.",
            exemple: "On a dû rappeler 200 cartons d'IPA du distributeur Sud, la DLUO passait fin du mois."
          }
        ]
      },
      {
        id: "s4",
        title: "Mesures et volumes",
        kind: "terms",
        terms: [
          {
            term: "Hectolitre · paliers fiscaux",
            definition: "1 hL = 100 L. Tu penseras en hL, jamais en litres, quand tu parles volume. Repères : <500 hL/an = nano/pico ; 500-5k = micro ; 5k-20k = petite artisanale ; 20k-200k = moyenne ; >200k = industriel. Palier critique : 200 000 hL/an. En-dessous, accises à 4,05 €/°/hL ; au-dessus, 8,10 €/°/hL.",
            piege: "Franchir 200k hL sans anticiper le doublement des accises = peut plomber la rentabilité.",
            exemple: "On finit l'année à 12 500 hL, on a encore de la marge avant le palier, mais la croissance ralentit.",
            signal: "Le volume t'indique le type de problèmes. <1k hL = survie. 1-5k = structuration. 5-20k = marge GMS. Plus haut = consolidation."
          },
          {
            term: "Accises",
            definition: "Taxe indirecte sur les alcools, payée par le producteur sur chaque hL. Bière 5° en 2025 : 20,25 €/hL pour petite brasserie indé, 40,50 €/hL au-delà de 200k. S'ajoute à la TVA 20%.",
            piege: "Confondre accises et TVA. Les accises sont spécifiques à l'alcool, dues même à l'export intra-UE (DAE — Document Administratif Électronique).",
            exemple: "Avec les accises et la TVA, on part avec 35% de marge négative avant même d'avoir fabriqué."
          },
          {
            term: "Plato · ABV · IBU",
            definition: "Vocabulaire technique. Plato (°P) = concentration en sucres dans le moût. ABV = degré alcool final en %. IBU = mesure de l'amertume, 0 à 120+.",
            piege: "Tu n'as pas besoin de maîtriser le calcul, mais reconnaître ces termes quand un brasseur raconte sa recette est essentiel — ça montre que tu respectes son métier."
          }
        ]
      },
      {
        id: "s5",
        title: "Les mots-pièges",
        kind: "terms",
        terms: [
          {
            term: "Craft / Artisanal / Indépendant",
            definition: "Trois termes confondus, très différents. Craft = anglicisme, pas de définition légale FR, usage marketing. Artisanal = encadré, statut lié au registre des métiers. Indépendant = défini par le SNBI : <200k hL/an, pas détenue à >50% par une entité au-dessus du seuil.",
            piege: "Parler de \"craft\" à un brasseur SNBI = risque de froid immédiat. Beaucoup considèrent \"craft\" comme vidé de sens depuis le rachat par AB InBev de dizaines de brasseries qui s'en réclamaient. Préfère \"indépendant\" ou \"artisanal\" par défaut.",
            exemple: "— Vous faites de la craft ? — On fait de la bière indépendante. (recadrage subtil = tu viens de prendre un point)"
          },
          {
            term: "Brewpub / Taproom / Micro / Nano",
            definition: "Brewpub = établissement où la bière est brassée et consommée sur place, souvent restauration. Taproom = salle de dégustation attenante à une brasserie de production. Micro/Nano = catégories de taille de production.",
            piege: "Dire \"taproom\" à un brasseur qui appelle ça \"notre salle de dégustation\" peut passer pour du cabotinage anglo. Adapte-toi à son vocabulaire."
          },
          {
            term: "Contrat brasseur · exclusivité",
            definition: "Contrat par lequel un CHR s'engage à ne servir qu'une seule marque (souvent la pression) en échange d'avantages financiers ou matériels (comptoir, tireuse, enseigne, remise volume).",
            piege: "Aborder le sujet avec un micro qui n'a aucun contrat, c'est lui rappeler sa taille. Avec un brasseur intermédiaire qui commence à signer = sujet chaud."
          },
          {
            term: "MDD",
            sub: "Marque De Distributeur",
            definition: "Produit fabriqué par un brasseur mais vendu sous la marque de l'enseigne. Marginal en bière premium, important sur l'entrée de gamme.",
            piege: "Beaucoup de brasseurs indé refusent par principe la MDD. Certains la font discrètement pour remplir leurs capacités. C'est un sujet politique dans le milieu.",
            exemple: "On nous a proposé une MDD Biocoop cette année, on a décliné, ça aurait cannibalisé notre marque."
          }
        ]
      }
    ],
    takeaways: [
      "**Hectolitre est l'unité de production.** Les paliers définissent les problèmes du brasseur. Sous 1k hL = survie. 200k hL = palier fiscal qui change tout.",
      "**La GMS se joue en DN/DV/rotation/coopé.** Ces quatre mots reviennent dans toute conversation GMS. Si tu les comprends, tu peux suivre.",
      "**Le CHR est verrouillé à 70% par les industriels via contrats brasseurs.** Un micro refusé par un bar, c'est souvent pas son produit qui est en cause.",
      "**\"Indépendant\" > \"artisanal\" > \"craft\".** Dans le doute, dis \"indépendant\". C'est le mot le plus safe politiquement dans le milieu français.",
      "**Référencé ≠ implanté.** Quand un brasseur te donne un chiffre, demande lequel des deux. Tu passes du novice au pro en une question."
    ],
    quiz: {
      passing: 5,
      max: 6,
      questions: [
        {
          q: "Un brasseur te dit : \"on est à DN 42 sur Système U Ouest\". Qu'est-ce que ça signifie concrètement ?",
          choices: [
            "Il fait 42% de son CA chez Système U Ouest",
            "Son produit est présent dans 42% des magasins Système U Ouest",
            "Sa marque est classée 42ème en rotation",
            "Il a 42 magasins Système U Ouest qui le référencent"
          ],
          correct: 1,
          explain: "DN (Distribution Numérique) = % de magasins où ton produit est présent. À ne pas confondre avec DV qui pondère par le CA des magasins."
        },
        {
          q: "Un brasseur te dit : \"le bar du coin voulait nous prendre mais il est au tirage Heineken\". Qu'est-ce qu'il te dit vraiment ?",
          choices: [
            "Qu'il a été jugé moins bon que Heineken",
            "Que le bar a un contrat d'exclusivité bière pression avec Heineken, donc inaccessible à court terme",
            "Que Heineken a des prix imbattables",
            "Que le patron du bar préfère les bières industrielles"
          ],
          correct: 1,
          explain: "\"Au tirage\" = pression. Les contrats brasseurs verrouillent le parc CHR pour plusieurs années en échange d'investissements matériels et de remises."
        },
        {
          q: "Tu parles à un brasseur syndiqué SNBI. Quelle formulation tu évites absolument ?",
          choices: [
            "Votre bière indépendante",
            "Votre production artisanale",
            "Votre bière craft",
            "Votre gamme"
          ],
          correct: 2,
          explain: "\"Craft\" est politiquement chargé pour les indépendants depuis les rachats AB InBev. Préfère \"indépendant\" ou \"artisanal\" — tu signales que tu connais le terrain."
        },
        {
          q: "Un brasseur te dit : \"on tourne à 8 000 hL, on se demande si on pousse sur le national l'année prochaine\". Tu en déduis :",
          choices: [
            "C'est une micro débutante qui sur-estime ses capacités",
            "C'est une brasserie de taille intermédiaire qui réfléchit à un changement d'échelle, probablement GMS nationale",
            "C'est une brasserie en difficulté qui cherche à écouler ses stocks",
            "C'est un brasseur industriel sous-dimensionné"
          ],
          correct: 1,
          explain: "8 000 hL = entre micro (500-5k) et moyenne (20k-200k). Taille intermédiaire qui structure son commercial pour passer un cap, classiquement vers la GMS nationale."
        },
        {
          q: "Quelle est la différence entre \"référencé\" et \"implanté\" ?",
          choices: [
            "Il n'y en a pas, c'est synonyme",
            "Référencé = accepté au catalogue. Implanté = physiquement en rayon",
            "Référencé concerne le CHR, implanté la GMS",
            "Implanté = premier trimestre, référencé = reste de l'année"
          ],
          correct: 1,
          explain: "Le piège classique. Un référencement national ne garantit pas l'implantation. Demande toujours \"implanté dans combien de magasins ?\" — tu passes pro instantanément."
        },
        {
          q: "Un brasseur te dit : \"on a dû rappeler 200 cartons d'IPA du distributeur Sud, la DLUO passait fin du mois\". Ce qu'il te dit entre les lignes :",
          choices: [
            "Qu'il a un produit de mauvaise qualité",
            "Qu'il a un problème de rotation chez ce distributeur, signal de tension sur ce circuit",
            "Qu'il va arrêter de faire de l'IPA",
            "Que la loi l'oblige à rappeler les produits proches DLUO"
          ],
          correct: 1,
          explain: "La vraie info = la rotation est insuffisante dans ce circuit. La DLUO qui passe avant la vente est un signal de douleur commerciale, pas un problème produit."
        }
      ]
    },
    next: { id: "lecon-02", title: "Les acteurs du marché : qui est qui en 2026" }
  },

  /* ════════════════════════════════════════════════════════
     LEÇON 02 — Les acteurs du marché
     ════════════════════════════════════════════════════════ */
  {
    id: "lecon-02",
    number: 2,
    title: "Les acteurs du marché : qui est qui en 2026",
    module_label: "MODULE 01 — FONDAMENTAUX",
    duration_min: 55,
    intro: "La Leçon 1 t'a donné les mots. Celle-ci te donne les noms et les forces. C'est ce qui distingue un curieux d'une personne qui suit réellement le marché. Quand un brasseur te dit \"on bosse avec GBS\" ou \"on est chez Elidis dans le Sud\", tu dois savoir de quoi il parle.",
    objectives: [
      "Cartographier les 3 industriels qui dominent (Heineken, Carlsberg, AB InBev)",
      "Identifier les distributeurs CHR, GMS, spé bière qui comptent",
      "Connaître les brasseries intermédiaires qui bougent en 2025-2026"
    ],
    sections: [
      {
        id: "s1",
        title: "Les industriels brasseurs",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "Trois groupes — Heineken, Kronenbourg (Carlsberg), AB InBev — pèsent ~70% du volume bière vendu en GMS et contrôlent une part massive du parc CHR via leurs filiales et contrats brasseurs." },
          {
            type: "card",
            label: "GROUPE",
            title: "Heineken France",
            body: "Brasseries : Mons-en-Barœul, Marseille, Schiltigheim. Marques : Heineken, Desperados, Pelforth, Affligem, Edelweiss, Amstel.",
            note: "Filiale de distribution : France Boissons (n°1 français de la distribution bière CHR — 68 sites, 43 000 clients, 2 300 collaborateurs)."
          },
          {
            type: "card",
            label: "GROUPE",
            title: "Kronenbourg (Groupe Carlsberg)",
            body: "Brasserie : Obernai (la plus grosse de France). Marques : Kronenbourg, 1664, Tuborg, Carlsberg, Grimbergen, Skøll.",
            note: "Filiale de distribution : Elidis Boissons Services (via Distriboissons)."
          },
          {
            type: "card",
            label: "GROUPE",
            title: "AB InBev France",
            body: "Pas de grosse brasserie française historique. Marques : Leffe, Hoegaarden, Stella Artois, Corona, Bud, Ginette.",
            note: "Distribution CHR : s'appuie sur réseaux indé type C10. Pas de réseau captif équivalent à France Boissons."
          },
          {
            type: "piege",
            text: "Croire que ces trois groupes \"font de la bière industrielle seulement\". Ils sont très présents sur le premium et rachètent régulièrement des artisanales à l'étranger et parfois en France. Un brasseur qui dit \"les industriels nous rachètent un par un\" ne parle pas que des marques jaunes à 3 degrés."
          },
          {
            type: "signal",
            text: "Brasseur craft qui parle avec agressivité du trio = souvent engagé SNBI, militant. Brasseur qui en parle techniquement sans jugement = souvent plus pragmatique, potentiellement ouvert à des relations avec leurs filiales distri."
          },
          {
            type: "h3",
            text: "Le second cercle : indépendants à taille moyenne"
          },
          {
            type: "list",
            title: "Brasseries indépendantes françaises qui pèsent",
            items: [
              "Goudale (Nord) — 1ère indé en parts de marché GMS (6,4% en 2024). +14,7% en volume.",
              "3 Monts (Saint-Sylvestre, Nord) — +9,4% en volume 2024. Bière de garde historique.",
              "Castelain (Nord) — Ch'ti, membre du GBS.",
              "Pays Flamand (Nord) — Anosteké, pionnière 2000s.",
              "Mélusine (Vendée) — médaillée Concours Général Agricole, groupe Newbeers.",
              "Ninkasi (Lyon) — brasseur + brewpubs + restaurants.",
              "Mont Blanc (Savoie) — premium-montagne, distribution nationale.",
              "Duvel Moortgat France — groupe belge indé puissant (Duvel, Chouffe, Vedett)."
            ]
          },
          {
            type: "piege",
            text: "\"Indépendant\" ne veut pas dire \"petit\". Duvel Moortgat fait plusieurs millions d'hL. Goudale est un des cinq plus gros brasseurs FR tous statuts confondus. Mais ils restent juridiquement indépendants au sens SNBI/fiscal."
          }
        ]
      },
      {
        id: "s2",
        title: "Distributeurs et réseaux",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "Section la plus méconnue du novice et la plus stratégique. Un brasseur choisit son distributeur avant son acheteur final : c'est le distributeur qui ouvre les portes ou les ferme." },
          { type: "h3", text: "Réseaux CHR nationaux" },
          {
            type: "card",
            label: "RÉSEAU",
            title: "France Boissons (Heineken)",
            body: "N°1 français de la distribution bière CHR. 68 sites, 43 000 clients CHR, 6 300 références au catalogue. Multi-brasseurs mais porte prioritairement les marques maison.",
            note: "Pour un micro : quasi-inaccessible sauf brasserie intermédiaire à forte notoriété locale."
          },
          {
            type: "card",
            label: "RÉSEAU",
            title: "C10",
            body: "N°1 distribution CHR indé. Réseau coopératif. 83 adhérents, 92 813 PDV livrés, 230 entrepôts, 1,68 Md€ CA, 31% de PdM CHR.",
            note: "Enseignes propres : Comptoir des Vignes (58 caves), La Cervoiserie (37 caves-bars). Porte d'entrée plausible pour un micro via un adhérent local."
          },
          {
            type: "card",
            label: "RÉSEAU",
            title: "Elidis Boissons Services (Kronenbourg)",
            body: "Filiale distribution CHR du groupe Carlsberg. Centrale Distriboissons. Porte les marques Kronenbourg/Carlsberg en priorité, catalogue multi-marques.",
            note: "Pour un micro : même difficulté que France Boissons."
          },
          {
            type: "card",
            label: "RÉSEAU",
            title: "Tribouillet (indépendant)",
            body: "Leader indé CHR. Famille depuis 1884. 400 collaborateurs, 17 implantations. 6 000+ références dont 2 000 bières craft.",
            note: "Marques fédérées : OBD Grand Paris, Robert Distribution, DBI, Tribouillet Chartres. Possible pour un micro via les entités craft comme DBI."
          },
          { type: "h3", text: "Réseaux GMS spécifiques au craft" },
          {
            type: "card",
            label: "PLATEFORME",
            title: "GBS — Groupement des Bières Spéciales",
            body: "Plateforme logistique mutualisée pour la GMS, créée par un collectif de brasseurs (Castelain, Duvel-Moortgat). Donne aux indé l'accès GMS sans force de vente nationale.",
            note: "Brique House a signé avec GBS en novembre 2025 pour accélérer en GMS. Brasseur qui parle de \"passer par GBS\" = il monte un cap."
          },
          {
            type: "card",
            label: "DISTRIBUTEUR",
            title: "IBB — Imports Brasseries Boissons",
            body: "Distributeur multi-circuits, 50+ marques. GMS, CHR, cavistes pro.",
            note: "Brique House l'a utilisé pour son entrée GMS chez Monoprix et Carrefour Nord début 2023."
          },
          { type: "h3", text: "Distributeurs régionaux spé bière craft" },
          {
            type: "list",
            title: "À connaître par cœur dans ta région",
            items: [
              "DBI (Paris) — Distribution Bières Indépendantes. Importateur craft européen qualitatif.",
              "La Compagnie des Boissons Vivantes (Montreuil) — nationale, pro du craft.",
              "Dauphi-Bières (Grenoble) — référence Sud-Est.",
              "Cozigou (Ouest) — 13 sites, 5 000+ références.",
              "CBBS (Clermont-Ferrand) — Auvergne, CHR + cavistes.",
              "Paris Boissons — filiale C10 IDF.",
              "OBD Grand Paris (groupe Tribouillet) — leader indé Paris/IDF."
            ]
          },
          {
            type: "piege",
            text: "Confondre \"distributeur\" (achète, stocke, livre) et \"agent commercial\" (prospecte pour le compte d'un brasseur sans acheter le stock). L'agent touche 10-15% de commission. Le distributeur prend une marge de 30-40% mais gère toute la logistique."
          },
          {
            type: "exemple",
            text: "On passe par Dauphi pour couvrir la zone Grenoble, on garde la gestion directe sur Lyon."
          },
          {
            type: "signal",
            text: "Brasseur qui nomme précisément ses distributeurs par zone = structure commerciale mature, connaît son marché."
          }
        ]
      },
      {
        id: "s3",
        title: "Enseignes retail",
        kind: "blocks",
        blocks: [
          { type: "h3", text: "GMS — la pyramide" },
          {
            type: "list",
            title: "Hypermarchés (>2 500 m²)",
            items: [
              "Leclerc — coopératif, gros acheteur, dynamique sur le local, prix agressif.",
              "Carrefour — centralisé, leader historique sur l'assortiment bière.",
              "Auchan — important, travaille beaucoup le local (Meteor dans l'Est).",
              "Cora — plus petit, intégration progressive Carrefour depuis 2024."
            ]
          },
          {
            type: "list",
            title: "Supermarchés (400 à 2 500 m²)",
            items: [
              "Intermarché — coopérative, premium correct, localisme croissant.",
              "Super U / Hyper U — coopérative, très local-friendly.",
              "Casino — en restructuration depuis 2023, cession progressive.",
              "Monoprix — urbain premium, sélection craft pointue."
            ]
          },
          {
            type: "piege",
            text: "Parler de GMS comme d'un monolithe. Un acheteur national Carrefour signe pour 200+ magasins. Un acheteur régional Leclerc (chaque Leclerc est juridiquement indé) signe pour sa zone. Chez U, la coopérative adopte des référencements nationaux mais chaque magasin peut ajouter 15-30% de sa propre sélection locale."
          },
          { type: "h3", text: "Réseaux spécialisés" },
          {
            type: "card",
            label: "FRANCHISE",
            title: "V&B",
            body: "255 magasins, 180 M€ CA, concept cave + bar. Partenaires craft : La Débauche, Grand Paris Brewing, Hoppy Road, Prizm, Juxebox."
          },
          {
            type: "list",
            title: "Cavistes spé bière indépendants à connaître",
            items: [
              "La Cave à Bulles (Paris) — référence historique.",
              "Bieronomy (Lyon et ailleurs) — e-commerce + physique.",
              "La Binouze, Le Supercoin (Paris) — bars-caves.",
              "Comptoir de la Bière (Nord) — assortiment large.",
              "Saveur Bière — pure player e-commerce, racheté par AB InBev en 2016 (à ne jamais oublier)."
            ]
          }
        ]
      },
      {
        id: "s4",
        title: "Brasseries qui bougent en 2025-2026",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "Ce qu'il faut savoir pour faire partie de la conversation quand un brasseur te parle de ses concurrents ou modèles." },
          {
            type: "card",
            label: "INTERMÉDIAIRE",
            title: "Brique House (Saint-André-lez-Lille)",
            body: "Fondée 2020 par Joseph et Baptiste Dufossez (ex-AB InBev). 2025 : ~10 000+ hL, 8 taprooms, franchise lancée (Poissy 2025).",
            note: "Pricing agressif (Mick Lager 2,70€ direct, objectif 2,20€ GMS), volume plutôt qu'EBITDA. GMS via IBB puis GBS. Modèle revendiqué : BrewDog UK."
          },
          {
            type: "card",
            label: "INTERMÉDIAIRE",
            title: "Nepo (Neuville-sur-Saône)",
            body: "Fondée 2021 par Mickaël Castaldo et Thomas Durand. 20 000 hL/an en 2025, 25 CDI, positionnement durable/local (95% appro France visé).",
            note: "Souvent citée comme modèle \"croissance responsable\" par les brasseurs qui rejettent le modèle Brique House."
          },
          {
            type: "list",
            title: "Autres à connaître",
            items: [
              "Gallia (Paris) — a déposé le terme \"vière\" (bière-vin). Influente sur la scène créative.",
              "Brasserie du Castellet (Provence) — trajectoire GMS, citée à côté de Brique House et Nepo.",
              "Hoppy Road (Paris) — co-brassing, partenaire historique V&B.",
              "La Débauche (Angoulême) — historique craft, partenaire V&B.",
              "Grand Paris Brewing — partenaire V&B, présence solide Paris.",
              "Tandem — 14 000 hL en 2025, lancement Chifoumi (75cl + fût 20L) fin 2025."
            ]
          },
          {
            type: "piege",
            text: "Ne pas prétendre connaître une brasserie dont tu n'as pas lu au moins une info récente. Si un brasseur te dit \"tu connais X ?\", un \"de nom\" honnête vaut mieux qu'un \"ah oui super\" qui te grille à la question suivante."
          }
        ]
      }
    ],
    takeaways: [
      "**3 groupes industriels = 70% du volume GMS + contrôle CHR via France Boissons / Elidis.** Réalité structurelle du marché.",
      "**C10 est le n°1 CHR indé avec 31% de PdM.** Si tu retiens un seul réseau distri indé, c'est celui-là. Comptoir des Vignes et La Cervoiserie = leurs enseignes.",
      "**GBS et IBB sont les deux sas GMS pour craft intermédiaire.** Si un brasseur parle d'entrée GMS sans Heineken/Kron/ABI, il passe par l'un des deux.",
      "**Distributeurs régionaux spé bière = vrai levier micro-brasseur.** DBI, Compagnie Boissons Vivantes, Dauphi, Cozigou, OBD, CBBS.",
      "**Brique House et Nepo = les deux références 2025-2026.** Brique House = agressif, volume, pricing serré, modèle US. Nepo = durable, local, circuits courts."
    ],
    quiz: {
      passing: 5,
      max: 6,
      questions: [
        {
          q: "Un brasseur te dit : \"on aimerait rentrer chez France Boissons mais ils nous ont renvoyés vers C10\". Qu'est-ce que ça te dit ?",
          choices: [
            "Que France Boissons et C10 sont concurrents directs et ont un accord de répartition",
            "Que France Boissons (Heineken) priorise ses marques et renvoie les micros vers C10",
            "Que le brasseur est trop gros pour C10",
            "Que C10 rachète France Boissons"
          ],
          correct: 1,
          explain: "France Boissons reste multi-brasseurs mais priorise les marques Heineken. C10, coopératif indé, est l'alternative naturelle pour les brasseries qui ne rentrent pas dans le calibre Heineken."
        },
        {
          q: "Parmi ces réseaux, lequel N'EST PAS un distributeur CHR ?",
          choices: ["France Boissons", "C10", "Elidis", "GBS"],
          correct: 3,
          explain: "GBS = Groupement des Bières Spéciales, plateforme logistique GMS, pas CHR. Les trois autres sont les principaux réseaux distri CHR du marché."
        },
        {
          q: "\"On passe par IBB pour Monoprix et Carrefour Nord, on vient de signer avec GBS pour accélérer en GMS\". Tu en déduis :",
          choices: [
            "Qu'il remplace IBB par GBS",
            "Qu'il utilise deux canaux différents — IBB pour un premier pied GMS, GBS pour industrialiser l'accès à plus d'enseignes",
            "Qu'il n'a plus confiance en IBB",
            "Qu'il pivote vers le CHR"
          ],
          correct: 1,
          explain: "Cas réel Brique House. IBB et GBS sont complémentaires : IBB porte des accès individuels enseigne par enseigne, GBS mutualise pour scaler."
        },
        {
          q: "Un brasseur te parle \"des industriels\" avec hostilité et cite spontanément \"SNBI\". Quelle est ta lecture ?",
          choices: [
            "Engagé dans le syndicat des brasseurs indé, milieu militant. Évite \"craft\", va vers \"indépendant\"",
            "Il fait partie de Brasseurs de France",
            "Il vend sa production à AB InBev",
            "Il cherche un distributeur industriel"
          ],
          correct: 0,
          explain: "Le SNBI est le syndicat des brasseurs indépendants — milieu militant, vigilant sur le rachat des indé par les majors. Le mot \"craft\" y est politiquement sensible."
        },
        {
          q: "Parmi ces brasseries, laquelle N'EST PAS une \"intermédiaire qui bouge\" en 2025-2026 ?",
          choices: ["Brique House", "Nepo", "Brasserie du Castellet", "Saveur Bière"],
          correct: 3,
          explain: "Saveur Bière est un pure player e-commerce racheté par AB InBev en 2016, pas une brasserie. Les trois autres sont les références citées dans les analyses 2025-2026."
        },
        {
          q: "\"On est distribués par OBD sur Paris, Dauphi sur Rhône-Alpes, et on gère direct sur notre zone\". Ce que ça te dit :",
          choices: [
            "Qu'il est en conflit avec OBD et Dauphi",
            "Qu'il a une organisation commerciale structurée par zones, mix indirect + direct",
            "Qu'il cherche un distributeur national",
            "Qu'il fait de la GMS"
          ],
          correct: 1,
          explain: "Pattern classique d'un brasseur intermédiaire pro : distributeur régional pour les zones éloignées, direct sur la zone proche pour préserver la marge."
        }
      ]
    },
    next: { id: "lecon-03", title: "Les marges et les flux : la carte économique" }
  },

  /* ════════════════════════════════════════════════════════
     LEÇON 03 — Les marges et les flux
     ════════════════════════════════════════════════════════ */
  {
    id: "lecon-03",
    number: 3,
    title: "Les marges et les flux : la carte économique",
    module_label: "MODULE 01 — FONDAMENTAUX",
    duration_min: 60,
    intro: "Les chiffres que tu vas lire sont des fourchettes crédibles issues de sources publiques. Ce ne sont pas des chiffres confidentiels. Tu les utilises comme boussole, pas comme GPS. À la fin de la leçon, tu comprends où l'argent se fait et se perd dans la filière.",
    objectives: [
      "Comprendre la structure de coûts d'une bière artisanale",
      "Connaître les coefficients multiplicateurs par circuit",
      "Comprendre pourquoi 250 brasseries ont fermé en 2024 (la trésorerie tue, pas le produit)"
    ],
    sections: [
      {
        id: "s1",
        title: "Le prix de revient — ce que ça coûte",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "Ordres de grandeur pour une brasserie de 1 000 hL/an. À utiliser comme boussole, pas comme GPS." },
          {
            type: "list",
            title: "Postes de coût pour 1 hL (100 L)",
            items: [
              "Matières premières (malt, houblon, levure) : 30-50€/hL. IPA très houblonnée : 60-70€.",
              "Conditionnement : poste énorme. Bouteilles ~80-100€/hL, canettes 70-90€, fûts 60-70€. 30-40% du prix de revient total.",
              "Main d'œuvre : 70-100€/hL pour une micro. Diminue avec automatisation.",
              "Amortissement matériel : 25-40€/hL pour brasserie neuve (120-150k€ d'investissement initial).",
              "Énergie et fluides : 8-15€/hL. En forte hausse depuis 2022.",
              "Accises (5°, indé) : ~20€/hL. Double au-delà de 200k hL/an.",
              "Frais de structure (loyer, assurance, compta, marketing) : 20-30€/hL."
            ]
          },
          {
            type: "card",
            label: "TOTAL",
            title: "Prix de revient hors marge",
            body: "Entre 200 et 350€/hL selon les choix (bouteille vs canette vs fût, style, taille de structure).",
            note: "Brasseur en première année avec sous-utilisation de cuves : prix de revient supérieur de 30-50%. Cause principale de faillite des brasseries naissantes."
          },
          {
            type: "exemple",
            text: "On est à 2,40€ de prix de revient la 33cl, c'est pour ça qu'on peut pas s'aligner avec Brique House."
          },
          {
            type: "signal",
            text: "Brasseur qui connaît son prix de revient à l'unité par style = structure mature et pilotée. Brasseur qui parle en approximations génériques = pilotage à vue, risque élevé."
          }
        ]
      },
      {
        id: "s2",
        title: "Coefficients par circuit",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "Entre prix brasseur et prix consommateur, les ponctions sont très différentes selon qui porte le produit. C'est la chaîne de valeur." },
          {
            type: "card",
            label: "× 1 à × 1,3",
            title: "Vente directe (taproom, e-commerce)",
            body: "Marge brasseur récupérée : 60-75% net de taxes. Le modèle le plus rentable en marge unitaire, mais volumes limités géographiquement.",
            note: "Bouteille 33cl vendue 2,50€ direct = ~2,20€ HT encaissé. Meilleur cas brasseur."
          },
          {
            type: "card",
            label: "× 1,8 à × 2,2",
            title: "Caviste spé en direct",
            body: "Marge caviste sur prix d'achat HT. Brasseur vend 2,00€ HT → caviste revend 3,80-4,40€ HT, soit 4,50-5,30€ TTC.",
            note: "Part brasseur dans le prix final TTC : 38-45%."
          },
          {
            type: "card",
            label: "+30 à +40%",
            title: "Via distributeur spé",
            body: "Brasseur 1,60€ HT → distri 2,20€ HT (marge 38%) → caviste 4,50€ HT / 5,40€ TTC. Part brasseur : ~30% du final TTC.",
            note: "Le brasseur perd en % mais gagne en couverture géographique qu'il ne pouvait pas faire seul."
          },
          {
            type: "card",
            label: "× 3 à × 5",
            title: "CHR direct (en fût)",
            body: "Marge CHR sur pression : énorme. Fût 20L vendu 100€ HT = 5€/L d'achat. Bar sert demi 25cl à 4-5€ = 16-20€/L vendu.",
            note: "MAIS coûts cachés : cycle fût 6-12 mois, logistique, impayés 30-60j. Marge nette finale souvent en dessous du caviste."
          },
          {
            type: "card",
            label: "× 25-35% + arrière",
            title: "GMS (avec coopé)",
            body: "Marge GMS avant : 25-35%. Marge arrière (BFA, tracts, animations) : +10-20%. Total : 40-55% du PVC.",
            note: "Brasseur qui signe sa première GMS sans budgéter la coopé arrière découvre en janvier qu'il doit 8-15% du CA en avoir."
          },
          { type: "h3", text: "Carte économique résumée" },
          {
            type: "table",
            headers: ["Circuit", "Part brasseur dans prix final TTC"],
            rows: [
              ["Vente directe (taproom)", "60-75%"],
              ["Caviste spé en direct", "38-45%"],
              ["Caviste via distri spé", "28-35%"],
              ["CHR direct en bouteille", "25-35%"],
              ["CHR direct en fût (brut)", "30-45%"],
              ["CHR via distributeur", "12-20%"],
              ["GMS (avec coopé)", "30-40%"]
            ]
          },
          {
            type: "piege",
            text: "Un % bas ne veut pas dire \"mauvais circuit\". C'est la marge absolue × le volume qui compte. Un brasseur peut gagner plus à 15% en GMS s'il fait 100k hL qu'à 65% en direct à 500 hL."
          }
        ]
      },
      {
        id: "s3",
        title: "Les flux de trésorerie — le vrai tueur",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "Les brasseries qui ferment ne meurent quasiment jamais de mauvaise qualité produit. Elles meurent de trésorerie. C'est la ligne la plus importante de cette leçon." },
          {
            type: "list",
            title: "Cycle de trésorerie d'une brasserie",
            items: [
              "J-60 : achat matières premières (à payer à 30 jours)",
              "J-30 : brassage, fermentation, conditionnement",
              "J0 : produit fini prêt à partir",
              "J+15 : livraison au client (caviste, CHR, distributeur)",
              "J+60 à J+90 : paiement effectif (légal 30j, pratique 45-60j)"
            ]
          },
          {
            type: "card",
            label: "BFR",
            title: "Besoin en Fonds de Roulement",
            body: "Le brasseur avance de la trésorerie 90-120 jours entre achat matière et encaissement. Pour chaque 1€ de CA mensuel, il faut ~3-4€ de BFR.",
            note: "Brasseries naissantes : sous-estiment massivement leur BFR. Cash crunch au mois 6-12. Liquidation."
          },
          {
            type: "piege",
            text: "Chiffre clé 2024 : 250 fermetures de brasseries enregistrées (~10% du parc). Cause officielle n°1 : trésorerie. La tendance se poursuit en 2025."
          },
          { type: "h3", text: "Délais de paiement par circuit" },
          {
            type: "list",
            items: [
              "Vente directe : paiement immédiat. Meilleur cash flow.",
              "Caviste indé : 30-45 jours.",
              "Distributeur spé : 30-45 jours.",
              "CHR indé : 30-60 jours, risque d'impayé non négligeable (10% des CHR ouvrent et ferment chaque année).",
              "Distributeur CHR / C10 : 30-45 jours fiables.",
              "GMS : 45-60 jours + coopé à régulariser en fin d'année.",
              "Export : 60-90 jours + risque de change + DAE."
            ]
          },
          { type: "h3", text: "Le fût consigné : capital immobilisé" },
          {
            type: "card",
            label: "60-100€",
            title: "Coût fût neuf",
            body: "Brasserie 2 000 hL qui vend 30% en fût : ~600 fûts/an à tourner. Cycle 6 mois = 300-600 fûts en circulation = 20-60k€ immobilisés.",
            note: "Perte 10%/an (casse, vols, non-retour) = 2-6k€ de coût caché récurrent."
          }
        ]
      },
      {
        id: "s4",
        title: "Leviers économiques réels",
        kind: "blocks",
        blocks: [
          { type: "h3", text: "Ce qui rend une brasserie rentable" },
          {
            type: "list",
            items: [
              "**Vente directe la plus haute possible.** Chaque litre taproom/brewpub = marge × 2-3 vs autres circuits. Brique House (8 taprooms), Ninkasi : pas un hasard.",
              "**Montée en volume sans exploser les coûts fixes.** Achat matières en vrac, automatisation, optimisation cycles. Le secret d'une Goudale.",
              "**Diversification contrôlée.** Pas tous les œufs dans le même panier, mais pas trop de circuits différents.",
              "**Gestion DLUO et stocks.** Invendus détruits = argent brûlé. Pro = stocks tournent en <3 mois.",
              "**Positionnement prix assumé.** Descendre pour entrer GMS industriel = course perdue contre Kronenbourg. Rester premium = marge préservée mais volumes limités."
            ]
          },
          { type: "h3", text: "Ce qui tue une brasserie" },
          {
            type: "list",
            items: [
              "Sur-dimensionnement initial : cuverie trop grande, emprunt qui dépasse la marge effective.",
              "Négociations CHR trop agressives : tireuses prêtées sans contrat solide, remises qui n'arrivent jamais.",
              "Entrée GMS non maîtrisée : coopé sous-estimée, retours massifs, dépendance à 1-2 enseignes.",
              "Stock mort : gamme trop large, bières qui ne tournent pas, DLUO qui défilent.",
              "Impayés accumulés : refus de couper les clients qui paient mal \"par peur de les perdre\"."
            ]
          },
          {
            type: "exemple",
            text: "J'ai arrêté trois bières de ma gamme cette année, je les gardais pour le catalogue mais elles me coûtaient plus qu'elles ne rapportaient."
          },
          {
            type: "signal",
            text: "Brasseur qui réduit sa gamme = pro qui pilote. Brasseur qui élargit sans cesse sans arbitrer = en fuite en avant."
          }
        ]
      },
      {
        id: "s5",
        title: "Le signal de pro",
        kind: "blocks",
        blocks: [
          { type: "lead", text: "La granularité du discours révèle le niveau de pilotage. Le signal pro n'est pas dans le CA, il est dans la manière d'en parler." },
          {
            type: "card",
            label: "BRASSEUR A",
            title: "Niveau apparent",
            body: "\"On a fait 450k€ de CA cette année, bonne année.\"",
            note: "Parle en CA brut, sans distinction. Niveau récit, pas niveau pilotage."
          },
          {
            type: "card",
            label: "BRASSEUR B",
            title: "Niveau pro",
            body: "\"380k€ de CA net après coopé et retours, on garde 22% de marge brute contre 19% l'an dernier, le BFR s'est tendu sur Q4 mais on tient.\"",
            note: "CA net, marge brute comparée, BFR mentionné. Pilote sa structure, pas son storytelling."
          },
          {
            type: "piege",
            text: "Quand un brasseur te raconte son année, écoute le niveau de granularité plus que les chiffres absolus. Un \"petit\" qui parle BFR vaut mieux qu'un \"gros\" qui ne parle que de CA."
          }
        ]
      }
    ],
    takeaways: [
      "**Prix de revient bière craft : ~200-350€/hL tout compris.** Conditionnement (bouteilles, canettes, fûts) = 30-40% du total. Sous-estimé par les novices.",
      "**Coefficients types :** caviste × 1,8-2,2 ; distri spé +30-40% ; CHR pression × 3-5 ; GMS marge avant 25-35% + arrière 10-20%.",
      "**Part brasseur dans le PVC :** 12-20% (CHR via distri) à 65-75% (vente directe). Un % bas peut être plus rentable en absolu si volume.",
      "**250 brasseries fermées en 2024 (~10% du parc). Cause n°1 : trésorerie.** Brasseur qui parle BFR/délais de paiement = vivant. Brasseur qui ne sait pas son BFR = en danger.",
      "**Cycle fût consigné : 6-12 mois.** Trésorerie immobilisée + pertes (casse, vols). Pour comprendre pourquoi le CHR n'est pas si rentable qu'il en a l'air."
    ],
    quiz: {
      passing: 5,
      max: 6,
      questions: [
        {
          q: "Un brasseur te dit : \"mon prix de revient est à 180€/hL\". Quel niveau d'optimisation ça suggère ?",
          choices: [
            "Un débutant qui sous-estime ses coûts réels",
            "Une brasserie bien rodée qui a optimisé matières et conditionnement, probablement canette ou forte rotation fût",
            "Une brasserie en faillite",
            "Une brasserie industrielle type Kronenbourg"
          ],
          correct: 1,
          explain: "180€/hL = bas de fourchette, réaliste pour une structure mature qui a lissé ses coûts. Un débutant est plutôt à 250-350€/hL avec sous-utilisation de cuves."
        },
        {
          q: "Un brasseur vend sa 33cl 1,80€ HT au caviste. À quel prix public TTC la verrais-tu chez ce caviste en moyenne ?",
          choices: ["2,40€", "3,50€", "4,30€", "6,50€"],
          correct: 2,
          explain: "1,80 × 2 = 3,60€ HT → ~4,30€ TTC. Coefficient caviste typique × 1,8-2,2 sur HT, puis TVA 20%."
        },
        {
          q: "Un brasseur te dit : \"on a coupé trois clients CHR cette année\". Lecture la plus probable :",
          choices: [
            "Il a perdu ces clients à cause de produits défaillants",
            "Il a coupé des clients qui payaient trop tard ou ne revenaient pas sur leurs fûts, pour préserver sa trésorerie",
            "Il est en conflit personnel",
            "Il a changé de gamme"
          ],
          correct: 1,
          explain: "Pattern classique de pro qui arbitre trésorerie vs CA. Couper un mauvais payeur = décision saine. Le vrai signal de pilotage."
        },
        {
          q: "Un brasseur signe Monoprix à 1,10€ HT la 33cl avec coopé 15%. Que touche-t-il réellement par bouteille ?",
          choices: ["1,10€ HT", "~0,94€ HT", "~0,83€ HT", "Cela dépend de la TVA"],
          correct: 1,
          explain: "1,10 - 15% = 0,935€ net. C'est pour ça que la marge \"réelle\" GMS est très différente de la marge affichée."
        },
        {
          q: "\"Le CHR est le circuit le plus rentable, on peut vendre un fût 100€ pour 20L (5€/L) alors qu'un caviste paie 2,50€/L.\" Vrai ou faux ?",
          choices: [
            "Vrai, c'est pour ça que tout le monde vise le CHR",
            "Faux — coûts cachés (fûts perdus, logistique, impayés, 60j de paiement) ramènent souvent la marge nette en dessous du caviste",
            "Vrai mais seulement pour les fûts 30L",
            "Faux, le caviste paie plus cher en réalité"
          ],
          correct: 1,
          explain: "LE piège classique du débutant qui raisonne en coefficient apparent. Le brut CHR est élevé, le net après coûts cachés (consigne, impayés, BFR) souvent inférieur au caviste."
        },
        {
          q: "Brasseur A : \"450k€ de CA, bonne année.\" Brasseur B : \"380k€ net après coopé, 22% de marge brute contre 19%, BFR tendu Q4 mais on tient.\" Lequel pilote réellement ?",
          choices: [
            "Brasseur A, parce qu'il fait plus de CA",
            "Brasseur B, parce qu'il distingue CA net, marge, BFR et compare à l'an passé",
            "Les deux, ils disent la même chose différemment",
            "Aucun, un brasseur ne devrait pas parler chiffres"
          ],
          correct: 1,
          explain: "La granularité du discours révèle le niveau de pilotage. Le signal pro n'est pas dans le CA, il est dans la manière d'en parler."
        }
      ]
    },
    next: null
  }
];
