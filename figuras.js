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
console.log("El area del cuadrado es: " + areaCuadrado(5) + "cm");

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
    return (diametro * PI).toFixed(2);
}

const areaCirculo = (radio) => ((radio * radio) * PI).toFixed(2);

console.log("El diametro del círculo es de: " + diametroCirculo(4) + "cm");
console.log("El perímetro del círculo es de: " + perimetroCirculo(4) + "cm");
console.log("El area del círculo es de: " + areaCirculo(4) + "cm^2");


console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("outputCuadrado").innerHTML = ("Perimeter: ") + perimetro;
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("outputCuadrado").innerHTML = ("Area: ") + area;
};


function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    document.getElementById("outputCirculo").innerHTML = ("Perimeter: ") + perimetro;
};


function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    document.getElementById("outputCirculo").innerHTML = ("Area: ") + area;
};


function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTriangleSideA");
    const lado1Value = parseFloat(lado1.value);
    const lado2 = document.getElementById("InputTriangleSideB");
    const lado2Value = parseFloat(lado2.value);
    const base = document.getElementById("InputTriangleBase");
    const baseValue = parseFloat(base.value);
    const altura = document.getElementById("InputTriangleHeight");
    const alturaValue = altura.value;

    if (lado1Value === lado2Value) {
        const perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
        document.getElementById("outputTriangulo").innerHTML = ("Perimeter: ") + perimetro;
    } else {
        alert("Calculations only for isosceles triangles. Both sides must have the same value.");
    };
};


function calcularAreaTriangulo() {
    const base = document.getElementById("InputTriangleBase");
    const baseValue = parseFloat(base.value);
    const altura = document.getElementById("InputTriangleHeight");
    const alturaValue = parseFloat(altura.value);

    const area = areaTriangulo(baseValue, alturaValue);
    document.getElementById("outputTriangulo").innerHTML = ("Perimeter: ") + area;
};

