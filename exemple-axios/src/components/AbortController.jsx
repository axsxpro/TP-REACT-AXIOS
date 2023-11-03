import React, { useState, useEffect } from 'react'
import axios from 'axios';


function AbortController() {

    const [donnee, setDonnee] = useState([]);
    const abortController = new AbortController(); // Créer une instance d'AbortController


    useEffect(() => {

        // URL de l'API que vous souhaitez interroger
        const apiUrl = 'https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json';

        // Effectuer une requête HTTP GET avec Axios

        // Récupérer le signal d'annulation à utiliser avec Axios:  
        //Cela permettra à Axios de savoir quelle requête doit être annulée si nécessaire.
        axios.get(apiUrl, {signal: controller.signal})
            .then(response => {
                // Mettre à jour l'état du composant avec les données de la réponse
                setDonnee(response.data);
            })
            // Enregistre l'erreur dans l'état pour affichage ou traitement ultérieur
            .catch(error => {

                if (error.name === 'AbortError') {
                    console.log('Requête annulée');
                } else {
                    // utilisation de console.error : Affiche un message d'erreur dans la console du navigateur.
                    console.error('Erreur lors de la requête GET :', error.message);
                }
            });
    }, []);


    // funtion: Annulez la requête lorsque cela est nécessaire en appelant abort() sur l'objet AbortController.
    const handleCancel = () => {
        abortController.abort();
    };

    return (

        <div>

                {/* bouton qui va appeler la fontion {handleCancel} pour annuler la requete */}
                <button onClick={handleCancel}>Annuler la requête</button>

        </div>
    );
};

export default AbortController