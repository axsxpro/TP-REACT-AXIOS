import axios from "axios";
import React, {useState}  from "react";

const Put = () => {

    // ulr que l'on souhaite interroger
    const url = "https://jsonplaceholder.typicode.com/posts/50";

    // const qui stockera les données de url
    const [post, setPost] = useState([]);


    // creation des données à modifier stockées dans une constante
    const user = {

        userId: 200,
        title: "mon titre",
        body: "mon body"
    };

    function createPut() {
        axios
        // URL de l'API vers laquelle on souhaite modifier les données et les données que l'on souhaite envoyer
            .put(url, user)
            .then((response) => {
                if(response.status == 200) {
                    console.log("mise à jour")
                    setPost(response.data);
                }
            });
    }

    return (
        <div>
            <button onClick={createPut}>PUT</button>

            <h1>{post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>

        </div>
    );
}

export default Put;

