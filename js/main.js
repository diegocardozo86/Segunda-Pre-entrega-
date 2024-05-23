//!calculadora de Supermercado

function agregarGasto(gastos) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let cantidad = parseFloat(prompt("Ingrese el precio:"));

    if (!isNaN(cantidad) && cantidad > 0) {
        gastos.push({ nombre: nombre, cantidad: cantidad });
    } else {
        alert("Intente de nuevo.");
    }
}

function mostrarGastos(gastos) {
    console.log("Lista de gastos:");
    gastos.forEach(gasto => {
        console.log(`${gasto.nombre}: $${gasto.cantidad.toFixed()}`);
    });
}

function calcularTotal(gastos) {
    let total = gastos.reduce((suma, gasto) => suma + gasto.cantidad, 0);
    return total;
}

function calcularPromedio(gastos) {
    if (gastos.length === 0) return 0;
    let total = calcularTotal(gastos);
    return total / gastos.length;
}

function menu() {
    let gastos = [];
    let opcion;

    do {
        opcion = prompt("Seleccione un numero:\n1. Agregar gasto\n2. Mostrar gastos\n3. Calcular total\n4. Calcular promedio\n5. Salir");

        switch(opcion) {
            case "1":
                agregarGasto(gastos);
                break;
            case "2":
                mostrarGastos(gastos);
                break;
            case "3":
                let total = calcularTotal(gastos);
                console.log(`El total de los gastos es: $${total.toFixed(2)}`);
                break;
            case "4":
                let promedio = calcularPromedio(gastos);
                console.log(`El promedio de los gastos es: $${promedio.toFixed(2)}`);
                break;
            case "5":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Intente de nuevo.");
        }
    } while (opcion !== "5");
}

menu();

