import React from 'react'
import "../styles/components/NetworkContact.css"

function NetworkContact() {
    return (
        <article class="discord-twitter">
            <h3>Commençons par le plus simple:</h3>
            <p>On ne va pas se mentir, la majeure partie des échanges s'effectuent sur discord et le twitter</p>
            
            <div class="discord-twitter-img">
                <div class="img-discord img-contact">
                    <img src="./img/icones/discord.png" alt=""/>
                </div>

                <div class="img-twitter img-contact">
                    <img src="./img/icones/twitter.png" alt=""/>
                </div>
            </div>
        </article>
  )
}

export default NetworkContact