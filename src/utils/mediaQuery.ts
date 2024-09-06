"use client"

export default function mediaQuery(mediaCheck : string, updateState : React.Dispatch<React.SetStateAction<any>> ) : void {
    if(typeof window == "undefined") {
        return;
    }
    
    const mediaQuery : MediaQueryList = window.matchMedia(mediaCheck);
    
    updateState(mediaQuery.matches)

    mediaQuery.addEventListener('change', () : void => {
        updateState(mediaQuery.matches);
    });
}