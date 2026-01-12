import React from "react";

export const Controls = ({ onStart }) => {
    return (
        <div className="flex gap-4 justify-center">
            <button onClick={onStart}>Start</button>
            <button>Pause</button>
            <button>Reset</button>
            <button>Restart</button>
        </div>
    )
}