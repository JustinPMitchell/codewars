function Urlify(word, wordLength) {
  word = word.split("");
  word.splice(wordLength, word.length - wordLength);
  for(let i = 0; i < word.length; i++) {
    if(word[i] === " ")
      word.splice(i, 1, "%20");
  }
  return word.join("");
}
let word = "Mr John Smith     ";
let wordLength = 13;
Urlify(word, wordLength);