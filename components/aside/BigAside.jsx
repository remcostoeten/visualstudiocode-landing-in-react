"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import styles from "../../styles/BigAside.module.css"
import menuLinks from "../header/menuLinks"
import ChevronRight from "../icons/ChevronRight"

const BigAside = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true)
  const [featuresOpen, setfeaturesOpen] = useState(true)

  return (
    <div className="BigAside bg-explorer-bg w-18vw pl-2 text-gray-200">
      <input
        type="checkbox"
        className={styles.checkbox}
        id="portfolio-checkbox"
        checked={portfolioOpen}
        onChange={() => setPortfolioOpen(!portfolioOpen)}
      />
      <label
        htmlFor="portfolio-checkbox"
        className={styles.heading}
        showhand="true"
        hidecircel="true"
      >
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
        {menuLinks.slice(0, menuLinks.length - 2).map((item) => {
          if (item.isDropdown) {
            return (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger>
                  <div className={styles.file}>
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      height={18}
                      width={18}
                    />
                    <p className="ml-2" showhand="true" hidecircel="true">
                      {item.name}
                    </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.name}>
                      <Link href={dropdownItem.path}>
                        <p>{dropdownItem.name}</p>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          } else {
            return (
              <Link
                href={item.path}
                key={item.name}
                target="{item.target}"
                showhand="true"
                hidecircel="true"
              >
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />
                  <p className="ml-2" showhand="true" hidecircel="true">
                    {item.name}
                  </p>
                </div>
              </Link>
            )
          }
        })}
      </div>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="features-checkbox"
        checked={featuresOpen}
        onChange={() => setFeaturesOpen(!featuresOpen)}
      />
      <label
        htmlFor="features-checkbox"
        className={styles.heading}
        cursorincreasesize="true"
      >
        <ChevronRight
          className="mr-1 transition-transform duration-200"
          style={featuresOpen ? { transform: "rotate(90deg)" } : {}}
        />
        Features
      </label>
      {menuLinks.slice(5).map((item) => {
        if (item.isDropdown) {
          return (
            <DropdownMenu key={item.name}>
              <DropdownMenuTrigger>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />
                  <p className="ml-2">{item.name}</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.dropdownItems.map((dropdownItem) => (
                  <DropdownMenuItem key={dropdownItem.name}>
                    <Link href={dropdownItem.path}>
                      <p>{dropdownItem.name}</p>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        } else {
          return (
            <Link href={item.path} key={item.name} target="{item.target}">
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />
                <p className="ml-2" showhand="true" hidecircel="true">
                  {item.name}
                </p>
              </div>
            </Link>
          )
        }
      })}
    </div>
  )
}

export default BigAside
