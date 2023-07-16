"use client"

import { useEffect, useState } from "react"

import { useCursor } from "@/lib/CursorContext"

export default function Cursor() {
  const { cursorSize, setCursorSize } = useCursor()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [linkHovered, setLinkHovered] = useState(false)
  const [showHand, setShowHand] = useState(false)
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

      if (e.target.getAttribute("showHand") === "true") {
        setShowHand(true)
      }

      if (e.target.getAttribute("hideCircel") === "true") {
        setCursorSize("0px")
      }
    }

    const onMouseOut = (e) => {
      if (e.target.getAttribute("cursorIncreaseSize") === "true") {
        setLinkHovered(false)
        setCursorSize("20px")
      }

      if (e.target.getAttribute("showHand") === "true") {
        setShowHand(false)
      }

      if (e.target.getAttribute("hideCircel") === "true") {
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
        transform: `translate3d(${position.x - (linkHovered ? 0 : 0)}px, ${
          position.y - (linkHovered ? 0 : 0)
        }px, 0)`,
        width: cursorSize,
        height: cursorSize,
        backgroundColor: linkHovered ? "white" : "white",
        willChange: "transform",
        transitionTimingFunction: "cubic-bezier(.33,.28,0,1.14)",
        zIndex: 9999,
        mixBlendMode: "difference",
        opacity: setCursorSize === "0px" ? 0 : 1,
        pointerEvents: "none",
      }}
    >
      <div className="cursor-circle-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 16 18"
          style={{
            opacity: showHand ? 1 : 0,
            transition: "all 125ms cubic-bezier(.33,.28,0,1.14)",
            scale: showHand ? 1 : 0.2,
            zIndex: 9999,
          }}
        >
          <path
            fill="#31B970"
            stroke="#007acc"
            strokeLinejoin="round"
            d="M15.07 9.034L.662 1.114l3.08 16.15 3.606-6.947 7.72-1.283z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
