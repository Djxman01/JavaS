//  Algoritmo con condicional
 
 let nota1;
 let nota2;
 let nota3;

 nota1 = prompt('Ingrese 1ra. nota:', '');
 nota2 = prompt('Ingrese 2da. nota:', '');
 nota3 = prompt('Ingrese 3ra. nota:', '');

 nota1 = parseInt(nota1);
 nota2 = parseInt(nota2);
 nota3 = parseInt(nota3);
 let promedio;
 promedio = (nota1 + nota2 + nota3) / 3;
 if (promedio >= 7) {
     console.log('promocionado');
 }
 else {
     if (promedio >= 4) {
         console.log('regular');
     }
     else {
         console.log('reprobado');
     }
 }


 let i = 1;
 while (i <= 30) {
 console.log("El valor del bucle es: " + i + "<br>");
     if (i == 20){
         console.log("Se rompió la ejecución del bucle.");
         break;
     }
     i++;
 }







//  Simulador Interactivo

function EntraData() {
    let txt = document.getElementById("tempEntrada");
    let temp = parseInt(txt.value);
    return temp;
   }
   function EscriuData(nomZona, text) {
    document.getElementById(nomZona).innerHTML = text;
   }
   function toFahrenheit() {
    let temp = EntraData();
    temp = ((1.8) * temp + 32);
    EscriuData('Zona1', temp + " ºF"); // por pantalla la temp resultado
    FraseRelativa(temp);
   }
   function toCelsius() {
    let temp = EntraData();
    let temp2 = ((temp - 32) / 1.8);
    EscriuData('Zona1', temp2 + " ºC");
    FraseRelativa(temp);
   }
   function FraseRelativa(temperatura) {
   let cadena="-";
   if ((temperatura >= 14) && (temperatura < 32)) cadena ="Temperatura baja";
   if ((temperatura >= 32) && (temperatura < 68)) cadena ="Temperatura adecuada";
   if ((temperatura >= 68) && (temperatura <= 96)) cadena ="Temperatura alta";
   if (cadena=="-") cadena = "Temperatura desconocida";
   EscriuData('Zona2', cadena);
   } 