function filtrarNumeros(numeros) {
    let resultado = [];
    let contador = 0;

    switch(true){
        case (numeros.length == 1 && numeros[0] <= 10): // Tarea 1
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Tarea 1"); // Para verificar la ejecución de este caso
        break;

    case (numeros.every(num => num <= 10)): // Tarea 2
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Tarea 2");

        break;

    case (numeros.length == 1 && numeros[0] <= 20): // Tarea 3
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Tarea 3");

            break;

    case (numeros.every(num => num <= 20)): // Tarea 4
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Tarea 4");

        break;

    case (numeros.length == 1 && numeros[0] <= 100): // Tarea 5
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Tarea 5");

        break;

    case (numeros.every(num => num <= 100)): // Tarea 6
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Tarea 6");

        break;

    case (numeros.length == 1): // Tarea 7
            resultado.push(numeros[0]);
            contador = 1;
            console.log("Tarea 7");

        break;
    default: // Tarea 8
        for (let i = 0; i < numeros.length; i++) {
            const numStr = numeros[i].toString();
            const primerDigito = numStr.charAt(0);
            const ultimoDigito = numStr.charAt(numStr.length - 1);

            if (primerDigito == ultimoDigito) {
                resultado.push(numeros[i]);
                contador++;
            }
        }
        console.log("Tarea 8");

    }
    return { cantidad: contador, numerosFiltrados: resultado };    
}

function leerArchivo(callback) {
    const archivoInput = document.getElementById('archivo');
    const archivo = archivoInput.files[0];

    if (!archivo) {
      alert('Por favor selecciona un archivo.');
      return;
    }

    const lector = new FileReader();

    lector.onload = function(evento) {
        const contenido = evento.target.result;
        const lineas = contenido.trim().split('\n');
        const numeros = lineas[1].trim().split(' ').map(Number);
        const { cantidad, numerosFiltrados } = filtrarNumeros(numeros);
        const contenidoResultado = `${cantidad}\n${numerosFiltrados.join(' ')}`;
        callback(contenidoResultado);
    };
    lector.readAsText(archivo);
}
function guardarDatos(dato) {
    const archivoBlob = new Blob([dato], { type: 'text/plain' });
    const urlArchivo = URL.createObjectURL(archivoBlob);

    const linkDescarga = document.createElement('a');
    linkDescarga.href = urlArchivo;
    linkDescarga.download = 'datos.txt';
    document.body.appendChild(linkDescarga);

    linkDescarga.click();

    document.body.removeChild(linkDescarga);

    URL.revokeObjectURL(urlArchivo);

}

function procesarArchivo() {
    leerArchivo(function(resultado) {
        guardarDatos(resultado);
    });
}
