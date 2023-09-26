
let atmRef = document.getElementById("atm");
let pRef = document.getElementById("p");
let bRef = document.getElementById("b");

let convertFromAtm = () => {
  let atm = atmRef.value;
  pRef.value = (atm * 101325).toFixed(5);
  bRef.value = (atm * 1.0133).toFixed(5);
};

let convertFromPascal = () => {
  let p = pRef.value;
  atmRef.value = (p * 0.00000986932).toFixed(5);
  bRef.value = (p * 0.00001).toFixed(5);
};

let convertFromBar = () => {
  let b = bRef.value;
  atmRef.value = (b * 0.986923).toFixed(5);
  pRef.value = (b * 100000).toFixed(5);
};

atmRef.addEventListener("input", convertFromAtm);
pRef.addEventListener("input", convertFromPascal);
bRef.addEventListener("input", convertFromBar);
window.addEventListener("load", convertFromAtm);