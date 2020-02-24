import React from "react"
import styled, { css } from "styled-components"
import { Sizes, useWindowSize, Device } from "../global/sizes"

function ParagraphWithoutRef({ children, weight = "regular", color = "dark", size = "normal", col = "1", decorated = "no", style, className }, ref) {
    return <StyledParagraph ref={ref} weight={weight} color={color} size={size} decorated={decorated} className={className} col={col} style={style}>{children}</StyledParagraph>
}

export const Paragraph = React.forwardRef(ParagraphWithoutRef)

const StyledParagraph = styled.p`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: ${p => {
        if (p.size == 'big')
            return "20px"
        if (p.size == 'normal')
            return "18px"
    }};

    line-height: 169.1%;

    color: ${p => {
        if (p.color == 'dark')
            return "#000"
        if (p.color == 'light')
            return "#FFF"
        if (p.color == 'brown')
            return "#C59575"
    }};

    font-weight: ${p => p.weight};
    ${p =>
        p.col === "2" &&
        css`
            column-count: 2;
            column-gap: 60px;

            @media ${Device.tablet} {
                column-count: 1;
            }
        `}

    em {
        font-weight: 800;
    }
    ${p => p.decorated == "yes" && css`
        &:before {
            content: "";
            display: inline-block;
            width:10px;
            height:1px;
            background-color:#C59575;
            margin-right: 10px;
            top: -5px;
            position: relative;
        }
        &:after {
            content: "";
            display: inline-block;
            width:10px;
            height:1px;
            background-color:#C59575;
            margin-left: 10px;
            top: -5px;
            position: relative;
        }
    `}
`
