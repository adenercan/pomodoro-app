import React from "react";

export const Controls = ({ onStart, onPause, onReset, onRestart, isRunning, time }) => {
    return (
        <div className="flex gap-4 justify-center text-gray">
            {time === 0 ? (
                <button onClick={onRestart} className="cursor-pointer">R E S T A R T</button>
            ) : isRunning ? (
                <>
                <button onClick={onPause} className="mr-2 cursor-pointer">P A U S E</button>
                <button onClick={onReset} className="cursor-pointer">R E S E T</button>
                </>
            ) : (
                <button onClick={onStart} className="cursor-pointer">S T A R T</button>
            )}
        </div>
    )
}