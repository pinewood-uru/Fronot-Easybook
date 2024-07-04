import Cliente from "./modelo/Cliente.js"
import { Request } from "../Request.js";
import { imprimir } from "../util/helpers.js";

const mostrarlistaClienteshoy = (data) => {
    console.log('Clientes: ', data)
    imprimir("lista-error", "");
    const headerlista = `<tr>
    <th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Peronsas</th>
    <th scope="col">Fecha</th>
    <th scope="col">Horario</th>
    </tr>`;

    const listadoCliente = data.map((cliente) =>
        new Cliente(
            cliente.id,
            cliente.nombre,
            cliente.apellido,
            cliente.horario,
            cliente.personas,
            cliente.mail,
            cliente.celular,
            cliente.date
        ).mostrarclienteshoy());
    
    imprimir("listadohoy",`<table class="container-fluid table table-bordered border-primary w-100 justify-content-start"><thead>${headerlista}</thead><tbody>${listadoCliente}<tbody></table>`)

}

// ERROR
const mostrarError = (error) => {
    imprimir("lista-error", error);
};



// LISTADO
Request.getCliente().then(mostrarlistaClienteshoy).catch(mostrarError);