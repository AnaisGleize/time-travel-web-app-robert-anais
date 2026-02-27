export interface Destination {
  id: string
  title: string
  date: string
  subtitle: string
  description: string
  longDescription: string
  highlights: string[]
  image: string
  videoUrl: string
  activities: string[]
  chatQuestions: { question: string; answer: string }[]
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    date: "1889",
    subtitle: "Exposition Universelle",
    description: "Assistez a la naissance de la Tour Eiffel lors de l'Exposition universelle qui a ebloui le monde entier.",
    longDescription: "Plongez dans le Paris de la Belle Epoque, ou l'innovation et l'art se rencontrent. Decouvrez l'Exposition universelle de 1889, contemplez la Tour Eiffel fraichement inauguree et laissez-vous transporter par l'effervescence d'une epoque unique.",
    highlights: [
      "Ascension exclusive de la Tour Eiffel le jour de son inauguration",
      "Immersion totale dans l'Exposition universelle et ses pavillons",
      "Rencontre privee avec les plus grands inventeurs du XIXe siecle",
    ],
    image: "/images/paris-1889.jpg",
    videoUrl: "/videos/paris-cetace-florence.mp4",
    activities: [
      "Visite privee de l'Exposition universelle",
      "Diner gastronomique Belle Epoque",
      "Montee exclusive de la Tour Eiffel",
      "Promenade en calche sur les Champs-Elysees",
    ],
    chatQuestions: [
      {
        question: "Quelle est la duree du sejour a Paris 1889 ?",
        answer: "Le sejour standard est de 3 jours et 2 nuits. Vous pouvez l'etendre jusqu'a 7 jours avec notre formule Premium.",
      },
      {
        question: "Quels vetements dois-je porter a Paris en 1889 ?",
        answer: "Des tenues d'epoque vous seront fournies avant le depart : costumes trois-pieces pour les hommes, robes et chapeaux pour les femmes. Tout est inclus dans le forfait.",
      },
      {
        question: "Puis-je rencontrer Gustave Eiffel ?",
        answer: "Oui ! Notre formule VIP inclut une rencontre privee avec Gustave Eiffel au sommet de sa tour. Places limitees a 4 voyageurs par semaine.",
      },
      {
        question: "La nourriture de l'epoque est-elle sure ?",
        answer: "Absolument. Nos chefs ont recree des menus authentiques avec des ingredients modernes certifies. Vous degusterez les saveurs de 1889 en toute securite.",
      },
      {
        question: "Quel est le prix pour Paris 1889 ?",
        answer: "Le forfait Classique commence a 12 500 credits temporels. Le VIP avec la rencontre Eiffel est a 25 000 credits temporels.",
      },
    ],
  },
  {
    id: "cretaceous",
    title: "Le Cretace",
    date: "-65 000 000",
    subtitle: "Ere des Dinosaures",
    description: "Plongez au coeur d'un monde prehistorique sauvage peuple de creatures extraordinaires.",
    longDescription: "Explorez le Cretace superieur, il y a 65 millions d'annees. Observez les dinosaures dans leur habitat naturel depuis nos plateformes securisees. Une experience unique qui vous connecte aux origines de la vie sur Terre.",
    highlights: [
      "Observation des T-Rex et Triceratops depuis des bulles temporelles blindees",
      "Safari en vehicule tout-terrain a travers la jungle prehistorique",
      "Collecte de fossiles vivants et echantillons geologiques uniques",
    ],
    image: "/images/cretaceous.jpg",
    videoUrl: "/videos/paris-cetace-florence.mp4",
    activities: [
      "Observation securisee des T-Rex",
      "Safari en vehicule blinde",
      "Exploration de la jungle cretacee",
      "Collecte de fossiles vivants",
    ],
    chatQuestions: [
      {
        question: "Est-ce dangereux de voyager au Cretace ?",
        answer: "La securite est notre priorite absolue. Vous serez dans des bulles temporelles protegees et accompagnes par des guides armes de technologie repulsive. Aucun incident en 15 ans d'operation.",
      },
      {
        question: "Quels dinosaures pourrai-je voir ?",
        answer: "Tyrannosaurus Rex, Triceratops, Velociraptors, Pteranodons et bien d'autres. Notre parcours couvre 12 especes differentes minimum.",
      },
      {
        question: "Combien de temps dure l'expedition Cretace ?",
        answer: "L'expedition standard dure 2 jours (temps percu). Grace a la compression temporelle, vous ne serez absent que 4 heures en temps reel.",
      },
      {
        question: "Puis-je ramener un souvenir du Cretace ?",
        answer: "Vous pouvez ramener des echantillons geologiques et des photos holographiques. Les specimens vivants sont strictement interdits par le Protocole Temporel.",
      },
      {
        question: "Y a-t-il une limite d'age pour le Cretace ?",
        answer: "L'expedition est reservee aux voyageurs de 16 ans et plus. Une version familiale avec un parcours adapte est disponible pour les enfants de 10 a 15 ans.",
      },
    ],
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    date: "1504",
    subtitle: "Renaissance Italienne",
    description: "Renaissance artistique et genie creatif au coeur de la Florence des Medicis.",
    longDescription: "Vivez la Renaissance italienne a son apogee. Decouvrez les ateliers de Michel-Ange, Leonard de Vinci et Raphael. Participez aux banquets des Medicis et contemplez les chefs-d'oeuvre au moment de leur creation.",
    highlights: [
      "Assistez a l'installation du David de Michel-Ange sur la Piazza della Signoria",
      "Cours de peinture prive avec un maitre de la Renaissance florentine",
      "Banquet exclusif au Palazzo Medici avec la famille la plus puissante d'Italie",
    ],
    image: "/images/florence-1504.jpg",
    videoUrl: "/videos/paris-cetace-florence.mp4",
    activities: [
      "Visite de l'atelier de Michel-Ange",
      "Cours de peinture avec un maitre de la Renaissance",
      "Banquet chez les Medicis",
      "Promenade dans les rues de Florence",
    ],
    chatQuestions: [
      {
        question: "Puis-je voir Michel-Ange travailler sur le David ?",
        answer: "Absolument ! En 1504, Michel-Ange vient de terminer le David. Vous assisterez a son installation sur la Piazza della Signoria, un moment historique unique.",
      },
      {
        question: "La langue sera-t-elle un probleme ?",
        answer: "Non. Chaque voyageur recoit un implant traducteur temporaire qui permet de comprendre et parler l'italien du XVIe siecle couramment.",
      },
      {
        question: "Quelles oeuvres pourrai-je voir ?",
        answer: "Le David de Michel-Ange, la Joconde en cours de creation par Leonard de Vinci, les fresques de Raphael, et des dizaines d'autres chefs-d'oeuvre.",
      },
      {
        question: "Le logement est-il confortable a Florence 1504 ?",
        answer: "Vous logerez dans un palazzo renove avec confort moderne dissimule. Lits a baldaquin, salle de bain privee et vue sur l'Arno.",
      },
      {
        question: "Combien coute le voyage a Florence ?",
        answer: "Le forfait Renaissance debute a 15 000 credits temporels pour 4 jours. L'option Atelier avec cours de peinture est a 22 000 credits.",
      },
    ],
  },
  {
    id: "japan-feudal",
    title: "Japon Feodal",
    date: "1600",
    subtitle: "Ere des Samourais",
    description: "Decouvrez le Japon des samourais, entre temples sacres, cerisiers en fleur et arts martiaux ancestraux.",
    longDescription: "Voyagez au Japon de l'epoque Edo, ou l'honneur des samourais et la beaute des temples se melent dans une harmonie parfaite. Assistez a des ceremonies du the, explorez des chateaux imposants et decouvrez un monde de tradition et de raffinement.",
    highlights: [
      "Entrainement au kendo et au tir a l'arc avec un maitre samurai du clan Tokugawa",
      "Ceremonie du the authentique dans un jardin zen seculaire",
      "Visite du chateau de Himeji et promenade sous les cerisiers en fleur",
    ],
    image: "/images/japan-feudal.jpg",
    videoUrl: "/videos/japan.mp4",
    activities: [
      "Ceremonie du the traditionnelle",
      "Entrainement au kendo avec un maitre samurai",
      "Visite du chateau de Himeji",
      "Promenade sous les cerisiers en fleur",
    ],
    chatQuestions: [
      {
        question: "Puis-je m'entrainer avec un vrai samurai ?",
        answer: "Oui ! Notre programme inclut 2 seances d'entrainement au kendo et au tir a l'arc avec un maitre samurai du clan Tokugawa. Equipement fourni.",
      },
      {
        question: "Le Japon feodal est-il dangereux ?",
        answer: "Nous operons dans des zones pacifiees pendant la periode de paix Edo. Nos guides connaissent parfaitement les coutumes locales pour assurer votre securite et respect.",
      },
      {
        question: "Quelle est la meilleure saison pour visiter ?",
        answer: "Nous vous teleportons au printemps, durant la saison des cerisiers en fleur (hanami). C'est la periode la plus belle et la plus agreable.",
      },
      {
        question: "Puis-je gouter la cuisine japonaise authentique ?",
        answer: "Bien sur ! Sushi, tempura, sake et kaiseki seront au menu. Nos chefs preparent des repas d'epoque avec les meilleurs ingredients du Japon feodal.",
      },
      {
        question: "Quel est le code vestimentaire ?",
        answer: "Des kimonos traditionnels et des armures decoratives vous seront fournis. Un cours d'habillage est inclus pour maitriser l'art du kimono.",
      },
    ],
  },
  {
    id: "egypt-ancient",
    title: "Egypte Antique",
    date: "-2500",
    subtitle: "Ere des Pharaons",
    description: "Remontez au temps des pharaons, des pyramides majestueuses et des mysteres du Nil.",
    longDescription: "Decouvrez l'Egypte au temps de la construction des grandes pyramides. Naviguez sur le Nil, explorez les temples secrets et assistez aux rituels sacres d'une civilisation qui a fascine l'humanite depuis des millenaires.",
    highlights: [
      "Acces exclusif a l'interieur de la Grande Pyramide de Gizeh en construction",
      "Croisiere royale de 2 jours sur le Nil a bord d'une felouque doree",
      "Initiation aux hieroglyphes et audience avec un grand pretre d'Amon-Ra",
    ],
    image: "/images/egypt-ancient.jpg",
    videoUrl: "/videos/egypt.mp4",
    activities: [
      "Visite du chantier des pyramides",
      "Croisiere privee sur le Nil",
      "Exploration des temples de Karnak",
      "Audience avec un pretre d'Amon-Ra",
    ],
    chatQuestions: [
      {
        question: "Puis-je entrer dans une pyramide en construction ?",
        answer: "Oui ! Vous visiterez l'interieur de la Grande Pyramide de Gizeh en cours de construction, avec acces aux chambres secretes normalement interdites.",
      },
      {
        question: "Comment supporter la chaleur du desert ?",
        answer: "Votre combinaison temporelle integre un systeme de climatisation invisible. Vous resterez a temperature ideale tout en portant des vetements d'epoque.",
      },
      {
        question: "La croisiere sur le Nil est-elle incluse ?",
        answer: "Oui, la croisiere de 2 jours sur une felouque royale est incluse dans le forfait standard. Option barque doree du pharaon en supplement.",
      },
      {
        question: "Puis-je voir les hieroglyphes etre graves ?",
        answer: "Absolument. Vous assisterez au travail des scribes et pourrez meme apprendre a ecrire votre nom en hieroglyphes sur papyrus.",
      },
      {
        question: "Quel est le prix du voyage en Egypte ?",
        answer: "Le forfait Pharaon debute a 18 000 credits temporels pour 5 jours. L'option Mysteres avec acces aux rituels sacres est a 28 000 credits.",
      },
    ],
  },
  {
    id: "newyork-1920",
    title: "New York 1920",
    date: "1920",
    subtitle: "Les Annees Folles",
    description: "Vivez l'effervescence du New York des annees folles, entre jazz, prohibition et art deco.",
    longDescription: "Plongez dans le New York des Annees Folles. Dansez dans les speakeasies clandestins, ecoutez le jazz dans les clubs de Harlem, et decouvrez l'energie debordante d'une ville en pleine transformation. Gratte-ciels art deco, mode glamour et liberte sans limites.",
    highlights: [
      "Soiree VIP dans les speakeasies les plus exclusifs de Manhattan",
      "Concert prive de jazz avec les legendes de Harlem comme Louis Armstrong",
      "Visite des gratte-ciels art deco en construction et montee au sommet de la ville",
    ],
    image: "/images/newyork-1920.jpg",
    videoUrl: "/videos/newyork.mp4",
    activities: [
      "Soiree dans un speakeasy clandestin",
      "Concert de jazz a Harlem",
      "Visite des gratte-ciels en construction",
      "Promenade en limousine d'epoque",
    ],
    chatQuestions: [
      {
        question: "Puis-je assister a un concert de jazz original ?",
        answer: "Oui ! Vous verrez les legendes du jazz comme Louis Armstrong et Duke Ellington dans les clubs mythiques de Harlem. Places VIP garanties.",
      },
      {
        question: "Comment fonctionne la Prohibition ?",
        answer: "Nous vous fournirons un mot de passe pour acceder aux speakeasies les plus exclusifs. Degustez des cocktails d'epoque dans une ambiance electrique.",
      },
      {
        question: "Le voyage est-il adapte aux couples ?",
        answer: "Absolument ! New York 1920 est notre destination la plus romantique. Diner aux chandelles, danse swing et promenade nocturne sur Broadway.",
      },
      {
        question: "Quels vetements sont fournis ?",
        answer: "Costumes trois-pieces et chapeaux pour les hommes, robes a franges et bandeaux pour les femmes. Tenues de soiree glamour incluses.",
      },
      {
        question: "Puis-je visiter la Statue de la Liberte en 1920 ?",
        answer: "Oui, une excursion en bateau vers Liberty Island est incluse, avec un acces exclusif a la couronne de la statue. Vue imprenable sur Manhattan.",
      },
    ],
  },
]
