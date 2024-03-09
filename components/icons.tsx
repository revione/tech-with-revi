import React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          d="M256.073 256.042 471.207 380.25M40.792 380.249l215.099-124.186M256 63.447V7.5M256 256.042V98.447M228.542 456.94 256 504.5l215.208-372.749-341.889-.001M94.319 131.75H40.793l170.304 294.976M327.808 380.25h143.399l-71.723-124.229M112.516 256.021 40.792 380.249h143.346M327.592 131.5 256 7.5l-71.592 124"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          fill="none"
          stroke="#2e78c9"
          data-original="#000000"
          opacity="1"
        ></path>
        <path
          d="m318.25 239.427 45.569 78.823-215.639-.001L256 131.75l44.663 77.255"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          fill="none"
          stroke="#2e78c9"
          data-original="#000000"
          opacity="1"
        ></path>
      </g>
    </svg>
  ),
}
