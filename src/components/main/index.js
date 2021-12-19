import React from 'react'
import './index.css';

const Main = ({children=[], leftRatio=false, rightRatio=false}) => {
    return children.length===2 ? (
        <div className="container main">
            <div className="leftSection" {...(leftRatio ? {style:{flex:leftRatio}}: {})}>
                {children[0]}
            </div>
            <div className="rightSection" {...(leftRatio ? {style:{flex:rightRatio}}: {})}>
                {children[1]}
            </div>
        </div>
    ): children;
}

export default Main
