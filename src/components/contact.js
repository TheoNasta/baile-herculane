import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import { Heading } from "./../components/heading"
import { Paragraph } from "./../components/paragraph"
import { TweenMax, Power1, Linear } from "gsap"
import { Button } from "../components/button"
import { Sizes, Device } from "../global/sizes"

export const Contact = ({ shouldShow }) => {
    let staggers = {}

    useEffect(() => {
        const refs = Object.keys(staggers).map(k => staggers[k])
        if (shouldShow) {
            TweenMax.staggerTo(
                refs,
                0.5,
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.25,
                    force3D: true,
                    display: "block",
                },
                0.1
            )
        } else {
            TweenMax.staggerTo(
                refs,
                0.5,
                {
                    y: 60,
                    opacity: 0,
                    force3D: true,
                    display: "none",
                },
                0.1
            )
        }
    }, [shouldShow])

    return (
        <Holder>
            <LeftSide>
                <Heading
                    ref={r => (staggers = { ...staggers, title: r })}
                    className="stagger"
                >
                    Let's create great products together
                </Heading>
                <p ref={r => (staggers = { ...staggers, paragraph: r })}>
                    You can reach me at:
                </p>
                <Address ref={r => (staggers = { ...staggers, address: r })}>
                    <a href="mailto:theodora.nasta@gmail.com">
                        theodora.nasta@gmail.com
                    </a>
                    <br />
                </Address>
            </LeftSide>
            <RightSide
            >
                <Heading
                    ref={r => (staggers = { ...staggers, title: r })}
                    className="stagger" level="2"
                >
                    Other places where you can find me:
                </Heading>
                <a href="https://dribbble.com/TheodoraN">
                    <b>Dribbble</b>
                </a>
                <br />
                <a href="https://www.linkedin.com/in/theodoranasta/">
                    <b>Linkedin</b>
                </a>
                <br />
                <a href="https://www.instagram.com/theodoranasta/">
                    <b>Instagram</b>
                </a>
                <br />
                <a href="https://twitter.com/TheTheodoraN">
                    <b>Twitter</b>
                </a>
            </RightSide>
        </Holder>
    )
}

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0;
    flex-shrink: 0;

    @media ${Device.laptop} {
        flex-shrink: 0.5;
        margin-right: 90px;
        flex-basis: 50%;
    }
`

const RightSide = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
    border-left:1px solid #E4E4E4;
    padding-left:50px;

    @media ${Device.laptop} {
        flex-basis: 50%;
        flex-shrink: 0.5;
        margin-left: 90px;
    }
`

const Holder = styled.div`
    position: relative;
    padding: 40px 8vw 80px 8vw;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;

    @media ${Device.laptop} {
        padding-top: 300px;
        padding-bottom: 100px;
        padding: 0;
        width: 800px;
        height: 300px;
        flex-direction: row;
        align-items: flex-start;
    }
`

const ButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 10px;
`

const Address = styled.div`
    margin-top: 2px;
    font-size:20px;

    span {
        display: inline-block;
        width: 70px;
    }
`
