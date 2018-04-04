function productFib(prod){
  var fibCurrent = 0;
  var fibCurrentPlus = 1;
  var solution = [];
  // go through the numbers and multiply by the next fib
  for(var i = 0; i <= prod; i++) {
    // if this is = to prod, return array of both numbers and true
    if(fibCurrent * fibCurrentPlus === prod) {
      solution.push(fibCurrent);
      solution.push(fibCurrentPlus);
      solution.push(true);
      return solution;
    }
    //if this is > prod, return array of both numbers and false
    else if(fibCurrent * fibCurrentPlus > prod) {
      solution.push(fibCurrent);
      solution.push(fibCurrentPlus);
      solution.push(false);
      return solution;
    }
    //change fib numbers
    var temp = fibCurrent;
    fibCurrent = fibCurrentPlus;
    fibCurrentPlus += temp;
  }
  return solution;
}