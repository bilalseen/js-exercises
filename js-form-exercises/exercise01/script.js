function formControl(event) {
    event.preventDefault();
  
    let price = document.getElementById("price").value;
    let profit = document.getElementById("profit").value;
    let resultInput = document.getElementById("result");
    if (price == "" || profit == "") {
      alert("Fiyat ve kar oranı bilgilerini giriniz. Alanları boş bırakmayınız ");
    } else {
      let lastPrice = price * (1 + profit / 100);
      resultInput.value = lastPrice.toFixed(2);
    }
  }
  