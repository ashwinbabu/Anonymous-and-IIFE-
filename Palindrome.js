var number = [202,808,111,123,234,654,1];

let palindrome = number.filter((x)=>{
    let rev = 0;
    let r = 0;
    number=x;
    while(x>0){
        r = x%10;
        rev = (rev*10) + r;
        x = Math.floor(x/10);
    }
      if(rev===number)
      return true
});
console.log(palindrome);