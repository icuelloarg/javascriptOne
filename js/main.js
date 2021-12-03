

let nombre = document.getElementById("formName").value;
let apellido = document.getElementById("formLastN").value;
let telefono = document.getElementById("phone").value;
let dni = document.getElementById("dni").value;
let correo = document.getElementById("mail").value;

const objeto = Number(document.getElementById("tipoc").value);
const monto = Number(document.getElementById("monto1").value);
const cuotas = Number(document.getElementById("cuotas1").value);

let ingresos = Number(document.getElementById("incomes").value);
let gastos = Number(document.getElementById("outcomes").value);


class Creditos {
    constructor(numero, tipo, interesmensual, maxcuota) {
        this.numero = numero;
        this.tipo = tipo;
        this.interesmensual = interesmensual;
        this.maxcuota = maxcuota;
    }
}

const credito = [];

credito.push(new Creditos(1,`Personal`, 0.021, 37));
credito.push(new Creditos(2,`Refacciones`, 0.02, 37));
credito.push(new Creditos(3,`Hipotecario`, 0.017, 241));
credito.push(new Creditos(4,`Prendario`, 0.0192, 61));

const credJson = JSON.stringify(credito);
console.log(credJson);


let simulador = document.getElementById("submit1");
simulador.onclick = function init(){
    simulador.innerHTML = `Solicitar`;
    //e.preventDefault();


function margen () {
  
    if ((ingresos - gastos)>=80000) {return ((ingresos-gastos)*0.8)}
    else if ((ingresos - gastos)>=50000) {return ((ingresos-gastos)*0.8)}
    else if ((ingresos - gastos)>=30000) {return ((ingresos-gastos)*0.6)}
    else if ((ingresos - gastos)>=15000) {return ((ingresos-gastos)*0.5)}
    else {return 0};
}

function categoria () {
    return (margen() * cuotas);
}



function cuotasMaxima(){
    const cuotamax = credito.find(credito => credito.numero === objeto)
    return (cuotamax.maxcuota);
}


function montoTotal(){
    const interes = credito.find(credito => credito.numero === objeto)
    return (monto+(monto * interes.interesmensual * cuotas));
}



function calculoCredito () {
    
    return (montoTotal() / cuotas);
}


class Solicitante {
    constructor (nombre, apellido, dni, correo, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.correo = correo;
        this.telefono = telefono;
    }
    accesoSolicitante() {
        if (this.nombre != false && this.apellido != false){
         
        }
        else {
            alert(`Alguno de los datos son incorrectos`);
        }
    }

}



function respuestaCredito (){
    let cuotaPagar = 0;
    let mensaje = `Su cuota a pagar sería de `;

        switch (objeto){
            case 1:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){               
                    cuotaPagar = calculoCredito()}
                else {alert(`No eres apto para este credito`)};
                break;
            case 2:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){
                    cuotaPagar = calculoCredito()}
                else {alert(`No eres apto para este credito`)};
                break;
            case 3:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){
                    cuotaPagar = calculoCredito()}
                else {alert(`No eres apto para este credito`)};
                break;
            case 4:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){
                    cuotaPagar = calculoCredito()}
                else {alert(`No eres apto para este credito`)};
                break;
            default:
                mensaje = `Dato incorrecto`;
                break;
            
        }
        if (cuotaPagar != false){

           let responderC = document.querySelector(".elemento1");
            let cuotaMostrar = (parseInt(cuotaPagar));
            responderC.innerHTML = `<input type="text" class="elemento" id="resp" value="Cuota a pagar $${cuotaMostrar}" disabled>`;

        }
        else {alert(`Te esperamos la proxima`)};
}

respuestaCredito()

let solicitud = document.getElementById("submit1");
solicitud.onclick = function valorCuota (){


    const solicitante1 = new Solicitante (nombre, apellido, dni, correo, telefono);
    solicitante1.accesoSolicitante()
    console.log(solicitante1)
    const typeSolic = JSON.stringify(solicitante1);
    console.log(typeSolic);

    let responderk = document.querySelector(".formulario");
    let datosP = `Hola ${nombre}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
    responderk.innerHTML += `    <div class="divRespuesta">
                                    <textarea class="elemento respCred" name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea>
                                   
                                </div>`;}
   
        


}

// Obtengo ambos select
const selectTipoCredito = document.getElementById('tipoc');
const selectCantCuotas = document.getElementById('cuotas1');

const generarSelect = (cant1, cant2, cant3, cant4, cant5) => {
    return `
        <option value="Default">Cantidad de cuotas</option>
        <option value="${cant1}">${cant1}</option>
        <option value="${cant2}">${cant2}</option>
        <option value="${cant3}">${cant3}</option>
        <option value="${cant4}">${cant4}</option>
        <option value="${cant5}">${cant5}</option>
    `;
}

selectTipoCredito.addEventListener('change', () => {
    switch (selectTipoCredito.value) {
        case "1":
            selectCantCuotas.innerHTML = generarSelect("3", "6", "12", "18", "36");
            break;
        case "2":
            selectCantCuotas.innerHTML = generarSelect("6", "12", "18", "24", "36");
            break;
        case "3":
            selectCantCuotas.innerHTML = generarSelect("60","90", "120", "180", "240");
            break;
        case "4":
            selectCantCuotas.innerHTML = generarSelect("12", "24", "36", "48", "60");
            break;
        default:
            selectCantCuotas.innerHTML = '<option value="Default">Cantidad de cuotas</option>';
    }
});


