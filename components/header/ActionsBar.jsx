"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ClerkProvider,
  SignIn,
  SignedOut,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import styles from "../../styles/Actionsbar.module.css"
import LogoIcon from "../icons/LogoFull"

export default function ActionsBar() {
  const router = useRouter()
  let currentPage = router?.pathname?.replace("/", "") || ""

  if (currentPage === "") {
    currentPage = "homepage"
  }

  return (
    <section className="flex h-[40px] items-center border-b border-[#191d20] bg-topbar pl-1 text-sm text-white">
      <span className="logo">
        <LogoIcon />
      </span>
      <div className={styles.items}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                No this is <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>NextJs</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Not Vue(iew)</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Run</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Forest <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Run</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            {/* if signed in logic */}

            <MenubarTrigger>Sign in</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <SignIn />
              </MenubarItem>
              <MenubarItem>
                <UserButton />
              </MenubarItem>
              <MenubarItem>
                <Link href="/my-account">My account</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <p className="font- text-sm text-[#678ca6]">
        {currentPage}.jsx - Aspiring to be more than a divjesschuiver
      </p>
      <div
        className={`${styles.windowButtons} flex justify-end space-x-2.5 pr-4`}
      >
        <span className="bg-[#50fa7b]"></span>
        <span className="ml-auto bg-[#f1fa8c]"></span>
        <span className="bg-[#ff5555]"></span>
      </div>
    </section>
  )
}
