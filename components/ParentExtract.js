import React, { useState } from "react"

import Extract from "./Extract"
import Terminal from "./Terminal"

export default function MainComponent() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="w-full">
      <div
        className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased"
            bg-gray-800  pb-6 rounded-lg leading-normal overflow-hidden"
      >
        <Terminal/>
        <Extract inputValue={inputValue} />
      </div>
    </div>
  )
}
