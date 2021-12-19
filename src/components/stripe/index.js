import React from 'react'
import './index.css';

const index = ({leftMenus=[], actions=[]}) => {
    return (
        <div className="container strips">
            <div className="menus">
                {
                    leftMenus.map((menu,i)=>{
                        return <a key={i} className="menu" href={menu.link}>{menu.label}</a>;
                    })
                }
            </div>
            <div className="actions">
                <button>
                    <i className="fa fa-user-plus"/>
                    <span>Register</span>
                </button>
                <button>
                    <i className="fa fa-user-o"/>
                    <span>Login</span>
                </button>
            </div>
        </div>
    )
}

export default index
