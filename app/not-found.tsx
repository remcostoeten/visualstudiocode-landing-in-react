"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const Router = useRouter()
  const goBack = () => Router.back()
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
            <Link href="#" onClick={goBack}>
              go back
            </Link>{" "}
            or <Link href="/">return to the homepage</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
