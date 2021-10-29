
// TERCERA ENTREGA 

let ocupacion = (prompt("Tienes ingresos regulares? SI o NO"))
if (ocupacion != "SI") {alert("Al no tener ingresos no podemos ofrecerte un CREDITO")};

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
