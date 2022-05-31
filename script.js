const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const code = document.querySelector('.in-vid')
const fond = document.body;



function retValCouleur() {
    fond.style.background = "linear-gradient( to right, " + color1.value + "," + color2.value +")";
code.textContent = ` rgba (${color1.value}, ${color2.value})`
   
}

color1.addEventListener("input", retValCouleur)
color2.addEventListener("input", retValCouleur)
retValCouleur()