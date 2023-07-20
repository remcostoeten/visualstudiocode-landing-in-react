import React from "react"
import Typewriter from "react-typewriter-effect"

const TypewriterComponent = ({ focused }) => {
  return (
    <div>
      {focused ? (
        <input type="text" name="url" placeholder="Type right here :)" />
      ) : (
        <Typewriter
          className="pl-2 -mt-2 opacity-60"
          string="Type right here :)"
          delay={25}
          cursor="_"
          cursorStyle={{ fontSize: "15px" }}
          repeat
        />
      )}
    </div>
  )
}

export default TypewriterComponent
