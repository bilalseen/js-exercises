function handleCalculate(event) {
  event.preventDefault();

  let valueInputA = parseInt(document.getElementById("valueA").value);
  let valueInputB = parseInt(document.getElementById("valueB").value);
  let valueInputC = parseInt(document.getElementById("valueC").value);

  if (valueInputA == "" || valueInputB == "" || valueInputC == "") {
    alert("Boslukları doldurunuz.");
    return;
  }
  let resultInput = document.getElementById("result");

  let result = (2 * valueInputB) - (4 * valueInputA * valueInputC);

  resultInput.value = result;
}

