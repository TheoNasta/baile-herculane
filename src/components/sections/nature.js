import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Sizes, useWindowSize, Device } from "../../global/sizes"

export const Nature = () => {
    return <StaticQuery
        query={graphql`
            query {
                first: file(relativePath: { eq: "pin.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                second: file(relativePath: { eq: "hercule.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                third: file(relativePath: { eq: "mountains-bg.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <NatureHome>
            <ContentHolder>
                <ContentLeft>
                    <Heading level="2">Păsește pe urmele Impărătesei Sissi și al Impăratului Franz Joseph</Heading>
                    <NaturePhoto1
                        fluid={data.first.childImageSharp.fluid}
                        alt="Gatsby Docs are awesome"
                    />
                </ContentLeft>
                <ContentRight>
                    <Paragraph style={{}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est viverra urna nunc. Etiam eu, tristique enim quis egestas.
                        <br /><br /><br />
                        <b>Aer ionizat</b>
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est viverra urna nunc. Etiam eu, tristique enim quis egestas.
                        <br /><br /><br />
                        <b>Pinul negru de banat</b>
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est viverra urna nunc. Etiam eu, tristique enim quis egestas.
                    </Paragraph>
                    <NaturePhoto2
                        fluid={data.second.childImageSharp.fluid}
                        alt="Gatsby Docs are awesome"
                    />
                </ContentRight>
                <BackPhoto
                    fluid={data.third.childImageSharp.fluid}
                    alt="Gatsby Docs are awesome"
                />
            </ContentHolder>
        </NatureHome>
        } />
}

const NatureHome = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: white;
`

const ContentHolder = styled.div`
    padding-bottom: 60px;
    position: relative;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    max-width:1114px;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    width:80%;
    padding:200px 10%;
    z-index: 1;

    @media ${Device.tablet} {
        flex-direction: column;
        height:auto;
    }
`
const NaturePhoto1 = styled(Img)`
    z-index: 1;
    width: 100%;
    margin-top:60px;
`
const NaturePhoto2 = styled(Img)`
    z-index: 1;
    width: 100%;
    align-self:flex-end;
`
const ContentLeft = styled.div`
    z-index: 1;
    width: 47%;
    @media ${Device.tablet} {
        width:100%;
        margin-bottom:60px;
    }
`
const ContentRight = styled.div`
    z-index: 1;
    width: 47%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;

    @media ${Device.tablet} {
        width:100%;
    }
`
const BackPhoto = styled(Img)`
    z-index: -1;
    position:absolute !important;
    max-width:900px;
    width:70%;
    left:30px;
    bottom:30%;
    height:auto;

    @media ${Device.tablet} {
        bottom:0;
    }
`