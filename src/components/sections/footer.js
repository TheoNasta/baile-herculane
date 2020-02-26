import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import GatsbyImage from 'gatsby-image'
import { Link } from '../link'
import { TweenMax, Power0 } from "gsap"
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { useBackgroundColorChange } from '../../../hooks/useBackgroundColorChange'
import { Controller, Scene } from 'react-scrollmagic'

export const Footer = () => {
    const hotels = {
        'hotel1': {
            name: "Grand Hotel Minerva Resort & SPA",
            stars: 4,
            link: "http://hotelminerva.ro/en/"
        },
        'hotel2': {
            name: "Afrodita Resort & SPA",
            stars: 4,
            link: "https://www.afroditaresort.ro/"
        },
        'hotel3': {
            name: "Hotel Versay",
            stars: 4,
            link: "https://www.hotel-versay.ro/"
        },
        'hotel4': {
            name: "Diana Resort",
            stars: 3,
            link: "https://www.dianaresort.ro/"
        },
    }

    const [selectedHotel, setSelectedHotel] = useState("hotel1")
    const [loaded, setLoaded] = useState(false)
    const previousHoveredImage = useRef()
    const imageRefs = useRef(Object.keys(hotels).reduce((acc, hotelId) => {
        acc[hotelId] = React.createRef()
        return acc
    }, {}))


    useEffect(() => {
        if (previousHoveredImage.current)
            TweenMax.to(previousHoveredImage.current, 0.3, {
                opacity: 0,
                x: 20,
            })
        if (imageRefs.current[selectedHotel]) {
            TweenMax.to(imageRefs.current[selectedHotel].current, 0.3, {
                opacity: 1,
                x: 0,
            })
            previousHoveredImage.current = imageRefs.current[selectedHotel].current
        }
    }, [selectedHotel])

    useEffect(() => {
        setLoaded(true)
    }, [])

    const handleBackgroundChange = useBackgroundColorChange('#FFF', '#424242')

    return <StaticQuery
        query={graphql`
            query {
                images: allFile( filter: { relativePath: { glob: "hotels/*.jpg"}} ) {
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
            }
        `}
        render={data => {
            data.images.edges.map((e) => {
                if (!hotels[e.node.name])
                    throw "Detected file without info set. Set info here."
                hotels[e.node.name].image = e.node.childImageSharp.fluid
            })

            return <Controller vertical key="short-history-controller">
                <Scene triggerHook="onEnter" offset={200}>
                    {(progress, event) => {
                        handleBackgroundChange(event)
                        return <FooterWrap>
                            <ContentHolder>
                                <Heading level="2" color="light">You’re always welcome!</Heading>
                                <Hotels>
                                    <HotelsLeft>
                                        {
                                            Object.keys(hotels).map(aId => {
                                                const a = hotels[aId]
                                                return <HotelName onMouseEnter={() => {
                                                    setSelectedHotel(aId)
                                                }}>
                                                    <Link color="light" to={a.link}>
                                                        <Paragraph color="light">{a.name}</Paragraph>
                                                        <Stars color="light">{(() => {
                                                            const stars = []
                                                            for (let i = 0; i < a.stars; i++) {
                                                                stars.push(<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6.29221 0L8.21541 3.64515L12.2765 4.34781L9.40401 7.3033L9.99067 11.3827L6.29221 9.56416L2.59374 11.3827L3.1804 7.3033L0.307962 4.34781L4.36901 3.64515L6.29221 0Z" fill="#F1C85D" />
                                                                </svg>
                                                                )
                                                            }
                                                            return stars
                                                        })()}</Stars>
                                                    </Link>
                                                </HotelName>
                                            })
                                        }
                                    </HotelsLeft>
                                    <HotelsRight>
                                        {
                                            Object.keys(hotels).map(aId => {
                                                const a = hotels[aId]
                                                return <HotelImage loaded={loaded} ref={imageRefs.current[aId]}>
                                                    <GatsbyImage fluid={a.image} style={{ maxWidth: '100%' }} />
                                                </HotelImage>
                                            })
                                        }
                                    </HotelsRight>
                                </Hotels>
                                <FooterLinks>
                                    <Link effect="underline" to="https://bit.ly/2Vh4XsH">Vezi mai multe ></Link>
                                    <Link effect="underline" to="https://goo.gl/maps/CEdS2vYg4w13Djdp6"><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74389 12.8047C10.3012 10.3573 12 8.73157 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 8.75234 2.06965 10.7269 4.48992 13.036C4.98356 13.5069 5.49178 13.9918 6 14.5C6.61487 13.8851 7.19887 13.3262 7.74389 12.8047ZM6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" fill="white" />
                                    </svg>
                                        Find out how to get here >
                        </Link>
                                    <Copyright color="light" style={{}}>Copyright 2020 Baile Herculane. All rights reserved</Copyright>
                                </FooterLinks>
                            </ContentHolder>
                        </FooterWrap>
                    }}</Scene>
            </Controller>
        }
        } />
}

const FooterWrap = styled.div`
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
    margin-top:20px;
    width:80%;
    padding:200px 10%;
    z-index: 1;
`

const Hotels = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:100px;
    justify-content:center;

`
const HotelsLeft = styled.div`
    width:50%;
    @media ${Device.tablet} {
        width:100%;
    }
`
const HotelName = styled.div`
    width:80%;
    padding:25px 15px;
    border-bottom:1px solid rgba(255, 255, 255, 15%);
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    a{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        width:100%;
        margin-right:0;
    }

    &:hover{
        background-color: #5E5E5E;
    }

    @media ${Device.tablet} {
        flex-direction:column;
        align-items:flex-start;
        width:100%;
    }
`
const HotelsRight = styled.div`
    width:50%;
    align-items:center;
    position: relative;

    @media ${Device.tablet} {
        display:none;
    }
`
const HotelImage = styled.div`
    min-width:70%;
    width: 100%;
    height:100%;
    max-height:400px;

    ${p => p.loaded && css`
        position: absolute;
        opacity: 0;
        transform: translateX(50px);
        min-width:70%;
        width: 100%;
        height:100%;
        max-height:400px;
    `}
`

const Stars = styled.div`

    svg{
    margin-right:0;
    margin-left:3px;
    }
        @media ${Device.tablet} {
        margin-top:10px;
    }

`
const FooterLinks = styled.div`
    margin-top:200px;

    a{
        @media ${Device.tablet} {
            margin-bottom:20px;
        }
    }
`
const Copyright = styled(Paragraph)`
    font-size:14px;
    float:right;
    opacity:0.2;

    @media ${Device.tablet} {
        float:left;
        margin-top:30px;
    }
`
