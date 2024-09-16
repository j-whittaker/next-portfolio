"use client"

export default function mediaQuery(mediaCheck : string, updateState : React.Dispatch<React.SetStateAction<boolean>> ) : void {
    if(typeof window == "undefined") {
        console.log('undefined');
        return;
    }
    console.log('matched');

    const mediaQuery : MediaQueryList = window.matchMedia(mediaCheck);
    
    updateState(mediaQuery.matches)

    mediaQuery.addEventListener('change', () : void => {
        console.log('matches' + mediaQuery.matches + 'query' + mediaQuery)
        updateState(mediaQuery.matches);
    });
}