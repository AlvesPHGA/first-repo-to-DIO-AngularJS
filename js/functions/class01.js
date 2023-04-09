function operationIMC(weightKg, height) {
   return weightKg / Math.pow(height, 2);
}

function resultIMC(imc) {
   if (imc < 18.5) {
      return `${imc.toFixed(2)} Kg -> Abaixo do peso`;
   } else if (imc >= 18.5 && imc < 25) {
      return `${imc.toFixed(2)} Kg -> Peso normal`;
   } else if (imc >= 25 && imc < 30) {
      return `${imc.toFixed(2)} Kg -> Acima do peso`;
   } else if (imc >= 30 && imc < 40) {
      return `${imc.toFixed(2)} Kg -> Obeso`;
   } else {
      return `${imc.toFixed(2)} Kg -> Obesidade grave`;
   }
}

function main() {
   const weightKg = 78,
      height = 1.8;

   const imc = operationIMC(weightKg, height);

   console.log(resultIMC(imc));
}

main();
