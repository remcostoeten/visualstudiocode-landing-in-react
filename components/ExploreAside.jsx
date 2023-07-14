import React from "react"
import { Resizable } from "react-resizable"

import BigAside from "./aside/BigAside"
import Explorer from "./aside/Explorer"

export default function ExploreAside() {
  return (
    <Resizable
      className="resize-wrapper"
      defaultSize={{ width: 290, height: "100%" }}
      minWidth={200}
      maxWidth={800}
      axis="x"
    >
      <aside className="w-full h-screen bg-nav">
        <Explorer />
        <div className="bg-navDark pl-5 mb-4">
          <h6 className="font-bold text-sm text-[#818ca6] ">
            remcostoeten portfolio
          </h6>
        </div>
        <BigAside />
      </aside>
    </Resizable>
  )
}
