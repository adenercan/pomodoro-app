import React from "react";

export const Controls = ({ onStart, onPause, onReset }) => {
    return (
        <div className="flex gap-4 justify-center">
            <button onClick={onStart}>Start</button>
            <button onClick={onPause}>Pause</button>
            <button>Restart</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}