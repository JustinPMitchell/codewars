function nbDig(n, d) {
    // your code
    let count = 0;
    for(let i = 0; i <= n; i++) {
      let current = i * i
      current = current.toString();
      for(let j = 0; j < current.length; j++) {
        if(current[j] === d.toString()) {
          count++
        }
      }
    }
    return count;
}