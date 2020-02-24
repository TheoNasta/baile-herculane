import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import { TweenMax, Power3, Power2 } from "gsap"
import { Contact } from "./contact"
import { useWindowSize, Device } from "../global/sizes"
import Logo from "./logo"

export const Sidebar = () => {
    let sidebarContentRef = useRef(null)
    const [status, setStatus] = useState("HIDDEN")
    const { width, height, isVertical } = useWindowSize()

    useEffect(() => {
        const sidebar = sidebarContentRef.current
        if (!sidebar) return

        switch (status) {
            case "SHOW":
                setStatus("SHOWING")
                if (isVertical)
                    TweenMax.to(sidebar, 0.95, {
                        y: "-80px",
                        ease: Power2.easeOut,
                        delay: 0,
                        onComplete: () => {
                            setStatus("SHOWN")
                        },
                    })
                else
                    TweenMax.to(sidebar, 0.95, {
                        x: "-80px",
                        ease: Power2.easeOut,
                        delay: 0,
                        onComplete: () => {
                            setStatus("SHOWN")
                        },
                    })
                break
            case "HIDE":
                setStatus("HIDDING")
                if (isVertical)
                    TweenMax.to(sidebar, 0.95, {
                        y: -height,
                        ease: Power3.easeOut,
                        delay: 0,
                        onComplete: () => {
                            setStatus("HIDDEN")
                        },
                    })
                else
                    TweenMax.to(sidebar, 0.95, {
                        x: -width,
                        ease: Power3.easeOut,
                        delay: 0,
                        onComplete: () => {
                            setStatus("HIDDEN")
                        },
                    })
        }
    }, [status, isVertical])

    useEffect(() => {
        const sidebar = sidebarContentRef.current
        if (!sidebar) return

        if (status == "HIDDEN" || status == "HIDE" || status == "HIDDING") {
            if (isVertical) {
                TweenMax.to(sidebar, 0, {
                    y: -height,
                    x: 0,
                    ease: Power3.easeOut,
                    delay: 0,
                })
            } else {
                TweenMax.to(sidebar, 0, {
                    y: 0,
                    x: -width,
                    ease: Power3.easeOut,
                    delay: 0,
                })
            }
            setStatus("HIDDEN")
        }
        if (status == "SHOWING" || status == "SHOW" || status == "SHOWN") {
            if (isVertical) {
                TweenMax.to(sidebar, 0, {
                    y: "-80px",
                    x: "0px",
                    ease: Power2.easeOut,
                    delay: 0,
                })
            } else {
                TweenMax.to(sidebar, 0, {
                    y: "0px",
                    x: "-80px",
                    ease: Power2.easeOut,
                    delay: 0,
                })
            }
            setStatus("SHOWN")
        }
    }, [width, height, isVertical])

    return (
        <SidebarContent ref={sidebarContentRef}>
            <ContractHolder>
                <Contact
                    shouldShow={
                        status == "SHOW" ||
                        status == "SHOWING" ||
                        status == "SHOWN"
                    }
                />
            </ContractHolder>
            <ActionBar>
                <Logo size={170} mobileOnly />
                <Link
                    onClick={() =>
                        setStatus(
                            status == "SHOWN"
                                ? "HIDE"
                                : status == "HIDDEN"
                                    ? "SHOW"
                                    : status
                        )
                    }
                >
                    {status == "SHOWN" || status == "SHOWING"
                        ? "Back"
                        : "Contact"}
                </Link>
            </ActionBar>
        </SidebarContent>
    )
}

const SidebarContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-color: #fff;
    display: flex;
    text-orientation: upright;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
    overflow: visible;
    transform: translateY(-100vh);
    margin-top: 80px;

    @media ${Device.laptop} {
        transform: translateX(-100vw);
        margin-top: 0;
        margin-left: 80px;
        flex-direction: row;
        align-items: stretch;
    }
`

const ContractHolder = styled.div`
    overflow: auto;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    @media ${Device.laptop} {
        flex-direction: row;
        justify-content: center;
    }
`

const ActionBar = styled.div`
    height: 80px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.035);
    flex-shrink: 0;

    @media ${Device.laptop} {
        width: 80px;
        height: 100%;
        border-left: 1px solid rgba(0, 0, 0, 0.035);
        border-top: none;
    }
`

const LinkHolder = styled.div`
    text-transform: uppercase;
    letter-spacing: 1.6px;
    font-size: 11px;
    cursor: pointer;
    position: absolute;
    right: 0px;
    bottom: 0;
    height: 80px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.035);
    z-index: 10;
    top: auto;

    @media ${Device.laptop} {
        width: 80px;
        height: 100%;
        border-left: 1px solid rgba(0, 0, 0, 0.035);
        border-top: none;
        top: 0;
        bottom: auto;
    }
`

const Link = styled.div`
    text-transform: uppercase;
    letter-spacing: 1.6px;
    font-size: 11px;
    cursor: pointer;
    margin: 0px;
    position: absolute;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: none;
    right: 15px;
    bottom: 15px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.035);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.065);
    }

    @media ${Device.laptop} {
        transform: rotateZ(-90deg);
        right: -60px;
        bottom: 90px;
        width: 200px;
    }
`
