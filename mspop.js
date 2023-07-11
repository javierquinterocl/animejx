let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		anime();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		anime();
	}
});


const anime = async () => {
    try {                             
        const animesp = await fetch(`https://api.jikan.moe/v4/top/anime?page=${pagina}&limit=24`);

        if (animesp.status === 200) {
            const jsontrad = await animesp.json();

            let animess = '';
            let animelst = '';
            console.log(jsontrad);
           
            
            jsontrad.data.forEach(ani => {
                animess = animess + `
           
                <div class="pelicula">
                <div class="super">
                <img class="imagen" src="${ani.images.jpg.large_image_url}">
                      <a class="score"> ${ani.source}</a>
                     
                </div>
                      
                      <div class="titulosa">
                      <h5 class="titulo">${ani.title}</h5>
                      <a class="titulo2">Episodios: ${ani.episodes}</a>
                     <a class="titulo2">Año: ${ani.year}</a>
                      </div>
                    
                    
                </div>
            `;;

            });
            document.getElementById("Contenedor").innerHTML = animess;
            
        
        } else if (animesp.status === 401) {
            console.log('Pusiste la llave mal');
        } else if (animesp.status === 404) {
            console.log('La pelicula que buscas no existe');
        } else {
            console.log('Hubo un error y no sabemos que paso');
        }

    }
    catch (error) {
        console.log(error);

    }
}

anime();