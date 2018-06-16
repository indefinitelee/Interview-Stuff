const uniqSort = function(arr) {
  const memo = {[arr[0]] : true};
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!memo[arr[i]]) {
      result.push(arr[i]); 
      memo[arr[i]] = true; 
    }
  }
  return result.sort((a,b) => a - b);
}

uniqSort([4,2,2,3,3,3,3,2,2,4])