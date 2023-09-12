import React, { useState } from 'react'
import './css/post.css'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserRounded, DeleteRounded } from '@mui/icons-material'
import { deleteDoc, doc } from 'firebase/firestore'
import db from './firebase'

const Post = ({ displayName, username, deleteBtn, verified, text, image, avatar, id }) => {

    const [like, setLike] = useState(0)
    const [retweet, setRetweet] = useState(0)

    const updateLike = () => {

        like >= 1 ? setLike(0) : setLike(like + 1)

        // setLike(like + 1)
    }
    const updateRetweet = () => {
        retweet >= 1 ? setRetweet(0) : setRetweet(like + 1)
    }

    // delete func
    const deleteMovie = async (id) => {

        const movieDoc = (doc(db, "posts", id));
        await deleteDoc(movieDoc);

    }



    return (
        <div className='post'>



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


                    <span onClick={updateRetweet} >
                        <Repeat fontSize='small' />
                        {retweet}
                    </span>

                    <span onClick={updateLike} >
                        <FavoriteBorder fontSize='small' />
                        {like}
                    </span>
                    {/* delete icon */}
                    <span onClick={() => deleteMovie(id)} >
                        {deleteBtn && <DeleteRounded className='post-delete' />}
                    </span>


                </div>
            </div>

        </div>
    )
}

export default Post