"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import slides from "@/components/slides"
import useLightbox from "@/components/useLightbox"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  price: number
  category: string
  description: string
  image: Buffer | null
  toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({
  id,
  title,
  complete,
  price,
  category,
  description,
  image,
  toggleTodo,
}: TodoItemProps) {
  const [imageUrl, setImageUrl] = useState("")
  const [enlargeImage, setEnlargeImage] = useState(false)

  useEffect(() => {
    if (image) {
      setImageUrl(
        `data:image/jpeg;base64,${Buffer.from(image.data).toString("base64")}`
      )
    }
  }, [image])

  const increaseImage = () => {
    setEnlargeImage(true)
  }

  const decreaseImage = () => {
    setEnlargeImage(false)
  }

  return (
    <li key={id}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span onClick={increaseImage}>Show image</span>
        {enlargeImage && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            {imageUrl && (
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <span
                  className="z-max absolute right-0 top-0  bg-white text-black flex items-center"
                  onClick={decreaseImage}
                >
                  Close
                </span>

                <Image src={imageUrl} width={600} height={600} alt={""} />
              </div>
            )}
          </div>
        )}
      </div>
      <button onClick={() => toggleTodo(id, !complete)}>
        {complete ? "Undo" : "Complete"}
      </button>
    </li>
  )
}
