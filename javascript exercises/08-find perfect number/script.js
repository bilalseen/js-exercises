document.querySelector(".submitButton").addEventListener("click", (e) => {
  e.preventDefault();

  let userNumber = parseInt(document.querySelector(".userInput").value);

  let resultDOM = document.querySelector(".result");

  if (!isNaN(userNumber)) {
    let isPerfect = false;
    let total = 0;
    for (let i = 1; i <= userNumber / 2; i++) {
      if (userNumber % i == 0) {
        total += i;
      }
    }

    if (userNumber == total) isPerfect = true;

    isPerfect
      ? (resultDOM.innerHTML = "It is a perfect number")
      : (resultDOM.innerHTML = "It is not a perfect number");
  } else alert("Please enter number");
});
