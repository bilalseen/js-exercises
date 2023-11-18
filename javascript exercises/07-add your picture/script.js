document.querySelector(".submit-button").addEventListener("click", (e) => {
  e.preventDefault();

  let urlInputDOM = document.querySelector(".url-input").value;

  let domArr = [];
  if (urlInputDOM != "") {
    let imageContainerDOM = document.querySelector(".images-container");

    let imgDOM = document.createElement("img");
    imgDOM.classList.add("image");

    imgDOM.src = urlInputDOM;

    domArr.push(imgDOM);
    imageContainerDOM.appendChild(imgDOM);

    document.querySelector(".url-input").value = "";
  } else {
    alert("Please enter correct");
  }
});
