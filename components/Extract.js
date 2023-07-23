"use client"

import React, { useEffect, useState } from "react"
import { CopyIcon, TrashIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Toast from "@/components/Toast"
import Terminal from "@/components/terminal"

import BlinkingCursor from "./BlinkingCursor"
import Blink from "./blink"

export default function MyComponent() {
  const [text, setText] = useState("")
  const [character, setCharacter] = useState("")
  const [numUrlsToCopy, setNumUrlsToCopy] = useState(50)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [hasText, setHasText] = useState(false)
  const [removeDuplicates, setRemoveDuplicates] = useState(false)
  const [keepContaining, setKeepContaining] = useState(false)

  const handleToggle = () => {
    setKeepContaining((prevValue) => !prevValue)
  }

  const removeDuplicatesFromResults = () => {
    const lines = text.split("\n")
    const uniqueLines = Array.from(new Set(lines))
    const newText = uniqueLines.join("\n")
    setText(newText)
    displayToast(`${lines.length - uniqueLines.length} duplicates removed`)
    setRemoveDuplicates(true)
  }

  const increeaseNumUrlsToCopy = () => {
    setNumUrlsToCopy(numUrlsToCopy + 1)
  }

  const decreeaseNumUrlsToCopy = () => {
    setNumUrlsToCopy(numUrlsToCopy - 1)
  }

  useEffect(() => {
    const savedText = localStorage.getItem("myComponentText")
    if (savedText) {
      setText(savedText)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("myComponentText", text)
    setHasText(text.trim() !== "")
  }, [text])

  const displayToast = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }

  const pasteFromClipboard = async () => {
    try {
      const clipboardContent = await navigator.clipboard.readText()
      setText(clipboardContent)
      displayToast(
        clipboardContent.length + " characters pasted from clipboard"
      )
    } catch (err) {
      displayToast("Failed to paste from clipboard")
      console.error("Failed to paste from clipboard: ", err)
    }
  }

  const copyUrlsAndRemove = () => {
    const urlPattern =
      /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
    const urls = text.match(urlPattern)

    if (urls) {
      const remainingUrls = urls.slice(numUrlsToCopy)
      const copiedUrls = urls.slice(0, numUrlsToCopy).join("\n")

      setText(remainingUrls.join("\n"))
      navigator.clipboard.writeText(copiedUrls)

      displayToast(
        `${numUrlsToCopy} URLs copied to clipboard and removed from the text`
      )
    }
  }

  const removeNonURLs = () => {
    const urlPattern =
      /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
    const lines = text.split("\n")

    const urls = lines.map((line) => {
      const urlsInLine = line.match(urlPattern)
      return urlsInLine ? urlsInLine.join("\n") : null
    })

    const newText = urls.filter((url) => url !== null).join("\n")
    setText(newText)
    displayToast(`${lines.length - urls.length} lines removed`)
  }

  const removeAllExceptCharacter = () => {
    const lines = text.split("\n")
    const filteredLines = keepContaining
      ? lines.filter((line) => line.includes(character)) // Step 3: Check keepContaining value
      : lines.filter((line) => !line.includes(character)) // Step 3: Handle opposite scenario

    const newText = filteredLines.join("\n")
    setText(newText)
    displayToast(`${lines.length - filteredLines.length} lines removed`)
  }
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text)
      displayToast("Content copied to clipboard")
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const openUrls = () => {
    const urlPattern =
      /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
    const urls = text.match(urlPattern)
    if (urls) {
      const urlsToOpen = urls.slice(0, numUrlsToCopy)
      const updatedUrls = urls.filter((url) => !urlsToOpen.includes(url))
      setText(updatedUrls.join("\n"))
      urlsToOpen.forEach((url) => window.open(url, "_blank"))
    }
  }

  const clearResults = () => {
    setText("")
    displayToast("results cleared")
  }

  return (
    <>
      <div className="flex flex-col relative gap-2">
        <span className="custom w-[60%]   relative\ textarea-max">
          {text && (
            <div className="scale-[2] absolute right-0 top-8">
              <TrashIcon onClick={clearResults} />
            </div>
          )}
          <div className="scale-[2] absolute right-0 mt-[-30px]">
            <CopyIcon onClick={pasteFromClipboard} />
          </div>{" "}
          <textarea
            spellCheck="false"
            className={`absolute custom w-[90%] border-0  -top-[30px] focus:bg-gray-800 ${
              hasText ? "bg-gray-800" : "bg-transparent"
            }`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </span>
      </div>
      <div className="mt-8 flex-col md:flex-row flex relative">
        <span className="text-green-400">{"~/chars-keep"}</span>
        <p className="flex-1 typing items-center pl-2 text-offgrey">
          Enter any character that the line should{" "}
          <strong>
            <u>{keepContaining ? "contain" : "not contain"}</u>
          </strong>{" "}
          that you want to{" "}
          <strong>
            <u>keep</u>
          </strong>
          .
          <br />
        </p>{" "}
        <div className="flex mt-4 items-center">
          <input
            type="checkbox"
            id="toggleKeepContaining"
            checked={keepContaining}
            onChange={handleToggle}
          />
          <label
            htmlFor="toggleKeepContaining"
            className="ml-2 text-offgrey cursor-pointer"
          >
            {keepContaining
              ? "Keep lines containing character"
              : "Remove lines containing character"}
          </label>
        </div>
        <Input
          type="text"
          className="custom bg-transparent z-max outline-none chars-keep-input top-5 border-0 absolute"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
        <div className="absolute left-0 top-[44px] h-5 w-0.5 bg-white animate-blink" />
      </div>
      <div className="flex mt-12 gap-2 flexxer">
        <div onClick={removeDuplicatesFromResults}>Remove All Duplicates</div>
        <div onClick={removeNonURLs}>Remove all text except URLs</div>
        <div onClick={removeAllExceptCharacter}>
          {keepContaining
            ? "Keep lines containing character"
            : "Remove lines containing character"}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <span className="text-green-400">{"~/url-extract/your-results"}</span>
        <div className="flex gap-1 flex-col items-end ">
          <Label htmlFor="numUrlsToCopy">Number of URLs to copy:</Label>
          <input
            className="numberstyle-qty"
            type="number"
            min="1"
            id="numUrlsToCopy"
            step="1"
            value="1"
            onChange={(e) => setNumUrlsToCopy(e.target.value)}
          />
        </div>
      </div>
      {text && (
        <>
          <div className="flex flexxer gap-2 mt-4">
            <div onClick={copyUrlsAndRemove}>
              Copy {numUrlsToCopy} URLs and remove them
            </div>
            <div onClick={copyContent}>Copy Content</div>
            <div onClick={openUrls}>
              Open {numUrlsToCopy} URLs and remove them
            </div>{" "}
          </div>

          <code className="results block relative">
            <span
              className="scale-[2] absolute top-3 right-3"
              onClick={clearResults}
            >
              <TrashIcon />
            </span>
            {text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                <a href={line} target="_blank" rel="noopener noreferrer">
                  {line}
                </a>
                <br />
              </React.Fragment>
            ))}
          </code>
        </>
      )}

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  )
}
