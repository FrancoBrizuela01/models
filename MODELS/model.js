const menu = document.querySelector(".container-head");
const btnMenu = document.querySelector(".btn-menu");


btnMenu.addEventListener('click', () =>{

    if(menu.style.display == 'none'){
        console.log("hola")
        menu.style.display = 'flex';
    }
    else{
        menu.style.display = 'none';
    } 
})

document.addEventListener('DOMContentLoaded', () => { //cuando el contenido de la pagina se haya cargado ejecuto
    const imgLightBox = document.querySelectorAll('.materialboxed'); //obtengo todos los elementos de la pagina q tengan esta clase y nos devuelve un arreglo
    M.Materialbox.init(imgLightBox, {//ejecuto el material box
        inDuration: 500, //lo q tarda en entrar
        outDuration: 1000 //lo que tarda en salir
    }); 
}); 






