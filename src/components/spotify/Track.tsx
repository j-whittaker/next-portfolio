"use client"

import { RefObject, useCallback, useRef } from "react";
import openUrlNewWindow from "@/utils/tools/openUrlNewWindow";


const SongDataCol : React.FC<{ content : string, hover: Function | null, additionalClasses?: string}>  = ({ content, hover, additionalClasses = ''}) => {
    const hoverRef : RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null);
    
    if(hover) {
        return (
            <>
            <span onMouseEnter={() => hover(hoverRef, true)} onMouseLeave={() => hover(hoverRef, false)} className={`whitespace-nowrap py-2 grow-0 overflow-hidden ${additionalClasses}`}>
                <span ref={hoverRef} className="hidden absolute bg-offwhite hover:!block text-secondary rounded px-2">{content}</span>
                {content}
            </span>
         </>);
    }

    return (
        <>
        <span className={`whitespace-nowrap grow-0 overflow-hidden py-2 ${additionalClasses}`}>
            <span ref={hoverRef} className="hidden absolute bg-offwhite hover:!block text-secondary rounded px-2 ">{content}</span>
            {content}
        </span>
     </>);
   
}

const Track : React.FC<{name: string, artists: string[], album: string, url: string, additionalClasses?: string, disableHover?: boolean }> = ({name, artists, album, url, additionalClasses = '', disableHover = false}) => {
   
    const hoverState = useCallback((ref : RefObject<HTMLSpanElement>, hover: boolean)=> {
        if(ref.current) {
            if(hover) {
                ref.current.classList.remove('hidden');
            } else {
                ref.current.classList.add('hidden');
            }
        }
    }, []);

    const artistString = artists.join(',');
    return <div onClick={() => {openUrlNewWindow(url);}} className={`relative track text-xs text-white max-w-full w-full flex max-h-8 gap-3 !px-2 !py-0 hover:cursor-pointer hover:bg-secondary border-b-2 border-b-secondary last:border-b-0 ${additionalClasses}`}>
        <SongDataCol hover={disableHover ? null : hoverState} content={name} additionalClasses="basis-1/2"/>
        <SongDataCol hover={disableHover ? null : hoverState} content={artistString} additionalClasses="basis-1/4"/>
        <SongDataCol hover={disableHover ? null : hoverState} content={album} additionalClasses="basis-1/4"/>
    </div>
}

export default Track;