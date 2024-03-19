const munieco = document.querySelector(".contenedorMunieco");
const contenedor = document.querySelector(".contenedorParrafo");
const resultado = document.querySelector(".textoResultado");
const cajaTexto = document.querySelector(".cajaTexto");
const btnCopiar = document.querySelector(".btnCopiar");

function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
    limpiarTexto();
}

function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
    limpiarTexto();
}

function recuperarTexto() {
    return cajaTexto.value.toLowerCase().replace(/[áéíóúü]/g, match => {
        const replacements = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
        return replacements[match];
    }).replace(/[^a-z\s]/g, ''); // Eliminar caracteres no permitidos
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    btnCopiar.style.display = "block"
}

function encriptarTexto(mensaje) {
    let textoFinal = "";
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "ai";
                break;
            case "e":
                textoFinal += "enter";
                break;
            case "i":
                textoFinal += "imes";
                break;
            case "o":
                textoFinal += "ober";
                break;
            case "u":
                textoFinal += "ufat";
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let textoFinal = "";
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "a";
                i++;
                break;
            case "e":
                textoFinal += "e";
                i += 4;
                break;
            case "i":
                textoFinal += "i";
                i += 3;
                break;
            case "o":
                textoFinal += "o";
                i += 3;
                break;
            case "u":
                textoFinal += "u";
                i += 3;
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function limpiarTexto() {
    cajaTexto.value = ""; // Limpiar el contenido del textarea
}

function copiar() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido).then(function() {
        alert("El texto se ha copiado con éxito.");
    }, function(err) {
        console.error('Error al intentar copiar el texto: ', err);
        alert("Ha ocurrido un error al intentar copiar el texto.");
    });
}

// Evento de teclado para limitar el contenido del textarea
cajaTexto.addEventListener("input", function(event) {
    this.value = this.value.toLowerCase().replace(/[áéíóúü]/g, match => {
        const replacements = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
        return replacements[match];
    }).replace(/[^a-z\s]/g, ''); // Eliminar caracteres no permitidos
});

document.getElementById("encriptarBtn").addEventListener("click", encriptar);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptar);
document.querySelector(".btnCopiar").addEventListener("click", copiar);
