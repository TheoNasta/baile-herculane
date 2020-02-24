import React from "react"
import Helmet from "react-helmet"
import ButlerBoldWOFF from "../fonts/Butler-Bold.woff"
import ButlerWOFF from "../fonts/Butler-Light.woff"
import ButlerBoldWOFF2 from "../fonts/Butler-Bold.woff2"
import ButlerWOFF2 from "../fonts/Butler-Light.woff2"
import InterBoldWOFF from "../fonts/Inter-Bold.woff"
import InterWOFF from "../fonts/Inter-Regular.woff"
import InterBoldWOFF2 from "../fonts/Inter-Bold.woff2"
import InterWOFF2 from "../fonts/Inter-Regular.woff2"

export function Fonts() {
  return (
    <Helmet>
      <link rel="preload" as="font" href={ButlerBoldWOFF} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={ButlerWOFF} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={ButlerBoldWOFF2} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={ButlerWOFF2} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={InterBoldWOFF} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={InterWOFF} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={InterBoldWOFF2} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href={InterWOFF2} type="font/woff2" crossOrigin="anonymous" />
    </Helmet>
  )
}

export const FontResources = {
  ButlerBoldWoff: ButlerBoldWOFF,
  ButlerWoff: ButlerWOFF,
  ButlerBoldWoff2: ButlerBoldWOFF2,
  ButlerWoff2: ButlerWOFF2,
  InterBoldWoff: InterBoldWOFF,
  InterWoff: InterWOFF,
  InterBoldWoff2: InterBoldWOFF2,
  InterWoff2: InterWOFF2
}