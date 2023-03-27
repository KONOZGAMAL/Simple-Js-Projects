let btn1 = document.querySelector("#btn1");

let className = document.querySelector('.className')


let colors = ["cadetblue",'aquamarine','darksalmon','olive','lightgreen','orangered']


  btn1.addEventListener("click", function () {

    let color = colors.shift()
    colors.push(color)
     className.style.backgroundColor= color;
  });
  
