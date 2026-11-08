/*
  Programme du site : il lit la liste MAISONS (dans data.js),
  remplit les filtres et affiche les maisons selon la recherche.
  Pas besoin de modifier ce fichier pour ajouter une maison.
*/

const champRecherche = document.getElementById("recherche");
const filtreZone = document.getElementById("filtre-zone");
const filtreVillage = document.getElementById("filtre-village");
const boutonReset = document.getElementById("reinitialiser");
const zoneResultats = document.getElementById("resultats");
const compteur = document.getElementById("compteur");

// Comparaison sans tenir compte des accents ni des majuscules ("cedric" trouve "Cédric")
function normaliser(texte) {
  return (texte || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

function trierFr(a, b) {
  return a.localeCompare(b, "fr", { sensitivity: "base" });
}

// Crée un élément HTML avec du texte (évite tout problème de caractères spéciaux)
function creer(balise, classe, texte) {
  const el = document.createElement(balise);
  if (classe) el.className = classe;
  if (texte) el.textContent = texte;
  return el;
}

// Toutes les zones : celles de ZONES, plus d'éventuelles nouvelles zones saisies dans data.js
function listeZones() {
  const zones = [...ZONES];
  MAISONS.forEach(m => { if (m.zone && !zones.includes(m.zone)) zones.push(m.zone); });
  return zones;
}

function remplirZones() {
  listeZones().forEach(zone => {
    filtreZone.appendChild(new Option(zone, zone));
  });
}

// Le menu « Village » ne propose que les villages de la zone choisie
function remplirVillages() {
  const zone = filtreZone.value;
  const actuel = filtreVillage.value;
  const villages = [...new Set(
    MAISONS.filter(m => !zone || m.zone === zone).map(m => m.village)
  )].sort(trierFr);

  filtreVillage.innerHTML = "";
  filtreVillage.appendChild(new Option("Tous les villages", ""));
  villages.forEach(v => filtreVillage.appendChild(new Option(v, v)));
  filtreVillage.value = villages.includes(actuel) ? actuel : "";
}

function carteMaison(m) {
  const carte = creer("article", "maison");
  carte.appendChild(creer("h4", "", m.nom));
  carte.appendChild(creer("p", "lieu", m.village + " · " + m.zone));
  if (m.aVerifier) carte.appendChild(creer("span", "badge", "À vérifier"));
  if (m.description) carte.appendChild(creer("p", "desc", m.description));
  if (m.site) {
    const lien = creer("a", "lien", "Site web →");
    lien.href = m.site;
    lien.target = "_blank";
    lien.rel = "noopener";
    carte.appendChild(lien);
  }
  return carte;
}

function afficher() {
  const recherche = normaliser(champRecherche.value);
  const zone = filtreZone.value;
  const village = filtreVillage.value;

  const trouvees = MAISONS.filter(m =>
    (!recherche || normaliser(m.nom).includes(recherche)) &&
    (!zone || m.zone === zone) &&
    (!village || m.village === village)
  );

  const filtreActif = recherche || zone || village;
  compteur.textContent = trouvees.length + (trouvees.length > 1 ? " maisons" : " maison") +
    (filtreActif ? " trouvée" + (trouvees.length > 1 ? "s" : "") : " référencée" + (trouvees.length > 1 ? "s" : ""));

  zoneResultats.innerHTML = "";

  const zonesAffichees = zone ? [zone] : listeZones();

  zonesAffichees.forEach(nomZone => {
    const maisonsZone = trouvees.filter(m => m.zone === nomZone);
    // Avec une recherche active, on masque les zones sans résultat
    if (filtreActif && maisonsZone.length === 0 && !zone) return;

    const section = creer("section", "zone");
    section.appendChild(creer("h2", "zone-titre", nomZone));

    if (maisonsZone.length === 0) {
      const total = MAISONS.filter(m => m.zone === nomZone).length;
      section.appendChild(creer("p", "vide", total === 0
        ? "Aucune maison référencée pour le moment dans cette zone. Vous pouvez en ajouter dans le fichier data.js."
        : "Aucune maison ne correspond à votre recherche dans cette zone."));
    } else {
      const villages = [...new Set(maisonsZone.map(m => m.village))].sort(trierFr);
      villages.forEach(nomVillage => {
        const bloc = creer("div", "village");
        bloc.appendChild(creer("h3", "village-titre", nomVillage));
        const grille = creer("div", "grille");
        maisonsZone
          .filter(m => m.village === nomVillage)
          .sort((a, b) => trierFr(a.nom, b.nom))
          .forEach(m => grille.appendChild(carteMaison(m)));
        bloc.appendChild(grille);
        section.appendChild(bloc);
      });
    }
    zoneResultats.appendChild(section);
  });

  if (trouvees.length === 0 && !zone) {
    zoneResultats.appendChild(creer("p", "vide", "Aucune maison ne correspond à votre recherche."));
  }
}

champRecherche.addEventListener("input", afficher);
filtreZone.addEventListener("change", () => { remplirVillages(); afficher(); });
filtreVillage.addEventListener("change", afficher);
boutonReset.addEventListener("click", () => {
  champRecherche.value = "";
  filtreZone.value = "";
  remplirVillages();
  afficher();
});

remplirZones();
remplirVillages();
afficher();
