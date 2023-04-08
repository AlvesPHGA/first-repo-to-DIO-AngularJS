// about condicionais
const priceGasoline = 4.89,
   priceAlchool = 2.59,
   kmSpendingCar = 16,
   kmTravel = 1220;

let fuelCar,
   valueTotal,
   valueGas = (kmTravel / kmSpendingCar) * priceGasoline,
   valueAlc = (kmTravel / kmSpendingCar) * priceAlchool;

fuelCar = 'Alchool';

fuelCar === 'Gasoline' ? (valueTotal = valueGas) : (valueTotal = valueAlc);

console.log(valueTotal.toFixed(2));
