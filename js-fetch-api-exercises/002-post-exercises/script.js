fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error: " + Error);
    }

    return response.json();
  })
  .then((dataJson) => {
    let containerDOM = document.getElementById("postContainer");

    dataJson.forEach((item) => {
      let postTitleDOM = document.createElement("div");
      postTitleDOM.innerHTML = item.title;
      postTitleDOM.classList.add("post-title");

      let postBodyDOM = document.createElement("div");
      postBodyDOM.innerHTML = item.body;
      postBodyDOM.classList.add("post-body");

      let postDOM = document.createElement("div");
      if (item.id % 2 == 0) {
        postDOM.classList.add("post-even");
      } else {
        postDOM.classList.add("post-odd");
      }

      postDOM.appendChild(postTitleDOM);
      postDOM.appendChild(postBodyDOM);

      containerDOM.appendChild(postDOM);
    });
  })
  .catch((err) => {
    console.log("err: " + err);
  });
