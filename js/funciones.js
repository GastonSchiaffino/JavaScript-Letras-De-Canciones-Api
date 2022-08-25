export function limpiarHTML(div){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

export function mostrarSpinner(espacioCarga){

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML =`
        <div class="cube1"></div>
        <div class="cube2"></div>
    `;

    espacioCarga.appendChild(spinner);
}
