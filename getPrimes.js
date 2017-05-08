function getPrimes(number) {
    var arr = []; 
    if (typeof(number)!== "number"){
        return "invalid input"
    }
    else if((number<0) || (number<2)){
        return "No prime numbers below the given input"
    }
    else{
          for(var i = 2; i<=number;i++){
              var isPrime = true; 
             for(var j = 2; j <= (Math.sqrt(i)); j++){
               if (i % j==0){
                 isPrime=false;
                 break;
               }
             }if(isPrime == true){
               arr.push(i);
            }
               
           }
        }
        return arr;
      }
