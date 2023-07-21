import React, { useEffect, useState } from "react"

const Blink = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible)
    }, 500) // Change the blinking speed by adjusting the interval (e.g., 500ms).

    return () => clearInterval(interval)
  }, [])

  return <span className={isVisible ? "visible" : "invisible"}>|</span>
}

export default Blink
