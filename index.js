setInterval(() => {
    var reloj = document.getElementsByClassName("reloj")[0];
    var tiempoActual = new Date();
    var hora = tiempoActual.getHours();
    if (hora < 0) {
        hora = "0" + hora
    }
    var minutos = tiempoActual.getMinutes();
    if (minutos < 0) {
        minutos = "0" + minutos
    }
    var segundos = tiempoActual.getSeconds();
    if (segundos < 0) {
        segundos = "0" + segundos
    }
    var dia = tiempoActual.getDay();
    if (dia < 10) {
        dia = "0" + dia
    }
    var mes = tiempoActual.getMonth();
    if (mes < 10) {
        mes = "0" + mes
    }
    var año = tiempoActual.getFullYear();


    reloj.innerHTML = dia + " del " + mes + " de " + año + "<br>" + hora + ":" + minutos + ":" + segundos;
    console.log(reloj)
}, 1000)
