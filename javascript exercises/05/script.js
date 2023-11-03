let checkboxVowel = document.getElementById("checkboxVowel");
let checkboxConsonant = document.getElementById("checkboxConsonant");
let isVowelChecked = false;
let isConsonantChecked = false;
//Vowel checkbox control
checkboxVowel.addEventListener("change", function () {
    if (checkboxVowel.checked) isVowelChecked = true;
})
//Consonant checkbox control
checkboxConsonant.addEventListener("change", function () {
    if (checkboxConsonant.checked) isConsonantChecked = true;
})

document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();
    changeText();

    function changeText() {
        let userInput = document.getElementById("userTextInput").value;
        let userChangeCharacter = document.getElementById("userChangeCharacter").value;
        let userAddCharacter = document.getElementById("userAddCharacter").value;

        //user input and user add character control
        if (isNaN(userInput) && isNaN(userAddCharacter)) {
            let inputArray = userInput.split("");
            //create vowel letters array
            var vowelLetters = ['a', 'A', 'e', 'E', 'I', 'ı', 'İ', 'i', 'O', 'o', 'ö', 'Ö', 'u', 'U', 'ü', 'Ü'];
            if (isVowelChecked) {
                //We are here because the vowel checkbox is checked.
                for (let i = 0; i < inputArray.length; i++) {
                    for (let j = 0; j < vowelLetters.length; j++) {
                        if (inputArray[i] == vowelLetters[j]) inputArray[i] = userAddCharacter;
                    }
                }
            } else if (isConsonantChecked) {
                //We are here because the consonant checkbox is checked.
                for (let i = 0; i < inputArray.length; i++) {
                    for (let j = 0; j < vowelLetters.length; j++) {
                        if (inputArray[i] != vowelLetters[j]) inputArray[i] = userAddCharacter;
                    }
                }
            } else {
                //we are here because the user entered another letter for change
                if (isNaN(userChangeCharacter)) {
                    for (let i = 0; i < inputArray.length; i++) {
                        if (inputArray[i] == userChangeCharacter) inputArray[i] = userAddCharacter;
                    }
                } else alert("Please enter the correct input");

            }


            let resultText = inputArray.join("");

            document.getElementById("resultText").innerHTML = resultText;

        } else alert("Please enter the correct input");


    }
})