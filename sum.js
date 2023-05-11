function sum (numero){
    var suma = 0;

    for (i=0 ; i <= numero; i++ ){

        suma=suma+i;


    }

    return suma ;
    
    }

console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120