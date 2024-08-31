document.addEventListener("DOMContentLoaded", function() {
	var typed = new Typed('.typed', {
		strings: [
			'Leandro Soto Miranda',
			'leandruso',
			'levndruk',
			'レアンドロ',
			'lea ^_-',
		],
		typeSpeed: 30, // Velocidad en milisegundos para poner una letra,
		startDelay: 300, // Tiempo de retraso en iniciar la animación,
		backSpeed: 10, // Velocidad en milisegundos para borrar una letra,
		smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
		shuffle: false, // Alterar el orden en el que escribe las palabras.
		backDelay: 1000, // Tiempo de espera después de que termina de escribir una palabra.
		loop: true, // Repetir el array de strings
		loopCount: Infinity, // Cantidad de veces a repetir el array. false = infinito
		showCursor: true, // Mostrar cursor palpitando
		cursorChar: '|', // Carácter para el cursor
		contentType: null, // 'html' o null para texto sin formato
	});
});


var originalTitle = document.title;

// Escucha el evento de cambio de visibilidad de la página
document.addEventListener("visibilitychange", function() {
    console.log("Visibility change detected:", document.hidden);
    // Si la página no está visible
    if (document.hidden) {
        console.log("Page is hidden, changing title...");
        // Cambia el título de la pestaña a "¡Vuelve!"
        document.title = "¡Vuelve! 😭😢";
    } else {
        console.log("Page is visible, restoring title...");
        // Restaura el título original
        document.title = originalTitle;
    }
});
