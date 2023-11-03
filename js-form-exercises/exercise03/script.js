function handleCalculate(event) {
  event.preventDefault();

  let price = document.getElementById("price").value;
  let number = document.getElementById("number").value;

  if (isNaN(price) || isNaN(number)) {
    alert("Lütfen dogru deger girdisi yapiniz.");
    return;
  }

  let totalPriceInput = document.getElementById("totalPrice");

  let totalPrice = price * number;

  totalPriceInput.value = totalPrice;
}
