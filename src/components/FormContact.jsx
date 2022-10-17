import React from 'react'
import "../styles/components/FormContact.css"

function FormContact() {
  return (
        <article class="form">
            <h3>Sinon vous pouvez remplir le forumlaire suivant:</h3>

            <form id="form">
   
                <input type="text" id="lname" name="name" value="" placeholder="Nom" required/>
    
                <input type="text" id="fname" name="name" value="" placeholder="Prénom" required/>

                <input type="email" id="email" name="email" value="" placeholder="e-mail" required/>                  
    
                <select name="whoareyou" id="whoareyou" placeholder="Qui êtes-vous ?">
                    <option value="chooseyourtype">Qui êtes-vous ?</option>
                    <option value="entreprise">Entreprise</option>
                    <option value="structure">Structure e-sport</option>
                    <option value="promoter">Organisateur d'évenements</option>
                    <option value="player">Joueur</option>
                    <option value="other">Autres</option>
                </select>
    
                <textarea id="textarea" name="motivations" rows="10" cols="43" placeholder="Votre message"/>
    
                <input type="button" id="btn" value="Envoyer" onclick="send();"/>
        
            </form>

        </article>
    )
}

export default FormContact