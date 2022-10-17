import React from 'react'
import "../styles/components/LOLTeam.css"

function LOLTeam() {
    return (
        <section class="team team-lol" id='team-lol'>


            <div class="result-header result-header-lol">
                <h2>GRANDSPIRIT TEAM</h2>
                <img src="./img/equipes/logo-lol-typo-01-300x120.png" alt=""/>
                <a href="#" class="result-btn result-btn-lol">Voir nos résultats</a>
            </div>
    


            <div class="card card-one">
                <img src="./img/equipes/portrait1.png" alt=""/>
                <div class="card-body">
                    <img class="adc" src="./img/icones/pictoadc.png" alt=""/>
                    <p>Nezuko</p>
                </div>
            </div>


            <div class="card card-two">
                <img src="./img/equipes/portrait3.png" alt=""/>
                <div class="card-body">
                    <img class="jungle" src="./img/icones/pictojungle.png" alt=""/>
                    <p>Arkfly</p>
                </div>
            </div>


            <div class="card card-three">
                <img src="./img/equipes/portrait4.png" alt=""/>
                <div class="card-body">
                    <img class="middle" src="./img/icones/pictomiddle.png" alt=""/>
                    <p>Ace Ventura</p>
                </div>
            </div>

            <div class="card card-four">
                <img src="./img/equipes/portrait5.png" alt=""/>
                <div class="card-body">
                    <img class="top" src="./img/icones/pictotop.png" alt=""/>
                    <p>Melaz</p>
                </div>
            </div>

            <div class="card card-five">
                <img src="./img/equipes/portrait1.png" alt=""/>
                <div class="card-body">
                    <img class="bottom" src="./img/icones/pictobottom.png" alt=""/>
                    <p>MaZho</p>
                </div>
            </div>

            <div class="card card-six">
                <img src="./img/equipes/portrait6.png" alt=""/>
                <div class="card-body">
                    <p>Palfeu</p>
                </div>
            </div>

            <div class="card card-seven">
                <img src="./img/equipes/portrait2.png" alt=""/>
                <div class="card-body">
                    <p>Undefined</p>
                </div>
            </div>


        </section>
    )
}

export default LOLTeam