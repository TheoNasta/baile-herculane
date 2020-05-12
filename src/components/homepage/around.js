import React from "react"
import styled from "styled-components"
import { Heading } from "../heading"
import { Paragraph } from "../paragraph"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from "gatsby-image"
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { Controller, Scene } from "react-scrollmagic"
import { TimelineMax, TweenMax } from "gsap"
import { useOnEnterLeaveTransition } from "../../../hooks/useOnEnterLeaveTransition"
import { useBackgroundColorChange } from "../../../hooks/useBackgroundColorChange"
import { usePowerCover } from "../../../hooks/usePowerCover"
import { PowerCover } from "../power-cover"

export const Around = () => {
    const { images, background } = useStaticQuery(
        graphql`
            query {
                images: allFile(
                    filter: { relativePath: { glob: "around/*.jpg" } }
                ) {
                    edges {
                        node {
                            name
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                background: file(
                    relativePath: { eq: "homepage/mountains-bg.png" }
                ) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    const handleAnimation = useOnEnterLeaveTransition(
        () => {
            var tl = new TimelineMax({ delay: 0 })
            tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 1, y: 0 }))
            tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 1, y: 0 }))
            tl.play()
        },
        () => {
            var tl = new TimelineMax({ delay: 0 })
            tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 0, y: 20 }))
            tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 0, y: 20 }))
            tl.play()
        }
    )

    const activities = {
        around1: {
            class: "AroundOne",
            name: "Parcul Național Domogled - Valea Cernei",
            handle: usePowerCover("AroundOne", "up"),
        },
        around2: {
            class: "AroundTwo",
            name: "Cazanele Dunarii",
            handle: usePowerCover("AroundTwo", "up"),
        },
        around3: {
            class: "AroundThree",
            name: "Capul lui Decebal",
            handle: usePowerCover("AroundThree", "up"),
        },
    }

    images.edges.map(e => {
        if (!activities[e.node.name])
            throw "Detected file without info set. Set info here."
        activities[e.node.name].image = e.node.childImageSharp.fluid
    })

    const handleBackgroundColorChange = useBackgroundColorChange(
        "#F1F0F0",
        "#FFF"
    )

    return (
        <Controller vertical key="activities-controller">
            <Scene triggerHook="onLeave" offset={-200}>
                {(progress, event) => {
                    handleBackgroundColorChange(event)
                    return (
                        <ActivitiesHome>
                            <ContentHolder>
                                <Heading level="2" className="FadeIn">
                                    Împrejurimi
                                </Heading>
                                <Paragraph
                                    className="FadeInNext"
                                    style={{ marginTop: 40, maxWidth: 350 }}
                                >
                                    Un tărâm prea puțin vizitat pentru locurile
                                    minunate pe care le are de oferit!
                                </Paragraph>
                                <ActivitiesSlider>
                                    {Object.keys(activities).map(aId => {
                                        const a = activities[aId]
                                        if (a.handle) a.handle(event)

                                        return (
                                            <PowerHolder>
                                                <PowerCover
                                                    className={a.class}
                                                    style={{ width: "100%" }}
                                                >
                                                    {" "}
                                                    <ActivityPrev>
                                                        <GatsbyImage
                                                            className="ContainedImage"
                                                            fluid={a.image}
                                                            style={{
                                                                height: "100%",
                                                            }}
                                                        />
                                                        <ActivityDescription
                                                            color={"light"}
                                                            weight={"bold"}
                                                        >
                                                            {a.name}
                                                        </ActivityDescription>
                                                    </ActivityPrev>
                                                </PowerCover>
                                            </PowerHolder>
                                        )
                                    })}
                                </ActivitiesSlider>
                                <BackPhoto
                                    fluid={background.childImageSharp.fluid}
                                    alt="Mountains"
                                />
                            </ContentHolder>
                        </ActivitiesHome>
                    )
                }}
            </Scene>
        </Controller>
    )
}

const ActivitiesHome = styled.div`
    min-height: 100vh;
    width: 100vw;
`

const ContentHolder = styled.div`
    padding-bottom: 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    width: 80%;
    padding: 200px 10%;
    z-index: 1;
`
const ActivityDescription = styled(Paragraph)`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 30px;
    max-width: 90%;
    @media ${Device.tablet} {
        max-width: 230px;
    }
`

const PowerHolder = styled.div`
    width: 46%;

    @media ${Device.tablet} {
        width: 100%;
        margin-bottom: 30px;
    }
`

const ActivitiesSlider = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    justify-content: space-between;

    @media ${Device.tablet} {
        flex-direction: column;
    }
`
const ActivityPrev = styled.div`
    height: 600px;
    margin-right: 30px;
    position: relative;

    @media ${Device.tablet} {
        height: 400px;
        margin-right: 0px;
    }

    img {
        transition: all 0.4s ease-initial;
    }

    &:hover {
        .ContainedImage {
            transform: scale(1.2);
        }
    }
    .ContainedImage {
        transition: all 1s ease-in;
        width: 100%;
    }
`
const BackPhoto = styled(Img)`
    z-index: -1;
    position: absolute !important;
    max-width: 900px;
    width: 70%;
    right: 30px;
    top: 200px;
    height: auto;
`
