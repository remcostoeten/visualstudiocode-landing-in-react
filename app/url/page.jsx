"use client"

import React, { useState } from "react"

import Terminal from "@/components/terminal"

import Extract from "../../components/Extract"

export default function MainComponent() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <Terminal
        computer="bernard:"
        title="Url extractor & opener tool"
        paragraph="why dont you extract some urls? :)"
      />
      <Extract inputValue={inputValue} />
    </>
  )
}
