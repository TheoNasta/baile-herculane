import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Scroller = () => {
    return <ScrollIcon>
        <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="arrow" fill-rule="evenodd" clip-rule="evenodd" d="M11.6858 23.68L15.3253 19.1718L16.1034 19.7999L11.5364 25.4571L11.1594 25.9241L10.7682 25.4689L5.90656 19.8117L6.66497 19.16L10.6858 23.8387V11.9429H11.6858V23.68Z" fill="white" />
            <rect x="0.5" y="0.5" width="21" height="34.8286" rx="10.5" stroke="white" />
        </svg>

    </ScrollIcon>
}

const ArrowMove = keyframes`
0% {
  transform: translateY(0);
  opacity: 1;
}
100% {
    transform: translateY(10px);
    opacity: 0;
}
`
const ScrollIcon = styled.div`
    width:22px;
    height:35px;
    padding-bottom: 60px;
    margin-top:30px;
    .arrow{
        animation: ${ArrowMove} infinite 1s ease-in-out ;
	}
`