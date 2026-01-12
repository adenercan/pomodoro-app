import React, { useEffect, useState } from "react"
import { ModeSelector } from "./components/modeSelector"
import { Controls } from "./components/controls"
import { TimerDisplay } from "./components/timerDisplay"

function App() {
  const [time, setTime] = useState(MODE_TIMES[mode]);
  const [isRunning,setIsRunning] = useState(false);
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(MODE_TIMES[mode]);
    setIsRunning(false);
  };

  const handleRestart = () => {
    setTime(MODE_TIMES[mode]);
    setIsRunning(true);
  };

  const [mode, setMode] = useState("pomodoro");

  const MODE_TIMES = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  };

  const handleModeChange = (newMode) =>{
    setMode(newMode);
    setTime(MODE_TIMES[newMode]);
    setIsRunning(false);
  };

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

  return (
    <>
    <div className="flex flex-col justify-center">
      <ModeSelector mode={mode} onModeChange={handleModeChange}/>
      <TimerDisplay time={time}/>
      <Controls onStart={handleStart} onPause={handlePause} onReset={handleReset} onRestart={handleRestart}/>
    </div>
    </>
  )
};

export default App
