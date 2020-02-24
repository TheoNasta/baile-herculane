import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export const ImageSlider = () => {
    return <StaticQuery
        query={graphql`
            query {
                first: file(relativePath: { eq: "fullimg1.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <ImagesSliderWrap>
            <FullImg1
                fluid={data.first.childImageSharp.fluid}
                alt="Gatsby Docs are awesome"
            />
        </ImagesSliderWrap>
        } />
}

const ImagesSliderWrap = styled.div`
    height: 700px;
    width: 100vw;
`

const FullImg1 = styled(Img)`
    z-index: 1;
    height:700px;
    width: 100%;
`
