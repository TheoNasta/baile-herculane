import React, { useRef } from "react"

import { Page } from "../components/page"
import { Logo } from '../components/logo'
import { Hero } from "../components/sections/hero"
import { ShortHistory } from "../components/sections/short-history"
import { Spa } from "../components/sections/spa"
import { Nature } from "../components/sections/nature"
import { ImageSlider } from "../components/sections/image-slider"
import { Activities } from "../components/sections/activities"
import { Around } from "../components/sections/around"
import { Footer } from "../components/sections/footer"

const IndexPage = () => {
    const pageRef = useRef()

    return (
        <Page ref={pageRef}>
            <Logo />
            <Hero container={pageRef} />
            <Activities />
            <Spa />
            <Nature />
            <ShortHistory />
            <Around />
            <Footer />
        </Page>
    )
}

export default IndexPage
