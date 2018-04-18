function digPow(n, p){
  // find the value of the sum of the digits of n taken to the successive powers of p
  let successivePowerSum = 0;
  // find the number of digits in n
  let numberDigits = 0;
  let digitTest = n;
  for(;;) {
    if (Math.floor(digitTest) === 0) {
      break;
    }
    else {
      digitTest = Math.floor(digitTest / 10);
      numberDigits++;
    }
  }
  digitTest = n;
  console.log("number of digits:", numberDigits);
  for (let i = 1; i <= numberDigits; i++) {
    successivePowerSum += Math.pow((Math.floor(digitTest % Math.pow(10, i))), i);
    console.log("this is the math:", Math.pow((Math.floor(digitTest % Math.pow(10, i))), i));
    console.log("this is sum: ", successivePowerSum);
    digitTest = Math.floor(digitTest / (Math.pow(10, i)));
  }
  // check to see if n to a power returns the value above
  // keep dividing n by n until below 1
  for (let i = successivePowerSum, temp = n, power = 1; i > 1; i /= temp, power++ ) {
    // if so return the power
    if(i === temp)
          console.log("this is reached", i, temp, successivePowerSum);
      return power;
    if((i/temp) < 1) {
      // if not return -1
      power = -1;
      return power;
    }
  }  
}


digPow(89, 1)
digPow(92, 1); // should return -1