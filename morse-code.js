decodeMorse = function(morseCode){
  //your code here
  var words = morseCode.split("  ");
  var translatedWords = [];
  for(var i = 0; i < words.length; i++) {
    var letters = words[i].split(" ");
    var translatedLetters = [];
    for(var j = 0; j < letters.length; j++) {
      translatedLetters.push(MORSE_CODE[letters[j]]);
    }
    translatedWords.push(translatedLetters.join(""));
  }
  var translatedStatement = translatedWords.join(" ");
  return translatedStatement.trim();
}