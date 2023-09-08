import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './css/feed.css'
import { onSnapshot, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import db from './firebase'


const Feed = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {

        db.collection('posts').onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                // console.log(doc.data());

                return { id: doc.id, ...doc.data() }
            })

            // console.log(tempMovies);
            setPosts(tempMovies)

        })




    }, [])


    return (
        <div className='feed'>
            {/* Header */}

            <div className="feed-header">

                <h2>Home</h2>
            </div>


            {/* Tweet box */}

            <TweetBox />


            {/* posts */}

            {posts.map(post => (

                <div className="postt">
                    <Post

                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        id={post.id}

                    />

                </div>
            ))}



            {/* posts */}
            {/* posts */}
            {/* posts */}


        </div>
    )
}

export default Feed