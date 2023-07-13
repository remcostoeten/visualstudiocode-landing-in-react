"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function NotFound() {
  const historyBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className="error-page absolute left-0 top-0 w-screen h-screen opacity-90">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
          <h1>
            Error <span className="errorcode">404</span>{" "}
            <span>
              <small>(not found)</small>
            </span>
          </h1>
          <p className="output">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          a
          <p className="output">
            Please try to{" "}
            <Link href="#" onClick={historyBack}>
              go back
            </Link>{" "}
            or <Link href="#2">return to the homepage</Link>.
          </p>
          <p className="output"> </p>
        </div>
      </div>
    </>
  )
}
