import React, { useRef, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Heading } from "./heading"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Sizes, useWindowSize, Device } from "../global/sizes"
import { TweenMax, Power0 } from "gsap"

export function ProjectCard({ title, path, cover, pageRef }) {
    const ref = useRef()
    const cursorRef = useRef()
    const pointRef = useRef()
    const { isVertical } = useWindowSize()
    const [pos, setPos] = useState([0, 0])

    return (
        <Holder to={path} cover bg="#FFF">
            <Wrapper>
                <CardShadow />
                <Card
                    ref={ref}
                    onMouseDown={e => {
                        e.preventDefault()
                        TweenMax.to(pointRef.current, 0.12, {
                            scale: 1,
                            ease: Power0.easeOut,
                        })
                    }}
                    onMouseUp={e => {
                        e.preventDefault()
                    }}
                    onMouseEnter={() => {
                        TweenMax.to(cursorRef.current, 0, { display: "flex" })
                    }}
                    onMouseLeave={() => {
                        TweenMax.to(cursorRef.current, 0, { display: "none" })
                    }}
                    onMouseMove={({ clientX, clientY }) => {
                        const x =
                            clientX - ref.current.getBoundingClientRect().x - 25
                        const y =
                            clientY - ref.current.getBoundingClientRect().y - 25

                        TweenMax.to(cursorRef.current, 0, {
                            y: y,
                            x: x,
                        })
                    }}
                >
                    <CardImg
                        fixed={cover}
                        style={
                            isVertical
                                ? {
                                      width: "90vw",
                                      height: `${90 *
                                          (1 / cover.aspectRatio)}vw`,
                                  }
                                : {}
                        }
                    />
                    <Cursor ref={cursorRef}>
                        <Point ref={pointRef} />
                    </Cursor>
                </Card>
            </Wrapper>
            <Heading decorated level="2">
                {title}
            </Heading>
        </Holder>
    )
}

const Point = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 9999px;
    background-color: #fff;
    display: block;
    transform: scale(0.1);
`

const Cursor = styled.div`
    border-radius: 9999px;
    border: 1px solid #fff;
    z-index: 100;
    position: absolute;
    display: none;
    width: 50px;
    top: 0;
    left: 0;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #dbbfaf;
`

const CardShadow = styled.div`
    position: absolute;
    z-index: 0;
    width: 80vw;
    height: auto;
    top: 0;
    left: 5%;
    transition: 0.2s ease all;
    background-color: transparent;
    @media ${Device.laptop} {
        width: 90%;
        height: 100%;
    }
`

const Wrapper = styled.div`
    position: relative;
`

const Card = styled.div`
    margin-bottom: 30px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    width: 90vw;
    height: auto;
    position: relative;
    z-index: 2;
    padding: 0;
    min-height: 0;
    max-height: 1;
    line-height: 0;
    box-sizing: border-box;
    cursor: none;

    @media ${Device.laptop} {
        width: 780px;
        height: 480px;
    }
`

const CardImg = styled(Img)`
    transition: 2s ease transform;
`

const Holder = styled(AniLink)`
    flex-shrink: 0;
    margin: 20px;
    transform: scale(1);

    &:hover {
        ${CardShadow} {
            box-shadow: 0px 40px 90px rgba(0, 0, 0, 0.4);
        }

        ${CardImg} {
            transform: scale(1.2);
        }
    }
`
