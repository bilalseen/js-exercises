document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();

    let array = document.getElementById("inputArray").value.split(" ").map(Number);

    let maxValue = Math.max(...array)

    let minValue = Math.min(...array);

    document.getElementById("resultText").innerHTML = "[ " + array + " ] dizimizdeki min:" + minValue + " ve max:" + maxValue;
});
