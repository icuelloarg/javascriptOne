
// Ajax

/* utilizando ajax y el api del ejemplo de la profe envio el array de solicitante.
Se dispara con el evento click en evaluar.*/


$(function() {
    console.log(`Site listo`);
});

const urlApi = 'https://jsonplaceholder.typicode.com/posts';
let selectTipoCredito = $("#tipocred").text();
console.log(selectTipoCredito);
/* let selectCantCuotas = $("#cuotificador");
let responderC = $(".elemento1"); */

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


/* let localizador = document.getElementById("occupancy");
localizador.onchange = function localizador1() */
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
const info = personasD[0];


/* let simulador = document.getElementById("submit1");     
simulador.onclick = function init() */
$("#submit1").click(function init() {
    /* Se envia con ajax el array de solicitante */
    $.ajax({
            method: "POST",
            url: urlApi,
            data: info,
            success: function () {
                console.log("exito")
                
            }
        });    
        $("#submit1").html(`Solicitar`);


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
            $(".elemento1").html(`<input type="text" class="elemento in1" id="resp" value="Cuota a pagar $${cuotaMostrar}" disabled>`);
        }
        else {$(".elemento1").append(`<input type="text" class="elemento in1" id="resp" value="TE ESPERAMOS LA PROXIMA." disabled>`);
                $(".submit").html( `<button class="submi in1" id="submi" type="reset">Hasta pronto!</button>`);
            }
}




    respuestaCredito();   

    let datosP = `Hola ${nombre} ${apellido}, DNI ${dni}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
  
    $(".formulario").append( `<div class="divRespuesta">
    <textarea class="elemento respCred in1" style="display: none"  name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea>
    
    </div>`);


    let solicitud = document.getElementById("submit1");
    

    solicitud.onclick = function valorCuota (){
        $("#resp2").slideDown("fast");
    

 
}
});

$("#borrar").click(() => {
    $(".in1").remove();
    $("#formReq").slideUp("1000")
                 .delay("fast")
                 .slideDown("1000");

});

});



   