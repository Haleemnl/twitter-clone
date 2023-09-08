import React from 'react'
import './css/sidebaroptions.css'

const SidebarOptions = ({ active, icon, text }) => {
    return (
        <div className={`SidebarOptions ${active && 'SidebarOptions-active'}`}>

            {/* <Icon className='SidebarOptions' /> */}
            <div className="sidebaroptions-icon">{icon}</div>
            <h3>{text}</h3>

        </div>
    )
}

export default SidebarOptions