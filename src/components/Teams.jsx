import React from 'react'
import "../styles/components/Teams.css"

function Teams() {
  return (
    <section class="index-teams">
            <h2>NOS ÉQUIPES</h2>

            <article class="games">
                <a class="lol" href="/equipes">
                    <img src="./img/accueil/lol.png" alt=""/>
                    <h3>League of Legends</h3>
                </a>

                <a class="valorant" href="/equipes">
                    <img src="./img/accueil/valorant.png" alt=""/>
                    <h3>Valorant</h3>
                </a>
            </article>
        </section>
  )
}

export default Teams