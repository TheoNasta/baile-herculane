import React, { useEffect, useRef, useState, useCallback } from "react"
import styled from "styled-components"
import { Heading } from "../heading"
import { Paragraph } from "../paragraph"
import { Scroller } from "../scroller"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Controller, Scene } from "react-scrollmagic"
import ResizeObserver from "rc-resize-observer"
import { TimelineMax, TweenMax } from "gsap"
import { useOnEnterLeaveTransition } from "../../../hooks/useOnEnterLeaveTransition"

export const Hero = container => {
    const scaleHeader = progress => {
        TweenMax.set(".scale", { scale: 1 + progress * 0.3 })
    }

    return (
        <StaticQuery
            query={graphql`
                query {
                    file(relativePath: { eq: "homepage/hero.jpg" }) {
                        childImageSharp {
                            fixed(width: 1600) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            `}
            render={data => (
                <Controller vertical key="hero-controller">
                    <Scene duration={1000} triggerHook="onLeave">
                        {(progress, event) => {
                            if (progress > 0) scaleHeader(progress)
                            return (
                                <HeroHolder>
                                    <ContentHolder>
                                        <Heading color="light" level="1">
                                            Băile <br /> Herculane
                                        </Heading>
                                        <Paragraph
                                            color="light"
                                            style={{ maxWidth: 430 }}
                                        >
                                            <em>Saluti et laetitiae</em> din
                                            mijlocul munților Domogled. Vă
                                            invităm să descoperiți una dintre
                                            cele mai vechi stațiuni din lume
                                        </Paragraph>
                                        <Scroller></Scroller>
                                    </ContentHolder>
                                    <BackgroundImage
                                        fixed={data.file.childImageSharp.fixed}
                                        alt="Gatsby Docs are awesome"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            position: "absolute",
                                        }}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className="scale"
                                    />
                                </HeroHolder>
                            )
                        }}
                    </Scene>
                </Controller>
            )}
        />
    )
}

const HeroHolder = styled.div`
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
`

const ContentHolder = styled.div`
    padding-left: 10%;
    padding-bottom: 60px;
    position: relative;
    width: 50%;
    z-index: 1;
`

const BackgroundImage = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    height: 100%;
`
