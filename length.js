let mRef = document.getElementById("m");
let yRef = document.getElementById("y");
let fRef = document.getElementById("f");

let convertFromM = () => {
  let m = mRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  yRef.value = (m * 1.093).toFixed(2);
  fRef.value = (m * 3.280).toFixed(2);
};

let convertFromY = () => {
  let y = yRef.value;
  mRef.value = (y * 0.914).toFixed(2);
  fRef.value = (y * 3).toFixed(2);
};

let convertFromF = () => {
  let f = fRef.value;
  mRef.value = (f * 0.3048).toFixed(2);
  yRef.value = (f * 0.333).toFixed(2);
};

mRef.addEventListener("input", convertFromM);
yRef.addEventListener("input", convertFromY);
fRef.addEventListener("input", convertFromF);
window.addEventListener("load", convertFromM);