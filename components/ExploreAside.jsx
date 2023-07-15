import React from "react"

import BigAside from "./aside/BigAside"
import Explorer from "./aside/Explorer"

export default function ExploreAside() {
  return (
    <aside className="h-screen w-[290px] bg-nav ">
      <Explorer />
      <div className="mb-4 bg-navDark py-2 pl-5">
        <h6 className="text-sm font-bold text-[#818ca6] ">
          remcostoeten portfolio
        </h6>
      </div>
      <BigAside />
    </aside>
  )
}
