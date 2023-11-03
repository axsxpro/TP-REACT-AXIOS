import axios from "axios";
import React, {useState}  from "react";

const Post = () => {

    // ulr que l'on souhaite interroger
    const url = "https://jsonplaceholder.typicode.com/posts";

    // const qui stockera les données de url
    const [post, setPost] = useState([]);


    // creation des données à envoyer stocker dans une const
    const user = {

        userId: 3,
        title: "mon titre",
        body: "mon body"
    };

    function createPost() {
        axios
        // URL de l'API vers laquelle on souhaite envoyer les données et les données que l'on souhaite envoyer
            .post(url, user)
            .then((response) => {
                if(response.status == 201) {
                    console.log("creation")
                    setPost(response.data);
                }
            });
    }

    return (
        <div>
            <button onClick={createPost}>envoi</button>

            <h1>{post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>

        </div>
    );
}

export default Post;

