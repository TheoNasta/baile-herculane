import React, { useCallback, useRef } from "react"

export const useOnEnterLeaveTransition = (onEnter, onLeave) => {
    const isInside = useRef(false)

    const handleAnimation = useCallback((event) => {
        if (event.state == "DURING" && event.scrollDirection == "FORWARD" && isInside.current == false) {
            onEnter()
            isInside.current = true
        } else if (event.state == "BEFORE" && event.scrollDirection == "REVERSE" && isInside.current == true) {
            onLeave()
            isInside.current = false
        }
    }, [isInside.current])

    return handleAnimation
}