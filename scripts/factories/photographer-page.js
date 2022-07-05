// Fonction pour afficher le header de 1 photographe
function photographerFactorySingle(data)
{
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getUserCardDOM = () => `
                <div class="single-photograph-text">

                    <h2 tabindex="2">${name}</h2>

                    <div tabindex="3">
                        <h3>${city}, ${country}</h3>
                        <p class="tagline">${tagline}</p>
                    </div>

                </div>

                <div class="justify-center" >
                    <button class="contact_button" onclick="displayModal()" aria-label="Contact Me" tabindex="4">Contactez-moi</button>
                </div>

                <div class="justify-center">
                    <img class="portrait" src="${picture}" alt="${name}" tabindex="5" aria-label="${name}">
                </div>
              `;
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM};
}