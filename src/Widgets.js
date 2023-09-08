import React from 'react'
import './css/widgets.css'
import { Search } from '@mui/icons-material'
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton } from 'react-twitter-embed'


const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets-input">
                <Search className='widgets-searchicon' />

                <input
                    placeholder='Search Twitter'
                    type="text"

                />
            </div>

            <div className="widgets-widgetcontainer">

                <h2>What's happening</h2>


                {/* Adding tweet */}
                <TwitterTweetEmbed

                    tweetId={'1660025122156158978'}
                />

                {/* Adding Timeline */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="haleemnl"
                    options={{ height: 400 }} />

                {/* Adding Share Button */}
                <TwitterShareButton
                    url={'https://twitter.com/haleemnl'}
                    options={{ text: '#reactjs is awesome', via: 'haleemnl' }}
                />

            </div>

        </div>
    )
}

export default Widgets