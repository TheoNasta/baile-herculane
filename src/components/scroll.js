import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax } from "gsap"

export const Scroll = ({ pageRef }) => {
    const scrollBarRef = useRef()
    const barRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const left = pageRef.current.scrollLeft
            const limit =
                pageRef.current.scrollWidth -
                pageRef.current.getBoundingClientRect().width
            const p = Number(Math.round(left / limit + "e2") + "e-2")
            const progress = p < 0 ? 0 : p > 1 ? 1 : p

            TweenMax.to(barRef.current, 0, {
                x: 160 * progress,
            })

            if (progress > 0.9) {
                TweenMax.to(scrollBarRef.current, 0.3, { opacity: 0 })
            } else if (progress < 0.1) {
                TweenMax.to(scrollBarRef.current, 0.3, { opacity: 0 })
            } else {
                TweenMax.to(scrollBarRef.current, 0.3, { opacity: 1 })
            }
        }
        if (pageRef && pageRef.current)
            pageRef.current.addEventListener("scroll", handleScroll, true)
        return () => {
            if (pageRef && pageRef.current)
                pageRef.current.removeEventListener("scroll", handleScroll)
        }
    }, [pageRef.current])

    return (
        <ScrollBar ref={scrollBarRef}>
            <Bar ref={barRef} />
        </ScrollBar>
    )
}

const Bar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40px;
    background-color: #fff;
    border-radius: 9999px;
`

const ScrollBar = styled.div`
    background-color: #ccb1a1;
    position: fixed;
    left: 50%;
    top: 30px;
    margin-left: -100px;
    opacity: 0;
    width: 200px;
    height: 10px;
    border-radius: 999px;
`
