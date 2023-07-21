"use client"

import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"

import { CursorProvider } from "@/lib/CursorContext"

import BlinkingCursor from "./BlinkingCursor"
import { Input } from "./ui/input"
import { removeAllExceptCharacter } from "./utils"

export default function Terminal({ title, computer, paragraph }) {
  const [inputFocused, setInputFocused] = useState(false)
  const [initialState, setInitialState] = useState(true)
  const [character, setCharacter] = useState("")
  const [filteredText, setFilteredText] = useState("")

  useEffect(() => {
    setInitialState(false)
  }, [])

  useEffect(() => {
    const newText = removeAllExceptCharacter(character)
    setFilteredText(newText)
  }, [character])

  const handleInputFocus = () => {
    setInputFocused(true)
  }

  const handleInputBlur = () => {
    setInputFocused(false)
  }
  return (
    <>
      <CursorProvider>
        {" "}
        <div className="flex" showhand="true" hidecircel="true">
          <div className="top mb-2 flex">
            <span className="h-3 w-3 bg-red-500 rounded-full"></span>
            <span className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></span>
            <span className="ml-2 h-3 w-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-center mx-auto">{title}</span>
        </div>
        <div className="mt-12 flex" showhand="true" hidecircel="true">
          <span className="text-green-400">{computer}</span>
          <p className="flex-1 typing items-center text-offgrey pl-2">
            why dont you extract some urls? :) <br />
          </p>
        </div>{" "}
        <div className="mt-8 flex-col md:flex-row flex relative">
          <span className="text-green-400">{"~/url-extract/chars-keep"}</span>
          <p className="flex-1 typing items-center pl-2 text-offgrey">
            Insert your text you want to modify. 🪄
            <br />
          </p>
        </div>
        <div className="flex pt-4 relative">
          <BlinkingCursor />
          <span style={{ opacity: inputFocused || initialState ? 0 : 1 }}>
            <TypeAnimation
              className="pl-2 -mt-1 opacity-60"
              sequence={[
                "Type right here",
                3000,
                "seperate lines with enter",
                3000,
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: "15px" }}
              repeat={inputFocused || initialState ? true : true}
            />
          </span>
        </div>
      </CursorProvider>
    </>
  )
}
