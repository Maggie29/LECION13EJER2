var personal = document.getElementById('personal');
var datos =
[{nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
 {nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 {nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivarola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }];
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
