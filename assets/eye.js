import * as React from "react"
import Svg, { Path } from "react-native-svg"

function eye() {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 11.5s-4.313-7.906-11.5-7.906C4.312 3.594 0 11.5 0 11.5s4.313 7.906 11.5 7.906c7.188 0 11.5-7.906 11.5-7.906zm-21.314 0a18.876 18.876 0 002.386 2.937c1.85 1.853 4.38 3.532 7.428 3.532 3.047 0 5.576-1.68 7.429-3.532a18.877 18.877 0 002.386-2.937 18.88 18.88 0 00-2.386-2.937C17.076 6.71 14.546 5.031 11.5 5.031c-3.047 0-5.576 1.68-7.429 3.532A18.878 18.878 0 001.685 11.5h.001z"
        fill="#2D2940"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 7.906a3.594 3.594 0 100 7.188 3.594 3.594 0 000-7.188zM6.469 11.5a5.031 5.031 0 1110.062 0 5.031 5.031 0 01-10.062 0z"
        fill="#2D2940"
      />
    </Svg>
  )
}

export default eye