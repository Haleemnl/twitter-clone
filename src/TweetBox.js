import React, { useState } from 'react'
import './css/tweetbox.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore'

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')



    // add Doc
    const sendTweet = async (e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, "posts"), {
                text: tweetMessage,
                image: tweetImage,
                displayName: 'haleem',
                username: 'haleemnl',
                verified: true,
                avatar: 'https://pbs.twimg.com/profile_banners/1000958740730929152/1644642946/600x200'
            });

            setTweetMessage('')
            setTweetImage('')

        } catch (error) {
            console.error(error);
        }

    }


    return (
        <div className='tweetbox'>
            <form action="">

                <div className="tweetbox-input">
                    <Avatar alt="Haleem" src="/images/haleem-logo.jpeg" />

                    <input
                        type="text"
                        placeholder="what's happening?"
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}
                    />
                </div>

                <input
                    className='tweetbox-imageinput'
                    type="text"
                    placeholder='Optional: Enter image URL'
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                />

                <Button onClick={sendTweet} type='submit' className='tweetbox-tweetbutton'>Tweet</Button>



            </form>

        </div>
    )
}

export default TweetBox