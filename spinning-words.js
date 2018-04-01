function spinWords(sentence){
  //TODO Have fun :)
  var words = sentence.split(" ");
  for(var i = 0; i < words.length; i++) {
    if(words[i].length >= 5)
      words[i] = words[i].split("").reverse().join("");
  }
  var reverse = words.join(" ");
  return reverse;
}