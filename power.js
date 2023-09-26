// Get references to the input and output elements
let hpRef = document.getElementById("hp");
let kwRef = document.getElementById("kw");
let jpsRef = document.getElementById("jps");

// Conversion functions
let convertFromHP = () => {
  let hp = hpRef.value;
  kwRef.value = (hp * 0.7457).toFixed(2);
  jpsRef.value = (hp * 745.7).toFixed(2);
};

let convertFromKW = () => {
  let kw = kwRef.value;
  hpRef.value = (kw / 0.7457).toFixed(2);
  jpsRef.value = (kw * 1000).toFixed(2);
};

let convertFromJPS = () => {
  let jps = jpsRef.value;
  hpRef.value = (jps / 745.7).toFixed(2);
  kwRef.value = (jps / 1000).toFixed(2);
};

// Add event listeners
hpRef.addEventListener("input", convertFromHP);
kwRef.addEventListener("input", convertFromKW);
jpsRef.addEventListener("input", convertFromJPS);

// Initialize the conversion on page load
window.addEventListener("load", convertFromHP);
