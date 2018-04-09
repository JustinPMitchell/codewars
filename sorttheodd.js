function sortArray(array) {
  // Return a sorted array.
  // filter the odd numbers into it's own array
  var oddNumbers = array.filter( unit => (unit % 2) === 1 )
  // sort these odd numbers in order
  oddNumbers.sort(function(a,b) { return a-b; });
  // replace the numbers in the existing array skipping the even numbers
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      array.splice(i, 1, oddNumbers.shift());
      
    }
  }
  return array;
}