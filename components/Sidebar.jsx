"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import styles from "./Sidebar.module.css"
import AccountIcon from "./icons/AccountIcon"
import CodeIcon from "./icons/CodeIcon"
import FilesIcon from "./icons/FilesIcon"
import GithubIcon from "./icons/GithubIcon"
import MailIcon from "./icons/MailIcon"
import PencilIcon from "./icons/PencilIcon"
import SettingsIcon from "./icons/SettingsIcon"

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: PencilIcon,
    path: "/articles",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
]

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/cursor",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
]

export default function Sidebar() {
  const router = useRouter()

  return (
    <aside className="flex flex-col">
      <div className="flex grow flex-col">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  )
}
