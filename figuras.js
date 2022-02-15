//Código del Cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm");

function perimetroCuadrado (lado){
    return lado*4;    
}

//console.log("El perímetro del cuadrado es:  "+perimetroCuadrado+" cm");

function areaCuadrado(lado){
    return lado*lado;
} 

//console.log("El área del cuadrado es:  "+areaCuadrado+" cm^2");

console.groupEnd();

//Código del Triángulo
console.group("Triangulo")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const base = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triangulo miden: "+ladoTriangulo1+" cm "+ladoTriangulo2+" cm "+base+" cm");
//console.log("La altura del triangulo es: "+alturaTriangulo+" cm")

function perimetroTriangulo (lado1,lado2, base){
    return lado1+lado2+base;
}
//console.log("El perímetro del Triangulo es:  "+perimetroTriangulo+" cm");

function areaTriangulo (base, h){
   return (base*h)/2;
    }
//console.log("El área del Triangulo es:  "+areaTriangulo+" cm^2");

console.groupEnd();


// Código del círculo
console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
    return radio*2;
}

//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
//const PI = Math.PI;
//console.log("PI es: "+PI);
// Circunferencia
function perimetroCirculo (diametro){
    return diametro*Math.PI;
} 
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
// Área
function areaCirculo (radio){
    return radio*radio*Math.PI;
} 
//console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularperimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}