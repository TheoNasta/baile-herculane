import React, { useEffect, useState } from "react"

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const onResize = (e) => {
            setIsMobile(isMobile => {
                if (e.currentTarget.innerWidth > 700 && isMobile == true)
                    return false
                if (e.currentTarget.innerWidth <= 700 && isMobile == false)
                    return true
                return isMobile
            })
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])

    return isMobile
}