function BinarioADecimal(num){
    // numero -> string
    // num string -> array  
      // '1010' -> ['1','0','1','0'] -> length -> 4
      //					  0		1		2		 3   -> lo que tenemos
      //					  3   2   1    0
      var array = num.split('')
      let sum = 0;
    //comenzaria de esta manera ( 4 - 1 = 3 ) luego se resta con la primera posicion del array que es 0 (3 - 0 = 3)
    /* --------------------------Primera solucion ---------------------------------- 
        for(let i = 0; i < array.length; i++){
        sum = sum + Math.pow(2, array.length-1-i) * array[i]
      }
    --------------------Segunda solucion --------------------------------------*/
      var position = 0;
      for(let j = array.length-1; j >=0 ; j--){
        sum = sum + Math.pow(2, position) * array[j]
        position++
      }
      return sum;
    // string -> numero decimal
    //sumatoria (2^ posicion * valor en dicha posicion)  
    // 1010
    // 3210
    // 2^3*1 + 2^2*0 + 2^1*1 + 2^0*0
    // 8 + 0 + 2 + 0 = 10
    }
    
    function DecimalABinario(num){
      
      if(num <= 0 ) return '0000000000';
      
      let array = []
      
      while( num > 0 ){
        array.unshift( num%2 )
        num = Math.floor(num / 2 )
      }
      
      return array.join('')
     
      //num = 10
      // 10/2=5 [0]
      // 5/2=2 [1]
      // 2/2=1 [0]
      // 1/2=0 [1]
      // leemos de abajo hacia arriba 1010
    }
     console.log(DecimalABinario(34))