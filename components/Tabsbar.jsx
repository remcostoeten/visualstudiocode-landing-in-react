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

import Tab from "./Tab"
import menuLinks from "./header/menuLinks"

const Tabsbar = () => {
  return (
    <div
      className="flex w-screen bg-[#191a21]"
      showhand="true"
      hidecircel="true"
    >
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
                  <DropdownMenuItem
                    key={dropdownItem.name}
                    howhand="true"
                    hidecircel="true"
                  >
                    {dropdownItem.path ? (
                      <Link href={dropdownItem.path}>
                        <p>{dropdownItem.name}</p>
                      </Link>
                    ) : (
                      <span>
                        <p showhand="true" hidecircel="true"></p>
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
              target={item.target}
            />
          )
        }
      })}
    </div>
  )
}

export default Tabsbar
