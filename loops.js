//https://aprendeconalf.es/docencia/python/ejercicios/bucles/

const prompt = require("prompt-sync")({ sigint: true });

const exercises = [
  "Ejercicio 1: Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.",
  "Ejercicio 2: Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas.",
  "Ejercicio 3: Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.",
  "Ejercicio 4: Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por pantalla el número de veces que aparece la letra en la frase.",
];

console.log(exercises.join("\n\n"));
const exercise = prompt("Ingresa el numero de ejercicio que quieres ver: ");

switch (+exercise) {
  case 1:
    {
      console.log(
        "Ejercicio 1: Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces."
      );
      const word = prompt("Ingresa una palabra: ");
      for (let i = 0; i <= 9; i++) {
        console.log(word);
      }
    }
    break;
  case 2:
    {
      console.log(
        "Ejercicio 2: Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas."
      );
      const integer = prompt("Ingrese un numero entero positivo: ");
      const elements = [];

      for (let i = integer; i >= 0; i--) {
        elements.push(i);
      }

      console.log(elements.join(", ") + ",");
    }
    break;
  case 3:
    {
      console.log(
        "Ejercicio 3: Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido."
      );
      const integer = prompt("Ingrese un numero entero positivo: ");

      for (let i = 1; i <= integer; i++) {
        const elements = [];
        for (let j = 0; j < i; j++) {
          elements.push("*");
        }
        console.log(elements.join(""));
      }
    }
    break;
  case 4: {
    console.log(
      "Ejercicio 4: Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por pantalla el número de veces que aparece la letra en la frase."
    );

    const phrase = prompt("Ingrese una frase: ");
    const letter = prompt("Ingrese una letra: ");

    let ocurrences = 0;
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === letter) {
        ocurrences++;
      }
    }
    console.log(
      `La letra '${letter}' aparece ${ocurrences} ${
        ocurrences > 1 || ocurrences === 0 ? "veces" : "vez"
      } en la frase '${phrase}'`
    );
  }
  default:
    break;
}
