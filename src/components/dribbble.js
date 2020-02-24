import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Device, useWindowSize } from "../global/sizes"
import { Heading } from "./heading"

export function Dribbble({ data }) {
    const { isVertical } = useWindowSize()
    return (
        <StaticQuery
            query={graphql`
                query Dribbble {
                    allIndexYaml {
                        edges {
                            node {
                                link
                                title
                                source {
                                    childImageSharp {
                                        fixed(width: 800, height: 600) {
                                            ...GatsbyImageSharpFixed
                                            aspectRatio
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { edges: dribbbles } = data.allIndexYaml
                const ratio = dribbbles.map(
                    d => d.node.source.childImageSharp.fixed.aspectRatio
                )[0]

                const verticalHeight = `${43 * (1 / ratio)}vw`
                const horizontalWidth = `${230 * ratio}px`

                return (
                    <div style={{ margin: "0 20px", flexShrink: "0" }}>
                        <Cards
                            style={{
                                ...(isVertical
                                    ? {
                                          gridTemplateColumns: `43vw 43vw`,
                                          gridTemplateRows: `${verticalHeight} ${verticalHeight} ${verticalHeight}`,
                                      }
                                    : {
                                          gridTemplateColumns: `${horizontalWidth} ${horizontalWidth} ${horizontalWidth}`,
                                          gridTemplateRows: `230px 230px`,
                                      }),
                            }}
                        >
                            {dribbbles.map(d => {
                                const dribbble = d.node
                                if (dribbble)
                                    return (
                                        <ImgHolder href={dribbble.link}>
                                            <Img
                                                fixed={
                                                    dribbble.source
                                                        .childImageSharp.fixed
                                                }
                                                title={dribbble.title}
                                                style={{
                                                    ...{
                                                        position: "absolute",
                                                        top: "0",
                                                        left: "0",
                                                    },
                                                    ...(isVertical
                                                        ? {
                                                              width: "44vw",
                                                              height: verticalHeight,
                                                          }
                                                        : {
                                                              width: horizontalWidth,
                                                              height: "230px",
                                                          }),
                                                }}
                                            />
                                        </ImgHolder>
                                    )
                            })}
                        </Cards>
                        <Heading decorated level="2">
                            View more on Dribbble
                        </Heading>
                    </div>
                )
            }}
        />
    )
}

const ImgHolder = styled.a`
    display: block;
    position: relative;
    transition: 0.2s ease all;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
        opacity: 0.4;
    }
`
const Cards = styled.div`
    display: grid;
    grid-gap: 4vw;
    width: 90vw;
    height: auto;
    margin-bottom: 30px;
    padding-top: 80px;
    margin-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    @media ${Device.laptop} {
        border-top: none;
        padding-top: 0;
        margin-top: 0;
        grid-gap: 20px;
        width: auto;
        height: 480px;
    }
`
