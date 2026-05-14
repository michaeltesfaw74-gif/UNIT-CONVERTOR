// LENGTH CONVERSION

function convertLength() {

  let value =
    parseFloat(document.getElementById("lengthInput").value);

  let from =
    document.getElementById("fromLength").value;

  let to =
    document.getElementById("toLength").value;

  if (isNaN(value)) {

    document.getElementById("lengthResult").innerText =
      "Please enter a valid number";

    return;
  }

  // convert to meters

  let inMeters;

  if (from === "meter") {
    inMeters = value;
  }

  if (from === "centimeter") {
    inMeters = value / 100;
  }

  if (from === "kilometer") {
    inMeters = value * 1000;
  }

  // convert from meters

  let result;

  if (to === "meter") {
    result = inMeters;
  }

  if (to === "centimeter") {
    result = inMeters * 100;
  }

  if (to === "kilometer") {
    result = inMeters / 1000;
  }

  document.getElementById("lengthResult").innerText =
    `${value} ${from} = ${result.toFixed(4)} ${to}`;
}



// WEIGHT CONVERSION

function convertWeight() {

  let value =
    parseFloat(document.getElementById("weightInput").value);

  let from =
    document.getElementById("fromWeight").value;

  let to =
    document.getElementById("toWeight").value;

  if (isNaN(value)) {

    document.getElementById("weightResult").innerText =
      "Please enter a valid number";

    return;
  }

  // convert to grams

  let inGrams;

  if (from === "kg") {
    inGrams = value * 1000;
  }

  if (from === "g") {
    inGrams = value;
  }

  if (from === "mg") {
    inGrams = value / 1000;
  }

  // convert from grams

  let result;

  if (to === "kg") {
    result = inGrams / 1000;
  }

  if (to === "g") {
    result = inGrams;
  }

  if (to === "mg") {
    result = inGrams * 1000;
  }

  document.getElementById("weightResult").innerText =
    `${value} ${from} = ${result.toFixed(4)} ${to}`;
}