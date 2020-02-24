import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { TweenMax, Power3 } from "gsap"
import { Sizes, useWindowSize, Device } from "../global/sizes"

export const ProjectItem = ({ children, container, style }) => {
    const [state, setState] = useState()
    const { isVertical } = useWindowSize()
    const sectionRef = useRef()

    useEffect(() => {
        if (!sectionRef || !sectionRef.current) return
        if (state == "DURING")
            TweenMax.to(sectionRef.current, 0.95, {
                y: 0,
                x: 0,
                opacity: 1,
            })
        if (state == "BEFORE")
            if (isVertical)
                TweenMax.to(sectionRef.current, 0.95, {
                    x: 50,
                    opacity: 0,
                })
            else
                TweenMax.to(sectionRef.current, 0.95, {
                    y: 50,
                    opacity: 0,
                })
    }, [state, sectionRef, isVertical])

    if (container)
        return (
            <Controller
                container={container}
                vertical={isVertical}
                key={JSON.stringify(isVertical)}
            >
                <Scene offset={-200}>
                    {(progress, event) => {
                        if (state != event.state) setState(event.state)
                        return (
                            <Section style={{ ...style }}>
                                <Transition ref={sectionRef}>
                                    {children}
                                </Transition>
                            </Section>
                        )
                    }}
                </Scene>
            </Controller>
        )
    return <Section style={{ ...style }}>{children}</Section>
}

const Transition = styled.div`
    opacity: 0;
    transform: translateX(50px);

    @media ${Device.laptop} {
        transform: translateY(50px);
    }
`

const Section = styled.div`
    margin: 30px 0px;
    flex-shrink: 0;

    @media ${Device.laptop} {
        margin: 0 70px;
    }
`
