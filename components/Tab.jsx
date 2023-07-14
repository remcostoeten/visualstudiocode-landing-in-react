"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import styles from "@/styles/modules/Tab.module.css"

const Tab = ({ icon, filename, path }) => {
  const router = useRouter()

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  )
}

export default Tab
