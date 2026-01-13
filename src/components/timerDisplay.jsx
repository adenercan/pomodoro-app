import React from "react";

export const TimerDisplay = ({time}) => {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="text-[75px] md:text-[100px] text-center flex justify-center text-gray">
            {minutes}:{seconds.toString().padStart(2,"0")}
        </div>
    )
}