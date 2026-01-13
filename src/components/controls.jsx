import React from "react";

export const Controls = ({ onStart, onPause, onReset, onRestart, isRunning, time }) => {
    return (
        <div className="flex gap-4 justify-center">
            {time === 0 ? (
                <button onClick={onRestart}>Restart</button>
            ) : isRunning ? (
                <>
                <button onClick={onPause}>Pause</button>
                <button onClick={onReset}>Reset</button>
                </>
            ) : (
                <button onClick={onStart}>Start</button>
            )}
        </div>
    )
}