let array = [10, 15, 2, 8, 30, 25];

let resultDOM = document.getElementById("result");

document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault(); // Bu satır, butonun varsayılan davranışını engeller

    let changeNumberDOM = parseInt(document.getElementById("changeNumber").value);
    let addNumberDOM = parseInt(document.getElementById("addNumber").value);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === changeNumberDOM) {
            array.splice(i, 1, addNumberDOM);
        }
    }

    resultDOM.value = array.join(', ');
});
