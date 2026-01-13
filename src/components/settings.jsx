import React, { useState } from "react"

const colors = {
    red: "bg-red",
    cyan: "bg-cyan",
    purple: "bg-purple"
};

export const Settings = ({modeTimes, onApply, onClose, currentFont, currentColor}) => {
    const [localTimes, setLocalTimes] = useState(modeTimes);
    const handleInput = (mode, value) => {
        setLocalTimes({
            ...localTimes, 
            [mode]: value * 60,
        });
    };

    const handleApplyClick = () => {
        onApply(localTimes, localFont, localColor);
    };

    const handleCancel = () => {
        if(onClose) onClose();
    };

    const [localFont, setLocalFont] = useState(currentFont);
    
    const [localColor, setLocalColor] = useState(currentColor);

    const timerModes = [
        { id: "pomodoro", label: "pomodoro" },
        { id: "short", label: "short break" },
        { id: "long", label: "long break" }
    ];

    return (
        <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 ${currentFont}`}>
            <div className="bg-white rounded-[25px] w-full max-w-[400px] md:max-w-[540px] relative flex flex-col">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-[28px] font-bold text-navy">Settings</h2>   
                    <button onClick={handleCancel} className="text-navy opacity-60 ohver:opacity-100">
                        <img src="/cancel-icon.svg" alt="" className="w-[14px] h-[14px]" />
                    </button>
                </div>
                
                <hr  className="text-gray"/>

                <div className="p-6 space-y-6 mb-8">
                    <h3 className="text-[13px] tracking-[5px] font-bold text-navy mb-4 text-center md:text-left ">TIME (MINUTES)</h3>
                    
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
                        {timerModes.map((item) => (
                            <div key={item.id} className="flex flex-row items-center justify-between w-full gap-5 md:flex-col md:items-start md:justify-start">
                                <label className="text-[12px] font-bold text-navy opacity-40 md:w-full">{item.label}</label>
                                <input type="number" value={Math.floor(localTimes[item.id] / 60)} min={1} onChange={(e) => handleInput(item.id, e.target.value)} className="max-w-[140px] md:max-w-none bg-gray rounded-[10px] p-3 text-navy font-bold w-full focus-outline-none focus-ring-1 focus-ring-navy"/>
                            </div>
                        ))}
                    </div>
                </div>

                <hr  className="text-gray"/>

                <div className="flex items-center justify-between p-6 space-y-6 ">
                    <h3 className="text-[13px] tracking-[5px] font-bold text-navy">FONT</h3>
                    <div className="flex gap-4">
                        <button onClick={() => setLocalFont("font-kumbh")} className={`w-10 h-10 rounded-full font-kumbh font-bold flex items-center justify-center transition-all ${localFont === 'font-kumbh' ? 'bg-navy text-white' : 'bg-gray text-navy'}`}>Aa</button>
                        <button 
                             onClick={() => setLocalFont("font-roboto")}
                             className={`w-10 h-10 rounded-full font-roboto font-bold flex items-center justify-center transition-all ${localFont === 'font-roboto' ? 'bg-navy text-white' : 'bg-gray text-navy'}`}>Aa</button>
                        <button onClick={() => setLocalFont("font-mono")} className={`w-10 h-10 rounded-full font-mono font-bold flex items-center justify-center transition-all ${localFont === 'font-mono' ? 'bg-navy text-white' : 'bg-gray text-navy'}`}>Aa</button>
                    </div>
                </div>

                <hr  className="text-gray"/>

                <div className="flex items-center justify-between p-6 space-y-6 mb-8">
                        <h3 className="text-[13px] tracking-[5px] font-bold text-navy">COLOR</h3>
                        <div className="flex gap-4">
                            {["red", "cyan", "purple"].map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setLocalColor(color)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${colors[color]} ${localColor === color ? 'ring-2 ring-offset-2 ring-navy' : ''}`}
                                >
                                    {localColor === color && (
                                        <div className="bg-localColor w-[15px] h-[15px]"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
                    <button 
                        onClick={handleApplyClick}
                        className={`px-12 py-4 rounded-[26px] text-white font-bold text-base transition-colors hover:brightness-110 bg-${localColor}`}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}