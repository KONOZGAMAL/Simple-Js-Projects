
let all = document.querySelectorAll('.a')

let center = document.getElementById('center')


all.forEach((e)=>{
    e.addEventListener('click',function () {
        center.src = e.src
    })
})