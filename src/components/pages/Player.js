import React from 'react'

const Player = (url) => {
    return (
        <div className="Player" style={{marginRight: "100px"}}>
            <audio
                controls
                src={url}/>
        </div>
    )
}

export default Player
