var mostrarJuegoIniciado = document.querySelector(".juego-iniciado")
var mostrarPaginaPrincipal = document.querySelector(".pagina-principal")

function ocultarPaginaPrincipal(){
    mostrarPaginaPrincipal.classList.add("ocultar")
    mostrarJuegoIniciado.classList.remove("ocultar")
    swal({
        title: "¡Recomendación!",
        text: "Jugar hasta el final para evitar errores",
        icon: "info",
        button: "¡A jugar!",
      });
}
function volverPaginaPrincipal(){
    mostrarPaginaPrincipal.classList.remove("ocultar")
    mostrarJuegoIniciado.classList.add("ocultar")
    nuevoJuego()
}