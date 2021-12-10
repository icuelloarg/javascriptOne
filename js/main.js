

/* Intenté usar varios eventos, pero por ejemplo con el evento ready, click o change, me arroja 
un mensaje de error, que la sintaxis está en desuso, y me envía a donde supuestamente
está la nueva regla, pero el "reemplazo" tampoco me funciona. 
Naturalmnte para que no se rompa el código volví atras con los cambios. Dejo un par de ejemplos 
De las cosas que no funcionan.
Si funcionó bien el agregado de HTML que hice al final, con los nuevos mensajes de salida que antes
eran alert.*/

/* SNo funciona bien jQuery, en determinados eventos me arroja el mensaje de abajo */

/* "(handler: ($: JQueryStatic) => void): JQuery<Document>" está en desuso.ts(6385)
JQuery.d.ts(9539, 8): La declaración se ha marcado aquí como en desuso. */


/* $(document).ready(function(){
    console.log(`Site listo`);
})

 */


let selectTipoCredito = document.getElementById('tipocred');
let selectCantCuotas = document.getElementById('cuotificador');
const remover120 = document.getElementById("120c");
const remover240 = document.getElementById("240c");
const remover60 = document.getElementById("60c");
const remover48 = document.getElementById("48c");
const remover6 = document.getElementById("6c");
const remover12 = document.getElementById("12c");
const remover18 = document.getElementById("18c");
const remover24 = document.getElementById("24c");
const remover36 = document.getElementById("36c");
let responderC = document.querySelector(".elemento1");

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
            selectCantCuotas.removeChild(remover6);
            selectCantCuotas.removeChild(remover12);
            selectCantCuotas.removeChild(remover18);
            selectCantCuotas.removeChild(remover24);
            selectCantCuotas.removeChild(remover36);
            selectCantCuotas.removeChild(remover60);
            selectCantCuotas.removeChild(remover48);

            break;
        case "4":
            selectCantCuotas.removeChild(remover120);
            selectCantCuotas.removeChild(remover240);
            break;
        default:
            selectCantCuotas.innerHTML += '';
    }

});



class Solicitante {
    constructor (name, last, docu, mail, phone, ammount, object1, pays, incoming, outgoing){
        this.name = name;
        this.last = last;
        this.docu = docu;
        this.mail = mail;
        this.phone = phone;
        this.ammount = ammount;
        this.object1 = object1;
        this.pays = pays;
        this.incoming = incoming;
        this.outgoing = outgoing;

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


let localizador = document.getElementById("occupancy");
localizador.onblur = function localizador1(){
    let nombre1 = document.getElementById("formName").value;
    let apellido1 = document.getElementById("formLast").value;
    let dni1 = document.getElementById("dni").value;
    let correo1 = document.getElementById("mail").value;
    let telefono1 = document.getElementById("phone").value;
    let objeto1 = Number(document.getElementById("tipocred").value);
    let monto1 = Number(document.getElementById("monto").value);
    let cuotas1 = Number(document.getElementById("cuotificador").value);
    let ingresos1 = Number(document.getElementById("income").value);
    let gastos1 = Number(document.getElementById("outcome").value);



    const solicitador1 = new Solicitante (nombre1, apellido1, dni1, correo1, telefono1, monto1, objeto1, cuotas1, ingresos1, gastos1);
    personasD.push(solicitador1);
    const savePersona = JSON.stringify(personasD);
    localStorage.setItem(`individuo`, savePersona);


let nombre = document.getElementById("formName").value;
let apellido = document.getElementById("formLast").value;
let dni = document.getElementById("dni").value;
let correo = document.getElementById("mail").value;
let telefono = document.getElementById("phone").value;
let ingresos = Number(document.getElementById("income").value);
let gastos = Number(document.getElementById("outcome").value);
let monto = Number(document.getElementById("monto").value);
let objeto = Number(document.getElementById("tipocred").value);
let cuotas = Number(document.getElementById("cuotificador").value);


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


    
function respuestaCredito (){
    let cuotaPagar = 0;
    let mensaje = `Su cuota a pagar sería de `;

        switch (objeto){
            case 1:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){               
                    cuotaPagar = calculoCredito()}
                else {$(".elemento1").html(`<input type="text" class="elemento" id="resp" value="Tus ingresos son insuficientes." disabled>`)};
                break;
            case 2:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){
                    cuotaPagar = calculoCredito()}
                else {$(".elemento1").html(`<input type="text" class="elemento" id="resp" value="Tus ingresos son insuficientes." disabled>`)};
                break;
            case 3:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){
                    cuotaPagar = calculoCredito()}
                else {$(".elemento1").html(`<input type="text" class="elemento" id="resp" value="Tus ingresos son insuficientes." disabled>`)};
                break;
            case 4:
                if ((cuotas < cuotasMaxima()) && (montoTotal() < categoria())){
                    cuotaPagar = calculoCredito()}
                else {$(".elemento1").html(`<input type="text" class="elemento" id="resp" value="Tus ingresos son insuficientes." disabled>`)};
                break;
            default:
                mensaje = `Dato incorrecto`;
                break;
            
        }
        if (cuotaPagar != false){

            let cuotaMostrar = (parseInt(cuotaPagar));
            responderC.innerHTML = `<input type="text" class="elemento" id="resp" value="Cuota a pagar $${cuotaMostrar}" disabled>`;
        }
        else {$(".elemento1").append(`<input type="text" class="elemento" id="resp" value="TE ESPERAMOS LA PROXIMA." disabled>`);
                $(".submit").html( `<button class="submi" id="submi" type="reset">Hasta pronto!</button>`);
            }
}





    respuestaCredito();   

    let solicitud = document.getElementById("submit1");
    
    /* $("#submit1").trigger("click", function() {
        $("#resp2").slideDown();
      }); */
    
solicitud.onclick = function valorCuota (){
    let datosP = `Hola ${nombre} ${apellido}, DNI ${dni}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
    

$(".formulario").append( `<div class="divRespuesta">
<textarea class="elemento respCred" name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea>

</div>`);

    /* let responderk = document.querySelector(".formulario");
    let datosP = `Hola ${nombre} ${apellido}, DNI ${dni}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
    responderk.innerHTML += `    <div class="divRespuesta">
                                    <textarea class="elemento respCred" name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea>
                                   
                                </div>`;}
                                 */

}
}}

/* $( "#formName" ).click(function() {
  $( "#formLast" ).slideDown( "slow", function() {
    // Animation complete
  });
}); */