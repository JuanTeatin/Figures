function suma(){
     var a=0;
     var b=0;
     var suma=0;
     alert("Por favor ingrese el primer valor a sumar");
     a=parseInt(prompt(""));
     alert("Por favor ingrese el segundo valor a sumar")
     b=parseInt(prompt(""));
     suma=a+b;
     alert("El de su suma es"+suma);
}
function opBasica(){
    var A=0;
    var B=0;
    var suma=0;
    var resta=0;
    var multiplicacion=0;
    var division=0;
    alert("Por favor ingresar el primer valor");
    A=parseInt(prompt(""));
    alert("Por favor ingresar el segundo valor");
    B=parseInt(prompt(""));
    suma=A+B;
    resta=A-B;
    multiplicacion=A*B;
    division=A/B;
    alert("el resultado de la suma es="+suma);
    alert("el resultado de la resta es="+resta);
    alert("el resultado de la multiplicacion es="+multiplicacion);
    alert("el resultado de la division es="+division);

}
function promedioNotas(){
     var notas1=0
     var notas2=0
     var notas3=0
     var notas4=0
     var notas5=0
     var notas6=0
     var notas7=0
     var promedio=0
     notas1=parseInt(prompt(""));
     notas2=parseInt(prompt(""));
     notas3=parseInt(prompt(""));
     notas4=parseInt(prompt(""));
     notas5=parseInt(prompt(""));
     notas6=parseInt(prompt(""));
     notas7=parseInt(prompt(""));
     promedio=(notas1+notas2+notas3+notas4+notas5+notas6+notas7)/7;
     alert("el promedio es"+promedio)
     if (promedio>6.1){
          alert("aprobo");
     }
     else{
          alert("reprobo")
     }
}
function inversionCapital(){
     var capital=0;
     var ganancia=0;
     var anio=0;
     var total=0;
     capital=parseInt(prompt("por favor ingrese el capital"));
     anio=parseInt(prompt("por favor ingrese el anio"));
     ganancia=(capital*0,204)*anio
     total=capital+ganancia;
     alert("la ganancia total es"+ganancia);
     alert("el recibido total es"+total);
}
function mayoryMenorque(){
     var A=0
     var B=0
     A=parseInt(prompt("ingrese el primer valor"));
     B=parseInt(prompt("ingrese el segundo valor"));
     if (A>B){
          alert("A es mayor");
     }
     else{
          alert("B es mayor");
     }
}





function circulo(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("circulo");
}

function rectangulo(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("rectangulo");
}

function rombo(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("rombo");
}

function gif(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("gif");
}

function izquierda(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("izquierda");
}

function derecha(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("derecha");
}

function arriba(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("arriba");
}

function abajo(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("abajo");
}

function diagonal(){
     var figura= document.getElementById("figura");
     figura.classList.toggle("diagonal");
}