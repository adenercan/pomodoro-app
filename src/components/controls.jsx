import React from "react";

export const Controls = ({ onStart, onPause, onReset, onRestart }) => {
    return (
        <div className="flex gap-4 justify-center">
            <button onClick={onStart}>Start</button>
            <button onClick={onPause}>Pause</button>
            <button onClick={onRestart}>Restart</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}