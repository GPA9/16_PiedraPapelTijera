// const piedra = document.getElementById('buttonPiedra');
// const papel = document.getElementById('buttonPapel');
// const tijera = document.getElementById('buttonTijera');

// document.write("🏁Que comience la competicion!🏁")
// document.write("<br>")

// function piedraPapelTijera() {
//     var jugadas = ["piedra", "papel", "tijera"];
//     return jugadas[Math.floor(Math.random() * jugadas.length)];
// }

// function saberResultado(opcionUsuario, opcionComputadora) {
//     if (opcionUsuario === opcionComputadora) {
//         return document.write("Empate!");
//     } else if (
//         (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
//         (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
//         (opcionUsuario === "tijera" && opcionComputadora === "papel")
//     ) {
//         return document.write("Has ganado!");
//     } else {
//         return document.write("Has perdido...😔");
//     }
// }
// // Función principal que ejecuta el juego
// function jugar(opcionUsuario) {
//     var opcionComputadora = generarOpcionAleatoria();
//     var resultado = determinarResultado(opcionUsuario, opcionComputadora);

//     // Mostrar el resultado en la página
//     document.getElementById("resultado").innerHTML = "<p>Tu elección: " + opcionUsuario + "</p>" +
//         "<p>La elección de la computadora: " + opcionComputadora + "</p>" +
//         "<p>Resultado: " + resultado + "</p>";
// } 