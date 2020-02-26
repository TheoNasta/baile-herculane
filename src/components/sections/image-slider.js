import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'

export const ImageSlider = () => {

    const scaleHeader = (progress) => {
        TweenMax.set(".scale", { scale: 1 + progress * 0.3 })
    }

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
        render={data => <Controller vertical key="hero-controller">
            <Scene duration={1000} triggerHook="onLeave">
                {(progress, event) => {
                    if (progress > 0)
                        scaleHeader(progress)
                    return <ImagesSliderWrap>
                        <FullImg1
                            fluid={data.first.childImageSharp.fluid}
                            alt="Gatsby Docs are awesome"
                            style={{ position: "absolute" }}
                            className="scale"
                        />
                    </ImagesSliderWrap>

                }}</Scene>
        </Controller>
        } />
}

const ImagesSliderWrap = styled.div`
    height: 700px;
    width: 100vw;
    overflow:hidden;
    position:relative;
`

const FullImg1 = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    height: 100%;
`
