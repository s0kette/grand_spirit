import React from 'react'
import "../styles/components/Values.css"

function Values() {
  return (
        <section class="values">
            <h2>NOS VALEURS</h2>

            <div class="value-flex-large-screen">
                <article class="ambition value-flex-item">
                    <div class="value-icon">
                        <img src="./img/icones/trending_up_black_24dp.svg" alt=""/>
                    </div>

                    <div class="ambition-text">
                        <h3>AMBITION</h3>
                        <p>Ambition rime avec compétition. C'est par l'ambition que nous nous fixons des objectifs à la hauteur de notre performance.</p>
                    </div>
                </article>

                <article class="respect value-flex-item">
                    <div class="value-icon">
                        <img src="./img/icones/2x/outline_handshake_black_24dp.png" alt=""/>
                    </div>

                    <div class="respect-text">
                        <h3>RESPECT</h3>
                        <p>La plus profonde valeur du sport est le respect et la bienveillance.</p>
                    </div>
                </article>

                <article class="passion value-flex-item">
                    <div class="value-icon">
                        <img src="./img/icones/2x/outline_volunteer_activism_black_24dp.png" alt=""/>
                    </div>
                    
                    <div class="passion-text">
                        <h3>PASSION</h3>
                        <p>La vocation de Grand Spirit est de donner de l'émotion aux joueurs, aux fans et tous les acteurs de l'E-sports à travers notre passion.</p>
                    </div>
                </article>
            </div>
        </section>
  )
}

export default Values