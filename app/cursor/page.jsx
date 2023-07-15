"use client"

import { useEffect, useState } from "react"

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Cursor = () => {
  if (typeof navigator !== "undefined" && isMobile()) return null

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  })

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}

const MyComponent = () => (
  <div className="App">
    <section>
      <h1>
        Awesome animated cursor
        <br /> with{" "}
        <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
          React Hooks
        </a>
      </h1>
      <p>
        <b>HIP 65426 b</b> is a{" "}
        <a href="https://en.wikipedia.org/wiki/Super-Jupiter" target="_blank">
          super Jupiter
        </a>{" "}
        <a href="https://en.wikipedia.org/wiki/Exoplanet" target="_blank">
          exoplanet
        </a>{" "}
        orbiting the{" "}
        <a href="https://en.wikipedia.org/wiki/Star" target="_blank">
          star
        </a>{" "}
        <a
          href="https://en.wikipedia.org/w/index.php?title=HIP_65426&amp;action=edit&amp;redlink=1"
          target="_blank"
        >
          HIP 65426
        </a>
        . It was discovered on 6 July 2017 by the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Max_Planck_Institute_for_Astronomy"
          target="_blank"
        >
          Max Planck Institute for Astronomy
        </a>{" "}
        using the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Spectro-Polarimetric_High-Contrast_Exoplanet_Research"
          target="_blank"
        >
          Spectro-Polarimetric High-Contrast Exoplanet Research
        </a>{" "}
        (SPHERE) instrument belonging to the{" "}
        <a
          href="https://en.wikipedia.org/wiki/European_Southern_Observatory"
          target="_blank"
        >
          European Southern Observatory
        </a>{" "}
        (ESO). It is 385{" "}
        <a href="https://en.wikipedia.org/wiki/Light-year" target="_blank">
          light-years
        </a>{" "}
        from Earth. It is the first planet discovered by ESO's SPHERE
        instrument.
      </p>
      <p>
        * text from{" "}
        <a href="https://en.wikipedia.org/wiki/HIP_65426_b" target="_blank">
          Wikipedia
        </a>
      </p>
    </section>
    <Cursor />
  </div>
)

export default MyComponent
