var uniqueMorseRepresentations = function (words) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let set = {},
    map = {};

  for (let i = 0; i < alphabet.length; i++) {
    set[alphabet[i]] = morseCode[i];
  }

  for (let i = 0; i < words.length; i++) {
    let str = [];
    for (let j = 0; j < words[i].length; j++) {
      // if(alphabet[words[i][j]] !== undefined){
      str.push(set[words[i][j]]);
      // }
    }
    // console.log(str.join(''))
    if (map[str.join("")] !== undefined) {
      continue;
    } else {
      map[str.join("")] = 1;
    }
  }
  return Object.keys(map).length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
