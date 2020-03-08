let array = []
for(i=0;i<=100;i++){
    array.push(i);
}
(function(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
})(array);

