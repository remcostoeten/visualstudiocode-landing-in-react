"use client"

import React, { useEffect, useState } from "react"
import { TrashIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Toast from "@/components/Toast"
import Terminal from "@/components/terminal"

export default function MyComponent() {
  const [text, setText] = useState("")
  const [character, setCharacter] = useState("")
  const [numUrlsToCopy, setNumUrlsToCopy] = useState(50)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  useEffect(() => {
    const savedText = localStorage.getItem("myComponentText")
    if (savedText) {
      setText(savedText)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("myComponentText", text)
  }, [text])

  const displayToast = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  const copyUrlsAndRemove = () => {
    const urlPattern = /(http|https):\/\/\S+(?=")/g
    const urls = text.match(urlPattern)
    if (urls) {
      const copiedUrls = urls.slice(0, numUrlsToCopy).join("\n")
      const remainingUrls = urls.slice(numUrlsToCopy)
      const newText = remainingUrls.join("\n")
      setText(newText)
      navigator.clipboard.writeText(copiedUrls)
      displayToast(`${numUrlsToCopy} URLs copied to clipboard`)
    }
  }

  const removeNonURLs = () => {
    const urlPattern = /(http|https):\/\/\S+(?=")/g
    const urls = text.match(urlPattern)
    setText(urls.join("\n"))
  }

  const removeAllExceptCharacter = () => {
    const lines = text.split("\n")
    const filteredLines = lines.filter((line) => line.includes(character))
    const newText = filteredLines.join("\n")
    setText(newText)
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
    const urlPattern = /(http|https):\/\/\S+(?=")/g
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
  }

  const clearInput = () => {
    setText("")
  }

  return (
    <div className="flex flex-col gap-2">
      <Terminal
        computer="bernard:"
        title="Url extractor & opener tool"
        paragraph="why dont you extract some urls? :) 
        "
      />
      <Textarea
        className="custom"
        placeholder="Enter your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-1 flex-col mb-4">
        <Labetl htmlFor="character">Enter the character to keep lines:</Labetl>
        <Input
          type="text"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <Label htmlFor="numUrlsToCopy">Number of URLs to copy:</Label>
        <Input
          type="number"
          id="numUrlsToCopy"
          value={numUrlsToCopy}
          onChange={(e) => setNumUrlsToCopy(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <Button onClick={removeNonURLs}>Remove all text except URLs</Button>
        <Button onClick={removeAllExceptCharacter}>
          Remove all lines except with character
        </Button>
        <Button onClick={copyUrlsAndRemove}>
          Copy {numUrlsToCopy} URLs and remove them
        </Button>
        <Button onClick={copyContent}>Copy Content</Button>
        <Button onClick={openUrls}>
          Open {numUrlsToCopy} URLs and remove them
        </Button>
        {text && (
          <>
            <code className="block relative   ">
              <span
                className="scale-[2] absolute top-3 right-3"
                onClick={clearResults}
              >
                <TrashIcon />
              </span>
              {text}
            </code>
          </>
        )}
        {showToast && (
          <Toast message={toastMessage} onClose={() => setShowToast(false)} />
        )}
      </div>
    </div>
  )
}
