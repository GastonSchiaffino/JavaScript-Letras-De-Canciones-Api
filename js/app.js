import * as UI from './interfaz.js';
import API from './api.js';
import {limpiarHTML,mostrarSpinner} from'./funciones.js';

UI.formularioBuscar.addEventListener('submit',buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === ''|| cancion === ''){
        //El usuario dejo algun campo vacio
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(()=>{
            UI.divMensajes.textContent='';
            UI.divMensajes.classList.remove('error');
        },3000);

        return;
    }
    //Consultar nuestra api
    limpiarHTML(UI.divResultado);
    limpiarHTML(UI.headingResultado)
    mostrarSpinner(UI.divResultado); 
    
    const busqueda = new API(artista,cancion);
    busqueda.consultarAPI();
   
}

