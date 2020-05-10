import React, { useRef, useEffect } from "react"

import { Page } from "../components/page"
import { Logo } from '../components/logo'
import { Hero } from "../components/sections/hero"
import { ShortHistory } from "../components/sections/short-history"
import { Spa } from "../components/sections/spa"
import { Nature } from "../components/sections/nature"
import { Activities } from "../components/sections/activities"
import { Around } from "../components/sections/around"
import { Footer } from "../components/sections/footer"
import ReactGA from "react-ga"

const IndexPage = () => {
    const pageRef = useRef()

    useEffect(() => {
        ReactGA.initialize("UA-159336354-1")
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

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
