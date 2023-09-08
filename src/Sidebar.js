import React from 'react'
import './css/sidebar.css'
import SidebarOptions from './SidebarOptions';

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* twitter icon */}
            {/* <TwitterIcon className='sidebar-twittericon' /> */}
            <img src="/images/x-logo.webp" className='sidebar-twittericon' alt="" />

            {/* sidebar options */}
            {/* sidebar options */}
            {/* sidebar options */}
            <SidebarOptions
                active
                icon={<HomeIcon />}
                text='Home'
            />
            <SidebarOptions
                icon={<SearchIcon />}
                text='Explore'
            />
            <SidebarOptions
                icon={<NotificationsNoneIcon />}
                text='Notifications'
            />
            <SidebarOptions
                icon={<MailOutlineIcon />}
                text='Messages'
            />
            <SidebarOptions
                icon={<BookmarkBorderIcon />}
                text='Bookmarks'
            />
            <SidebarOptions
                icon={<ListAltIcon />}
                text='Lists'
            />
            <SidebarOptions
                icon={<PermIdentityIcon />}
                text='Profile'
            />
            <SidebarOptions
                icon={<MoreHorizIcon />}
                text='More'
            />



            {/* tweet */}
            <Button variant="outlined" className='sidebar-tweet' fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar