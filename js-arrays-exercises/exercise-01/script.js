let array = [1, 2, 3, 4, 5];

// array dizisi elemanları toplamı
// let arrayTotalDOM = document.getElementById("arrayTotal");

// let total = 0;
// for (let i = 0; i < array.length; i++) {
//   total += array[i];
//   console.log(total);
// }

// arrayTotalDOM.innerHTML = array + " dizisinin elemanları toplamı = " + total;

// -----------------------------------------------

// array dizisinin elemanlarının çarpımını bulma
// let arrayMultiplicationDOM = document.getElementById("arrayMultiplication");

// let multiplication = 1;
// for(let i=0; i<array.length; i++){
//     multiplication *= array[i];
//     console.log(multiplication);
// }

// arrayMultiplicationDOM.innerHTML = array + " dizisinin elemanları çarpımı = " + multiplication;

// ------------------------------------------------

// array dizinin en büyük elemanını bulma
// let largestElementDOM = document.getElementById("largestElement");

// let largestElement = 0; --> Burada ki atamada dizi elemanları negatif olduğunda geçersiz olacaktır. Bu yüzden ilk atama için dizini ilk elemanını atamak daha sağlıklı.
// let largestElement = array[0]; --> Daha doğru bir atama.
// for (let i = 0; i < array.length; i++)
//   if (array[i] > largestElement) largestElement = array[i];

// largestElementDOM.innerHTML = array + " dizisinin en büyük elemanı = " + largestElement;

// ----------------------------------------------------

// array dizisinden belirli bir elemanı çıkartmak
// let takeOutElementDOM = document.getElementById("takeOutElement");

// let number = 2;

// for (let i = 0; i < array.length; i++) {
//   if (number == array[i]) {
//     array.splice(i, 1);
//     break; // Elemanı bulduğumuzda döngüyü terk ediyoruz
//   }
// }

// takeOutElementDOM.innerHTML = array + " dizisinden 2 elemanı çıakrtıldı";

// ----------------------------------------------------

// array dizisi elemanlarını tersine çevirme
// let reverseElementDOM = document.getElementById("reverseElement");

// array.reverse();

// reverseElementDOM.innerHTML = "Dizi elemanları tersine çevrildi " + array;
