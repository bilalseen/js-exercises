document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let userNumber = parseInt(document.getElementById("userNumber").value);

    if (userNumber <= 1 || isNaN(userNumber)) {
      document.getElementById("result").innerHTML =
        "Please enter a positive integer greater than 1.";
      return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(userNumber); i++) {
      if (userNumber % i === 0) {
        isPrime = false;
        break;
      }
    }

    let resultText = isPrime ? "prime number" : "not a prime number";
    document.getElementById("result").innerHTML =
      userNumber + " is " + resultText;
  });
