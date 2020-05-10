import React, { useCallback, useRef, useEffect } from "react"
import { TweenMax, Power3 } from "gsap"
import { useOnEnterLeaveTransition } from "./useOnEnterLeaveTransition"
import { useIsMobile } from "./useIsMobile"

export const usePowerCover = (className, direction) => {
    const trans = {
        enter: {},
        leave: {}
    }

    if (direction == "left") {
        trans.leave = {
            x: 100,
            opacity: 0,
            scaleX: 0,
            transformOrigin: "right center"
        }
    }

    if (direction == "right") {
        trans.leave = {
            x: -100,
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center"
        }
    }

    if (direction == "up") {
        trans.leave = {
            y: 100,
            opacity: 0,
            scaleY: 0,
            transformOrigin: "center bottom"
        }
    }

    useEffect(() => {
        setTimeout(() => {
            TweenMax.set(`.${className}Holder`, {
                ...trans.leave
            })
        }, 500)
    }, [])

    trans.enter = {
        x: 0,
        y: 0,
        opacity: 1,
        scaleX: 1,
        scaleY: 1
    }

    const f = {
        enter: () => {
            console.log(className)
            const e = document.getElementsByClassName(className)[0]
            TweenMax.to(`.${className}Holder`, 1.2, {
                delay: 0,
                onUpdate: inverseScale,
                onUpdateParams: ["{self}", e, direction],
                roundProps: "x, y",
                ease: Power3.easeOut,
                ...trans.enter
            })
        },
        leave: () => {
            console.log(className)
            const e = document.getElementsByClassName(className)[0]
            TweenMax.to(`.${className}Holder`, 1.2, {
                delay: 0.2,
                onUpdate: inverseScale,
                onUpdateParams: ["{self}", e, direction],
                roundProps: "x, y",
                ease: Power3.easeIn,
                ...trans.leave
            })
        }
    }

    return useOnEnterLeaveTransition(f.enter, f.leave)
}


const inverseScale = (tween, e, direction) => {
    if (direction == "left" || "right") {
        const scale = tween.target[0]._gsTransform.scaleX
        e.style.transform = "scaleX(" + (1 / scale) + ")"
    }
    if (direction == "up" || direction == "down") {
        const scale = tween.target[0]._gsTransform.scaleY
        e.style.transform = "scaleY(" + (1 / scale) + ")"
    }
}