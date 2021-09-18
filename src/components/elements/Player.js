import React from 'react'

const Player = (props) => {
    return (
        <div className="Player">
            <audio controls src={props.url}/>
        </div>
    )
}

export default Player
