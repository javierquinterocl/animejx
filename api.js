const anime = async() => {
    try{
        const animesp = await fetch(`https://api.jikan.moe/v4/top/anime`);
       
        if(animesp.status === 200){
            const jsontrad = await animesp.json();

            let animess = '';

			jsontrad.data.forEach(ani => {
                animess =  animess + `
                <div class="pelicula">
                      <img class="imagen" src="${ani.images.jpg.large_image_url}">
                    <h3 class="titulo">${ani.title}</h3>
                </div>
            `;;
            });
            document.getElementById("Contenedor").innerHTML = animess;

		} else if(animesp.status === 401){
			console.log('Pusiste la llave mal');
		} else if(animesp.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

    }
    catch(error){
        console.log(error);

    }
}

anime();