// There are three types of edits that can be performed on strings, insertion, deletion, and replacing a character.  Write a function to check if they are one edit (or 0) away.

function oneAway(word, editedWord) {
  word = word.split("");
  editedWord = editedWord.split("");
  while(word[0] === editedWord[0] && word.length) {
    word.shift();
    editedWord.shift();
  }
  while(word[word.length-1] === editedWord[editedWord.length-1] && word.length) {
    word.pop();
    editedWord.pop();
  }
  if(word.length > 1 || editedWord.length > 1)
    return false;
  else
    return true;
}

// Test Cases
oneAway("wo", "w"); // returns true
oneAway("wor", "w"); // returns false
oneAway("wo", "war"); // returns false
oneAway("wo", "wa"); // returns true
oneAway("Supercalifragilisticexpialidocious", "Supercalifragilisticzxpialidocious"); // returns true

// PROS: Goes through both words only once, solved in n time
// CONS: Needs to split both words multiplying the time complexity