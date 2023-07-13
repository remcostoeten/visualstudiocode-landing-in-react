"use client"

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
  return (
    <section className="flex items-center pl-1 text-white text-sm bg-topbar border-[#191d20] border-b h-[30px]">
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
        </Menubar>
      </div>
      <p className={styles.title}>
        Remco Stoeten - Aspiring to be more than a divjesschuiver.
      </p>
      <div
        className={`${styles.windowButtons} flex space-x-2.5 justify-end pr-4`}
      >
        <span className="bg-[#50fa7b]"></span>
        <span className="bg-[#f1fa8c] ml-auto"></span>
        <span className="bg-[#ff5555]"></span>
      </div>
    </section>
  )
}
