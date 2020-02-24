import React from "react"
import { ProjectCard } from "./project-card"
import { StaticQuery, graphql } from "gatsby"

export function ProjectList({ data, pageRef }) {
    return (
        <StaticQuery
            query={graphql`
                query ListProjects {
                    allMdx(
                        sort: { fields: [frontmatter___order], order: ASC }
                    ) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    cover {
                                        childImageSharp {
                                            fixed(width: 780, height: 480) {
                                                ...GatsbyImageSharpFixed
                                                aspectRatio
                                            }
                                        }
                                    }
                                }
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { edges: projects } = data.allMdx
                return projects.map(p => {
                    const project = p.node
                    if (project)
                        return (
                            <ProjectCard
                                title={project.frontmatter.title}
                                path={project.fields.slug}
                                pageRef={pageRef}
                                cover={
                                    project.frontmatter.cover.childImageSharp
                                        .fixed
                                }
                            />
                        )
                })
            }}
        />
    )
}
