import { useEffect, useState } from "react"

export const Sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
}

export const Device = {
    mobileS: `(max-width: ${Sizes.mobileS})`,
    mobileM: `(max-width: ${Sizes.mobileM})`,
    mobileL: `(max-width: ${Sizes.mobileL})`,
    tablet: `(max-width: ${Sizes.tablet})`,
    laptop: `(max-width: ${Sizes.laptop})`,
    laptopL: `(max-width: ${Sizes.laptopL})`,
    desktop: `(max-width: ${Sizes.desktop})`,
    desktopL: `(max-width: ${Sizes.desktop})`,
}

export function useWindowSize() {
    const isClient = typeof window === "object"

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
            isVertical: isClient
                ? window.innerWidth < parseInt(Sizes.laptop)
                : false,
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        if (!isClient) {
            return false
        }

        function handleResize() {
            setWindowSize(getSize())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return windowSize
}
