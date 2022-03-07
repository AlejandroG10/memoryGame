const facil = () => {
    $(".inicio").hide();
    let tabla = "<table id='tabla'>";
    tabla += "<tr>"
    for(i = 0; i < 5; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='130px' width='200px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 5; i < 10; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='130px' width='200px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";
    tabla += "</table>";

    $(".juego").html(tabla);
    $("#volver").show();
    $("#reset").show();
    $("#contador").show();
    empezar();
}
const medio = () => {
    $(".inicio").hide();
    let tabla = "<table id='tabla'>";
    tabla += "<tr>"
    for(i = 0; i < 5; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='110px' width='180px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 5; i < 10; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='110px' width='180px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 10; i < 15; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='110px' width='180px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 15; i < 20; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='110px' width='180px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";
    tabla += "</table>";

    $(".juego").html(tabla);
    $("#volver").show();
    $("#reset").show();
    $("#contador").show();
    empezar();
}

const dificil = () => {
    $(".inicio").hide();
    let tabla = "<table id='tabla'>";
    tabla += "<tr>"
    for(i = 0; i < 6; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='90px' width='160px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 6; i < 12; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='90px' width='160px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 12; i < 18; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='90px' width='160px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 18; i < 24; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='90px' width='160px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";

    tabla += "<tr>"
    for(i = 24; i < 30; i++){
        tabla += "<td><div id="+i+" class='carta' onclick='girar(this)' value='valor'><img src='./Imagenes/0.jpg' alt='trasera' height='90px' width='160px' id='"+i+"img'/></div></td>"
    }
    tabla += "</tr>";
    tabla += "</table>";

    $(".juego").html(tabla);
    $("#volver").show();
    $("#reset").show();
    $("#contador").show();
    empezar();
}
