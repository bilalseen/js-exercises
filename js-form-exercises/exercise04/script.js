function squareCalculate(event) {
  event.preventDefault();

  let numberInput = document.getElementById("number").value;

  if (numberInput == "") alert("Bosluklari doldurunuz.");
  else if (isNaN(numberInput)) alert("Sayi girdisini dogru yapiniz.");

  let resultInput = document.getElementById("result");

  let numberSquare = numberInput * numberInput;

  resultInput.value = numberSquare;
}
