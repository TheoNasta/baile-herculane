import React from "react"
import { ProjectItem } from "./project-item"
import { useWindowSize } from "../global/sizes"

export const ProjectSection = ({ children, container, style }) => {
    const { isVertical } = useWindowSize()
    return (
        <ProjectItem
            container={container}
            style={{ width: isVertical ? "90vw" : "410px", ...style }}
        >
            {children}
        </ProjectItem>
    )
}
