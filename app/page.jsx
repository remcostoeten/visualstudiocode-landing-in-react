"use client"

import Link from "next/link"
import { Prisma } from "@prisma/client"

import Illustration from "../components/icons/Illustrations"
import styles from "../styles/modules/Homepage.module.css"

export default function HomePage() {
  return (
    <>
      <div className="pl-12">
        <div className={styles.container}>
          <div className={styles.background}>
            <h1>Aspiring to be more</h1>
            <h1>than a divjesschuiver</h1>
          </div>
          <div className={styles.foreground}>
            <div className={styles.content}>
              <h1 className={styles.name} showhand="true" hidecircel="true">
                Remco Stoeten
              </h1>
              <h6 className={styles.bio}>Creative front-end developer</h6>
              <Link href="https://kanban.remcostoeten.com">
                <button
                  className={styles.button}
                  showhand="true"
                  hidecircel="true"
                >
                  View kanban
                </button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
            <Illustration className={styles.illustration} />
          </div>
        </div>
      </div>
    </>
  )
}
