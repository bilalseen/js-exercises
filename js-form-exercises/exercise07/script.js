function handleCalculate(event) {
  event.preventDefault();

  let bornYearInput = document.getElementById("bornYear").value;
  if (bornYearInput == "") {
    alert("Boslukları doldurunuz.");
    return;
  } else if (isNaN(bornYearInput)) {
    alert("Sayı giriniz.");
    return;
  }

  console.log(bornYearInput);
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  let resultText = "Ehliyet alabilir";
  if (currentYear - bornYearInput <= 17) resultText = "Ehliyet alamaz";

  let result = document.getElementById("result");

  result.value = resultText;
}
