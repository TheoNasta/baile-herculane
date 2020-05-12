import React, { useCallback, useRef } from "react"
import styled from "styled-components"
import { Heading } from "../heading"
import { Paragraph } from "../paragraph"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from "gatsby-image"
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { Controller, Scene } from "react-scrollmagic"
import {
    TimelineMax,
    TweenMax,
    Linear,
    Sine,
    Cubic,
    Expo,
    Power2,
    Power3,
} from "gsap"
import { useOnEnterLeaveTransition } from "../../../hooks/useOnEnterLeaveTransition"
import { useBackgroundColorChange } from "../../../hooks/useBackgroundColorChange"
import { usePowerCover } from "../../../hooks/usePowerCover"
import { PowerCover } from "../power-cover"

export const ShortHistory = () => {
    const handleAnimation = useOnEnterLeaveTransition(
        () => {
            var tl = new TimelineMax({ delay: 0 })
            tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 1, y: 0 }), 0)
            tl.add(
                TweenMax.to(".FadeInNext", 0.3, {
                    opacity: 1,
                    y: 0,
                    delay: 0.1,
                }),
                0
            )
            tl.add(
                TweenMax.to(".FadeInNext2", 0.3, {
                    opacity: 1,
                    y: 0,
                    delay: 0.1,
                }),
                0
            )
            tl.play()
        },
        () => {
            TweenMax.to(".FadeIn", 0.3, { opacity: 0, y: 20 })
            TweenMax.to(".FadeInNext", 0.3, { opacity: 0, y: 20 })
            TweenMax.to(".FadeInNext2", 0.3, { opacity: 0, y: 20 })
        }
    )
    const handleBackgroundChange = useBackgroundColorChange("#FFF", "#F1F0F0")

    const test = e => {
        console.log(e)
    }

    const { images, background } = useStaticQuery(
        graphql`
            query {
                images: allFile(
                    filter: { relativePath: { glob: "history/*.jpg" } }
                ) {
                    edges {
                        node {
                            name
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                background: file(
                    relativePath: { eq: "homepage/history-bg.png" }
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

    const photos = {
        history1: {
            class: "historyOne",
            name: "Podul de piatră - 1864",
            handle: usePowerCover("historyOne", "up"),
        },
        history2: {
            class: "historyTwo",
            name: "Strada Cernei - 1900",
            handle: usePowerCover("historyTwo", "up"),
        },
        history3: {
            class: "historyThree",
            name: "Parcul Central - 1913",
            handle: usePowerCover("historyThree", "up"),
        },
        history4: {
            class: "historyFour",
            name: "Gara Herculane",
            handle: usePowerCover("historyFour", "up"),
        },
        history5: {
            class: "historyFive",
            name: "Piața Hercules",
            handle: usePowerCover("historyFive", "up"),
        },
        history6: {
            class: "historySix",
            name: "Băile Neptun",
            handle: usePowerCover("historySix", "up"),
        },
    }

    images.edges.map(e => {
        if (!photos[e.node.name])
            throw "Detected file without info set. Set info here."
        photos[e.node.name].image = e.node.childImageSharp.fluid
    })

    return (
        <Controller vertical key="short-history-controller">
            <Scene triggerHook="onEnter" duration={1000} offset={500}>
                {(progress, event) => {
                    handleAnimation(event)
                    handleBackgroundChange(event)
                    return (
                        <HistoryHome>
                            <ContentHolder>
                                <Heading level="2" className="FadeIn">
                                    Scurt istoric
                                </Heading>
                                <div>
                                    <Paragraph
                                        color="brown"
                                        decorated="yes"
                                        className="FadeInNext"
                                        offset={1200}
                                    >
                                        1867 ani de turism balnear
                                    </Paragraph>
                                    <Paragraph
                                        col="2"
                                        style={{ marginTop: 60 }}
                                        className="FadeInNext2"
                                    >
                                        Un renume precum al Băilor Herculane nu
                                        se poate dobândi decât printr-o
                                        moștenire istorică, culturală și
                                        naturală incontestabilă. Astfel istoria
                                        bimilenară a stațiunii începe odată cu
                                        prima sa atestare documentară în anul
                                        153 e.n., atestare consemnată pe o
                                        tabulă votivă descoperită în siturile
                                        arheologice deschise la mijlocul
                                        secolului XIX în zona localității.
                                        Cunoscută la începuturi doar de
                                        legiunile romane stabilite în zona
                                        Severinului și de administrația romană a
                                        regiunii, stațiunea devine în scurtă
                                        vreme un important punct de atracție
                                        pentru aristocrația Romei antice.
                                        Descoperite și îngrijite de romanii de
                                        rând stabiliți in Dacia, miraculoasele
                                        izvoare termale ajung obiect de
                                        venerație în întreaga lume romană,
                                        protectorul cultului închinat lor fiind
                                        nimeni altul decât legendarul erou
                                        Hercules.
                                    </Paragraph>
                                </div>
                                <HistoryPhotos>
                                    {Object.keys(photos).map((aId, i) => {
                                        const a = photos[aId]
                                        if (a.handle) a.handle(event)

                                        return (
                                            <PowerHolder
                                                style={{
                                                    marginTop:
                                                        i == 1 || i == 4
                                                            ? 60
                                                            : 0,
                                                }}
                                            >
                                                <PowerCover
                                                    className={a.class}
                                                    style={{ width: "100%" }}
                                                >
                                                    <HistoryImageHolder>
                                                        <HistoryImage
                                                            fluid={a.image}
                                                            style={{
                                                                height: "200px",
                                                            }}
                                                        />
                                                        <HistoryPhotoDescription
                                                            weight={"bold"}
                                                        >
                                                            {a.name}
                                                        </HistoryPhotoDescription>
                                                    </HistoryImageHolder>
                                                </PowerCover>
                                            </PowerHolder>
                                        )
                                    })}
                                </HistoryPhotos>
                            </ContentHolder>
                            <HistoryBg>
                                <HistoryBgImg
                                    fluid={background.childImageSharp.fluid}
                                    alt="Gatsby Docs are awesome"
                                />
                            </HistoryBg>
                        </HistoryHome>
                    )
                }}
            </Scene>
        </Controller>
    )
}

const HistoryHome = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    .FadeIn,
    .FadeInNext,
    .FadeInNext2 {
        opacity: 0;
        transform: translateY(20px);
    }
    .FadeInImg,
    .FadeInImg2,
    .FadeInImg3 {
        clip-path: inset(0% 100% 0% 0%);
    }
`

const ContentHolder = styled.div`
    padding-bottom: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    max-width: 960px;
    width: 90%;
    z-index: 1;

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    @media ${Device.tablet} {
        margin-bottom: 100px;
    }
`
const HistoryPhotos = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between !important;
    margin-top: 120px;

    @media ${Device.tablet} {
        flex-direction: column !important;
        height: auto;
    }
`
const PowerHolder = styled.div`
    width: 31%;

    @media ${Device.tablet} {
        width: 100%;
        margin-bottom: 30px;
    }
`
const HistoryImageHolder = styled.div`
    z-index: 1;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;

    @media ${Device.tablet} {
        width: 90%;
        align-self: center;
        margin-bottom: 20px;
    }

    &:hover {
    }
    &:nth-child(2n) {
        margin-top: 70px;
    }
`
const HistoryImage = styled(GatsbyImage)`
    width: 100%;
    flex-grow: 1;
`

const HistoryBg = styled.div`
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;

    img {
        width: 100%;
        height: 100%;
    }
`
const HistoryBgImg = styled(Img)`
    width: 100%;
    height: 100%;
`
const HistoryPhotoDescription = styled(Heading)`
    font-size: 18px;
    text-align: left;
    margin-top: 15px;
    align-self: flex-start;
`
