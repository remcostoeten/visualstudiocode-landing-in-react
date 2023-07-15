"use client"

import Image from "next/image"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import styles from "@/styles/modules/Tabsbar.module.css"

import Tab from "./Tab"
import menuLinks from "./header/menuLinks"

const Tabsbar = () => {
  return (
    <div className="flex w-screen bg-[#191a21]">
      {menuLinks.map((item) => {
        if (item.isDropdown) {
          return (
            <DropdownMenu key={item.name}>
              <DropdownMenuTrigger>
                <Tab
                  icon={item.icon}
                  filename={item.name}
                  path={item.path}
                  key={item.name}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.dropdownItems.map((dropdownItem) => (
                  <DropdownMenuItem key={dropdownItem.name}>
                    {dropdownItem.path ? (
                      <Link href={dropdownItem.path}>
                        <p>{dropdownItem.name}</p>
                      </Link>
                    ) : (
                      <span>
                        <p>{dropdownItem.name}</p>
                      </span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        } else {
          return (
            <Tab
              icon={item.icon}
              filename={item.name}
              path={item.path ? item.path : "no-path"}
              key={item.name}
            />
          )
        }
      })}
    </div>
  )
}

export default Tabsbar
