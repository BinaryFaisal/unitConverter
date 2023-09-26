let cRef = document.getElementById("c");
let fRef = document.getElementById("f");
let kRef = document.getElementById("k");

let convertFromCelcius = () => {
  let c = cRef.value;
  fRef.value = ((c * 9/5) + 32).toFixed(2);
  kRef.value = (parseFloat(c) + 273.15).toFixed(2); // Fix here
};

let convertFromFahreinheit = () => {
  let f = fRef.value;
  cRef.value = ((f - 32) * 5/9).toFixed(2);
  kRef.value = (((f - 32) * 5/9) + 273.15).toFixed(2); // Fix here
};

let convertFromKelvin = () => {
  let k = kRef.value;
  cRef.value = (k - 273.15).toFixed(2);
  fRef.value = (((k - 273.15) * 9/5) + 32).toFixed(2); // Fix here
};

cRef.addEventListener("input", convertFromCelcius);
fRef.addEventListener("input", convertFromFahreinheit);
kRef.addEventListener("input", convertFromKelvin);
window.addEventListener("load", convertFromCelcius);
