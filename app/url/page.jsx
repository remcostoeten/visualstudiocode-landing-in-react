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
        paragraph="This is a tool I use quite often and I got absolutely sick off seeing a Cloudfare instance everytime I enter the page followed by a captcha and a bunch of ads. So what do you do then? Right, recreate and host the functionallity yourself 🤢 So that is what I did."
      />
      <Extract inputValue={inputValue} />
    </>
  )
}
