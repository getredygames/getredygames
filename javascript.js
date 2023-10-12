let check = document.getElementById("checkbox")
check.addEventListener("click", test)
let kolor = document.getElementById('c1')
let kolor2 = document.getElementById('c2')
let kolor3 = document.getElementById("c3")
let kolor4 = document.getElementById("c4")
let kolor5 = document.getElementById("c7")


let link1 = document.getElementById('pl1')
let link2 = document.getElementById('pl2')
let link3 = document.getElementById('pl3')
let link4 = document.getElementById('pl4')
let tablicalink
let tablicakolor = [kolor ,kolor2, kolor3, kolor4,kolor5]
function test () {
    if(check.checked){
        // kolor.classList.remove('kolor')
        // kolor.classList.add('kolor2')
        // kolor2.classList.remove('kolor')
        // kolor2.classList.add('kolor2')
        // kolor3.classList.remove('kolor')
        // kolor3.classList.add('kolor2')
        // kolor3.classList.remove('kolor')
        // kolor3.classList.add('kolor2')
        // kolor4.classList.remove('kolor')
        // kolor4.classList.add('kolor2')
        for (let i = 0 ; i < tablicakolor.length ; i++){
            tablica[i].classList.remove('kolor')
            tablica[i].classList.add('kolor2')
        }
    }
    else {
        for (let i = 0 ; i < tablicakolor.length ; i++){
            tablica[i].classList.remove('kolor2')
            tablica[i].classList.add('kolor')
        }
    }
    
}
function link () {
for (let i = 0 ; i < tablicakolor.length ; i++){
    tablica[i].classList.remove('kolor')
    tablica[i].classList.add('kolor2')
}
else {
for (let i = 0 ; i < tablicalink.length ; i++){
    tablica[i].classList.remove('pagelink2')
    tablica[i].classList.add('kolor')
}
}
}
