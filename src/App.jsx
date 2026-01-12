import React, { useState } from "react"
import { ModeSelector } from "./components/modeSelector"
import { Controls } from "./components/controls"
import { TimerDisplay } from "./components/timerDisplay"

function App() {
  const [time, setTime] = useState(25 * 60);

  return (
    <>
    <div className="flex flex-col justify-center">
      <ModeSelector />
      <TimerDisplay time={time}/>
      <Controls/>
    </div>
    </>
  )
}

export default App
