let input = document.querySelector("[type=number]");
let submit = document.querySelector("[type=submit]");

let paragr = document.getElementById("paragr");


let t = "";

submit.addEventListener("click", function () {
    let user = input.value;
    input.value = "";
    for (let i = 0; i < user; i++) {
      t +=
    "["+[i + 1]+"]" +
        "  "  +
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos sed rem maiores consequuntur deleniti maxime exercitationem commodi hic suscipit non qui voluptatum,explicabo eius adipisci eaque alias cum enim?" +
        "<br>"+"<br>";
    }
    if (paragr.innerHTML !== t) {
        paragr.innerHTML = t;
    }
    t = ""
  });