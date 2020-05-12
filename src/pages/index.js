import React, { useRef, useEffect } from "react"

import { Page } from "../components/page"
import { Logo } from "../components/logo"
import { Hero } from "../components/homepage/hero"
import { ShortHistory } from "../components/homepage/short-history"
import { Spa } from "../components/homepage/spa"
import { Nature } from "../components/homepage/nature"
import { Activities } from "../components/homepage/activities"
import { Around } from "../components/homepage/around"
import { Footer } from "../components/homepage/footer"
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
