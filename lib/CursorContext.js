"use client"

import React, { createContext, useContext, useState } from "react"

const CursorContext = createContext()

export function CursorProvider({ children }) {
  const [cursorSize, setCursorSize] = useState("20px")

  return (
    <CursorContext.Provider value={{ cursorSize, setCursorSize }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  return useContext(CursorContext)
}
