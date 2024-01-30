const presentacion = document.getElementById("presentacion");
const habilidades = document.getElementById("habilidades");
const proyectos = document.getElementById("proyectos");
const formacion = document.getElementById("formacion");

let seccions = [presentacion, habilidades, proyectos, formacion];

function mostrar(item){
    for (let i = 0; i < seccions.length; i++) {
        seccions[i].style.width = "0px";  
    }
    item.style.width = "600px";
}

