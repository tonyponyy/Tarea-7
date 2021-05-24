var valores = [true, 5, false,"hola","adios",2];

var elementostexto =[0,0];
var numeros=[];

// determinar cual de las palabras es mayor;
for (let index = 0; index < valores.length; index++) {
    if ( typeof valores[index]== 'string' ){
        if (valores[index].length >= elementostexto[0] ){
            elementostexto[0]= valores[index].length;
            elementostexto[1]= index;
        }
    }
}

console.log("La palabra mas larga es "+valores[elementostexto[1]]+" con "+elementostexto[0]+" letras.");

//invertir los boolean

for (let index = 0; index < valores.length; index++) {
    if ( typeof valores[index]== 'boolean' ){
     valores[index] = !valores[index];
    }
    
}

//hacer operaciones aritmeticas :

//conseguimos los numeros del array y los ponemos en otra array
for (let index = 0; index < valores.length; index++) {
    if ( typeof valores[index]== 'number' ){
        numeros.push(valores[index]);        
    }
}

for (var index = 0; index < numeros.length; index++) {
    
    for (var index2 = 0; index2 < numeros.length; index2++) {
        console.log( numeros[index] +" + "+ numeros[index2]+ " = "+ (numeros[index]+numeros[index2]) );
        console.log( numeros[index] +" - "+ numeros[index2]+ " = "+ (numeros[index]-numeros[index2]) );
        console.log( numeros[index] +" * "+ numeros[index2]+ " = "+ (numeros[index]*numeros[index2]) );
        console.log( numeros[index] +" / "+ numeros[index2]+ " = "+ (numeros[index]/numeros[index2]) );
        console.log( numeros[index] +" % "+ numeros[index2]+ " = "+ (numeros[index]%numeros[index2]) );
        
    }

    
}