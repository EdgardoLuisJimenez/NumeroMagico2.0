// Jquery
const label_text = $('.label-text');
const label_result = $('.label-result');
const primary_button = $('.primary-button');
const label_finish = $('.label-finish');
const label_historial = $('.label-historial');

// Numero random
const magic = Math.floor(Math.random()*100+1);
let conteo = 0;

console.log(magic);

primary_button.on('click', btnOnClick);

function btnOnClick() {
    console.log('Entro a la funcion');
    if (conteo < 10) {
    let user = label_result.val();
    
    if (user == magic) {
        label_finish.html("Felicidades, acertastes el numero");
    }
    else if (user < magic) {
        label_finish.html("El numero que has marcado se encuentra por debajo");
    }
    else if (user > magic) {
        label_finish.html("El numero que has marcado se encuentra por encima");
    }
    label_historial.append(user + " ");

    conteo += 1;
    } 
    else {
        console.log("entro");
        label_finish.html("Has excedido el numero maximo de repeticiones. Vuelve a intetarlo");
    }
}
