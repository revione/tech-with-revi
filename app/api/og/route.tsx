import { NextRequest } from "next/server"
import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const runtime = "edge"

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then(res => res.arrayBuffer())

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold

    const { searchParams } = req.nextUrl
    const title = searchParams.get("title")

    if (!title) {
      return new Response("No title provided", { status: 500 })
    }

    const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
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
              />
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
              />
            </svg>
            <p tw="ml-4 font-bold text-2xl">Revi&apos;s Blog</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-md">{siteConfig.url}</div>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 400,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    )
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 })
  }
}
