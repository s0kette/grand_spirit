import React from 'react'
import "../styles/components/Footer.css"

function Footer() {
  return (
    <>
        <footer>
            <ul class="list-1"> Le site
                <li>Nos équipes</li>
                <li>Notre palmarès</li>
                <li>Notre boutique</li>
                <li>Nos projets</li>
                <li>Nous contacter</li>
                <li>Notre blog</li>
            </ul>

            <ul class="list-2"> Partenariat
                <li>Nos partenaires</li>
                <li>Devenir partenaire</li>
                <li>Mécénat</li>
                <li>Nos évenements</li>
                <li>Nos communications</li>
            </ul>

            <ul class="list-3"> L'association
                <li>Qui sommes-nous ?</li>
                <li>Nous rejoindre</li>
                <li>Notre staff</li>
                <li>Nos dirigeants</li>
                <li>Les locaux</li>
            </ul>

            <img class="img-list" src="./img/footer/Sova-footer.png" alt=""/>
        </footer>


        <div class="copyright">
            Un site developpé par: OtR, pour une session d'examen - Tout droit reservés - GRANDSPIRIT 2022 - Cookies - CGU
        </div>
    </>
  )
}

export default Footer