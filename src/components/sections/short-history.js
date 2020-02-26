import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from 'gatsby-image'
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'
import { useBackgroundColorChange } from '../../../hooks/useBackgroundColorChange'

export const ShortHistory = () => {
    const handleAnimation = useOnEnterLeaveTransition(() => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 1, y: 0 }), 0);
        tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 1, y: 0, delay: 0.1 }), 0);
        tl.add(TweenMax.to(".FadeInNext2", 0.3, { opacity: 1, y: 0, delay: 0.1 }), 0);
        tl.add(TweenMax.staggerTo(".FadeInImg", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }, 0.4));
        tl.add(TweenMax.staggerTo(".FadeInImg2", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }, 0.4));
        tl.add(TweenMax.staggerTo(".FadeInImg3", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }, 0.4));
        tl.play()
    }, () => {
        TweenMax.to(".FadeIn", 0.3, { opacity: 0, y: 20 })
        TweenMax.to(".FadeInNext", 0.3, { opacity: 0, y: 20 })
        TweenMax.to(".FadeInNext2", 0.3, { opacity: 0, y: 20 })
        TweenMax.staggerTo(".FadeInImg", 0.4, { webkitClipPath: 'inset(0% 100% 0% 0% )' }, 0.4)
        TweenMax.staggerTo(".FadeInImg2", 0.4, { webkitClipPath: 'inset(0% 100% 0% 0% )' }, 0.4)
        TweenMax.staggerTo(".FadeInImg3", 0.4, { webkitClipPath: 'inset(0% 100% 0% 0% )' }, 0.4)
    })
    const handleBackgroundChange = useBackgroundColorChange("#FFF", "#F1F0F0")

    const test = e => {
        console.log(e)
    }


    const { images, background } = useStaticQuery(
        graphql`
        query {
            images: allFile( filter: { relativePath: { glob: "history/*.jpg"}} ) {
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
            background: file(relativePath: { eq: "history-bg.png" }) {
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
        'history1': {
            name: "Parcul National Domogled - Valea Cernei"
        },
        'history2': {
            name: "Cazanele Dunarii"
        },
        'history3': {
            name: "Capul lui Decebal"
        },
        'history4': {
            name: "Parcul National Domogled - Valea Cernei"
        },
        'history5': {
            name: "Cazanele Dunarii"
        },
        'history6': {
            name: "Capul lui Decebal"
        }
    }

    images.edges.map((e) => {
        if (!photos[e.node.name])
            throw "Detected file without info set. Set info here."
        photos[e.node.name].image = e.node.childImageSharp.fluid
    })

    return <Controller vertical key="short-history-controller">
        <Scene triggerHook="onEnter" duration={1000} offset={500}>
            {(progress, event) => {
                handleAnimation(event)
                handleBackgroundChange(event)
                return <HistoryHome>
                    <ContentHolder>
                        <Heading level="2" className="FadeIn">Scurt istoric</Heading>
                        <div>
                            <Paragraph color="brown" decorated="yes" className="FadeInNext" offset={1200}>1867 ani de turism balnear</Paragraph>
                            <Paragraph col="2" style={{ marginTop: 60 }} className="FadeInNext2">The spa town of Băile Herculane has a long history of human habitation. Numerous archaeological discoveries show that the area has been inhabited since the Paleolithic era. The Peștera Hoților (Cave of the Thieves), contains multiple levels, including one from the Mousterian period, one from the Mesolithic period (late Epigravettian) and several from the later Neolithic periods
                            The spa town of Băile Herculane has a long history of human habitation. Numerous archaeological discoveries show that the area has been inhabited since the Paleolithic era. The Peștera Hoților (Cave of the Thieves), contains multiple levels, including one from the Mousterian period, one from the Mesolithic period (late Epigravettian) and several from the later Neolithic periods
                                </Paragraph></div>
                        <HistoryPhotos>
                            {
                                Object.keys(photos).map(aId => {
                                    const a = photos[aId]
                                    return <HistoryImageHolder>
                                        <HistoryImage fluid={a.image} style={{ height: '200px' }} />
                                        <HistoryPhotoDescription weight={'bold'}>{a.name}</HistoryPhotoDescription>
                                    </HistoryImageHolder>
                                })
                            }
                        </HistoryPhotos>
                    </ContentHolder>
                    <HistoryBg>
                        <HistoryBgImg
                            fluid={background.childImageSharp.fluid}
                            alt="Gatsby Docs are awesome"
                        />
                    </HistoryBg>
                </HistoryHome>
            }}</Scene>
    </Controller>
}


const HistoryHome = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    .FadeIn, .FadeInNext, .FadeInNext2{
        opacity:0;
        transform: translateY(20px);
    }
    .FadeInImg, .FadeInImg2, .FadeInImg3{
        clip-path: inset(0% 100% 0% 0% )
    }
`

const ContentHolder = styled.div`
    padding-bottom: 60px;
    position: relative;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin: 200px auto;
    max-width:960px;
    width:90%;
    z-index: 1;

    div{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
    }

    @media ${Device.tablet} {
        margin-bottom:100px;
    }
`
const HistoryPhotos = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row !important;
    flex-wrap:wrap;
    width:100%;
    justify-content: space-between !important;
    margin-top:120px;

    @media ${Device.tablet} {
        flex-direction: column;
        height:auto;
    }
`
const HistoryImageHolder = styled.div`
    z-index: 1;
    width: 30%;
    height:350px;
    transition: all 0.4s ease-in;
    display: flex;
    flex-direction: column;

    @media ${Device.tablet} {
        width:90%;
        align-self:center;
        margin-bottom:20px;
    }

    &:hover{

    }
    &:nth-child(2n){
        margin-top:70px;
    }
`
const HistoryImage = styled(GatsbyImage)`
    width: 100%;
    flex-grow: 1;
`

const HistoryBg = styled.div`
    z-index: 0;
    width: 100%;
    height:100%;
    position:absolute;

    img{
        width:100%;
        height:100%
    }

`
const HistoryBgImg = styled(Img)`
    width: 100%;
    height:100%;

`
const HistoryPhotoDescription = styled(Heading)`
    font-size:16px;

`