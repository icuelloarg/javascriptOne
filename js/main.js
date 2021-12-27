

/* 
ISAIAS BENJAMIN CUELLO
JAVASCRIPT COMISIÓN 16885
DNI 36998255

Para mi PROYECTO FINAL trabajé en un simulador de créditos.
El programa recibe los datos solicitados, evalúa la condición
del solicitante y emite respuestas acorde a su capacidad de 
pago. Emite tanto respuestas positivas como negativas. Utiliza
API de validación de mail y de acuerdo a la respuesta de la API
se manipula el DOM */


$(function() {
    console.log(`Site listo`);
});

// Switch que a partir del tipo de credito solicitado, modifica el html del select de cantidad de cuotas.

$("#tipocred").change(function() {
    switch ($("#tipocred").val()) {
        case "1":
            $("#cuotificador").html(`
            <option value="6" id="6c">6</option>
            <option value="12" id="12c">12</option>
            <option value="18" id="18c">18</option>
            <option value="24" id="24c">24</option>           
            <option value="36" id="36c">36</option>`);
            break;
        case "2":
            $("#cuotificador").html(`
            <option value="6" id="6c">6</option>
            <option value="12" id="12c">12</option>
            <option value="18" id="18c">18</option>
            <option value="24" id="24c">24</option>           
            <option value="36" id="36c">36</option>`);
            break;
        case "3":
            $("#cuotificador").html(`
            <option value="120" id="120c">120</option>       
            <option value="240" id="240c">240</option>`);

            break;
        case "4":
            $("#cuotificador").html(`
            <option value="6" id="6c">6</option>
            <option value="12" id="12c">12</option>
            <option value="18" id="18c">18</option>
            <option value="24" id="24c">24</option>           
            <option value="36" id="36c">36</option>
            <option value="48" id="48c">48</option>
            <option value="60" id="60c">60</option>`);
            break;
        default:
            $("#cuotificador").html('');
    }

});

//Clase constructora del solicitante

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
}

// Array que recibirá los datos del solicitante

const personasD = [];

// Evento que hace la llamada al API de validación del e-mail

$("#mail").blur(function() {
    const urlApi = 'https://api.email-validator.net/api/verify';
    const emailVerif = $("#mail").val();
    $.ajax({
    url: urlApi,
    type: 'POST',
    cache: false,
    crossDomain: true,
    data: { EmailAddress: `${emailVerif}`, APIKey: 'ev-f941cc8dd68f2aeb7239a5c75208b65f' },
    dataType: 'json',
    success: function (json) {
        if (typeof(json.status) != "undefined") {
         
            var resultcode = json.status;
            if(resultcode===200){$("#mail").addClass("valid")} else {$("#mail").addClass("invalid"); $("#mail").attr('disabled', true); $("#submit1").html( `<button class="submi in1" id="reload1" type="reset">Corregir mail</button>`);
        $("#reload1").click(() => {    
        $("#formReq").slideUp("1000")
                     .delay("fast")
                     .slideDown("1000");
                     setTimeout(function(){location.reload()}, 1000);})};
        }
    }
});
});

// Evento que toma los datos del solicitante, forma el array y lo envía a LS.

$("#occupancy").change(function(){
    
    let nombre1 = $("#formName").val();
    let apellido1 = $("#formLast").val();
    let dni1 = $("#dni").val();
    let correo1 = $("#mail").val();
    let telefono1 = $("#phone").val();
    let objeto1 = Number($("#tipocred").val());
    let monto1 = Number($("#monto").val());
    let cuotas1 = Number($("#cuotificador").val());
    let ingresos1 = Number($("#income").val());
    let gastos1 = Number($("#outcome").val());
    const solicitador1 = new Solicitante (nombre1, apellido1, dni1, correo1, telefono1, monto1, objeto1, cuotas1, ingresos1, gastos1);
    personasD.push(solicitador1);
    const savePersona = JSON.stringify(personasD);
    localStorage.setItem(`individuo`, savePersona);


let nombre = $("#formName").val();
let apellido = $("#formLast").val();
let dni = $("#dni").val();
let correo = $("#mail").val();
let telefono = $("#phone").val();
let ingresos = Number($("#income").val());
let gastos = Number($("#outcome").val());
let monto = Number($("#monto").val());
let objeto = Number($("#tipocred").val());
let cuotas = Number($("#cuotificador").val());


// Evento click que dispara el cálculo del crédito

$("#submit1").click(function init() {
    
 $("#submit1" ).html(`Solicitar`);

// Función que calcula el margen mensual de crédito que dispone el solicitante

function margen () {
 
    
    if ((ingresos - gastos)>=80000) {return ((ingresos-gastos)*0.8)}
    else if ((ingresos - gastos)>=50000) {return ((ingresos-gastos)*0.8)}
    else if ((ingresos - gastos)>=30000) {return ((ingresos-gastos)*0.6)}
    else if ((ingresos - gastos)>=15000) {return ((ingresos-gastos)*0.5)}
    else {return 0};
}
// Función que calcula el crédito total posible del solicitante

function categoria () {
    return (margen() * cuotas);
}

// Clase constructora de los datos relevantes de cada tipo de crédito

class Creditos {
    constructor(numero, tipo, interesmensual, maxcuota) {
        this.numero = numero;
        this.tipo = tipo;
        this.interesmensual = interesmensual;
        this.maxcuota = maxcuota;
    }
}

// Array de créditos que luego se envía a LS

const credito = [];

credito.push(new Creditos(1,`personal`, 0.021, 37));
credito.push(new Creditos(2,`refacciones`, 0.02, 37));
credito.push(new Creditos(3,`hipotecario`, 0.017, 241));
credito.push(new Creditos(4,`prendario`, 0.0192, 61));

const credJson = JSON.stringify(credito);
localStorage.setItem(`dataCréditos`, credJson);

// Función que revisa que la cantidad de cuotas sea correcta de acuerdo a su categoría

function cuotasMaxima(){
    const cuotamax = credito.find(credito => credito.numero === objeto)
    return (cuotamax.maxcuota);
}

// Función que calcula el interés aplicable y retorna el monto total del crédito más sus intereses.}

function montoTotal(){
    const interes = credito.find(credito => credito.numero === objeto)
    return (monto+(monto * interes.interesmensual * cuotas));
}

// Función que calcula la cuota a pagar por el solicitante

function calculoCredito () {
    
    return (montoTotal() / cuotas);
}


// Función que dispara el cálculo de las variables de acuerdo al tipo de crédito solicitado

function respuestaCredito (){
    let cuotaPagar = 0;

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
// Mensaje con el valor de cuota

            let cuotaMostrar = (parseInt(cuotaPagar));
            $(".elemento1").html(`<input type="text" class="elemento in1" id="resp" value="Cuota a pagar $${cuotaMostrar}" disabled>`);
        }
        else {
// Salida ante error, montos no son válidos. Manipula el DOM y funcionaliza un nuevo button de reset.
           
                $(".elemento1").append(`<input type="text" class="elemento in1" id="resp" value="TE ESPERAMOS LA PROXIMA." disabled>`);
                $(".submit").html( `<button class="submi in1" id="reload" type="reset">Probar de nuevo</button>`);
                $("#reload").click(function(){
                    $("#formReq").slideUp("1000")
                    .delay("fast")
                    .slideDown("1000");
                    setTimeout(function(){location.reload()}, 840);
                });
            }
}




    respuestaCredito();   

// Mensaje ejecutado al hacer click en "solicitar"
let datosP = `Hola ${nombre} ${apellido}, DNI ${dni}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;

$(".formulario").append( `<div class="divRespuesta">
<textarea class="elemento respCred in1" style="display: none"  name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea></div>`);
$("#submit1").click(
    function valorCuota (){
        $("#resp2").slideDown("2000");
    }   
)})});

// Funcionalidad y animación del button borrar.

$("#borrar").click(() => {
    $("#submit1").html(`Evaluar`);
    $(".in1").remove();
    $("#formReq").slideUp("1000")
                 .delay("fast")
                 .slideDown("1000");
                 setTimeout(function(){location.reload()}, 1000);});



   