import React from "react"

import BigAside from "./aside/BigAside"
import Explorer from "./aside/Explorer"

export default function ExploreAside() {
  return (
    <aside className="w-[290px] h-screen bg-nav ">
      <Explorer />
      <div className="bg-navDark pt-3 pl-7 p-6">
        <h6 className="text-bold text-sm text-[#818ca6] ">
          remcostoeten portfolio
        </h6>
      </div>
      <BigAside />
    </aside>
  )
}
