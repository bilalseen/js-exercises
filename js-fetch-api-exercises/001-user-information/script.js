fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((dataJson) => {
    let userListDOM = document.getElementById("userContainer");

    try {
      dataJson.forEach((item) => {
        let nameDOM = document.createElement("p");
        nameDOM.innerHTML = item.name;
        nameDOM.classList.add("paragraph");

        let userNameDOM = document.createElement("div");
        userNameDOM.innerHTML = item.username;
        userNameDOM.classList.add("userName");

        let userEmailDOM = document.createElement("div");
        userEmailDOM.innerHTML = item.email;
        userEmailDOM.classList.add("userEmail");

        let cityDOM = document.createElement("div");
        cityDOM.innerHTML = item.address.city;
        cityDOM.classList.add("city");

        let zipcodeDOM = document.createElement("div");
        zipcodeDOM.innerHTML = item.address.zipcode;
        zipcodeDOM.classList.add("zipcode");

        let addressDOM = document.createElement("div");
        addressDOM.classList.add("address_info");

        addressDOM.appendChild(cityDOM);
        addressDOM.appendChild(zipcodeDOM);

        let userBox = document.createElement("section");
        userBox.classList.add("userBox");

        userBox.appendChild(nameDOM);
        userBox.appendChild(userNameDOM);
        userBox.appendChild(userEmailDOM);
        userBox.appendChild(addressDOM);

        userListDOM.appendChild(userBox);
      });
    } catch (err) {
      console.log("Error while processing data: " + err);
    }
  })
  .catch((error) => {
    console.log("Fetch error: " + error);
  });
