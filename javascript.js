let check = document.getElementById("checkbox")
check.addEventListener("click", test)
let kolor = document.getElementById('c1')
let kolor2 = document.getElementById('c2')
let kolor3 = document.getElementById("c3")
let kolor4 = document.getElementById("c4")
let kolor5 = document.getElementById("c5")
let kolor6 = document.getElementById("c6")
let kolor7 = document.getElementById("c7")
let kolor8 = document.getElementById("c8")
let kolor9 = document.getElementById("c9")


let link1 = document.getElementById('pl1')
let link2 = document.getElementById('pl2')
let link3 = document.getElementById('pl3')
let link4 = document.getElementById('pl4')
let tablicakolor = [kolor, kolor2, kolor3,kolor4,kolor5,kolor7,kolor8,kolor9,link1,link2,link3,link4]
function test () {
    if(check.checked){
        kolor6.classList.remove('kolor3')
        kolor6.classList.add('kolor4')
        
        for (let i = 0 ; i < tablicakolor.length ; i++){
            tablicakolor[i].classList.remove('kolor')
            tablicakolor[i].classList.add('kolor2')
        }
    }
    else{
        kolor6.classList.remove('kolor4')
        kolor6.classList.add('kolor3')
        for (let i = 0 ; i < tablicakolor.length ; i++){
            tablicakolor[i].classList.remove('kolor2')
            tablicakolor[i].classList.add('kolor')
        }
    }

    
}

