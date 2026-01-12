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

  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval (() => {
      setTime((prevTime) => {
        if(prevTime <= 1){
          setIsRunning(false);
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
    <>
    <div className="flex flex-col justify-center">
      <ModeSelector mode={mode} onModeChange={handleModeChange}/>
      <TimerDisplay time={time} onChange={() => setTime(modeTimes)}/>
      <Controls onStart={handleStart} onPause={handlePause} onReset={handleReset} onRestart={handleRestart}/>
      <div>
        <button onClick={() => setShowSettings(prev => !prev)}>Settings</button>
      </div>
      {showSettings && (
        <Settings modeTimes={modeTimes} onChange={(newTimes) => setModeTimes(newTimes)} onClose={() => setShowSettings(false)}/>
      )}
    </div>
    </>
  )
};

export default App
