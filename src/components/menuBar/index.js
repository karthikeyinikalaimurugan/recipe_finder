import React from 'react'
import './index.css';

const index = ({menuList=[], socialLinks=[]}) => {
    return (
        <div className="container menuBar">
            <nav className="menuList">
                {
                    menuList.map((menu,i)=>{
                        return <a key={i} className="menuItem" href={menu.link}>{menu.label}</a>;
                    })
                }
            </nav>
            <div className="socialLinks">
                {
                    socialLinks.map((socialLink,i)=>{
                        return <a key={i} href={socialLink.link}  rel="noreferrer" target="_blank">
                            <i className={`fa ${socialLink.icon}`}/>
                        </a>;
                    })
                }
            </div>
        </div>
    )
}

export default index
