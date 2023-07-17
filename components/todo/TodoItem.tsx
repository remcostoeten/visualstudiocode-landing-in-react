"use client"

import React, { useState } from "react"
import Image from "next/image"

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
  const [showImage, setShowImage] = useState(false)

  const handleToggleTodo = () => {
    toggleTodo(id, !complete)
  }

  const handleShowImage = () => {
    setShowImage(true)
  }

  const handleHideImage = () => {
    setShowImage(false)
  }

  const handleImageLoad = () => {
    if (image) {
      const imageUrl = `data:image/jpeg;base64,${Buffer.from(image).toString(
        "base64"
      )}`
      setImageUrl(imageUrl)
    }
  }

  return (
    <li className="border border-gray-200 rounded-md p-4 mb-2 bg-pink-50 flex flex-col items-start">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
        <button
          onClick={handleToggleTodo}
          className={`mt-4 py-2 px-4 border rounded-md ${
            complete
              ? "border-green-500 text-green-500"
              : "border-red-500 text-red-500"
          }`}
        >
          {complete ? "Undo" : "Complete"}
        </button>
        {image && (
          <button
            onClick={handleShowImage}
            className="mt-2 py-1 px-3 border rounded-md bg-blue-500 text-white"
          >
            Show Image
          </button>
        )}
        {showImage && image && (
          <div
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleHideImage}
          >
            <Image
              src={imageUrl}
              alt="Image"
              width={600}
              height={600}
              onLoad={handleImageLoad}
            />
          </div>
        )}
      </div>
    </li>
  )
}
