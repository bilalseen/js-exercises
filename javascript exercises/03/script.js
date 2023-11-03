document.getElementById("submitButton").addEventListener("click", function (event) {

    event.preventDefault();

    let userNumbers = document.getElementById("userNumbers").value.split(",").map(Number);
    if (userNumbers.every((num => !isNaN(num)))) {
        let oddNumbers = userNumbers.filter(num => num % 2 == 1);
        document.getElementById("resultText").innerHTML = oddNumbers.join(", ");
    } else alert("Dengesiz girdi.")
})