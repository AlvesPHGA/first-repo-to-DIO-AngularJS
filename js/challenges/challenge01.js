let priceFuel = 4.89,
   kmSpendingCar = 16,
   kmTravel = 1220,
   valueTotal;

valueTotal = ((kmTravel * 2) / kmSpendingCar) * priceFuel;

console.log(valueTotal.toFixed(2));
