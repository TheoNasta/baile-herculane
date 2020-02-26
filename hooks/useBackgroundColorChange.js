import React, { useCallback, useRef } from "react"

export const useBackgroundColorChange = (before, after) => {
    const isInside = useRef(false)

    const handleBackgroundChange = useCallback((event) => {
        if (event.state == "DURING" && event.scrollDirection == "FORWARD" && isInside.current == false) {
            document.getElementsByTagName('body')[0].style.backgroundColor = after
            isInside.current = true
        } else if (event.state == "BEFORE" && event.scrollDirection == "REVERSE" && isInside.current == true) {
            document.getElementsByTagName('body')[0].style.backgroundColor = before
            isInside.current = false
        }
    }, [isInside.current])

    return handleBackgroundChange
}