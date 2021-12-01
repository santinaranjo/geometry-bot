// Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    console.log("El lado del cuadrado se ha ajustado a: " + lado);
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

console.log("El perímetro del cuadrado es: " + perimetroCuadrado(5) + "cm");
console.log("El perímetro del cuadrado es: " + areaCuadrado(5) + "cm");

console.groupEnd();


// Código del triángulo

console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    console.log("Las medidas del triángulo se han ajustado a: lado1 = " + lado1 + ", lado2 = " + lado2 + ", base = " + base);
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.log("El perímetro del triángulo es de: " + perimetroTriangulo(6, 6, 4) + "cm");
console.log("El area del triángulo es de: " + areaTriangulo(4, 5.5) + "cm");

console.groupEnd();


// Código del círculo

console.group("Circulo");

const PI = Math.PI; 

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

const areaCirculo= (radio) => (radio * radio) * PI;

console.log("El diametro del círculo es de: " + diametroCirculo(4) + "cm");
console.log("El perímetro del círculo es de: " + perimetroCirculo(4) + "cm");
console.log("El area del círculo es de: " + areaCirculo(4) + "cm^2");


console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
