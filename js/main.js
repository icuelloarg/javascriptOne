// OCTAVA ENTREGA
//Se establece el metodo para tomar los datos desde el formulario, y se hacen parte de los array
// y los objetos a los datos expresados. 
let nombre = document.getElementById("formName").value;
let apellido = document.getElementById("formLastN").value;
let telefono = document.getElementById("phone").value;
let dni = document.getElementById("dni").value;
let correo = document.getElementById("mail").value;
let ocup = document.getElementById("ocupation").value;

const objeto = Number(document.getElementById("tipoc").value);
const monto = Number(document.getElementById("monto1").value);
const cuotas = Number(document.getElementById("cuotas1").value);

let ingresos = Number(document.getElementById("incomes").value);
let gastos = Number(document.getElementById("outcomes").value);

let objeto1 = document.getElementById("tipoc");


class Creditos {
    constructor(numero, tipo, interesmensual, maxcuota, codigo) {
        this.numero = numero;
        this.tipo = tipo;
        this.interesmensual = interesmensual;
        this.maxcuota = maxcuota;
        this.codigo = codigo;
    }
}

const credito = [];


/* let codePer = `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
</select>`;
let codeRef = `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
</select>`;
let codeHip = `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
<option value="48">48</option>
<option value="60">60</option>
<option value="120">120</option>       
<option value="240">240</option>
</select>`;
let codePre = `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
<option value="48">48</option>
<option value="60">60</option>
</select>`; 

credito.push(new Creditos(1,`Personal`, 0.021, 37, `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
</select>`));
credito.push(new Creditos(2,`Refacciones`, 0.02, 37, `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
</select>`));
credito.push(new Creditos(3,`Hipotecario`, 0.017, 241, `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
<option value="48">48</option>
<option value="60">60</option>
<option value="120">120</option>       
<option value="240">240</option>
</select>`));
credito.push(new Creditos(4,`Prendario`, 0.0192, 61, `    <select class="elemento" name="Cuotas" id="cuotas1">
<option value="Default">Cantidad de cuotas</option>
<option value="6">6</option>
<option value="12">12</option>
<option value="18">18</option>
<option value="24">24</option>           
<option value="36">36</option>
<option value="48">48</option>
<option value="60">60</option>
</select>`));

function mainq(){
    const codigoq = credito.find(credito => credito.numero === objeto)
    return (codigoq.tipo);
}

let cuotasort = document.getElementById("cantCuotas");
objeto1.onchange = function seleccion(){
    cuotasort.innerHTML = mainq();
;
}
  switch (objeto){
    case 1:
            cuotasort.innerHTML = codePer;
            break;
    case 2:
             cuotasort.innerHTML = codeRef;
             break;
    case 3:
            cuotasort.innerHTML = codeHip;
            break;
    case 4:
            cuotasort.innerHTML = codePre;
            break;
            default:
                mensaje = `Dato incorrecto`;
                break;
                
            }




//let body = document.getElementById("formName");
objeto1.onchange = function tumama(){
   // alert(`peligro`);   
     for (let i = 0; i < credito.length; i++) {
      if (credito[i].team === objeto) {
        console.log(credito[i]);
      }
    }
}
function similar() {

    //let element = document.getElementById("equipo").value;
  

  }
  */
  //similar()


/*
let body = document.getElementsByTagName("body")
body.onclick = function ella(){
    console.log(Creditos[4]);
}
function tesort(){
    const maestro = credito.find(credito => credito.numero === objeto)
    return (maestro.codero);
}
//const mantic = tesort();
const maximus = document.getElementById("colales");

objeto1.onchange = function type(){
console.log(tesort())

    maximus.innerHTML = tesort();
    }

*/


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


    let responderk = document.querySelector(".formulario");
    let datosP = `Hola ${nombre}, te llamaremos en breve para ofrecerte tu credito de $${monto} al ${telefono}. Gracias!`;
    responderk.innerHTML += `    <div class="divRespuesta">
                                    <textarea class="elemento respCred" name="Text" id="resp2" cols="30" rows="4" disabled>${datosP}</textarea>
                                   
                                </div>`;}
   
        


}

