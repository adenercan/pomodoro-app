import React from "react";

export const ModeSelector = ({ mode, onModeChange, currentColor }) => {
    const activeColorClass = {
        red: "bg-red text-navy",
        cyan: "bg-cyan text-navy",
        purple: "bg-purple text-navy"
    };

    return (
        <div className="flex justify-center items-center bg-navy rounded-[32px] z-20 relative p-2 md:max-h-[63px]md:w-[373px]">
            {["pomodoro", "short", "long"].map((m) => {
                const label = m === "pomodoro" ? "pomodoro" : m === "short" ? "short break" : "long break";
                
                const isActive = mode === m;
                
                return (
                    <button 
                        key={m}
                        onClick={() => onModeChange(m)}
                        className={`
                            px-6 py-4 rounded-[26px] text-[12px] md:text-[14px] font-bold transition-all duration-300 cursor-pointer
                            ${isActive 
                                ? `${activeColorClass[currentColor]} opacity-100`
                                : 'text-lilac opacity-40 hover:opacity-100 bg-transparent'
                            }
                        `}
                    >
                        {label}
                    </button>
                )})}
        </div>
    )
}

