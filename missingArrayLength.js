// I'm concerned about checking for a null
// I'm not sure of the time complexity of lengths, I'm thinking it might not be too bad
// sorting will be nlogn + n for going through the list again + n for finding the lengths\
// returning in a for loop might need to break

function missingArrayLength(arr) {
  // if the array is empty or null return 0
  if(!Array.isArray(arr))
    return 0;
  if(arr.length === 0) {
    return 0;
  }
  lengthsArray = [];
  // store the lengths of each array in another array
  for(var i = 0; i < arr.length; i++) {
    // if an array in the array is empty or null return 0]
    if(!Array.isArray(arr))
      return 0;
    if(arr[i] === []) {
      return 0;
    }
    lengthsArray.push(arr[i].length);    
  }
  // sort the array 
  lengthsArray.sort(function(a, b) { return a-b;});
  // increment through the sorted array starting with a value = min
  for(var i = 0, temp = lengthsArray[0]; i < lengthsArray.length; i++, temp++) {
    // when you reach a length that is not equal to the incremented value, return the missing number, or current value
    if(lengthsArray[i] !== temp)
      return temp;
  }
}

testArr = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]; // --> 3
testArr2 = null;

console.log(missingArrayLength(testArr2));