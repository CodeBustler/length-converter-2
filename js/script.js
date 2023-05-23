// Input Text
let input = document.getElementById("input");
let result = document.getElementById("result");

// Selected Values
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

// Now add Event Listner
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// initial values
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  // result.value = input.value
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  // Compare the input & resultType value and add formula

  // METER
  if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
    // Meter -> Kilometer Formula
    result.value = Number(input.value) * 0.001;
  } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
    // Meter -> Centimeter
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "meter" && resultTypeValue === "foot") {
    // Meter -> Foot
    result.value = Number(input.value) * 3.28084;
  } else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
    // Meter -> Inch
    result.value = Number(input.value) * 39.3700787402;
  } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
    // Meter -> Inch
    result.value = input.value;
  }

  // Kilometer
  if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
    // Kilometer -> Kilometer Formula
    result.value = input.value;
  } else if (
    inputTypeValue === "kilometer" &&
    resultTypeValue === "centimeter"
  ) {
    // Kilometer -> Centimeter
    result.value = Number(input.value) * 100000;
  } else if (inputTypeValue === "kilometer" && resultTypeValue === "foot") {
    // Kilometer -> Foot
    result.value = Number(input.value) * 3280.839895;
  } else if (inputTypeValue === "kilometer" && resultTypeValue === "inch") {
    // Kilometer -> Inch
    result.value = Number(input.value) * 39370.07874;
  } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
    // Kilometer -> Inch
    result.value = Number(input.value) * 1000;
  }

  // Centimeter
  if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
    // Centimeter -> Kilometer Formula
    result.value = Number(input.value) * 0.00001;
  } else if (
    inputTypeValue === "centimeter" &&
    resultTypeValue === "centimeter"
  ) {
    // Centimeter -> Centimeter
    result.value = input.value;
  } else if (inputTypeValue === "centimeter" && resultTypeValue === "foot") {
    // Centimeter -> Foot
    result.value = Number(input.value) * 0.032808399;
  } else if (inputTypeValue === "centimeter" && resultTypeValue === "inch") {
    // Centimeter -> Inch
    result.value = Number(input.value) * 0.3937007874;
  } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
    // Centimeter -> meter
    result.value = Number(input.value) * 0.01;
  }

  // Foot
  if (inputTypeValue === "foot" && resultTypeValue === "kilometer") {
    // Foot -> Kilometer Formula
    result.value = Number(input.value) * 0.0003048;
  } else if (inputTypeValue === "foot" && resultTypeValue === "centimeter") {
    // Foot -> Centimeter
    result.value = Number(input.value) * 30.48;
  } else if (inputTypeValue === "foot" && resultTypeValue === "foot") {
    // Foot -> Foot
    result.value = input.value;
  } else if (inputTypeValue === "foot" && resultTypeValue === "inch") {
    // Foot -> Inch
    result.value = Number(input.value) * 12;
  } else if (inputTypeValue === "foot" && resultTypeValue === "meter") {
    // Foot -> meter
    result.value = Number(input.value) * 0.3048;
  }

  // Inch
  if (inputTypeValue === "inch" && resultTypeValue === "kilometer") {
    // Inch -> Kilometer Formula
    result.value = Number(input.value) * 0.0000254;
  } else if (inputTypeValue === "inch" && resultTypeValue === "centimeter") {
    // Inch -> Centimeter
    result.value = Number(input.value) * 2.54;
  } else if (inputTypeValue === "inch" && resultTypeValue === "foot") {
    // Inch -> Foot
    result.value = Number(input.value) * 0.0833333333;
  } else if (inputTypeValue === "inch" && resultTypeValue === "inch") {
    // Inch -> Inch
    result.value = input.value;
  } else if (inputTypeValue === "inch" && resultTypeValue === "meter") {
    // Inch -> meter
    result.value = Number(input.value) * 0.0254;
  }
}
