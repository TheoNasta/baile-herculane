import React from "react"
import styled from "styled-components"

export const PowerCover = ({
    className,
    children,
    style
}) => {
    return <Cover style={style} key={className + "HolderKey"} className={className + 'Holder'}>
        <Content key={className + "Key"} className={className}>{children}</Content>
    </Cover>
}

const Cover = styled.div`
    position: relative;
    overflow: hidden;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
`