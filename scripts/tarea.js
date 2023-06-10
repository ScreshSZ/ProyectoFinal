function agregarTarea() {
    let entradaTarea = document.getElementById("entradaTarea");
    let listaTareas = document.getElementById("listaTareas");
    
    if (entradaTarea.value !== "") {
      let li = document.createElement("li");
      let divTarea = document.createElement("div");
      let textoTarea = document.createTextNode(entradaTarea.value);
      let btnEliminar = document.createElement("span");
      let btnTachar = document.createElement("span");
      
      divTarea.classList.add("tarea");
      btnTachar.classList.add("btn-tachar");
      btnEliminar.classList.add("btn-eliminar");

      btnTachar.textContent = "Tachar";
      btnEliminar.textContent = "Eliminar";
      
      
      btnEliminar.onclick = function(event) {
        eliminarTarea(event);
      };
      
      btnTachar.onclick = function(event) {
        tacharTarea(event);
      };
      
      divTarea.appendChild(textoTarea);
      divTarea.appendChild(btnTachar);
      divTarea.appendChild(btnEliminar);
      li.appendChild(divTarea);
      
      listaTareas.appendChild(li);
      entradaTarea.value = "";
    }
  }
  
  
  function eliminarTarea(event) {
    let elementoTarea = event.target.parentNode.parentNode;
    elementoTarea.parentNode.removeChild(elementoTarea);
  }
  
  
  function tacharTarea(event) {
    let textoTarea = event.target.parentNode;
    textoTarea.classList.toggle("completada");
  }