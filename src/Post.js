import React, { useState } from 'react'
import './css/post.css'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserRounded } from '@mui/icons-material'
import { deleteDoc, doc } from 'firebase/firestore'
import db from './firebase'

const Post = ({ displayName, username, verified, text, image, avatar, id }) => {

    const [like, setLike] = useState(false)
    const [retweet, setRetweet] = useState(0)

    const updateLike = () => {
        setLike(+ 1)

    }
    const updateRetweet = () => {
        setRetweet(+ 1)
    }

    const deleteMovie = async (id) => {

        const movieDoc = (doc(db, "posts", id));
        await deleteDoc(movieDoc);

        // OR await deleteDoc(doc(db, "movies", id));

    }



    return (
        <div className='post'>

            {/* <div className="post-avatar">
                <Avatar src='https://pbs.twimg.com/profile_banners/1000958740730929152/1644642946/600x200' />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headertext">
                        <h3>haleem
                            <span className='post-headerspecial'>
                                {verified && <VerifiedUserRounded className='post-badge' />} @haleemnl
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerdescription">
                        <p>This is  Haleem's fixed page </p>
                    </div>
                </div>
                <img src='https://media.giphy.com/media/i1JHRZSXO9LZZDHqii/giphy.gif' />

                <div className="post-footer">
                    <ChatBubbleOutline fontSize='small' />


                    <span onClick={updateRetweet} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Repeat fontSize='small' />
                        {retweet}
                    </span>

                    <span onClick={updateLike} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <FavoriteBorder fontSize='small' />
                        {like}
                    </span>
                    <Publish fontSize='small' />


                </div>
            </div> */}


            {/* ===================================================== */}
            <div className="post-avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headertext">
                        <h3>{displayName}
                            <span className='post-headerspecial'>
                                {verified && <VerifiedUserRounded className='post-badge' />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerdescription">
                        <p>{text} </p>
                    </div>
                </div>
                <img src={image} />

                <div className="post-footer">
                    <ChatBubbleOutline fontSize='small' />
                    <button onClick={() => deleteMovie(id)} > delete</button>

                    <span onClick={updateRetweet} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Repeat fontSize='small' />
                        {retweet}
                    </span>

                    <span onClick={updateLike} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <FavoriteBorder fontSize='small' />
                        {like}
                    </span>
                    <Publish fontSize='small' />


                </div>
            </div>

        </div>
    )
}

export default Post