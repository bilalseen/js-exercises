function handleSubmit(event) {
  event.preventDefault();

  let shortSide = parseFloat(document.getElementById("shortSideLength").value);
  let longSide = parseFloat(document.getElementById("longSideLength").value);

  if (isNaN(shortSide) || isNaN(longSide)) {
    alert("Geçerli değer giriniz.");
    return;
  }
  let areaInput = document.getElementById("areaResult");
  let perimeterInput = document.getElementById("perimeterResult");

  let areaResult = shortSide * longSide;
  let perimeterResult = 2 * (shortSide + longSide);

  areaInput.value = areaResult;
  perimeterInput.value = perimeterResult;
}
