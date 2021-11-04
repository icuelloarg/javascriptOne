//Cobramos :B, no dejaremos de cobrar hasta que el usuario nos de el importe correcto
const cobrar = (importe) => {
    let pago = 0;

    while (importe > 0 && pago != importe) {
        pago = Number(prompt(`Ingrese ${importe}`));
    }
    alert('Muchas gracias por su compra!');
}

//Mostramos al usuario, el costo total de su pedido
function entregarPedido(mensaje, precio) {
    alert(`Muchas gracias por elegirnos, 
    ${mensaje} el total es  ${precio}`);
    cobrar(precio);
}

//Multiplicación axiliar para calcular el costo del pedido
const multiplicar = (a, b) => {
    return a * b;
}

//Dependiendo del pedido del cliente, calculamos el costo y creamos un mensaje diferente
function prepararPedido(com, cant) {
    let mensaje = '';
    let precio = 0;

    switch (com) {
        case 1:
            mensaje = 'Aquí está su lomito';
            precio = 40;
            precio = multiplicar(precio, cant);
            break;
        case 2:
            mensaje = 'Aquí está su Hamburguesa';
            precio = 30;
            precio = multiplicar(precio, cant);
            break;
        case 3:
            mensaje = 'Aquí está su Pizza';
            precio = 35;
            precio = multiplicar(precio, cant);
            break;
        case 4:
            mensaje = 'Aquí está su Choripan';
            precio = 20;
            precio = multiplicar(precio, cant);
            break;
        case 5:
            mensaje = 'Aquí está su Milanesa';
            precio = 15;
            precio = multiplicar(precio, cant);
            break;
        case 6:
            mensaje = 'Aquí está su Alfajor';
            precio = 10;
            precio = multiplicar(precio, cant);
            break;
        default:
            mensaje = 'Lo sentimos, no está en nuestro menú';
            break;
    }
    entregarPedido(mensaje, precio);
}

//Le pedimos al usuario que ingrese la comida y cantidad deseada
const tomarPedido = () => {
    const comida = Number(prompt(`Bienvenido/a a Coder Fast Food!
    Qué desea llevar?

    1- Lomito, 40
    2- Hamburguesa, 30
    3- Pizza, 35
    4- Choripan, 20
    5- Milanesa, 15
    6- Alfajor, 10`));
    const cantidad = Number(prompt('ingrese la cantidad de unidades'));

    prepararPedido(comida, cantidad);
}

//Inicio de la ejecución
tomarPedido();

