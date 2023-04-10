const discount = (price, form) => {
   const payDeb = price * 0.1,
      payMoneyOrPix = price * 0.15;

   return form === 1 ? `R$ ${price - payDeb}` : `R$ ${price - payMoneyOrPix}`;
};

const formPayment = (price, form) => {
   const payInstallment = price * 0.1;

   if (form === 1 || form === 2) {
      return discount(price, form);
   } else if (form === 3) {
      return `R$ ${price}`;
   } else {
      return `R$ ${price + payInstallment}`;
   }
};

const main = () => {
   const priceProduct = 1100;
   console.log(formPayment(priceProduct, 2));
};

main();
