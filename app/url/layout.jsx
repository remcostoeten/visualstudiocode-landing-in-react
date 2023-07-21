import { CursorProvider } from "@/lib/CursorContext"

export default function Page({ children }) {
  return (
    <CursorProvider>
      <div className="w-full">
        <div
          className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased h-[87vh]
            bg-gray-800  pb-6 rounded-lg leading-normal overflow-hidden "
          showhand="true"
          hidecircel="true"
        >
          {children}
        </div>
      </div>
    </CursorProvider>
  )
}
