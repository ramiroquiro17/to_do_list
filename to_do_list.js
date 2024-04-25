let tareas = [];
let tareasGuardadas = JSON.parse(localStorage.getItem('tareasGuardadas'))
if (!(tareasGuardadas === null))
  tareasGuardadas.forEach((element)=>{
    tareas.push(element)
  })
const mostrarTareas = () => {
  let html = "<ul>";
  tareas.forEach(function(elemento, indice) {
    if (elemento.completada === false) {
      html += `<li id="tarea-${indice}">${elemento.nombre} <button id="boton-${indice}">Marcar como Completada</button><button id="botonEliminar-${indice}">X</button></li>`;  
    } else{
      html += `<li id="tarea-${indice}">${elemento.nombre} COMPLETADA <button id="boton-${indice}">Marcar como completada</button><button id="botonEliminar-${indice}">X</button></li>`;
    }
  });
  html += "</ul>";
  document.getElementById("lista").innerHTML = html;
  tareas.forEach((elemento, indice) => {
    document.getElementById(`boton-${indice}`).addEventListener("click", function(){
      
      tareas[indice].completada = !tareas[indice].completada;
      mostrarTareas(); 
    });
  });
  tareas.forEach((elemento,indice)=>{
    document.getElementById(`botonEliminar-${indice}`).addEventListener("click",function(){
      tareas.splice(indice,1)
      mostrarTareas();
    })
  })
  console.log(tareas)
  localStorage.setItem('tareasGuardadas',JSON.stringify(tareas));
};

mostrarTareas();

var boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
  let nombreNuevaTarea = prompt("Ingrese la nueva tarea");
  let nuevaTarea= {
    nombre: nombreNuevaTarea,
    completada: false
  };
  tareas.push(nuevaTarea);
  mostrarTareas();
});