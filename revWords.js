function spinWords(str){
  return str.split(" ")
   .map(function (x) {
            if (x.length >= 5) {
          return x.split("").reverse().join("")
           }
            return x
        }).join(' ')
}
