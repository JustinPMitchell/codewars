// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
  //your code here
//   if(array1.length !== array2.length)
//     return false;
  if (array1 === [] || array1 === null || array2 === [] || array2 === null)
    return false;
  array1.sort(function(a,b) {return a-b;});
  array2.sort(function(a,b) {return a-b;});
  for(var i = 0; i < array1.length; i++) {
    if (array1[i] !== Math.sqrt(array2[i]))
      return false;
  }
  return true;
}