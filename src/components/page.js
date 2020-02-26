import React from "react"
import { SEO } from "./seo"
import { Layout } from "./layout"

export const PageWithoutRef = ({ children }, pageRef) => {
    return (
        <Layout ref={pageRef}>
            <SEO title="Home" />
            {children}
        </Layout>
    )
}

export const Page = React.forwardRef(PageWithoutRef)
