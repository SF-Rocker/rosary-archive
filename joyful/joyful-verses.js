 const joyful-verses = {
  dr1899: {
    annunciation: "DR: And in the sixth month, the angel Gabriel was sent from God...",
    visitation: "DR: And Mary rising up in those days, went into the hill country...",
    nativity: "DR: And she brought forth her firstborn son, and wrapped him in swaddling clothes...",
    presentation: "DR: And when the days of her purification were accomplished...",
    finding: "DR: And it came to pass, after three days they found him in the temple..."
  },
  kjv: {
    annunciation: "KJV: And in the sixth month the angel Gabriel was sent from God...",
    visitation: "KJV: And Mary arose in those days, and went into the hill country...",
    nativity: "KJV: And she brought forth her firstborn son, and wrapped him in swaddling clothes...",
    presentation: "KJV: And when the days of her purification according to the law of Moses were accomplished...",
    finding: "KJV: And it came to pass, that after three days they found him in the temple..."
  }
  // Add other versions here
};

function loadJoyfulVerse(versionKey, mysteryKey, targetId) {
  const verse = joyfulVerses[versionKey]?.[mysteryKey];
  const target = document.getElementById(targetId);
  if (verse && target) {
    target.textContent = verse;
  }
}
