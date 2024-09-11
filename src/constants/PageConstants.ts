/**
 * Adding to page list, will add to the top nav see components/Toolbar.tsx
 */

interface PageList {
    [key : string]: string
}

export const PAGE_LIST : PageList = {
    HOME_PAGE: "about me",
    EXPERIENCE_PAGE: 'experience',
    TESTIMONIALS_PAGE: 'testimonials'
}

export const PATH_TO_PAGE_MAP : PageList = {
    "/home": PAGE_LIST.HOME_PAGE,
    "/experience": PAGE_LIST.EXPERIENCE_PAGE,
    "/testimonials": PAGE_LIST.TESTIMONIALS_PAGE
}

export const PAGE_TO_PATH_MAP : PageList = reverseMap(PATH_TO_PAGE_MAP);

export type DefaultPage =
  | typeof PAGE_LIST[keyof typeof PAGE_LIST];


export const validPages : DefaultPage[] = Object.values(PAGE_LIST);


/**
 * Reverse list for two way maps
 * @param list 
 * @returns 
 */
function reverseMap(list: PageList) : PageList { 
    const newList : PageList = {}; 
    for(const key in list){ 
      newList[list[key]] = key; 
    } 
    return newList; 
  } 