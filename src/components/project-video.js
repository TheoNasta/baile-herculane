import React from "react"
import styled from "styled-components"
import { ProjectItem } from "./project-item"
import ReactPlayer from "react-player"
import { useWindowSize } from "../global/sizes"

export const ProjectVideo = ({ src, container, title }) => {
    const { isVertical } = useWindowSize()
    return (
        <ProjectItem style={{ width: "auto" }} container={container}>
            <Fig>
                <ReactPlayer
                    url={src}
                    playing
                    loop
                    height={isVertical ? "auto" : "70vh"}
                    width={isVertical ? "90vw" : "auto"}
                    style={{
                        height: "70vh",
                        borderRadius: "30px",
                        overflow: "hidden",
                        borderCollapse: "collapse",
                    }}
                />
                {title && <figcaption>{title}</figcaption>}
            </Fig>
        </ProjectItem>
    )
}

const Fig = styled.div`
    .gatsby-image-wrapper {
        border-radius: 30px;
        border-collapse: separate;
    }
`
