import React from 'react'
import "../styles/components/News.css"

function News() {
  return (
    <section class="news">
        <h2>LES NEWS</h2>

        <div class="news-flex">
            <article class="tournament-announce announce">
                <img src="./img/accueil/news-tournoi.jpg" alt=""/>
                <div class="news-flex-text">
                    <h3>Tournoi</h3>
                    <a class="btn-more" href="#">En savoir plus</a>
                </div>
            </article>

            <article class="valorant-announce announce">
                <img src="./img/accueil/news-roster-valo.png" alt=""/>
                <div class="news-flex-text">
                    <h3>Roster Valorant</h3>
                    <a class="btn-more" href="#">En savoir plus</a>
                </div>
            </article>

            <article class="hiring-announce announce">
                <img src="./img/accueil/news-tournoi.jpg" alt=""/>
                <div class="news-flex-text">
                    <h3>Recrutement</h3>
                    <a class="btn-more" href="#">En savoir plus</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default News