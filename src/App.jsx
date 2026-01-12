import React, { useEffect, useState } from "react"
import { ModeSelector } from "./components/modeSelector"
import { Controls } from "./components/controls"
import { TimerDisplay } from "./components/timerDisplay"

function App() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning,setIsRunning] = useState(false);
  const handleStart = () => {
    setIsRunning(true);
  }

  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval (() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  },[isRunning]);

  return (
    <>
    <div className="flex flex-col justify-center">
      <ModeSelector />
      <TimerDisplay time={time}/>
      <Controls onStart={handleStart}/>
    </div>
    </>
  )
}

export default App
