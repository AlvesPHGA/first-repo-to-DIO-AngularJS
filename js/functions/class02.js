const calcMedia = (a, b, c) => {
   return (a + b + c) / 3;
};

const result = (media) => {
   if (media < 5) {
      console.log(`${media.toFixed(1)} : Reprovou`);
   } else if (media >= 5 && media < 7) {
      console.log(`${media.toFixed(1)} : Recuperação`);
   } else {
      console.log(`${media.toFixed(1)} : Aprovado`);
   }
};

function main() {
   const media01 = 10,
      media02 = 3,
      media03 = 8;

   const resultOperationCalcule = calcMedia(media01, media02, media03);

   console.log(result(resultOperationCalcule));
}

main();
