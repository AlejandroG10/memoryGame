let mov1 = "";
let mov2 = "";
let id1 = "";
let id2 = "";
let idCarta1 = "";
let idCarta2 = "";
let contador = 0;
let intentos = 0;
let tabla = 0;
let countdownTimer = "";
let seconds = 0;

const volver = () => {
    $(".inicio").show();

    $(".juego").html("");
    $("#volver").hide();
    mov1 = "";
    mov2 = "";
    id1 = "";
    id2 = "";
    idCarta1 = "";
    idCarta2 = "";
    contador = 0;
    intentos = 0;

    clearInterval(countdownTimer);
    $("#contador").html('5:00');
    $("#reset").hide();
    $("#contador").hide();
}

const cerrar = () => {
    $("#gana").hide();
    $("#pierde").hide();
    $("button").prop("disabled", false);
}

const reset = () => {
    mov1 = "";
    mov2 = "";
    id1 = "";
    id2 = "";
    idCarta1 = "";
    idCarta2 = "";
    contador = 0;
    intentos = 0;

    if (tabla == 2) {
        for (i = 0; i < 10; i++) {
            document.getElementById(i + 'img').src = './Imagenes/0.jpg';
            document.getElementById(i).onclick = function () { girar(this) };
        }
    } else {
        if (tabla == 4) {
            for (i = 0; i < 20; i++) {
                document.getElementById(i + 'img').src = './Imagenes/0.jpg';
                document.getElementById(i).onclick = function () { girar(this) };
            }
        } else {
            if (tabla == 5) {
                for (i = 0; i < 30; i++) {
                    document.getElementById(i + 'img').src = './Imagenes/0.jpg';
                    document.getElementById(i).onclick = function () { girar(this) };
                }
            }
        }
    }

    $("#gana").hide();
    $("#pierde").hide();

    tabla = 0;
    empezar();
}

const empezar = () => {
    let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    cartas.sort(function () { return Math.random() - 0.5 });
    //console.log(cartas);

    tabla = $("#tabla tr").length;
    //console.log(tabla)
    let c = [];

    if (tabla == 2) {
        for (i = 0; i < 5; i++) {
            c.push(cartas[i]);
        }
        for (i = 0; i < 5; i++) {
            c.push(cartas[i]);
        }
        c.sort(function () { return Math.random() - 0.5 });
        //console.log(c);
    } else {
        if (tabla == 4) {
            for (i = 0; i < 10; i++) {
                c.push(cartas[i]);
            }
            for (i = 0; i < 10; i++) {
                c.push(cartas[i]);
            }
            //console.log(c);
            c.sort(function () { return Math.random() - 0.5 });
            //console.log(c);
        } else {
            if (tabla == 5) {
                for (i = 0; i < 15; i++) {
                    c.push(cartas[i]);
                }
                for (i = 0; i < 15; i++) {
                    c.push(cartas[i]);
                }
                c.sort(function () { return Math.random() - 0.5 });
                //console.log(c);
            }
        }
    }

    for (let i = 0; i < c.length; i++) {
        let carta = c[i];
        //console.log("carta: " + carta)
        let dato = document.getElementById(i.toString());
        //console.log(carta);
        //console.log("dato" + dato);
        dato.value = carta;
        //console.log(dato.value);
    }
    seconds = 300;
    clearInterval(countdownTimer);
    countdownTimer = setInterval('secondPassed()', 1000);
}

const girar = (carta) => {
    //console.log(carta.value);


    if (mov1 == "" || mov2 == "") {
        let cElegida = carta.value;
        let idCarta = carta.id + 'img';
        //console.log(idCarta)

        document.getElementById(idCarta).src = "./Imagenes/" + cElegida + ".jpg";

        if (mov1 == "") {
            mov1 = cElegida;
            id1 = idCarta;
            idCarta1 = carta.id;
            //console.log(idCarta1)
            $('#' + idCarta1).removeAttr("onClick");
        } else {
            mov2 = cElegida;
            id2 = idCarta;
            idCarta2 = carta.id;

            if (mov1 == mov2) {
                mov1 = "";
                mov2 = "";
                id1 = "";
                id2 = "";
                idCarta1 = "";
                idCarta2 = "";
                contador++;
                console.log(contador);
                intentos++;

                $('#' + idCarta2).removeAttr("onClick");

                console.log(tabla)
                if (tabla == 2 && contador == 5) {
                    $("#gana").html(`<img src='./Imagenes/x.png' alt='cerrar' id='cerrar' onclick='cerrar()'/>
                                    <h2>Enhorabuena!!!</h2>
                                    <p>Has ganado, con tan solo ${intentos} intentos</p>`);
                    $("button").prop('disabled', true);
                    $("#gana").show();
                    clearInterval(countdownTimer);
                } else {
                    if (tabla == 4 && contador == 10) {
                        $("#gana").html(`<img src='./Imagenes/x.png' alt='cerrar' id='cerrar' onclick='cerrar()'/>
                                    <h2>Enhorabuena!!!</h2>
                                    <p>Has ganado, con tan solo ${intentos} intentos</p>`);
                        $("button").prop('disabled', true);
                        $("#gana").show();
                        clearInterval(countdownTimer);
                    } else {
                        if (tabla == 5 && contador == 15) {
                            $("#gana").html(`<img src='./Imagenes/x.png' alt='cerrar' id='cerrar' onclick='cerrar()'/>
                                    <h2>Enhorabuena!!!</h2>
                                    <p>Has ganado, con tan solo ${intentos} intentos</p>`);
                            $("button").prop('disabled', true);
                            $("#gana").show();
                            clearInterval(countdownTimer);
                        }
                    }
                }

            } else {
                //console.log("mov1: " + mov1)
                //console.log("mov2: " + mov2)
                //console.log("id1: " + id1)
                //console.log("id2: " + id2)
                setTimeout(function mal() {
                    document.getElementById(id1).src = "./Imagenes/0.jpg";
                    document.getElementById(id2).src = "./Imagenes/0.jpg";
                    mov1 = "";
                    mov2 = "";
                }, 1000);
                //console.log(idCarta1+"hola");
                document.getElementById(idCarta1).onclick = function () { girar(this) };
                intentos++;
            }
        }
    } else {
        console.error("¡Ha ocurrido un error inesperado!");
    }
}

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    console.log(minutes);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById("contador").innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        $("#pierde").html(`<img src='./Imagenes/x.png' alt='cerrar' id='cerrar' onclick='cerrar()'/>
        <h2>Lo siento!!!</2>
        <p>Se ha agotado el tiempo. Has conseguido ${contador} parejas`);
        $("button").prop('disabled', true);
        $("#pierde").show();

        if (tabla == 2) {
            for (i = 0; i < 10; i++) {
                $("#"+i).removeAttr("onClick");
            }
        } else {
            if (tabla == 4) {
                for (i = 0; i < 20; i++) {
                    $("#"+i).removeAttr("onClick");
                }
            } else {
                for (i = 0; i < 30; i++) {
                    $("#"+i).removeAttr("onClick");
                }
                }
            }
    } else {
        seconds--;
    }
}