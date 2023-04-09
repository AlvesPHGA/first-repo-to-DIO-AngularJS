// const media01 = 8,
//    media02 = 10,
//    media03 = 8;

// let mediaFinal = (media01 + media02 + media03) / 3;

// if (mediaFinal < 5) {
//    console.log(`${mediaFinal.toFixed(1)} : Reprovou`);
// } else if (mediaFinal >= 5 && mediaFinal < 7) {
//    console.log(`${mediaFinal.toFixed(1)} : Recuperação`);
// } else {
//    console.log(`${mediaFinal.toFixed(1)} : Aprovado`);
// }

// -------------------------------------------------

// IMC
// const weightKg = 190,
//    height = 1.75,
//    resultCalc = weightKg / Math.pow(height, 2);

// let resultIMC;

// if (resultCalc < 18.5) {
//    resultIMC = `${resultCalc.toFixed(2)} Kg -> Abaixo do peso`;
// } else if (resultCalc >= 18.5 && resultCalc < 25) {
//    resultIMC = `${resultCalc.toFixed(2)} Kg -> Peso normal`;
// } else if (resultCalc >= 25 && resultCalc < 30) {
//    resultIMC = `${resultCalc.toFixed(2)} Kg -> Acima do peso`;
// } else if (resultCalc >= 30 && resultCalc < 40) {
//    resultIMC = `${resultCalc.toFixed(2)} Kg -> Obeso`;
// } else {
//    resultIMC = `${resultCalc.toFixed(2)} Kg -> Obesidade grave`;
// }

// console.log(resultIMC);

// calc to buy
const priceProduct = 1100,
   payDeb = priceProduct * 0.1,
   payMoneyOrPix = priceProduct * 0.15,
   payInstallment = priceProduct * 0.1;

let formPayment = '5x',
   finalResult;

if (formPayment === 'dinheiro' || formPayment === 'pix') {
   finalResult = `R$ ${priceProduct - payMoneyOrPix}`;
} else if (formPayment === 'debito') {
   finalResult = `R$ ${priceProduct - payDeb}`;
} else if (formPayment === '2x') {
   finalResult = `R$ ${priceProduct}`;
} else {
   finalResult = `R$ ${priceProduct + payInstallment}`;
}

console.log(finalResult);
