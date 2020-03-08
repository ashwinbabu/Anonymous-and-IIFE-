let array = []
for(i=0;i<=100;i++){
    array.push(i);
}

let oddNumbers = array.filter((number) => {
    for(i=1;i<array.length;i++){
        if(number%2===0) 
        return false
        return number
    }
});

console.log(oddNumbers);