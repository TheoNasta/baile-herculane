import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax, Linear, Sine, Cubic, Expo, Power2, Power3 } from 'gsap'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'
import { useBackgroundColorChange } from '../../../hooks/useBackgroundColorChange'
import { PowerCover } from '../power-cover'
import { usePowerCover } from '../../../hooks/usePowerCover'


export const Nature = () => {
    const handleAnimation = useOnEnterLeaveTransition(() => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".NatFadeIn", 0.3, { opacity: 1, y: 0 }));
        tl.add(TweenMax.to(".NatFadeInNext", 0.3, { opacity: 1, y: 0 }));
        tl.add(TweenMax.to(".NatFadeInNext2", 0.3, { opacity: 1, y: 0 }));
        tl.play()
    }, () => {
        TweenMax.to(".NatFadeIn", 0.3, { opacity: 0, y: 20 })
        TweenMax.to(".NatFadeInNext", 0.3, { opacity: 0, y: 20 })
        TweenMax.to(".NatFadeInNext2", 0.3, { opacity: 0, y: 20 })
    })
    const handleBackgroundColorChange = useBackgroundColorChange('#7FB0B5', '#FFF')
    const ImgEnterLeave = usePowerCover("NatFadeInImg", "right")
    const Img2EnterLeave = usePowerCover("NatFadeInImg2", "left")
    const Img3EnterLeave = usePowerCover("NatFadeInImg3", "right")

    return <StaticQuery
        query={graphql`
            query {
                first: file(relativePath: { eq: "pin.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                second: file(relativePath: { eq: "hercule.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                third: file(relativePath: { eq: "mountains-bg.png" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                forth: file(relativePath: { eq: "fullimg1.jpg" }) {
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
                    ImgEnterLeave(event)
                    Img2EnterLeave(event)
                    Img3EnterLeave(event)
                    handleBackgroundColorChange(event)
                    return <NatureHome>
                        <ContentHolder>
                            <ContentLeft>
                                <Heading level="2" className="NatFadeIn">Pășește pe urmele Împărătesei Sissi și ale Împăratului Franz Joseph</Heading>
                                <PowerCover className="NatFadeInImg">
                                    <NaturePhoto1
                                        fluid={data.first.childImageSharp.fluid}
                                        alt="Pinul Negru Herculane"
                                    />
                                </PowerCover>
                            </ContentLeft>
                            <ContentRight>
                                <Paragraph style={{}} className="NatFadeInNext">
                                    <b>Aer ionizat</b>
                                    <br /><br />
                                    Deşi se află la altitudinea de 168 m, în Băile Herculane se respiră aer ionizat  ca la 1500-2000 de metri, comparabil cu cel din Alpii elveţieni din staţiunea Davos sau cu aerul de la cascada Niagara. Acest aer ionizat negativ (între 2000 şi 6400 de ioni negativi pe cm2) este generat de cele 20 de izvoare termominerale, de cascadele Cernei, dar mai ales de pădurea de fag, de pin negru şi vegetaţia  de ferigă din zonă.
                        <br /><br /><br />
                                    <b>Pinul negru de banat</b>
                                    <br /><br />
                                    Parcul Naţional „Domogled – Valea Cernei” este o grădină botanică în natură. Muntele Domogled ce se ridică aproape vertical deasupra staţiunii oferă o imagine spectaculoasă pe care din loc în loc se văd insulele de Pin Negru de Banat.
                    </Paragraph>
                                <PowerCover className="NatFadeInImg2">
                                    <NaturePhoto2
                                        fluid={data.second.childImageSharp.fluid}
                                        alt="Statuia lui Hercules"
                                    />
                                </PowerCover>
                            </ContentRight>
                            <PowerCover className="NatFadeInImg3" style={{ width: "100%" }}>
                                <NaturePhoto3
                                    fluid={data.forth.childImageSharp.fluid}
                                    alt="Muntii Domogled"
                                />
                            </PowerCover>
                            <BackPhoto
                                fluid={data.third.childImageSharp.fluid}
                                alt="Mountains"
                            />
                        </ContentHolder>
                    </NatureHome>
                }}</Scene>
        </Controller>
        } />
}


const NatureHome = styled.div`
    min-height: 100vh;
    width: 100vw;
    .NatFadeIn, .NatFadeInNext, .NatFadeInNext2{
        opacity:0;
        transform: translateY(20px);
    }
`

const ContentHolder = styled.div`
    padding-bottom: 60px;
    position: relative;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:1114px;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    width:80%;
    padding:200px 10%;
    z-index: 1;

    @media ${Device.tablet} {
        flex-direction: column;
        height:auto;
    }
`
const NaturePhoto1 = styled(Img)`
    z-index: 1;
    width: 100%;
    margin-top:60px;
`

const NaturePhoto2Holder = styled.div`
    width: 100%;
    align-self:flex-end;
    overflow: hidden;
    transform-origin: left center;
`

const NaturePhoto2 = styled(Img)`
    width: 100%;
    transform-origin: left center;
`

const NaturePhoto3 = styled(Img)`
    z-index: 1;
    width: 100%;
    margin-top:60px;
`

const ContentLeft = styled.div`
    z-index: 1;
    width: 47%;
    @media ${Device.tablet} {
        width:100%;
        margin-bottom:60px;
    }
`
const ContentRight = styled.div`
    z-index: 1;
    width: 47%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;

    @media ${Device.tablet} {
        width:100%;
    }
`
const BackPhoto = styled(Img)`
    z-index: -1;
    position:absolute !important;
    max-width:900px;
    width:70%;
    right:30px;
    bottom:50%;
    height:auto;

    @media ${Device.tablet} {
        bottom:0;
    }
`