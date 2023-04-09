const media01 = 8,
   media02 = 10,
   media03 = 8;

let mediaFinal = (media01 + media02 + media03) / 3;

if (mediaFinal < 5) {
   console.log(`${mediaFinal.toFixed(1)} : Reprovou`);
} else if (mediaFinal >= 5 && mediaFinal < 7) {
   console.log(`${mediaFinal.toFixed(1)} : Recuperação`);
} else {
   console.log(`${mediaFinal.toFixed(1)} : Aprovado`);
}
