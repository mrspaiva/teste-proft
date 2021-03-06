import * as React from "react"
import Svg, { Path } from "react-native-svg"

function trash() {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
    >
      <Path
        d="M5.875 6.875A.625.625 0 016.5 7.5V15a.625.625 0 11-1.25 0V7.5a.625.625 0 01.625-.625zm3.125 0a.625.625 0 01.625.625V15a.625.625 0 11-1.25 0V7.5A.625.625 0 019 6.875zm3.75.625a.625.625 0 10-1.25 0V15a.624.624 0 101.25 0V7.5z"
        fill="#F21D1D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.125 3.75A1.25 1.25 0 0115.875 5h-.625v11.25a2.5 2.5 0 01-2.5 2.5h-7.5a2.5 2.5 0 01-2.5-2.5V5h-.625a1.25 1.25 0 01-1.25-1.25V2.5a1.25 1.25 0 011.25-1.25H6.5A1.25 1.25 0 017.75 0h2.5a1.25 1.25 0 011.25 1.25h4.375a1.25 1.25 0 011.25 1.25v1.25zM4.148 5L4 5.074V16.25a1.25 1.25 0 001.25 1.25h7.5A1.25 1.25 0 0014 16.25V5.074L13.852 5H4.148zM2.125 3.75V2.5h13.75v1.25H2.125z"
        fill="#F21D1D"
      />
    </Svg>
  )
}

export default trash

