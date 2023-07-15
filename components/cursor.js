"use client"

import { useEffect, useState } from "react"

import { useCursor } from "@/lib/CursorContext"

export default function Cursor() {
  const { cursorSize, setCursorSize } = useCursor()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [linkHovered, setLinkHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseOver = (e) => {
      if (e.target.getAttribute("cursorIncreaseSize") === "true") {
        setLinkHovered(true)
        setCursorSize("60px")
      }
    }

    const onMouseOut = (e) => {
      if (e.target.getAttribute("cursorIncreaseSize") === "true") {
        setLinkHovered(false)
        setCursorSize("20px")
      }
    }

    const onMouseDown = (e) => {
      setClicked(true)
    }

    const onMouseUp = (e) => {
      setClicked(false)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseover", onMouseOver)
    document.addEventListener("mouseout", onMouseOut)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseout", onMouseOut)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  return (
    <div
      className={`cursor ${linkHovered ? "cursor-link-hovered" : ""} ${
        clicked ? "cursor-clicked" : ""
      }`}
      style={{
        position: "fixed",
        transform: `translate3d(${position.x - (linkHovered ? 25 : 25)}px, ${
          position.y - (linkHovered ? 18 : 10)
        }px, 0)`,
        width: cursorSize,
        height: cursorSize,
        backgroundColor: linkHovered ? "white" : "white",
        willChange: "transform",
        transitionTimingFunction: "cubic-bezier(.33,.28,0,1.14)",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  )
}
