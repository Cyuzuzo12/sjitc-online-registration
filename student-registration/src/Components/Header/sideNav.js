import React from 'react';
import SideNav from 'react-simple-sidenav';
import FontAwesome from 'react-fontawesome';
import SideNavItems from './sideNavItem'

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#1898f8',
                    maxWidth:'230px'
                }}
            >
                 <div className="bars">
        <FontAwesome name="times"
        onClick={props.onHideNav}
            style={{
                color:'#dfdfdf',
                padding:'10px',
                cursor:'pointer',
                fontSize:'25px'
            }}
        />
        
    </div>
                <SideNavItems 
                 {...props}/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;