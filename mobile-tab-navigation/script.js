let img = document.querySelector("#a");

let all = document.querySelectorAll("ul li");

  all.forEach((e,i) => {
    e.addEventListener("click", function () {
       console.log(i+1);
      img.src = `./img/${i+1}.jpeg`;
    });
  });
