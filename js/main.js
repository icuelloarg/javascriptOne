
//SEPTIMA ENTREGA
/* Se resuelven las salidas del calculador por medio de DOM, creando un espacio input disabled
para el valor de la cuota y el mensaje de salida aparece a continuacion del ASIDE */
function margen () {
    let ingresos = Number(parseInt(prompt(`Cual es tu ingreso mensual en pesos?`)));
    let gastos = Number(parseInt(prompt(`Cuanto es tu gasto mensual en pesos?`)));
    
    
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

function valorCuota (mensaje, cuotaPagar){

    let nombre = prompt(`Cual es tu nombre?`);
    let apellido = prompt(`Cual es tu apellido?`);
    let dni = prompt(`Numero de DNI`);
    let correo = prompt(`Correo electronico`);
    let telefono = prompt(`Telefono`);
    const solicitante1 = new Solicitante (nombre, apellido, dni, correo, telefono);
    solicitante1.accesoSolicitante()
    console.log(solicitante1)

    //SEPTIMA ENTREGA  -  MENSAJE DE SALIDA

    let responderk = document.querySelector(".sidebar");
    let datosP = `Hola ${nombre}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
    responderk.innerHTML += `    <div class="divRespuesta">
                                    <p>
                                        ${datosP}
                                     </p>
                                </div>`;
   
        
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
            //SEPTIMA ENTREGA - VALOR DE LA CUOTA DEL CREDITO SOLICITADO
           let responderC = document.querySelector(".elemento1");
            let cuotaMostrar = (parseInt(cuotaPagar));
            responderC.innerHTML = `<input type="text" class="elemento" id="resp" value="Cuota a pagar $${cuotaMostrar}" disabled>`;
            document.querySelector(".submitButton").value = `Solicitar`;
            valorCuota(mensaje, parseInt(cuotaPagar));
        
        }
        else {alert(`Te esperamos la proxima`)};
}



    const objeto = Number(parseInt(prompt(`Bienvenido a CrediCoder, indique con el Nro el tipo de credito:
    1- Personal hasta 36 cuotas
    2- Refacciones hasta 36 cuotas
    3- Hipotecario hasta 240 cuotas
    4- Prendario hasta 60 cuotas`)));
    const monto = Number(parseInt(prompt(`Que monto solicita?`)));
    const cuotas = Number(parseInt(prompt(`A devolver en cuantos meses?`)));

    respuestaCredito();   
    

 
    credito.sort(function (a, b){
        return (b.numero - a.numero)
    });
    console.log(credito);
    


// TERCERA ENTREGA 
/*
let ocupacion = (prompt("Tienes ingresos regulares? SI o NO"))
if ((ocupacion != "SI") && (ocupacion != "NO")) {alert("Ingresa una respuesta valida")}
else if (ocupacion == "NO") {alert("Al no tener ingresos no podemos ofrecerte un CREDITO")};

while ((ocupacion == "SI") && (ocupacion != "ESC"))  {

    const minimo = 25000
    let ingresos = Number(parseInt(prompt("Cuál es su ingreso mensual en pesos?")));
    if (ingresos < 25000){break;}
    let gastos = Number( parseInt(prompt("Cuánto gasta por mes?")));
    let dinero = Number(ingresos - gastos);
    let aprobado50 = (dinero * 12);
    let aprobado30 = (dinero * 6);
    let aprobado20 = (dinero * 3);

    if ((dinero) >= 50000){alert("Podrías solicitar un crédito de " + aprobado50);} 
    else if ((dinero) >= 30000){alert("Podrías solicitar un crédito de " + aprobado30);} 
    else if ((dinero) >= 20000){alert("Podrías solicitar un crédito de " + aprobado20);}
    else {alert("No podemos ofrecerte ningún crédito")}
    
    
}
alert("Tus ingresos son insuficientes")

*/


// SEGUNDA ENTREGA
/*
let ingresos = Number(parseInt(prompt("Cuál es su ingreso mensual en pesos?")));
let gastos = Number( parseInt(prompt("Cuánto gasta por mes?")));
let dinero = Number(ingresos - gastos);
let aprobado50 = (dinero * 12);
let aprobado30 = (dinero * 6);
let aprobado20 = (dinero * 3);

if ((dinero) >= 50000){alert("Podrías solicitar un crédito de " + aprobado50);} 
else if ((dinero) >= 30000){alert("Podrías solicitar un crédito de " + aprobado30);} 
else if ((dinero) >= 20000){alert("Podrías solicitar un crédito de " + aprobado20);}
else {alert("No podemos ofrecerte ningún crédito")}
*/

/* PRIMERA ENTREGA
let nombre = prompt( "Decinos tu nombre");
let edad = prompt( "Cuál es tu edad?");
let ciudad = prompt( "En qué ciudad vive usted?");
let provincia = prompt( "En qué provincia se encuentra?");
let pais = prompt( "De qué país?");
let mensaje = "tu nombre es " + nombre + " y tu edad es " + edad + ", vivis en " + 
ciudad + " de la provincia de " + provincia + " en el país " + pais;
alert(mensaje)
*/
