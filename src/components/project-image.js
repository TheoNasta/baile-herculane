import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { ProjectItem } from "./project-item"
import { useWindowSize, Device } from "../global/sizes"

export const ProjectImage = ({
    src,
    container,
    title,
    width,
    height,
    ratio,
}) => {
    const { isVertical } = useWindowSize()

    return (
        <ProjectItem container={container}>
            <Fig>
                <StyledImage
                    fluid={src}
                    style={{
                        height: isVertical ? `${90 * (1 / ratio)}vw` : `70vh`,
                        width: isVertical ? `90vw` : `${70 * ratio}vh`,
                    }}
                />
                {title && <figcaption>{title}</figcaption>}
            </Fig>
        </ProjectItem>
    )
}

const Fig = styled.div`
    .gatsby-image-wrapper {
        border-radius: 10px;
        border-collapse: separate;

        @media ${Device.laptop} {
            border-radius: 30px;
        }
    }
`

const StyledImage = styled(Img)`
    margin: 0;
`

const Holder = styled.div`
    margin: 0 100px;
`
