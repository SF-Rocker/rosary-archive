const sorrowful-verses = {
  dr1899: {
    agony: "DR: And being in an agony, he prayed more earnestly...",
    scourging: "DR: Then Pilate took Jesus and scourged him...",
    crowning: "DR: And plaiting a crown of thorns, they put it upon his head...",
    carrying: "DR: And bearing his own cross, he went forth to the place called Calvary...",
    crucifixion: "DR: And when they were come to the place, which is called Calvary..."
  },
  kjv: {
    agony: "KJV: And being in an agony he prayed more earnestly...",
    scourging: "KJV: Then Pilate therefore took Jesus, and scourged him...",
    crowning: "KJV: And the soldiers platted a crown of thorns, and put it on his head...",
    carrying: "KJV: And he bearing his cross went forth into a place called the place of a skull...",
    crucifixion: "KJV: And when they were come to the place, which is called Calvary..."
  }
};

function loadSorrowfulVerse(versionKey, mysteryKey, targetId) {
  const verse = sorrowfulVerses[versionKey]?.[mysteryKey];
  const target = document.getElementById(targetId);
  if (verse && target) {
    target.textContent = verse;
  }
}

