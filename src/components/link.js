import React from "react"
import styled, { css } from "styled-components"

export const Link = ({ to, children, effect = "none", color = "white" }) => {
    return <StyledElement href={to} effect={effect} color={color} target="_blank">{children}</StyledElement>
}

const StyledElement = styled.a`
    color: #FFF;
    font-size:18px;
    font-family: "Inter", sans-serif;
    margin-right:30px;
    display:inline-flex;
    flex-direction:row;
    align-items:center;
    transition:all 0.2s ease-in;

    svg{
        margin-right:10px;
    }

    ${a => a.effect == "underline" && css`
        &:hover{
            opacity:0.8;
            padding-bottom:5px;
            border-bottom:1px solid white;
        }
    `}
    ${a => a.color == "black" && css`
        color:#000;
        &:hover{
            border-bottom:1px solid #000;
        }
    `}
`