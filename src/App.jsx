import React from "react"
import { ModeSelector } from "./components/modeSelector"
import { Controls } from "./components/controls"
import { TimerDisplay } from "./components/timerDisplay"

function App() {
 

  return (
    <>
    <div className="flex flex-col justify-center">
      <ModeSelector />
      <TimerDisplay/>
      <Controls/>
    </div>
    </>
  )
}

export default App
