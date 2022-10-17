import React from 'react'
import "../styles/components/SocialNetwork.css"

function SocialNetwork() {
  return (
    <section class="network">
        <h2>LES RESEAUX :</h2>
        <div class="network-logo-flex">
            <a class="facebook" href="https://www.facebook.com/GrandSpiritEsport">
                <img src="./img/icones/facebook.png" alt=""/>
            </a>
            <a class="twitter" href="https://twitter.com/grandspiritteam">
                <img src="./img/icones/twitter.png" alt=""/>
            </a>
            <a class="youtube" href="#">
                <img src="./img/icones/youtube.png" alt=""/>
            </a>
            <a class="twitch" href="#">
                <img src="./img/icones/twitch.png" alt=""/>
            </a>
        </div>
    </section>
  )
}

export default SocialNetwork