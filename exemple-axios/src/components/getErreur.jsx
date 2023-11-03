import React, { useState, useEffect } from 'react'
import axios from 'axios';


function GetErreur() {

    const [donnee, setDonnee] = useState([]);
    const [erreur, setErreur] = useState('');

    useEffect(() => {

        // URL de l'API que vous souhaitez interroger
        const apiUrl = 'https://mon-adresse-url-est-fausse';

        // Effectuer une requête HTTP GET avec Axios
        axios.get(apiUrl)
            .then(response => {
                // Mettre à jour l'état du composant avec les données de la réponse
                setDonnee(response.data);
            })
            // affichage de l'erreur avec .catch()
            .catch(error => {

                //  utilisation du setErreur(error) pour mettre à jour l'état 'erreur' avec l'objet d'erreur(error) renvoyé par Axios
                setErreur(error);

                // utilisation d'un message d'alert
                alert("Erreur lors de la requete ");
                // Ou utilisation de console.error : Affiche un message d'erreur dans la console du navigateur.
                console.error('Il y a une erreur lors de la requete GET :', error);
                console.error('Erreur lors de la requête GET, voici le message :', error.message); //affichera Erreur lors de la requête GET : Network Error

            });
    }, []);


    // affichage du message d'erreur dans le body avec un if 
    if (erreur) {
        
        return `Vous avez une grooooosssssseeee erreur !!! ->  ${erreur.message}`;

    }

    return (


        <div>

            {/* parcours des données grace à map */}
            {donnee.map(donnees => (

                console.log(donnees.id)
            ))}

        </div>

    )
}

export default GetErreur