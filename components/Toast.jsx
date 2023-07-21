"use client"

import { useState } from "react"

const Toast = ({ message }) => {
  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false)
  }, 4000)

  return (
    <>
      {show && (
        <div
          id="toast"
          className="show shadow-xl bg-gray-800 text-white rounded-md flex items-center justify-center"
        >
          <div id="desc">{message}</div>
        </div>
      )}
    </>
  )
}

export default Toast
