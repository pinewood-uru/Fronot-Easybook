import { Request } from "../Request.js";
import { imprimir, obtenerValorInput, validarSesion
 } from "../util/helpers.js";

 validarSesion();

 // obtenemos el id de la mascota
const params = new URLSearchParams(window.location.search);
const idCliente = params.get("id");

// 1 Llamar al get de cliente con el id.
// 2 Crear funcion que cargue el formulario existente con la data del usuario
// 3 Si tengo un id, llamo al put en vez de al post.

console.log(idCliente)
if (idCliente != undefined) {
    Request.getClienteById(idCliente)
    .then((data) => {
        const { nombre, apellido, mail, celular, horario, personas, date } = data;
        console.log(data)
        document.querySelector("#nombre").value = nombre;
        document.querySelector("#apellido").value = apellido;
        document.querySelector("#email").value = mail;
        document.querySelector("#celular").value = celular;
        document.querySelector("#horario").value = horario;
        document.querySelector("#personas").value = personas;
        document.querySelector("#date").value = date;
    })
    .catch((error) => {
        imprimir("nuevo-cliente-error", error);
    });
}

 document.querySelector("#btn-nuevocliente").addEventListener("click", () => {
     const nombre = obtenerValorInput("nombre");
     const apellido = obtenerValorInput("apellido");
     const mail = obtenerValorInput("email");
     const celular = obtenerValorInput("celular");
     const horario = obtenerValorInput("horario");
     const personas = obtenerValorInput("personas");
     const date = obtenerValorInput("date");

     if (!nombre || !apellido || !mail || !celular || !horario || !personas || !date) {
        
        imprimir("Nuevo-cliente-error", "Por favor complete todos los campos");
        return;
      }

      const body = JSON.stringify({ nombre, apellido, mail, celular, horario, personas, date });
      idCliente != undefined ? Request.modificarCliente(idCliente, body) : Request.postCliente(body)
      .then(() => {
          document.location.replace("Reservas.html");
      })
      .then(() => {
        idCliente != undefined ? alert("Cliente modificado con exito") : alert("Cliente creado con exito");
      })
      .catch((error) => {
          imprimir("nuevo-cliente-error", error);
      });    
     
 })