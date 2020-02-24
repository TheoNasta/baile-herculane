import React from "react"
import styled from "styled-components"

function ButtonWithoutRef({ children }, ref) {
    return <StyledButton ref={ref}>{children}</StyledButton>
}

export const Button = React.forwardRef(ButtonWithoutRef)

const StyledButton = styled.button`
    font-size: 12px;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: 20px;
    height: 36px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    color: #fff;
    background-color: #dbbfaf;
    transition: 0.2s ease background-color;
    border-radius: 6px !important;

    &:hover,
    &:focus {
        background-color: #c69a80;
        box-shadow: none;
        outline: none;
    }

    &:active {
        background-color: #a66c4b;
    }
`
