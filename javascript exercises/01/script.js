document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Fonk girişi");

    let getNumber = document.getElementById("number").value;
    console.log(getNumber);

    let divisionArray = [];
    console.log(divisionArray);

    for (let i = 1; i <= getNumber / 2; i++) {
        if (getNumber % i === 0) {
            divisionArray.push(i);
        }
    }
    divisionArray.push(getNumber); // Sayıyı kendisi de bir bölen olarak eklenir.

    console.log("Fonk bitti");
    document.getElementById("resultText").innerHTML = divisionArray.join(", ");
});
