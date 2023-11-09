document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let userInput = document.getElementById("userInput").value;

    if (userInput == "") {
      alert("Please enter your array");
    } else {
      let userInputArr = userInput.split(",");

      userInputArr = userInputArr.filter(function (element) {
        return element != 0;
      });
      userInputArr = userInputArr.map(function (numbers) {
        return parseInt(numbers);
      });

      document.getElementById("userArrayOutput").innerHTML =
        userInputArr.join(", ");

      document
        .getElementById("getPrimeNumbersButton")
        .addEventListener("click", function () {
          let primes = findPrimes(userInputArr);

          if (primes.length > 0) {
            document.getElementById("primeNumbersOutput").innerHTML =
              primes.join(", ");
          } else {
            document.getElementById("primeNumbersOutput").innerHTML =
              "there are no prime numbers";
          }
        });

      document
        .getElementById("getEvenNumbersButton")
        .addEventListener("click", function () {
          let evens = findEvens(userInputArr);
          if (evens.length > 0) {
            document.getElementById("evenNumbersOutput").innerHTML =
              evens.join(", ");
          } else {
            document.getElementById("evenNumbersOutput").innerHTML =
              "there are no even numbers";
          }
        });

      document
        .getElementById("getOddNumbersButton")
        .addEventListener("click", function () {
          let odds = findOdds(userInputArr);
          if (odds.length > 0) {
            document.getElementById("oddNumbersOutput").innerHTML =
              odds.join(", ");
          } else {
            document.getElementById("oddNumbersOutput").innerHTML =
              "there are no odd numbers";
          }
        });

      function findPrimes(arr) {
        let primeArr = [];
        arr.forEach(function (number) {
          let isPrime = true;
          if (number < 0) lessThanZero = true;
          for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime && number > 1) {
            primeArr.push(number);
          }
        });

        return primeArr;
      }

      function findEvens(arr) {
        let evenNumbers = arr.filter(function (number) {
          return number % 2 == 0;
        });

        return evenNumbers;
      }

      function findOdds(arr) {
        let oddNumbers = arr.filter(function (number) {
          return number % 2 != 0;
        });

        return oddNumbers;
      }
    }
  });
