import axios from "axios"
import React, { useState } from "react";


function Delete() {


    // ulr que l'on souhaite interroger
    const url = "https://jsonplaceholder.typicode.com/posts/50";

    // const qui stockera les données de url
    const [post, setPost] = useState('');


    const deleteHandler = () => {

        axios.delete(url)
            .then(() => {

                console.log("supprimé !");
                setPost(' yes delete successful !!');
            });
    };

    if (post) {
        
        return ` C'est supprimééééééééé ->  ${post}`;

    }


    return (

        <div>
            <button onClick={deleteHandler}>effacer</button>

        </div>
    )


}

export default Delete;