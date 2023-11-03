let array = [0, 1];
// Kullanıcıdan alınan deger ile dizimizin uzunlugu belirleniyor ve fibonacci dizisi oluşturuluyor.
document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();

    let arrayLengthDOM = document.getElementById("arrayLength").value;

    for (let i = 0; i < arrayLengthDOM - 2; i++) {
        let newElement = array[array.length - 2] + array[array.length - 1];
        array.push(newElement);
    }

    document.getElementById("resultText").innerHTML = array.join(", ");
})