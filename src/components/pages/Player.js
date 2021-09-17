import React from 'react'

export default function Player() {
    return (
        <div className="Player" style={{marginRight: "100px"}}>
            <audio
                controls
                src="https://intonation-trainer.s3.us-east-2.amazonaws.com/test-audio.mp3" />
        </div>
    )
}
