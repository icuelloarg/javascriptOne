
/* Se logró que el programa funcione sumando una funcion reload que permite reiniciar
las variables para que el programa las tome */

/* Se cambiaron determinadas variables que entraban en conflicto */

/* 
window.onload = function rename(){
    const solicitante2 = JSON.parse(localStorage.getItem("solicitante1"));
    let nombre = solicitante2.nombre;
    let apellido = solicitante2.apellido;
    let dni = solicitante2.dni;
    let correo = solicitante2.correo;
    let telefono = solicitante2.telefono;
    let ingresos = solicitante2.ingresos;
    let gastos = solicitante2.gastos;
    let objeto = solicitante2.objeto;
    let cuotas = solicitante2.cuotas;
    let localizador = solicitante2.localizador;
    const monto = solicitante2.monto;

} */

let nombre = document.getElementById("formName").value;
let apellido = document.getElementById("formLast").value;
let dni = document.getElementById("dni").value;
let correo = document.getElementById("mail").value;
let telefono = document.getElementById("phone").value;
let ingresos = Number(document.getElementById("income").value);
let gastos = Number(document.getElementById("outcome").value);




let monto = Number(document.getElementById("monto").value);


let selectTipoCredito = document.getElementById('tipocred');
let selectCantCuotas = document.getElementById('cuotificador');
const remover120 = document.getElementById("120c");
const remover240 = document.getElementById("240c");
const remover60 = document.getElementById("60c");
const remover48 = document.getElementById("48c")


selectTipoCredito.addEventListener('change', () => {
    switch (selectTipoCredito.value) {
        case "1":
            selectCantCuotas.removeChild(remover48);
            selectCantCuotas.removeChild(remover60);
            selectCantCuotas.removeChild(remover120);
            selectCantCuotas.removeChild(remover240);
            break;
        case "2":
            selectCantCuotas.removeChild(remover48);
            selectCantCuotas.removeChild(remover60);
            selectCantCuotas.removeChild(remover120);
            selectCantCuotas.removeChild(remover240);
            break;
        case "3":
            break;
        case "4":
            selectCantCuotas.removeChild(remover120);
            selectCantCuotas.removeChild(remover240);
            break;
        default:
            selectCantCuotas.innerHTML += '';
    }

});
let objeto = Number(document.getElementById("tipocred").value);
let cuotas = Number(document.getElementById("cuotificador").value);

class Solicitante {
    constructor (nombre, apellido, dni, correo, telefono, monto, objeto, cuotas, ingresos, gastos){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.correo = correo;
        this.telefono = telefono;
        this.monto = monto;
        this.objeto = objeto;
        this.cuotas = cuotas;
        this.ingresos = ingresos;
        this.gastos = gastos;
    }
    accesoSolicitante() {
        if (this.nombre != false && this.apellido != false){
         
        }
        else {
            alert(`Alguno de los datos son incorrectos`);
        }
    }

}

const personasD = [];

const arrayData = document.getElementById("outcome");
arrayData.onchange = function saveData(){
    personasD.push(new Solicitante (nombre, apellido, dni, correo, telefono, monto, objeto, cuotas, ingresos, gastos));
   const savePersona = JSON.stringify(personasD);
localStorage.setItem(`individuo`, savePersona);
    console.log(personasD[0])
}



let localizador = document.getElementById("occupancy");
localizador.onclick = function localizador1(){
    location.reload();
    document.getElementsByTagName("Form").onload = function rename(){
        let solicitador = (JSON.parse(localStorage.getItem(`individuo`)))[0];
        nombre = solicitador.nombre;
        apellido = solicitador.apellido;
        dni = solicitador.dni;
        correo = solicitador.correo;
        telefono = solicitador.telefono;
        ingresos = solicitador.ingresos;
        gastos = solicitador.gastos;
        monto = solicitador.monto;
        objeto = solicitador.objeto;
        cuotas = solicitador.cuotas;
    





let borrador = document.getElementById("borrar");
borrador.onclick = function borrar(){
    localStorage.clear();
}

//
//const typeSolic = JSON.stringify(solicitante1);
//localStorage.setItem("solicitante1", typeSolic);
//console.log(typeSolic);


let simulador = document.getElementById("submit1");     
simulador.onclick = function init(){
    simulador.innerHTML = `Solicitar`;
    console.log(nombre);
    console.log(cuotas);
    console.log(monto);
    console.log(ingresos);
    console.log(objeto);

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


class Creditos {
    constructor(numero, tipo, interesmensual, maxcuota) {
        this.numero = numero;
        this.tipo = tipo;
        this.interesmensual = interesmensual;
        this.maxcuota = maxcuota;
    }
}

const credito = [];

credito.push(new Creditos(1,`personal`, 0.021, 37));
credito.push(new Creditos(2,`refacciones`, 0.02, 37));
credito.push(new Creditos(3,`hipotecario`, 0.017, 241));
credito.push(new Creditos(4,`prendario`, 0.0192, 61));

const credJson = JSON.stringify(credito);
console.log(credJson);

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



    /* const solicitante1 = new Solicitante (nombre, apellido, dni, correo, telefono, monto, objeto, cuotas, ingresos, gastos, localizador);
    solicitante1.accesoSolicitante()
    console.log(solicitante1) */

   
    
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





    respuestaCredito();   

    let solicitud = document.getElementById("submit1");
solicitud.onclick = function valorCuota (){




    let responderk = document.querySelector(".formulario");
    let datosP = `Hola ${nombre} ${apellido}, DNI ${dni}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
    responderk.innerHTML += `    <div class="divRespuesta">
                                    <textarea class="elemento respCred" name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea>
                                   
                                </div>`;}

}
}

}