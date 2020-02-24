import React from "react"
import styled from "styled-components"
import { ProjectItem } from "./project-item"
import ReactPlayer from "react-player"
import { Heading } from "./heading"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Device } from "../global/sizes"

export const Related = () => {
    // const $tag = "/"
    //     .concat(related[0])
    //     .concat("/|/")
    //     .concat(related[1])
    //     .concat("/")

    return (
        <StaticQuery
            query={graphql`
                query MyQuery {
                    allMdx {
                        nodes {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                cover {
                                    childImageSharp {
                                        fixed(width: 450, height: 340) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const items = data.allMdx.nodes
                let randoms = []

                do {
                    randoms[0] = items[Math.floor(Math.random() * items.length)]
                    randoms[1] = items[Math.floor(Math.random() * items.length)]
                } while (
                    randoms[0].frontmatter.title ===
                    randoms[1].frontmatter.title
                )

                return (
                    <RelatedHolder>
                        <Heading>Other Projects</Heading>
                        <ProjectHolder>
                            {randoms.map(node => {
                                return (
                                    <Project href={node.fields.slug}>
                                        <div style={{ marginBottom: 30 }}>
                                            <Img
                                                fixed={
                                                    node.frontmatter.cover
                                                        .childImageSharp.fixed
                                                }
                                            />
                                        </div>
                                        <Heading level="2" decorated>
                                            {node.frontmatter.title}
                                        </Heading>
                                    </Project>
                                )
                            })}
                            <div style={{ width: "60px", height: "20px" }} />
                        </ProjectHolder>
                    </RelatedHolder>
                )
            }}
        />
    )

    // {"allMdx":{"nodes":[{"frontmatter":{"title":"Induo"},"fields":{"slug":"/projects/induo/"}},{"frontmatter":{"title":"My Wellness"},"fields":{"slug":"/projects/my-wellness/"}},{"frontmatter":{"title":"Revive"},"fields":{"slug":"/projects/revive/"}},{"frontmatter":{"title":"Vizgu"},"fields":{"slug":"/projects/vizgu/"}},{"frontmatter":{"title":"Workdash"},"fields":{"slug":"/projects/workdash/"}},{"frontmatter":{"title":"We Do Wood"},"fields":{"slug":"/projects/we-do-wood/"}}]}}

    // (
    // )
}

const RelatedHolder = styled.div`
    padding: 30px 5vw;
    box-sizing: border-box;
    background-color: #fff;
    flex-direction: column;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 100vw;
    margin-left: none;

    @media ${Device.laptop} {
        width: auto;
        min-width: 80vw;
        align-self: stretch;
        margin-left: 100px;
        padding: 100px;
    }
`

const ProjectHolder = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    @media ${Device.laptop} {
        flex-direction: row;
    }
`

const Project = styled.a`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${Device.laptop} {
        margin-left: 30px;
    }

    &:first-child {
        margin-left: 0;
    }
`
