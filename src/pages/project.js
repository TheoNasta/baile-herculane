import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Sidebar } from "../components/sidebar"
import { Page } from "../components/page"
import { Decorations } from "../components/decorations"
import { Heading } from "../components/heading"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { ProjectSection } from "../components/project-section"
import { ProjectImage } from "../components/project-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Img from "gatsby-image"
import { ProjectVideo } from "../components/project-video"
import { Related } from "../components/related"
import { Sizes, useWindowSize, Device } from "../global/sizes"
import { Scroll } from "../components/scroll"

export default function Template({ data: { mdx } }) {
    const dynamicImageProps = {}
    const dynamicVideoProps = {}
    const pageRef = useRef()
    const [container, setContainer] = useState()

    useEffect(() => {
        if (pageRef && pageRef.current) setContainer(pageRef.current)
    }, [pageRef])

    if (mdx.frontmatter.images) {
        mdx.frontmatter.images.forEach((image, i) => {
            const src = image.childImageSharp.fluid
            const ratio = image.childImageSharp.fluid.aspectRatio
            dynamicImageProps[`Image${i + 1}`] = p => {
                return (
                    <ProjectImage
                        src={src}
                        container={container}
                        {...p}
                        ratio={ratio}
                    />
                )
            }
        })
    }
    if (mdx.frontmatter.videos) {
        mdx.frontmatter.videos.forEach((video, i) => {
            dynamicVideoProps[`Video${i + 1}`] = p => {
                return (
                    <ProjectVideo
                        src={video.publicURL}
                        container={container}
                        {...p}
                    />
                )
            }
        })
    }

    return (
        <Page ref={pageRef}>
            <Scroll pageRef={pageRef} />
            <MDXProvider
                components={{
                    ...dynamicImageProps,
                    ...dynamicVideoProps,
                    ProjectSection: p => {
                        return (
                            <ProjectSection container={container}>
                                {p.children}
                            </ProjectSection>
                        )
                    },
                    ProjectHeroSection: p => (
                        <ProjectHeroSection>
                            <Heading lined>{mdx.frontmatter.title}</Heading>
                            <HeroSectionContent>
                                {p.children}
                            </HeroSectionContent>
                        </ProjectHeroSection>
                    ),
                }}
            >
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <Related />
            <Decorations items={mdx.frontmatter.decorations} />
        </Page>
    )
}

export const pageQuery = graphql`
    query ProjectsQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                decorations
                images {
                    childImageSharp {
                        fluid(maxHeight: 720) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                videos {
                    publicURL
                }
            }
        }
    }
`

const ProjectHeroSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin-right: 0px;
    align-items: stretch;
    width: 90vw;
    margin-left: 5vw;
    margin-top: 200px;

    @media ${Device.laptop} {
        margin-right: 100px;
        width: auto;
        margin-left: 0px;
        margin-top: 0;
    }
`

const HeroSectionContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20px;

    > div {
        width: 420px;
        margin: 0 0 0 60px;

        &:first-child {
            margin-left: 0;
        }
    }
`
