import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from 'gatsby-image'
import { Controller, Scene } from 'react-scrollmagic'
import { TweenMax } from 'gsap'

export const Activities = () => {
    const { images, background } = useStaticQuery(
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
            background: file(relativePath: { eq: "mountains-bg.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `
    )

    const stickAndScroll = (progress) => {
        TweenMax.set(".scroller", { x: -progress * 1000 })
    }

    const activities = {
        'activity1': {
            name: "Swimming"
        },
        'activity2': {
            name: "Swimmings"
        },
        'activity3': {
            name: "Swimminga"
        },
        'activity4': {
            name: "Pesteri"
        },
        'activity5': {
            name: "Climbing"
        }
    }

    images.edges.map((e) => {
        if (!activities[e.node.name])
            throw "Detected file without info set. Set info here."
        activities[e.node.name].image = e.node.childImageSharp.fluid
    })

    return <Controller vertical key="activities-controller">
        <Scene duration={1000} triggerHook="onLeave" pin offset={100}>
            {(progress, event) => {
                stickAndScroll(progress)
                return <ActivitiesHome>
                    <ContentHolder>

                        <Heading level="2">Activități</Heading>
                        <Paragraph style={{ marginTop: 40, maxWidth: 350 }}>Vă propunem o gamă largă de activități, atât in stațiune cât și in imprejurimi.</Paragraph>
                        <ActivitiesSlider className="scroller">
                            {
                                Object.keys(activities).map(aId => {
                                    const a = activities[aId]
                                    return <ActivityPrev>
                                        <GatsbyImage fluid={a.image} style={{ height: '100%' }} />
                                        <ActivityDescription color={'light'} weight={'bold'}>{a.name}</ActivityDescription>
                                    </ActivityPrev>
                                })
                            }
                        </ActivitiesSlider>
                        <BackPhoto
                            fluid={background.childImageSharp.fluid}
                            alt="Gatsby Docs are awesome"
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
            background-color: white;
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
const ActivityDescription = styled(Paragraph)`
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 30px;
        `

const ActivitiesSlider = styled.div`
            display:flex;
            flex-direction:row;
            margin-top:60px;
        `
const ActivityPrev = styled.div`
            min-width:450px;
            height:600px;
            margin-right:30px;
            position: relative;
        `
const BackPhoto = styled(Img)`
            z-index: -1;
            position:absolute !important;
            max-width:900px;
            width:70%;
            right:30px;
            top:200px;
            height:auto;
`