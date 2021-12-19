import React from 'react'
import './index.css'

const Grid = ({items=[],Component=false}) => {
    return (
        items.length ? <div className="gridContainer">
            {items.map((item,i)=>{
                return <div className='gridItem' key={i}>
                    {Component ? <Component item={item}/> : items}
                </div>
            })}
        </div> : <div className='notFound'>
            No Products Found!
        </div>
    )
}

export default Grid
