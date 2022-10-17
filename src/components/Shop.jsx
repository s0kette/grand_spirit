import React from 'react';
import "../styles/components/Shop.css"

function Shop() {
  return (
    <section class="shop">
        <h2>LA BOUTIQUE</h2>

        <div class="shop-flex">
            <div class="shop-img">
                <img src="./img/accueil/img-boutique-pageAccueil.png" alt=""/>
            </div>

            <div class="shop-text">
                <p>Découvrez notre toute nouvelle boutique ! Goodies, porte clé, stickers, gersey, hoodies, tshirt, casquette, mug aux couleurs de nos équipes et de nos sponsors...</p>
                <a href="#">Passer commande</a>
            </div>
        </div>
    </section>
  )
}

export default Shop