import React, { useState } from "react"

export const Settings = ({modeTimes, onChange, onClose}) => {
    const [localTimes, setLocalTimes] = useState(modeTimes);
    const handleInput = (mode, value) => {
        setLocalTimes({
            ...localTimes, 
            [mode]: value * 60,
        });
    };

    const handleApply = () => {
        onChange(localTimes);
        if(onClose){
            onClose();
        };
    };

    const handleCancel = () => {
        setLocalTimes(modeTimes);
        if(onClose) onClose();
    };

    return (
        <div className="border p-4">
            <div>
                <h2>Settings</h2>   
                <button onClick={handleCancel}>x</button>
            </div>
            <hr />

            <div>
                <h3>TIME (MINUTES)</h3>
                <div>
                    <div>
                        <label>pomodoro </label>
                        <input type="number" value={Math.floor(localTimes.pomodoro / 60)} min={1} onChange={(e) => handleInput("pomodoro", e.target.value)}/>
                    </div>

                    <div>
                        <label>short break </label>
                        <input type="number" value={Math.floor(localTimes.short / 60)} min={1} onChange={(e) => handleInput("short", e.target.value)}/>
                    </div>

                    <div>
                        <label>long </label>
                        <input type="number" value={Math.floor(localTimes.long / 60)} min={1} onChange={(e) => handleInput("long", e.target.value)}/>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    )
}