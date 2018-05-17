function pickPeaks(arr){
  console.log(arr);
  let current = arr[0];
  let peakPositions = {};
  peakPositions.pos = [];
  peakPositions.peaks = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
      peakPositions.pos.push(i);
      peakPositions.peaks.push(arr[i]);
    }
    // need to add when there is a plateau on the left side
    else if(arr[i-1] <= arr[i] && arr[i+1] <= arr[i]) {
      // if the previous element is a peak, then so is the current one
      if(peakPositions.peaks[peakPositions.peaks.length-1] === arr[i-1]) {
        console.log("this happened");   
      }
      else {
        // else cycle through elements until you reach the end of the array or a number that is larger than the current
        let j = i+1
        for(; j <= arr.length && arr[i] === arr[j]; j++) {;}
        // if the next number that is not equal to the current is smaller than current, then it is a peak
        if(arr[j] < arr[i]) {
          console.log("no this happened: ", i);
          peakPositions.pos.push(i);
          peakPositions.peaks.push(arr[i]);  
        }  
      }
    }   
  }
  return peakPositions;
}