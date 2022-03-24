const prompt = require("prompt-sync")({ sigint: true });

const operaciones = ["1. Suma", "2. Resta", "3. Multiplicación", "4. División"];

console.log(operaciones.join("\n\n"));
const operacion = prompt("Ingresa la operación que quieres realizar: ");

switch (+operacion) {
  case 1:
    console.log("-------------- Testeo de Operaciones / Suma --------------");
    {
      const numero1 = prompt("Ingrese el primer numero: ");
      const numero2 = prompt("Ingrese el segundo numero: ");

      if (typeof +numero1 === "number" && typeof +numero2 === "number") {
        //
      }

      function sumar(numero1, numero2) {
        return numero1 + numero2;
      }
      console.log(sumar(numero1, numero2));
    }
    break;
  case 2:
    console.log("-------------- Testeo de Operaciones / Resta --------------");
    {
      const numero1 = prompt("Ingrese el primer numero: ");
      const numero2 = prompt("Ingrese el segundo numero: ");

      if (typeof +numero1 === "number" && typeof +numero2 === "number") {
        //
      }

      function restar(numero1, numero2) {
        return numero1 - numero2;
      }
      console.log(restar(numero1, numero2));
      break;
    }
  case 3:
    console.log(
      "-------------- Testeo de Operaciones / Multiplicación --------------"
    );
    {
      const numero1 = prompt("Ingrese el primer numero: ");
      const numero2 = prompt("Ingrese el segundo numero: ");

      if (typeof +numero1 === "number" && typeof +numero2 === "number") {
        //
      }
      function multiplicar(numero1, numero2) {
        return numero1 * numero2;
      }
      console.log(multiplicar(numero1, numero2));
    }
    break;
  case 4:
    console.log(
      "-------------- Testeo de Operaciones / División --------------"
    );
    {
      const numero1 = prompt("Ingrese el primer numero: ");
      const numero2 = prompt("Ingrese el segundo numero: ");

      if (typeof +numero1 === "number" && typeof +numero2 === "number") {
        //
      }
      function dividir(numero1, numero2) {
        if (numero2 === 0) {
          return "Ingrese un valor valido";
        }

        return numero1 / numero2;
      }

      console.log(dividir(numero1, numero2));
    }
  default:
    break;
}
