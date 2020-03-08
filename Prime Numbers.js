let array = []
for(i=0;i<=100;i++){
    array.push(i);
}
primeNumbers = array.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  });
  
  console.log(primeNumbers);