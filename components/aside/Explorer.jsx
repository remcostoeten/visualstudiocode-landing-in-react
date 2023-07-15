"use client"

import DropdownMenuDemo from "./../../styles/Dropdown"

export default function Explorer() {
  return (
    <>
      <div className="flex items-center justify-between pl-5">
        <h4 className="title text-sm font-light uppercase tracking-wider text-white">
          Explorer
        </h4>
        <DropdownMenuDemo />
      </div>
    </>
  )
}
