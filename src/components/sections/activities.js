import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from 'gatsby-image'
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { Link } from '../link'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'
import { usePowerCover } from '../../../hooks/usePowerCover'
import { PowerCover } from '../power-cover'
import { useState } from 'react'

export const Activities = () => {
    const { images, images2, background, mapimg } = useStaticQuery(
        graphql`
        query {
            images: allFile( filter: { relativePath: { glob: "activities/*.jpg"}} ) {
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
            background: file(relativePath: { eq: "mountains-bg.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mapimg: file(relativePath: { eq: "activities-map.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `
    )

    const handleAnimation = useOnEnterLeaveTransition(() => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 1, y: 0 }));
        tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 1, y: 0 }));
        tl.play()
    }, () => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 0, y: 20 }));
        tl.play()
    })

    const activities = {
        'activity1': {
            class: "activityOne",
            name: "Slow down and reconnect with yorself",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            handle: usePowerCover("activityOne", "up")
        },
        'activity2': {
            class: "activityTwo",
            name: "Slow down and reconnect with yorself",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            handle: usePowerCover("activityTwo", "up")
        },
        'activity3': {
            class: "activityThree",
            name: "Climbing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        'activity4': {
            class: "activityFour",
            name: "Rafting",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
        'activity5': {
            class: "activityFive",
            name: "Plimbari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
        'activity6': {
            class: "activitySix",
            name: "Speologie",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
    }

    images.edges.map((e) => {
        if (!activities[e.node.name])
            throw "Detected file without info set. Set info here."
        activities[e.node.name].image = e.node.childImageSharp.fluid
    })

    const [showMore, setShowMore] = useState(false)

    return <Controller vertical key="activities-controller">
        <Scene duration={1300} triggerHook="onLeave" offset={100}>
            {(progress, event) => {
                return <ActivitiesHome>
                    <ContentHolder>
                        <ContentTop>
                            <Div>
                                <Heading level="2" >Lorem ipsum color dolor</Heading>
                                <Paragraph style={{ marginTop: 40, maxWidth: 350 }}>La doar 2 ore de Timisoara si Craviova, Baile Herculane este locul perfect pentru a va relaxa si reconecta cu natura</Paragraph>
                            </Div>
                            <MapImg
                                fluid={mapimg.childImageSharp.fluid}
                                alt="Harta Baile Herculane"
                            />
                        </ContentTop>
                        <ActivitiesList>
                            {
                                Object.keys(activities).map((aId, i) => {
                                    const a = activities[aId]
                                    if (a.handle)
                                        a.handle(event)

                                    if (i > 1 && !showMore)
                                        return null
                                    return <PowerCover className={a.class}> <ActivityPrev>
                                        <GatsbyImage className="ContainedImage" fluid={a.image} style={{ height: '100%', width: 500 }} />
                                        <ActivityText>
                                            <Heading className="ActivityName" level="3" color={'light'}>{a.name}</Heading>
                                            <Paragraph className="ActivityDesc" color={'light'}>{a.description}</Paragraph>
                                        </ActivityText>
                                    </ActivityPrev></PowerCover>
                                })
                            }
                        </ActivitiesList>
                        <span color="black" effect="underline" className="SeeMore" onClick={() => {
                            setShowMore(e => !e)
                        }}>
                            {showMore ? "See less" : "See more"}
                        </span>

                        <BackPhoto
                            fluid={background.childImageSharp.fluid}
                            alt="Mountains"
                        />
                    </ContentHolder>
                </ActivitiesHome >
            }}
        </Scene>
    </Controller>
}

const ActivitiesHome = styled.div`
            min-height: 100vh;
            width: 100vw;
        `

const ContentHolder = styled.div`
            padding-bottom: 60px;
            position: relative;
            display:flex;
            flex-direction:column;
            margin-left:auto;
            margin-right:auto;
            flex-wrap:no-wrap;
            margin-top: 0px;
            width:80%;
            padding:200px 10%;
            z-index: 1;
        `

const ContentTop = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;

`

const ActivitiesList = styled.div`
        width:100%;
        margin-top:120px;
        justify-content: space-between;
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        a{
            margin-left:auto;
            margin-right:auto;
            margin-top:120px !important;
        }
`

const ActivityText = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 30px;
        max-width:400px;
        transition:all 0.3s ease-in;
`

const Div = styled.div`

`

const ActivityPrev = styled.div`
            width:47%;
            height:759px;
            position: relative;
            margin-bottom:40px;
            transition:all 1s ease-in;

            .ContainedImage{
                transition:all 1s ease-in;
            }

            &:nth-child(2n){
                margin-top:100px;
            }

            .ActivityDesc{
                display:none !important;
                transition:all 1s ease-in;
            }

            &:hover{
                .ActivityDesc{
                display:flex !important;
                }
                .ContainedImage{
                    transform:scale(1.2);
                }
            }
        `
const BackPhoto = styled(Img)`
            z-index: -1;
            position:absolute !important;
            max-width:900px;
            width:70%;
            right:30px;
            top:400px;
            height:auto;
`
const MapImg = styled(Img)`
    width:100%;
    height:auto;
    max-width:300px;
    float:right;
`