function handleCalculate(event) {
  event.preventDefault();

  let numberInputX = document.getElementById("valueX").value;
  let numberInputY = document.getElementById("valueY").value;

  if (numberInputX == "" || numberInputY == "") {
    alert("Boslukları doldurunuz.");
    return;
  }
  let resultInput = document.getElementById("result");

  let result = Math.pow(numberInputX, 2) - Math.pow(numberInputY, 2);

  resultInput.value = result;
}
