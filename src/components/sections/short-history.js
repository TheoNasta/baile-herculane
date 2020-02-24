import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'

export const ShortHistory = () => {
    const handleAnimation = useOnEnterLeaveTransition(() => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 1, y: 0 }));
        tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 1, y: 0, delay: 0.1 }));
        tl.add(TweenMax.to(".FadeInNext2", 0.3, { opacity: 1, y: 0, delay: 0.1 }));
        tl.add(TweenMax.to(".FadeInImg", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }));
        tl.add(TweenMax.to(".FadeInImg2", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }));
        tl.add(TweenMax.to(".FadeInImg3", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }));
        tl.play()
    }, () => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".FadeIn", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".FadeInNext", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".FadeInNext2", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".FadeInImg", 0.4, { webkitClipPath: 'inset(0% 100% 0% 0% )' }));
        tl.add(TweenMax.to(".FadeInImg2", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }));
        tl.add(TweenMax.to(".FadeInImg3", 0.4, { webkitClipPath: 'inset(0% 0% 0% 0% )' }));
        tl.play()
    })

    return <StaticQuery
        query={graphql`
            query {
                first: file(relativePath: { eq: "history1.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                second: file(relativePath: { eq: "history2.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                third: file(relativePath: { eq: "history3.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <Controller vertical key="short-history-controller">
            <Scene duration={500} triggerHook="onEnter" offset={500}>
                {(progress, event) => {
                    handleAnimation(event)
                    return <HistoryHome>
                        <ContentHolder>
                            <Heading level="2" className="FadeIn">Scurt istoric</Heading>
                            <div>
                                <Paragraph color="brown" decorated="yes" className="FadeInNext" offset={1200}>1867 ani de turism balnear</Paragraph>
                                <Paragraph col="2" style={{ marginTop: 60 }} className="FadeInNext2">The spa town of Băile Herculane has a long history of human habitation. Numerous archaeological discoveries show that the area has been inhabited since the Paleolithic era. The Peștera Hoților (Cave of the Thieves), contains multiple levels, including one from the Mousterian period, one from the Mesolithic period (late Epigravettian) and several from the later Neolithic periods
                                The spa town of Băile Herculane has a long history of human habitation. Numerous archaeological discoveries show that the area has been inhabited since the Paleolithic era. The Peștera Hoților (Cave of the Thieves), contains multiple levels, including one from the Mousterian period, one from the Mesolithic period (late Epigravettian) and several from the later Neolithic periods
            </Paragraph></div>
                        </ContentHolder>
                        <HistoryPhotos>
                            <HistoryImage className="FadeInImg"
                                fluid={data.first.childImageSharp.fluid}
                                alt="Gatsby Docs are awesome"
                            />

                            <HistoryImage className="FadeInImg2"
                                fluid={data.second.childImageSharp.fluid}
                                alt="Gatsby Docs are awesome"
                            />

                            <HistoryImage className="FadeInImg3"
                                fluid={data.third.childImageSharp.fluid}
                                alt="Gatsby Docs are awesome"
                            />

                        </HistoryPhotos>
                    </HistoryHome>
                }}</Scene>
        </Controller>
        } />
}

const HistoryHome = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    background-image:url('./../images/history-bg.png');
    background-size:cover;

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
    flex-direction: row;
    height: 300px;
    justify-content: space-evenly;

    @media ${Device.tablet} {
        flex-direction: column;
        height:auto;
    }
`
const HistoryImage = styled(Img)`
    z-index: 1;
    width: 32%;
    transition: all 0.4s ease-in;
    @media ${Device.tablet} {
        width:90%;
        align-self:center;
        margin-bottom:20px;
    }

    &:hover{

    }
`