document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();

    let userNumberOne = parseInt(document.getElementById("userNumberOneInput").value);
    let userNumberTwo = parseInt(document.getElementById("userNumberTwoInput").value);

    if (!isNaN(userNumberOne) && !isNaN(userNumberTwo)) {
        calculateEBOB(userNumberOne, userNumberTwo);
        calculateEKOK(userNumberOne, userNumberTwo);
    } else alert("Girdiler yanlış. Tekrar deneyiniz.")




    function calculateEKOK(number1, number2) {
        let maxNumber = Math.max(number1, number2);
        let ekok = maxNumber;
        while (true) {
            if (ekok % number1 === 0 && ekok % number2 === 0) {
                break;
            }
            ekok += maxNumber;
        }
        console.log(ekok)

        document.getElementById("resultTextEKOK").innerHTML = "EKOK = " + ekok;
    }

    function calculateEBOB(number1, number2) {
        if (!isNaN(number1) && !isNaN(number2)) {
            let largestDivisor = 1;

            for (let i = 2; i <= Math.min(number1, number2) / 2; i++) {
                if (number1 % i == 0 && number2 % i == 0) largestDivisor = i;
            }

            document.getElementById("resultTextEBOB").innerHTML = "EBOB = " + largestDivisor;

        } else document.getElementById("resultTextEBOB").innerHTML = "Girdiler dengesiz.";
    }

});