const label_text = document.querySelector('.label-text')
const label_result = document.querySelector('.label-result')
const primary_button = document.querySelector('.primary-button')
const label_finish = document.querySelector('.label-finish')
const label_historial = document.querySelector('.label-historial')

// Numero random
const magic = Math.floor(Math.random()*100+1);
let conteo = 0;

console.log(magic);

primary_button.addEventListener('click', btnOnClick);

function btnOnClick() {
    if (conteo < 10) {
    let user = label_result.value;
    
    if (user == magic) {
        label_finish.innerHTML = "Felicidades, acertastes el numero";
    }
    else if (user < magic) {
        label_finish.innerHTML = "El numero que has marcado se encuentra por debajo"
    }
    else if (user > magic) {
        label_finish.innerHTML = "El numero que has marcado se encuentra por encima"
    }
    label_historial.append(user + " ")

    conteo += 1;
    } 
    else {
        console.log("entro");
        label_finish.innerHTML = "Has excedido el numero maximo de repeticiones. Vuelve a intetarlo"
    }
}