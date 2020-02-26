import React from "react"
import styled, { css } from "styled-components"
import { Sizes, useWindowSize, Device } from "../global/sizes"

function HeadingWithoutRef({ children, level = "1", color = "dark", className }, ref) {
    return (
        <StyledHeading level={level} ref={ref} color={color} className={className}>
            {children}
        </StyledHeading>
    )
}

export const Heading = React.forwardRef(HeadingWithoutRef)

const StyledHeading = styled.h1`
    font-family: "Butler";
    position: relative;
    z-index: 10;

    ${p =>
        p.level === "1" &&
        css`
            font-weight: 100;
            font-size: 122px;
            line-height: 108.1%;

            @media ${Device.tablet} {
                font-size:70px;
            }
        `}

    ${p =>
        p.level === "2" &&
        css`
            font-weight: 100;
            font-size: 60px;
            line-height: 108.1%;

            @media ${Device.tablet} {
                font-size:45px;
            }
        `}
    ${p =>
        p.level === "3" &&
        css`
            font-weight: 100;
            font-size: 40px;
            line-height: 108.1%;

            @media ${Device.tablet} {
                font-size:30px;
            }
        `}
    
    color: ${p => {
        if (p.color == 'dark')
            return "#000"
        if (p.color == 'light')
            return "#FFF"
    }}
`
