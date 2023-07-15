"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from "@/styles/modules/Tab.module.css"

const Tab = ({ icon, filename, path }) => {
  const router = useRouter()

  return (
    <div
      className={`${styles.tab} ${router.pathname === path && styles.active}`}
      onClick={() => {
        if (path !== "no-path") {
          router.push(path)
        }
      }}
    >
      <Image src={icon} alt={filename} height={18} width={18} />
      <p>{filename}</p>
    </div>
  )
}

export default Tab
