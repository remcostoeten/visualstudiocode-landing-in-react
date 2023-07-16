"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const Router = useRouter()
  const goBack = () => Router.back()

  const returnPrevious = () => {
    setTimeout(() => {
      Router.back()
    }, 1000)

    // useEffect(() => {
    //   const x = document.querySelector(".error-page")
    //   // remove error-page class from body
    //   x.classList.remove("error-page")
    // }, [])
  }

  return (
    <>
      <div className="error-page absolute left-0 top-0 h-screen w-screen opacity-90">
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
          <p className="output">
            Please try to{" "}
            <Link href="/" onClick={goBack}>
              go back
            </Link>{" "}
            or <Link href="/">return to the homepage</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
