import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Get() {

    const [donnee, setDonnee] = useState([]);

    useEffect(() => {

        // URL de l'API que vous souhaitez interroger
        const apiUrl = 'https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json';

        // Effectuer une requête HTTP GET avec Axios
        axios.get(apiUrl)
            .then(response => {
                // Mettre à jour l'état du composant avec les données de l  a réponse
                setDonnee(response.data);
            })
            // Verification si erreur ou non
            .catch(error => {

                if (error) {

                    return alert("Erreur lors du chargement ");
                }

            });
    }, []);


    const afficherSuperHero = () => {  {

        {/* parcours des données grace à map */ }
        donnee.map(donnees => (

            console.log(donnees.superhero)
        ))
    }
}

    return (

        <div>

            <button onClick={afficherSuperHero}>Afficher les Super-Heros</button>

        </div>

    )
}

export default Get