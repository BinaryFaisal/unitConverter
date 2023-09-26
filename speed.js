
let kmhRef = document.getElementById("kmh");
let mhRef = document.getElementById("mh");
let msRef = document.getElementById("ms");

let convertFromKmh = () => {
  let kmh = kmhRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  mhRef.value = (kmh * 0.6214).toFixed(2);
  msRef.value = (kmh * 0.2778).toFixed(2);
};

let convertFromMh = () => {
  let mh = mhRef.value;
  kmhRef.value = (mh * 1.6093).toFixed(2);
  msRef.value = (mh * 0.4471).toFixed(2);
};

let convertFromMs = () => {
  let ms = msRef.value;
  kmhRef.value = (ms * 3.6).toFixed(2);
  mhRef.value = (ms * 2.2369).toFixed(2);
};

kmhRef.addEventListener("input", convertFromKmh);
mhRef.addEventListener("input", convertFromMh);
msRef.addEventListener("input", convertFromMs);
window.addEventListener("load", convertFromKmh);