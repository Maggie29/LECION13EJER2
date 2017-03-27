var personal = document.getElementById('personal');
var datos =
[{Nombre : "Arabela", Apellido : "Rojas", Rol : "T.A", Cumpleanios : "23 de enero" },
 {Nombre : "Michelle", Apellido : "Seguil", Rol : "T.A", Cumpleanios : "25 de noviembre" },
 {Nombre : "Meche", Apellido : "Zubieta", Rol : "T.A", Cumpleanios : "02 de marzo" },
 { Nombre : "Papu", Apellido : "Rivarola", Rol : "Psicóloga", Cumpleanios : "10 de octubre" },
 { Nombre : "Gian", Apellido : "Corzo", Rol : "Profesor", Cumpleanios : "23 de enero" }];

 datos.forEach(function(element,index,array){
 	var divPersonal = document.createElement("div");
 	for(var prop in element){
     divPersonal.classList.add("div-personal");
 		var pContainer = document.createElement("p");
 		pContainer.innerHTML = "<ul>"+"<li>"+prop + ": " + element[prop]+"</li>" +"</ul>";
 		divPersonal.appendChild(pContainer);
 	}
 	personal.appendChild(divPersonal)
 })

 
/*
var lista ="";
 datos.forEach(function(item){
          lista += "<div><ul>"+
                    "<li> NOMBRE:"+item.nombre+"</li>"+
                    "<li> APELLIDO:"+item.apellido+"</li>"+
                    "<li> ROL:"+item.rol+"</li>"+
                    "<li> CUMPLEAÑOS:"+item.cumpleanios+"</li>"+
                    "</ul></div>";

   });
  personal.innerHTML = lista;
*/
