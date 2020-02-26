import React from 'react'
import styled from 'styled-components'
import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { graphql, StaticQuery } from "gatsby"
import ReactPlayer from "react-player"
import Img from "gatsby-image"
import { Sizes, useWindowSize, Device } from "../../global/sizes"
import { Controller, Scene } from 'react-scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { useOnEnterLeaveTransition } from '../../../hooks/useOnEnterLeaveTransition'
import { useBackgroundColorChange } from '../../../hooks/useBackgroundColorChange'


export const Spa = () => {
    const handleAnimation = useOnEnterLeaveTransition(() => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".SpaFadeIn", 0.3, { opacity: 1, y: 0 }, 0.1));
        tl.add(TweenMax.to(".SpaFadeInNext", 0.3, { opacity: 1, y: 0 }, 0.8));
        tl.add(TweenMax.to(".SpaFadeInNext2", 0.3, { opacity: 1, y: 0 }, 0.8));
        tl.add(TweenMax.to(".SpaFadeInImg", 0.2, { webkitClipPath: 'inset(0% 0% 0% 0% )' }, 0.1));
        tl.add(TweenMax.to(".SpaFadeInImg2", 0.2, { webkitClipPath: 'inset(0% 0% 0% 0% )' }, 0.1));
        tl.play()
    }, () => {
        var tl = new TimelineMax({ delay: 0 });
        tl.add(TweenMax.to(".SpaFadeIn", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".SpaFadeInNext", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".SpaFadeInNext2", 0.3, { opacity: 0, y: 20 }));
        tl.add(TweenMax.to(".SpaFadeInImg", 0.1, { webkitClipPath: 'inset(0% 100% 0% 0% )' }));
        tl.add(TweenMax.to(".SpaFadeInImg2", 0.1, { webkitClipPath: 'inset(0% 0% 0% 100% )' }));
        tl.play()
    })
    const handleBackgroundColorChange = useBackgroundColorChange('#FFF', '#7FB0B5')

    return <StaticQuery
        query={graphql`
            query {
                first: file(relativePath: { eq: "ivatherm.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                second: file(relativePath: { eq: "water-img.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <Controller vertical key="spa-controller">
            <Scene duration={500} triggerHook="onEnter" offset={500}>
                {(progress, event) => {
                    handleBackgroundColorChange(event)
                    handleAnimation(event)
                    return <SpaHome>
                        <ContentHolder>
                            <Heading className="SpaFadeIn" level="2" color="light">Apele sacre <br />ale lui Hercules</Heading>
                            <Paragraph className="SpaFadeInNext" color="light" col="2" style={{ marginTop: 60, marginBottom: 60, maxWidth: 790 }}>
                                Herculane Thermal Water is rich in minerals and trace elements essential to calming and anti-free radicals action.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, egestas tincidunt malesuada nisl faucibus , facilisi nunc leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Paragraph>
                            <SpaDecoTxt className="SpaFadeInNext2">
                                <svg width="637" height="208" viewBox="0 0 637 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path d="M23.6816 27.0391H7.54395L3.88184 37H0.732422L14.1846 1.45312H17.041L30.4932 37H27.3682L23.6816 27.0391ZM8.47168 24.4756H22.7295L15.6006 5.11523L8.47168 24.4756Z" fill="white" fill-opacity="0.8" />
                                        <path d="M60.2422 37V1.45312H70.1787C73.0921 1.45312 75.7044 2.12044 78.0156 3.45508C80.3268 4.77344 82.1253 6.6696 83.4111 9.14355C84.7132 11.6175 85.3643 14.4333 85.3643 17.5908V20.8623C85.3643 24.0361 84.7214 26.8519 83.4355 29.3096C82.1497 31.7673 80.335 33.6634 77.9912 34.998C75.6637 36.3327 72.9863 37 69.959 37H60.2422ZM63.2451 4.0166V34.4609H69.9834C73.7269 34.4609 76.7298 33.224 78.9922 30.75C81.2546 28.2598 82.3857 24.8988 82.3857 20.667V17.542C82.3857 13.4567 81.2708 10.1852 79.041 7.72754C76.8112 5.26986 73.8734 4.03288 70.2275 4.0166H63.2451Z" fill="white" fill-opacity="0.8" />
                                        <path d="M173.354 27.0391H157.216L153.554 37H150.404L163.856 1.45312H166.713L180.165 37H177.04L173.354 27.0391ZM158.144 24.4756H172.401L165.272 5.11523L158.144 24.4756Z" fill="white" fill-opacity="0.8" />
                                        <path d="M235.793 21.1553C235.793 24.5407 235.191 27.4948 233.986 30.0176C232.798 32.5241 231.097 34.4202 228.884 35.7061L235.354 41.3457L233.278 43.2012L226.027 36.9268C224.693 37.3011 223.334 37.4883 221.95 37.4883C219.248 37.4883 216.84 36.821 214.724 35.4863C212.624 34.1517 210.996 32.2637 209.841 29.8223C208.685 27.3646 208.099 24.5326 208.083 21.3262V17.3467C208.083 14.1077 208.653 11.2432 209.792 8.75293C210.948 6.24642 212.575 4.32585 214.675 2.99121C216.774 1.6403 219.183 0.964844 221.901 0.964844C224.668 0.964844 227.102 1.63216 229.201 2.9668C231.301 4.30143 232.92 6.21387 234.06 8.7041C235.215 11.1943 235.793 14.0671 235.793 17.3223V21.1553ZM232.79 17.2979C232.79 13.0173 231.822 9.66439 229.885 7.23926C227.948 4.81413 225.287 3.60156 221.901 3.60156C218.614 3.60156 215.985 4.82227 214.016 7.26367C212.062 9.6888 211.086 13.0824 211.086 17.4443V21.1553C211.086 25.3708 212.054 28.7155 213.991 31.1895C215.944 33.6471 218.597 34.876 221.95 34.876C225.336 34.876 227.989 33.6634 229.909 31.2383C231.83 28.8132 232.79 25.4277 232.79 21.082V17.2979Z" fill="white" fill-opacity="0.8" />
                                        <path d="M292.446 1.45312V25.7207C292.43 28.1133 291.901 30.1966 290.859 31.9707C289.818 33.7448 288.345 35.112 286.44 36.0723C284.552 37.0163 282.38 37.4883 279.922 37.4883C276.178 37.4883 273.175 36.471 270.913 34.4365C268.667 32.3857 267.503 29.5537 267.422 25.9404V1.45312H270.4V25.501C270.4 28.4958 271.255 30.8232 272.964 32.4834C274.673 34.1273 276.992 34.9492 279.922 34.9492C282.852 34.9492 285.163 34.1191 286.855 32.459C288.564 30.7988 289.419 28.4876 289.419 25.5254V1.45312H292.446Z" fill="white" fill-opacity="0.8" />
                                        <path d="M343.973 27.0391H327.835L324.173 37H321.023L334.476 1.45312H337.332L350.784 37H347.659L343.973 27.0391ZM328.763 24.4756H343.021L335.892 5.11523L328.763 24.4756Z" fill="white" fill-opacity="0.8" />
                                        <path d="M400.65 28.2598C400.65 26.2904 399.959 24.736 398.575 23.5967C397.192 22.4411 394.661 21.3506 390.982 20.3252C387.304 19.2835 384.618 18.1523 382.926 16.9316C380.517 15.2064 379.312 12.944 379.312 10.1445C379.312 7.42643 380.427 5.22103 382.657 3.52832C384.903 1.81934 387.768 0.964844 391.251 0.964844C393.611 0.964844 395.719 1.42057 397.574 2.33203C399.446 3.24349 400.895 4.51302 401.92 6.14062C402.945 7.76823 403.458 9.58301 403.458 11.585H400.431C400.431 9.15983 399.601 7.21484 397.94 5.75C396.28 4.26888 394.05 3.52832 391.251 3.52832C388.533 3.52832 386.368 4.13867 384.757 5.35938C383.146 6.5638 382.34 8.14258 382.34 10.0957C382.34 11.9023 383.064 13.3753 384.513 14.5146C385.961 15.654 388.281 16.6631 391.471 17.542C394.661 18.4046 397.078 19.3079 398.722 20.252C400.366 21.1797 401.603 22.2946 402.433 23.5967C403.263 24.8988 403.678 26.4368 403.678 28.2109C403.678 31.0104 402.555 33.2565 400.309 34.9492C398.079 36.6419 395.133 37.4883 391.471 37.4883C388.964 37.4883 386.661 37.0407 384.562 36.1455C382.478 35.2503 380.891 33.9971 379.801 32.3857C378.727 30.7744 378.189 28.9271 378.189 26.8438H381.192C381.192 29.3503 382.128 31.3278 384 32.7764C385.872 34.2249 388.362 34.9492 391.471 34.9492C394.238 34.9492 396.459 34.3389 398.136 33.1182C399.812 31.8975 400.65 30.278 400.65 28.2598Z" fill="white" fill-opacity="0.8" />
                                        <path d="M214.126 122H211.099V104.959H190.786V122H187.783V86.4531H190.786V102.42H211.099V86.4531H214.126V122Z" fill="white" fill-opacity="0.8" />
                                        <path d="M267.312 104.959H250.687V119.461H269.803V122H247.684V86.4531H269.681V89.0166H250.687V102.42H267.312V104.959Z" fill="white" fill-opacity="0.8" />
                                        <path d="M313.932 107.205H303.604V122H300.577V86.4531H312.125C315.917 86.4531 318.88 87.3727 321.012 89.2119C323.144 91.0511 324.21 93.6227 324.21 96.9268C324.21 99.2054 323.543 101.215 322.208 102.957C320.873 104.699 319.083 105.903 316.837 106.57L325.724 121.683V122H322.525L313.932 107.205ZM303.604 104.642H312.809C315.331 104.642 317.358 103.925 318.888 102.493C320.418 101.061 321.183 99.2054 321.183 96.9268C321.183 94.4202 320.385 92.4753 318.79 91.0918C317.195 89.7083 314.957 89.0166 312.076 89.0166H303.604V104.642Z" fill="white" fill-opacity="0.8" />
                                        <path d="M382.06 110.916C381.653 114.66 380.31 117.524 378.031 119.51C375.769 121.495 372.75 122.488 368.974 122.488C366.337 122.488 364.001 121.829 361.967 120.511C359.949 119.192 358.386 117.329 357.279 114.92C356.173 112.495 355.611 109.728 355.595 106.619V102.005C355.595 98.8473 356.148 96.0479 357.255 93.6064C358.362 91.165 359.949 89.2852 362.016 87.9668C364.099 86.6322 366.492 85.9648 369.193 85.9648C373.002 85.9648 376.005 86.9984 378.202 89.0654C380.416 91.1162 381.701 93.9564 382.06 97.5859H379.032C378.284 91.5475 375.004 88.5283 369.193 88.5283C365.971 88.5283 363.399 89.7327 361.479 92.1416C359.574 94.5505 358.622 97.8789 358.622 102.127V106.473C358.622 110.574 359.55 113.846 361.405 116.287C363.277 118.729 365.8 119.949 368.974 119.949C372.115 119.949 374.483 119.201 376.078 117.703C377.673 116.189 378.658 113.927 379.032 110.916H382.06Z" fill="white" fill-opacity="0.8" />
                                        <path d="M424.577 117.605L424.772 118.362L424.992 117.605L436.174 86.4531H439.47L426.237 122H423.356L410.124 86.4531H413.396L424.577 117.605Z" fill="white" fill-opacity="0.8" />
                                        <path d="M472.246 119.461H489.8V122H469.219V86.4531H472.246V119.461Z" fill="white" fill-opacity="0.8" />
                                        <path d="M523.748 122H520.745V86.4531H523.748V122Z" fill="white" fill-opacity="0.8" />
                                        <path d="M354.533 198.26C354.533 196.29 353.841 194.736 352.458 193.597C351.075 192.441 348.544 191.351 344.865 190.325C341.187 189.284 338.501 188.152 336.809 186.932C334.4 185.206 333.195 182.944 333.195 180.145C333.195 177.426 334.31 175.221 336.54 173.528C338.786 171.819 341.651 170.965 345.134 170.965C347.494 170.965 349.602 171.421 351.457 172.332C353.329 173.243 354.777 174.513 355.803 176.141C356.828 177.768 357.341 179.583 357.341 181.585H354.313C354.313 179.16 353.483 177.215 351.823 175.75C350.163 174.269 347.933 173.528 345.134 173.528C342.416 173.528 340.251 174.139 338.64 175.359C337.028 176.564 336.223 178.143 336.223 180.096C336.223 181.902 336.947 183.375 338.396 184.515C339.844 185.654 342.163 186.663 345.354 187.542C348.544 188.405 350.961 189.308 352.604 190.252C354.248 191.18 355.485 192.295 356.315 193.597C357.146 194.899 357.561 196.437 357.561 198.211C357.561 201.01 356.438 203.257 354.191 204.949C351.962 206.642 349.016 207.488 345.354 207.488C342.847 207.488 340.544 207.041 338.444 206.146C336.361 205.25 334.774 203.997 333.684 202.386C332.609 200.774 332.072 198.927 332.072 196.844H335.075C335.075 199.35 336.011 201.328 337.883 202.776C339.755 204.225 342.245 204.949 345.354 204.949C348.12 204.949 350.342 204.339 352.019 203.118C353.695 201.897 354.533 200.278 354.533 198.26Z" fill="white" fill-opacity="0.8" />
                                        <path d="M407.744 197.039H391.606L387.944 207H384.795L398.247 171.453H401.104L414.556 207H411.431L407.744 197.039ZM392.534 194.476H406.792L399.663 175.115L392.534 194.476Z" fill="white" fill-opacity="0.8" />
                                        <path d="M469.183 195.916C468.776 199.66 467.433 202.524 465.154 204.51C462.892 206.495 459.873 207.488 456.097 207.488C453.46 207.488 451.124 206.829 449.09 205.511C447.072 204.192 445.509 202.329 444.402 199.92C443.296 197.495 442.734 194.728 442.718 191.619V187.005C442.718 183.847 443.271 181.048 444.378 178.606C445.485 176.165 447.072 174.285 449.139 172.967C451.222 171.632 453.615 170.965 456.316 170.965C460.125 170.965 463.128 171.998 465.325 174.065C467.539 176.116 468.825 178.956 469.183 182.586H466.155C465.407 176.548 462.127 173.528 456.316 173.528C453.094 173.528 450.522 174.733 448.602 177.142C446.697 179.55 445.745 182.879 445.745 187.127V191.473C445.745 195.574 446.673 198.846 448.528 201.287C450.4 203.729 452.923 204.949 456.097 204.949C459.238 204.949 461.606 204.201 463.201 202.703C464.796 201.189 465.781 198.927 466.155 195.916H469.183Z" fill="white" fill-opacity="0.8" />
                                        <path d="M514.264 192.205H503.937V207H500.909V171.453H512.457C516.249 171.453 519.212 172.373 521.344 174.212C523.476 176.051 524.542 178.623 524.542 181.927C524.542 184.205 523.875 186.215 522.54 187.957C521.205 189.699 519.415 190.903 517.169 191.57L526.056 206.683V207H522.857L514.264 192.205ZM503.937 189.642H513.141C515.663 189.642 517.69 188.925 519.22 187.493C520.75 186.061 521.515 184.205 521.515 181.927C521.515 179.42 520.717 177.475 519.122 176.092C517.527 174.708 515.289 174.017 512.408 174.017H503.937V189.642Z" fill="white" fill-opacity="0.8" />
                                        <path d="M576.41 197.039H560.272L556.61 207H553.461L566.913 171.453H569.77L583.222 207H580.097L576.41 197.039ZM561.2 194.476H575.458L568.329 175.115L561.2 194.476Z" fill="white" fill-opacity="0.8" />
                                        <path d="M633.088 198.26C633.088 196.29 632.396 194.736 631.013 193.597C629.629 192.441 627.098 191.351 623.42 190.325C619.742 189.284 617.056 188.152 615.363 186.932C612.954 185.206 611.75 182.944 611.75 180.145C611.75 177.426 612.865 175.221 615.095 173.528C617.341 171.819 620.205 170.965 623.688 170.965C626.049 170.965 628.156 171.421 630.012 172.332C631.883 173.243 633.332 174.513 634.357 176.141C635.383 177.768 635.896 179.583 635.896 181.585H632.868C632.868 179.16 632.038 177.215 630.378 175.75C628.718 174.269 626.488 173.528 623.688 173.528C620.97 173.528 618.806 174.139 617.194 175.359C615.583 176.564 614.777 178.143 614.777 180.096C614.777 181.902 615.502 183.375 616.95 184.515C618.399 185.654 620.718 186.663 623.908 187.542C627.098 188.405 629.515 189.308 631.159 190.252C632.803 191.18 634.04 192.295 634.87 193.597C635.7 194.899 636.115 196.437 636.115 198.211C636.115 201.01 634.992 203.257 632.746 204.949C630.516 206.642 627.57 207.488 623.908 207.488C621.402 207.488 619.099 207.041 616.999 206.146C614.916 205.25 613.329 203.997 612.238 202.386C611.164 200.774 610.627 198.927 610.627 196.844H613.63C613.63 199.35 614.566 201.328 616.438 202.776C618.309 204.225 620.799 204.949 623.908 204.949C626.675 204.949 628.897 204.339 630.573 203.118C632.25 201.897 633.088 200.278 633.088 198.26Z" fill="white" fill-opacity="0.8" />
                                    </g>
                                </svg>
                            </SpaDecoTxt>
                            <SpaVideos>
                                <SpaVideoLeft>
                                    <a href="https://www.youtube.com/watch?v=pGTZQJ97adg" target="_blank">
                                        <SpaVideo1 className="SpaFadeInImg"
                                            fluid={data.first.childImageSharp.fluid}
                                            alt="Ivatherm Baile Herculane"
                                        />
                                        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_b)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5 105C81.495 105 105 81.4949 105 52.5C105 23.5051 81.495 0 52.5 0C23.505 0 0 23.5051 0 52.5C0 81.4949 23.505 105 52.5 105ZM44 32V71.5L67 51L44 32Z" fill="white" fill-opacity="1" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_b" x="-4" y="-4" width="113" height="113" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </a>
                                </SpaVideoLeft>
                                <SpaVideosRight>
                                    <SpaVideo2 className="SpaFadeInImg2"
                                        fluid={data.second.childImageSharp.fluid}
                                        alt="Baile Heruculane - apa"
                                    />
                                    <Paragraph color="light" style={{ fontSize: 14 }}><em>Rucsandra Hurezeanu</em> - despre beneficiile apei de la Herculane</Paragraph>
                                </SpaVideosRight>
                            </SpaVideos>

                        </ContentHolder>
                    </SpaHome>
                }}</Scene>
        </Controller >
        } />
}

const SpaHome = styled.div`
    min-height: 100vh;
    width: 100vw;

    .SpaFadeIn, .SpaFadeInNext, .SpaFadeInNext2{
        opacity:0;
        transform: translateY(20px);
    }
    .SpaFadeInImg{
        clip-path: inset(0% 100% 0% 0% )
    }
    .SpaFadeInImg2{
        clip-path: inset(0% 0% 0% 100% )
    }
`

const ContentHolder = styled.div`
    padding-bottom: 60px;
    position: relative;
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    max-width:1114px;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    width:80%;
    padding:200px 10%;
    z-index: 1;
`
const SpaVideos = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: space-evenly;

    @media ${Device.tablet} {
        flex-direction: column;
        height:auto;
    }
`
const SpaVideosRight = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    width:30%;
    margin-left:30px;

    @media ${Device.tablet} {
        flex-direction: column-reverse;
        height:auto;
        width:100%;
        margin-left:0;
    }
`
const SpaVideoLeft = styled.div`
    z-index: 1;
    width: 70%;
    position:relative;
    @media ${Device.tablet} {
        width:100%;
    }
    svg{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        opacity:0.5;
        transition:all 0.3s ease-in;

    }
    
    &:hover{
        svg{
            opacity:1;
    }
}
`
const SpaVideo1 = styled(Img)`
    width:100%;
    transition: all 0.3s ease-in;
`
const SpaVideo2 = styled(Img)`
    z-index: 1;
    width: 100%;
    transition: all 0.3s ease-in;
    @media ${Device.tablet} {
        margin-top:60px;
    }
`
const SpaDecoTxt = styled.div`
    z-index: 1;
    position:absolute;
    right:10%;
    top:200px;
    @media ${Device.tablet} {
        right:30px;
        max-width:300px;
        width:50%;
        top:100px;
    }
`