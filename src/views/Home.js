import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {


    const [posts, setPosts] = useState([]);

    function getLatestPosts() {

        axios
            .post('http://akademia108.pl/api/social-app/post/latest')
            .then((req) => {
                let reqData = req.data;
                setPosts(reqData)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        getLatestPosts()
    }, [])

    return (
        <div>
            <h2>Home</h2>
            {posts.map(post => {
                return <div key={post.id}>Kacper</div>

            })}
        </div>
    )
}



export default Home;