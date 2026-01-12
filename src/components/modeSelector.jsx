import React from "react";

export const ModeSelector = ({ mode, onModeChange }) => {
    return (
        <div className="flex justify-center gap-4">
            <button onClick={() => onModeChange("pomodoro")}>pomodoro</button>
            <button onClick={() => onModeChange("short")}>short break</button>
            <button onClick={() => onModeChange("long")}>long break</button>
        </div>
    )
}

