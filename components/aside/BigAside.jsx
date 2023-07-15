"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/BigAside.module.css"
import ChevronRight from "../icons/ChevronRight"

const bigAsideItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: "json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
]

const BigAside = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true)

  return (
    <div className="BigAside bg-explorer-bg w-18vw pl-2 text-gray-200">
      <input
        type="checkbox"
        className={styles.checkbox}
        id="portfolio-checkbox"
        checked={portfolioOpen}
        onChange={() => setPortfolioOpen(!portfolioOpen)}
      />
      <label htmlFor="portfolio-checkbox" className={styles.heading}>
        <ChevronRight
          className="mr-1 transition-transform duration-200"
          style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
        />
        Portfolio
      </label>
      <div
        className={styles.files}
        style={portfolioOpen ? { display: "block" } : { display: "none" }}
      >
        {bigAsideItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <div className={styles.file}>
              <Image
                src={`/${item.icon}`}
                alt={item.name}
                height={18}
                width={18}
              />{" "}
              <p className="ml-2">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BigAside
