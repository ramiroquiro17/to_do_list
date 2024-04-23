let tareas = [
  {
    nombre:'estudiar',
    completada:false
  },
  {
    nombre:'lavar ropa',
    completada:false
  },
  {
    nombre:'pasear perro',
    completada:false
  }
];

const mostrarTareas = () => {
  let html = "<ul>";
  tareas.forEach(function(elemento, indice) {
    if (elemento.completada === false) {
      html += `<li id="tarea-${indice}">${elemento.nombre}</li>`;  
    } else{
      html += `<li id="tarea-${indice}">${elemento.nombre} COMPLETADA</li>`;
    }
  });
  html += "</ul>";
  document.getElementById("lista").innerHTML = html;

  
  tareas.forEach((elemento, indice) => {
    document.getElementById(`tarea-${indice}`).addEventListener("click", function(){
      
      tareas[indice].completada = !tareas[indice].completada;
      mostrarTareas(); 
    });
  });
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
