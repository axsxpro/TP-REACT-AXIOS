import axios from "axios";
import React from "react";

const Post = () => {

    const user = {

        email: 'azerty@gmail.com',
        password: 'azerty',
    };

function postUser() {

        axios.post(('https://jsonplaceholder.typicode.com/posts', user))
            .then(response => {
                console.log(response.data);
            })

    };

    return (
        <div>
            <button onClick={postUser}>cliquer pour envoyer</button>
        </div>
    );
};

export default Post;