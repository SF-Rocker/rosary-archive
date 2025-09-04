const light-verses = {
  dr1899: {
    baptism: "DR: And Jesus being baptized, went up straightway out of the water...",
    wedding: "DR: And the third day there was a marriage in Cana of Galilee...",
    proclamation: "DR: Repent, and believe the Gospel...",
    transfiguration: "DR: And he was transfigured before them...",
    eucharist: "DR: This is my body, which is given for you..."
  },
  kjv: {
    baptism: "KJV: And Jesus, when he was baptized, went up straightway out of the water...",
    wedding: "KJV: And the third day there was a marriage in Cana of Galilee...",
    proclamation: "KJV: Repent ye, and believe the gospel...",
    transfiguration: "KJV: And was transfigured before them...",
    eucharist: "KJV: This is my body, which is given for you..."
  }
};

function loadLightVerse(versionKey, mysteryKey, targetId) {
  const verse = lightVerses[versionKey]?.[mysteryKey];
  const target = document.getElementById(targetId);
  if (verse && target) {
    target.textContent = verse;
  }
}

