import React from 'react'
import "../styles/components/Navbar.css"
import ContactIcon from './icons/ContactIcon'
import ShoppingIcon from './icons/ShoppingIcon'
import TeamIcon from './icons/TeamIcon'

function Navbar() {
  return (
    <nav>
        <a class="nav-logo-name" href="/">
            <img class="nav-logo" src="./img/bundle logo/logo-only-black.png" alt="Logo Grand Spirit"/>
            <img class="nav-name" src="./img/bundle logo/logoblack005.png" alt="Logo alternatif Grand Spirit"/>
        </a>
        <div class="icons">
            <a href="/equipes">
                <TeamIcon/>
                <h3 class="text">ÉQUIPES</h3>
            </a>

            <a href="/boutique">
                <ShoppingIcon/>
                <h3 class="text">BOUTIQUE</h3>
            </a>

            <a href="/contact">
                <ContactIcon/>
                <h3 class="text">CONTACT</h3>
            </a>
        </div>
    </nav>
    )
}

export default Navbar