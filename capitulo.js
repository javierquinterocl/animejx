



const contenedor = document.getElementById('Contenedor');
const animesss = document.getElementById("contenedor3");
const contenido = document.getElementById("contenidos");
const paginas = document.getElementById("paginacion");

contenedor.addEventListener('click', (e) =>{
    if(e.target.closest('.pelicula')){
        animesss.classList.add("open");
        contenedor.classList.add("close");
        contenido.classList.add("close");
        paginas.classList.add("close");
        const id = e.target.closest('.pelicula').id;
        const resultado = fecthitem(id);
    }
        
})