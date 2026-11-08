/*
  ============================================================
  DONNÉES DES MAISONS DE CHAMPAGNE DE L'AUBE
  ============================================================

  C'est le SEUL fichier à modifier pour ajouter ou corriger une maison.

  Chaque maison est un bloc entre accolades { ... } avec ces champs :

    nom         : le nom de la maison (obligatoire)
    zone        : "Côte des Bar", "Montgueux" ou "Villenauxe-la-Grande" (obligatoire,
                  à écrire exactement comme ici)
    village     : le village ou la ville (obligatoire)
    description : une phrase courte (peut rester vide : "")
    site        : l'adresse du site web, commençant par https://
                  Laisser "" si vous n'êtes pas sûr de l'adresse.
    aVerifier   : true si une information mérite d'être confirmée,
                  false sinon. Un badge « À vérifier » s'affiche alors.

  Attention : chaque bloc se termine par une virgule, sauf le dernier
  (une virgule en trop ne casse rien, une virgule manquante, si).
  ============================================================
*/

const MAISONS = [

  /* ---------------- CÔTE DES BAR ---------------- */

  {
    nom: "Drappier",
    zone: "Côte des Bar",
    village: "Urville",
    description: "Maison familiale réputée pour son travail du pinot noir et ses champagnes peu dosés.",
    site: "https://www.drappier.com",
    aVerifier: false
  },
  {
    nom: "Devaux",
    zone: "Côte des Bar",
    village: "Bar-sur-Seine",
    description: "Maison installée au Domaine de Villeneuve, à Bar-sur-Seine.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Charles Collin",
    zone: "Côte des Bar",
    village: "Fontette",
    description: "Maison coopérative de Fontette, regroupant des vignerons de la Côte des Bar.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Fleury",
    zone: "Côte des Bar",
    village: "Courteron",
    description: "Domaine familial, pionnier de la biodynamie en Champagne (dès 1989).",
    site: "https://www.champagne-fleury.fr",
    aVerifier: false
  },
  {
    nom: "Cédric Bouchard – Roses de Jeanne",
    zone: "Côte des Bar",
    village: "Celles-sur-Ource",
    description: "Vigneron produisant de très petites cuvées parcellaires, d'un seul cépage et d'une seule année.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Pierre Gerbais",
    zone: "Côte des Bar",
    village: "Celles-sur-Ource",
    description: "Maison familiale connue notamment pour sa cuvée de pinot blanc.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Marie-Courtin",
    zone: "Côte des Bar",
    village: "Polisot",
    description: "Petit domaine conduit par Dominique Moreau, en biodynamie.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Vouette et Sorbée",
    zone: "Côte des Bar",
    village: "Buxières-sur-Arce",
    description: "Domaine de Bertrand Gautherot, conduit en biodynamie.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Clandestin",
    zone: "Côte des Bar",
    village: "Buxières-sur-Arce",
    description: "Petite maison de négoce liée au domaine Vouette et Sorbée.",
    site: "",
    aVerifier: true
  },
  {
    nom: "Val Frison",
    zone: "Côte des Bar",
    village: "Ville-sur-Arce",
    description: "Domaine de la vigneronne Valérie Frison, en agriculture biologique.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Rémy Massin et Fils",
    zone: "Côte des Bar",
    village: "Ville-sur-Arce",
    description: "Maison familiale de vignerons.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Ruppert-Leroy",
    zone: "Côte des Bar",
    village: "Essoyes",
    description: "Petit domaine familial travaillant en agriculture biologique.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Olivier Horiot",
    zone: "Côte des Bar",
    village: "Les Riceys",
    description: "Vigneron produisant du champagne et du Rosé des Riceys.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Alexandre Bonnet",
    zone: "Côte des Bar",
    village: "Les Riceys",
    description: "Maison des Riceys, la plus grande commune viticole de Champagne.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Morize Père et Fils",
    zone: "Côte des Bar",
    village: "Les Riceys",
    description: "Maison familiale de vignerons des Riceys.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Serge Mathieu",
    zone: "Côte des Bar",
    village: "Avirey-Lingey",
    description: "Domaine familial de vignerons.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Dosnon",
    zone: "Côte des Bar",
    village: "Avirey-Lingey",
    description: "Maison de champagne de la vallée de la Sarce.",
    site: "",
    aVerifier: true
  },
  {
    nom: "Gremillet",
    zone: "Côte des Bar",
    village: "Balnot-sur-Laignes",
    description: "Maison familiale de la Côte des Bar.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Moutard",
    zone: "Côte des Bar",
    village: "Buxeuil",
    description: "Maison familiale connue pour son travail des cépages anciens (arbane, petit meslier).",
    site: "",
    aVerifier: false
  },
  {
    nom: "Nathalie Falmet",
    zone: "Côte des Bar",
    village: "Rouvres-les-Vignes",
    description: "Vigneronne et œnologue, installée dans le Barsuraubois.",
    site: "",
    aVerifier: true
  },

  /* ---------------- MONTGUEUX ---------------- */

  {
    nom: "Jacques Lassaigne",
    zone: "Montgueux",
    village: "Montgueux",
    description: "Domaine conduit par Emmanuel Lassaigne, réputé pour ses chardonnays de Montgueux.",
    site: "",
    aVerifier: false
  },
  {
    nom: "Jean Velut",
    zone: "Montgueux",
    village: "Montgueux",
    description: "Maison familiale de vignerons de la colline de Montgueux.",
    site: "",
    aVerifier: false
  },

  /* ---------------- VILLENAUXE-LA-GRANDE ---------------- */
  /* Aucune maison ajoutée pour l'instant : je n'en connais pas avec
     suffisamment de certitude. Ajoutez-les ici sur le même modèle. */

];

/* Ordre d'affichage des zones (ne pas modifier, sauf pour en ajouter une) */
const ZONES = ["Côte des Bar", "Montgueux", "Villenauxe-la-Grande"];
