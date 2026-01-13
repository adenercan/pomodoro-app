import React, { useEffect, useEffectEvent, useState } from "react"
import { ModeSelector } from "./components/modeSelector"
import { Controls } from "./components/controls"
import { TimerDisplay } from "./components/timerDisplay"
import { Settings } from "./components/settings";

function App() {
  const [modeTimes, setModeTimes] = useState({
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  });

  const [mode, setMode] = useState("pomodoro");
  const [time, setTime] = useState(modeTimes[mode]);
  const [isRunning,setIsRunning] = useState(false);
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(modeTimes[mode]);
    setIsRunning(false);
  };

  const handleRestart = () => {
    setTime(modeTimes[mode]);
    setIsRunning(true);
  };

  const handleModeChange = (newMode) =>{
    setMode(newMode);
    setTime(modeTimes[newMode]);
    setIsRunning(false);
  };

  const [showSettings, setShowSettings] = useState(false);

  const [currentFont, setCurrentFont] = useState("font-kumbh");

  const [currentColor, setCurrentColor] = useState("red");

  const handleSettingsApply = (newTimes, newFont, newColor) => {
    setModeTimes(newTimes);
    setCurrentColor(newColor);
    setCurrentFont(newFont);
    setShowSettings(false);
  };

  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval (() => {
      setTime((prevTime) => {
        if(prevTime <= 1){
          setIsRunning(false);

          const audio = new Audio("/timer-alarm.mp3");
          audio.play();
          
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  },[isRunning]);

  useEffect(() => {
    setTime(modeTimes[mode]);
  }, [modeTimes, mode]);

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center bg-background ${currentFont}`}>
      <div className="flex flex-col items-center justify-between w-full gap-12">

        <div className="flex flex-col items-center w-full gap-4">
          <h1 className="flex justify-center font-bold text-lilac mb-7 text-[24px] md:text-[32px]">pomodoro</h1>
          <ModeSelector mode={mode} onModeChange={handleModeChange} currentColor={currentColor}/>
        </div>
        
        <div className="w-[300px] h-[300px] bg-navy rounded-full flex flex-col items-center justify-center z-10 md:w-[410px] md:h-[410px]">
          <TimerDisplay time={time} onChange={() => setTime(modeTimes)}/> 
          <Controls onStart={handleStart} onPause={handlePause} onReset={handleReset} onRestart={handleRestart} isRunning={isRunning} time={time} currentColor={currentColor}/>
        </div>

        <div className="flex flex-col items-center w-full gap-8">
          <button onClick={() => setShowSettings(prev => !prev)} className="cursor-pointer">
            <img src="/settings-icon.svg" alt="settings" />
          </button>

          {showSettings && (
            <Settings modeTimes={modeTimes} onChange={(newTimes) => setModeTimes(newTimes)} onClose={() => setShowSettings(false)} currentColor={currentColor} currentFont={currentFont} onApply={handleSettingsApply}/>
          )}
        </div>
      </div>
    </div>
  )
};

export default App
