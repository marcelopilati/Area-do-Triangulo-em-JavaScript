import input from 'readline-sync';

console.log("Area do Triangulo!!\n");

let base = input.question("Insira o valor da base: \n");
let altura = input.question("Insira o valor da altura: \n");

let area = base * altura;

console.log("A Area do Triangulo e: " +area);