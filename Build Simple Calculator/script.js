let mainID = document.getElementById("mainID");

let equal = document.getElementById('equal')
let clear = document.getElementById('clear')

let allBtn = document.querySelectorAll('.btn');
(function() {
allBtn.forEach((e) => {
  e.addEventListener("click",function(el) {
   let val = el.target.dataset.num
    mainID.value += val
  })
})

equal.addEventListener('click',function () {
   if (mainID.value  === "") {
    mainID.value = ''
   }else{
    let answer = eval(mainID.value);
    mainID.value = answer
   }
})
clear.addEventListener('click',function(e){
    mainID.value = ''
})
})()