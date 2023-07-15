"use client"

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { faker } from "@faker-js/faker"
import { Prisma } from "@prisma/client"

import Illustration from "../components/icons/Illustrations"
import styles from "../styles/modules/Homepage.module.css"

const addData = async () => {
  Array.from({ length: 10 }, (_, i) => i + 1).map(async (i) => {
    await Prisma.customer.create({
      data: {
        name: faker.company.name(),
        email: faker.internet.email(),
      },
    })
  })
}

export default function HomePage() {
  return (
    <>
      <div className="pl-12">
        <div className={styles.container}>
          <div className={styles.background}>
            <h1 cursorIncreaseSize="true">Your text here</h1>
            <h1>WEBSITES</h1>
          </div>
          <div className={styles.foreground}>
            <div className={styles.content}>
              <h1 cursorIncreaseSize="true" className={styles.name}>
                Remco Stoeten
              </h1>
              <h6 className={styles.bio}>Creative front-end developer</h6>
              <Link href="/projects">
                <button className={styles.button}>View kanban</button>
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
