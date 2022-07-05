// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const { name } = dataPhotographer;
    const { date, id, photographerId, price, title, image, video, likes } = dataMedias;

    const img = `assets/photographers/${name}/${image}`;
    const vid = `assets/photographers/${name}/${video}`;
  
    // Fonction de la création des cartes des photographes
    const getMediasCardDOM = () => {
        if(video !== undefined)
        {
            return `
                <div class="medias-cards">

                    <a href="#" onclick="openLightBox(${id})" aria-label="Liliac Breasted roller, closeup view">
                        <div class="vid cards">
                            <video src="${vid}" type="video/mp4"></video>
                        </div>
                    </a>

                    <div class="name-likes">
                        <div class="title">
                            ${title}
                        </div>

                        <div class="likes" id="likes-${id}">
                            <span>${likes}</span> <i class="fas fa-heart addlike" id="heart-${id}" onclick="addordislike(${id})"  aria-label="likes"></i>
                        </div>
                    </div>
                    
                </div>`
        }
        else
        {
            return `
                <div class="medias-cards">

                    <a href="#" onclick="openLightBox(${id})" aria-label="Liliac Breasted roller, closeup view">
                        <div class="img cards">
                            <img class="w-100 img-lightbox" src="${img}" alt="Photo de ${name}" >
                        </div>
                    </a>

                    <div class="name-likes">
                        <div class="title">
                            ${title}
                        </div>

                        <div class="likes" id="likes-${id}">
                            <span>${likes}</span> <i class="fas fa-heart addlike" id="heart-${id}" onclick="addordislike(${id})"></i>
                        </div>
                    </div>
                    
                </div>`
        ;}
    }

    return { name, date, id, photographerId, price, title, image, video, likes, getMediasCardDOM };
}