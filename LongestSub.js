function longestSub(str){
    let len = str.length;
    let count = 0;
    let tempHigh = 0;
    let start = str[0]

    for (let i=1; i < len; i++){
            if (start !== str[i]){
                count++
            }
            start +1
           }
            if(count > tempHigh){
               tempHigh = count;
               count = 0;
        }
    return tempHigh;
}
longestSub("ayxdzvcffssddhijklmnopqrs");
