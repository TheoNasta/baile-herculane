import React from "react"
import styled from "styled-components"
import { useWindowSize, Device } from "../global/sizes"

export const Decorations = ({ items }) => {
    return (
        <AllDecorations>
            {items.map(d => (
                <Decoration>{d}</Decoration>
            ))}
        </AllDecorations>
    )
}

const AllDecorations = styled.div`
    display: none;
    position: absolute;
    left: 200px;
    bottom: 40px;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    @media ${Device.laptop} {
        display: flex;
    }
`

const Decoration = styled.div`
    font-size: 18px;
    font-weight: 600px;
    opacity: 0.3;
    margin: 0px 30px;
    &:first-child {
        margin-left: 0;
    }
`
