const glorious-verses = {
  dr1899: {
    resurrection: "DR: And on the first day of the week, very early in the morning...",
    ascension: "DR: And he led them out as far as Bethany, and lifting up his hands...",
    pentecost: "DR: And suddenly there came a sound from heaven as of a mighty wind...",
    assumption: "DR: And a great sign appeared in heaven: a woman clothed with the sun...",
    coronation: "DR: And upon her head a crown of twelve stars..."
  },
  kjv: {
    resurrection: "KJV: Now upon the first day of the week, very early in the morning...",
    ascension: "KJV: And he led them out as far as to Bethany, and he lifted up his hands...",
    pentecost: "KJV: And suddenly there came a sound from heaven as of a rushing mighty wind...",
    assumption: "KJV: And there appeared a great wonder in heaven; a woman clothed with the sun...",
    coronation: "KJV: And upon her head a crown of twelve stars..."
  }
};

function loadGloriousVerse(versionKey, mysteryKey, targetId) {
  const verse = gloriousVerses[versionKey]?.[mysteryKey];
  const target = document.getElementById(targetId);
  if (verse && target) {
    target.textContent = verse;
  }
}

