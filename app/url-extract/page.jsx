"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import Checkbox from "./../../components/ui/UrlCheckbox"

export default function MyComponent() {
  const [text, setText] = useState("")
  const [character, setCharacter] = useState("")
  const [isChecked, setChecked] = useState(false)

  const handleButtonClick = () => {
    const lines = text.split("\n")
    let filteredLines
    if (isChecked) {
      filteredLines = lines.filter((line) => line.includes(character))
    } else {
      filteredLines = lines.filter((line) => !line.includes(character))
    }
    setText(filteredLines.join("\n"))
  }

  return (
    <div>
      <Textarea
        placeholder="Enter your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Label htmlFor="character">
        Enter the characters which lines should be removed
      </Label>
      <Input
        type="text"
        id="character"
        name="character"
        required
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
      />
      <Checkbox
        checked={isChecked}
        onChange={() => setChecked((prev) => !prev)}
      >
        Keep only lines containing
      </Checkbox>
      <button onClick={handleButtonClick}>Remove all lines containing</button>
    </div>
  )
}
