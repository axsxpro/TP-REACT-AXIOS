import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getError = () => {

    const [donnee, setDonnee] = useState([]);

    useEffect(() => {

        // URL de l'API que vous souhaitez interroger
        const apiUrl = 'https://mon-adresse-url-est-fausse';

        // Effectuer une requête HTTP GET avec Axios
        axios.get(apiUrl)
            .then(response => {
                // Mettre à jour l'état du composant avec les données de la réponse
                setDonnee(response.data);
            })
        
            .catch(error => {
                // Affiche l'erreur dans la console du navigateur.
                console.log(error);
            });
    }, []);


    return (

        <div>
            {/* parcours des données grace à map */}
            {donnee.map(donnees => (

                console.log(donnees)
            ))}
        </div>
    );
};

export default getError;
