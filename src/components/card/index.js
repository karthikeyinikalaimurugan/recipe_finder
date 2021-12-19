import React from 'react'
import './index.css'

const Card = ({item={}}) => {
    return (
        <div className="card">
            <div className='imgWrapper'>
                <img src={item.img} alt={item.title}/>
            </div>
            <div className='options'>
                {
                    item.estimated_time && <span className='option'>
                        <i className='fa fa-clock'/>
                        <span>{item.estimated_time}</span>
                    </span>
                }
                {
                    item.isSuperEasy && <span className='option'>
                        <i className='fa fa-thumbs-up'/>
                        <span>SUPER EASY</span>
                    </span>
                }
            </div>
            <div className='title'>
                {item.title}
            </div>
        </div>
    )
}

export default Card
