// Función para simular el acceso a la primera sala
function enterRoom() {
    location.href = "./jiLVyLlZu41Dc7ZlMvdpkpHZzksmXXiLD8iXWpaBtDJZhRqJlc/sala1.html";
}

// Función para crear círculos de colores aleatorios
function createMovingCircles() {
    const circlesContainer = document.getElementById("circles-container");

    // Generar 10 círculos
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Establecer un tamaño aleatorio para cada círculo
        const size = Math.random() * 50 + 30; // Tamaño entre 30px y 80px
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        // Establecer un color aleatorio
        const randomColor = getRandomColor();
        circle.style.backgroundColor = randomColor;

        // Posicionar el círculo en una posición aleatoria inicial
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.left = `${Math.random() * 100}vw`;

        // Agregar el círculo al contenedor
        circlesContainer.appendChild(circle);

        // Llamar a la función para mover el círculo aleatoriamente
        moveCircleRandomly(circle);
    }
}

// Función para generar un color aleatorio en formato HEX
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para mover el círculo aleatoriamente por la pantalla
function moveCircleRandomly(circle) {
    setInterval(() => {
        // Generar nuevas posiciones aleatorias
        const newTop = Math.random() * 100;
        const newLeft = Math.random() * 100;

        // Asignar la nueva posición con transición
        circle.style.top = `${newTop}vh`;
        circle.style.left = `${newLeft}vw`;

        // Cambiar el color aleatoriamente
        circle.style.backgroundColor = getRandomColor();
    }, Math.random() * 2000 + 1000);
}

// Llamada a la función para generar los círculos al cargar la página
window.onload = createMovingCircles;

// -------------------------- Validación de código -----------------------------

// Array de salas con código visible y ruta secreta
const salas = [
    { code: 'C4f31n4', path: 'jiLVyLlZu41Dc7ZlMvdpkpHZzksmXXiLD8iXWpaBtDJZhRqJlc' },
    { code: '1nf0rm4t1c4', path: 'FNP6CZudkkx32PUGrIqSyF76ecB9dBPXcL2e7eeqk1NFlIQ7Ma' },
    { code: '0rt4lm4gr0', path: 'qEAiUKuI19LRaMkBhth5HNX9TgzPLd60mf44P7f6KUQIGAtSxL' },
    { code: 'st4nc4n3ll1', path: 'bWUiJQrK95NXLmCehty0ADF8TgwPVz37ox66M3s1YKUERBlcsp' },
    { code: 'c0mput4d0r4', path: 'zPYtWmQe82NVrLxCkoj7ADu3BfcMZh59ty33J1s8KUWLEBdRxY' },
    { code: 'b0lud3z', path: 'xLFiTMvE71KRqOjNgch4PUz6BydWXA35rm88J2s0VLYCBeatXp' },
    { code: 't3l3f0n0', path: 'mRAhYoKi53TXnvUpLqg6EMF1WdzJQs78cx22K4t9NVZBICwrSy' }
];

// Función que se ejecuta al hacer clic en el botón
function comprobarCodigo(num, event) {
    event.preventDefault();

    const inputCode = document.getElementById('input-code').value.trim();
    const messageElement = document.getElementById('message');
    messageElement.textContent = '';

    if (salas[num - 1].code === inputCode) {
        messageElement.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>¡Código correcto!</strong> Acceso concedido.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        if (num === 7) {
            // Redirige a victoria.html en la raíz del sitio
            window.location.href = `${window.location.origin}/modelo-osi/victoria.html`;
        } else {
            const proxSala = num + 1;
            const nextPath = salas[num].path;
            const nextUrl = `${window.location.origin}/modelo-osi/${nextPath}/sala${proxSala}.html`;

            // Redirigir a la sala correspondiente
            window.location.href = nextUrl;
        }
    } else {
        messageElement.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>¡Código incorrecto!</strong> Intenta de nuevo.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    // Limpiar campo
    document.getElementById('input-code').value = '';
}
