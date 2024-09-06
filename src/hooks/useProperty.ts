import { useRef } from "react";

/**
 * Custom hook to store and update mutable property, that should not re-render dom
 * @param {*} initial 
 * @returns 
 */
export default function useProperty(initial : any = null) {
    const prop = useRef<typeof initial>(initial);
    const setPropValue = (newVal : typeof prop.current) => {
      prop.current = newVal;
    };
  
    return [prop.current, setPropValue];
}