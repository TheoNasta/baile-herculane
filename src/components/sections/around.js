import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from 'gatsby-image'
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'
import { useBackgroundColorChange } from '../../../hooks/useBackgroundColorChange'

export const Around = () => {
    const { images, background } = useStaticQuery(
        graphql`
        query {
            images: allFile( filter: { relativePath: { glob: "around/*.jpg"}} ) {
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
        'around1': {
            name: "Parcul National Domogled - Valea Cernei"
        },
        'around2': {
            name: "Cazanele Dunarii"
        },
        'around3': {
            name: "Capul lui Decebal"
        },
    }

    images.edges.map((e) => {
        if (!activities[e.node.name])
            throw "Detected file without info set. Set info here."
        activities[e.node.name].image = e.node.childImageSharp.fluid
    })

    const handleBackgroundColorChange = useBackgroundColorChange('#F1F0F0', '#FFF')

    return <Controller vertical key="activities-controller">
        <Scene triggerHook="onLeave" offset={100}>
            {(progress, event) => {
                handleBackgroundColorChange(event)
                return <ActivitiesHome>
                    <ContentHolder>

                        <Heading level="2" className="FadeIn">Around</Heading>
                        <Paragraph className="FadeInNext" style={{ marginTop: 40, maxWidth: 350 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Paragraph>
                        <ActivitiesSlider>
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

            img{
                transition:all 0.4s ease-initial;
            }

            &:hover{
                img{
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
            top:200px;
            height:auto;
`