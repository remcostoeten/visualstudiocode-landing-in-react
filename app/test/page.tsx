"use client"

import slides from "@/components/slides"
import useLightbox from "@/components/useLightbox"

export default function Home() {
  const { openLightbox, renderLightbox } = useLightbox()

  return (
    <>
      <button type="button" onClick={openLightbox}>
        Open Lightbox
      </button>

      {renderLightbox({ slides })}
    </>
  )
}
