function piedraPapelTijera () {
    var jugadas = ["piedra" , "papel" , "tijera"];
    return jugadas[Math.floor(Math.random() * jugadas.length)];
}
document.write("🏁Que comience la competicion!🏁")

function saberResultado(opcionUsuario, opcionComputadora) {
    if (opcionUsuario === opcionComputadora) {
        return "Empate!";
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
        return "Has Ganado!";
    }
} 