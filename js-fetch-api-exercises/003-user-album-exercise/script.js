fetch(`https://jsonplaceholder.typicode.com/albums`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error: " + Error);
    }

    return response.json();
  })
  .then((responseJson) => {
    let postContainerDOM = document.getElementById("postContainer");
    let nexPageButtonDOm = document.createElement("button");
    nexPageButtonDOm.id = "nextPageButton";
    nexPageButtonDOm.textContent = "Next Page";
    console.log(nexPageButtonDOm.value);

    let currentId = 1;
    responseJson.forEach((item) => {
      if (item.userId == 1) {
        let postTitleDOM = document.createElement("div");
        postTitleDOM.classList.add("post-title");
        postTitleDOM.innerHTML = item.title;

        let postUserIdDOM = document.createElement("div");
        postUserIdDOM.classList.add("post-userId");
        postUserIdDOM.innerHTML = item.userId;

        let postDOm = document.createElement("post");
        postDOm.classList.add("post");

        postDOm.appendChild(postTitleDOM);
        postDOm.appendChild(postUserIdDOM);

        postContainerDOM.appendChild(postDOm);
      }
    });

    postContainerDOM.appendChild(nexPageButtonDOm);
    document.getElementById("nextPageButton").addEventListener("click", () => {
      console.log("Butona basıldııı ");
    });
  });
