import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { Sidebar } from "./sidebar"
import { SEO } from "./seo"
import { Layout } from "./layout"
import Logo from "./../components/logo"
import { Sizes, Device } from "../global/sizes"
import ReactGA from "react-ga"
export const PageWithoutRef = ({ children }, pageRef) => {
    return (
        <Layout ref={pageRef}>
            <SEO title="Home" />
            {children}
        </Layout>
    )
}

export const Page = React.forwardRef(PageWithoutRef)
