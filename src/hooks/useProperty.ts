import { useRef } from "react";

/**
 * Custom hook to store and update mutable property, that should not re-render dom
 * @param {*} initial 
 * @returns 
 */
export default function useProperty<T>(initial : T) : [T, (newVal: T) => void] {
    const prop = useRef<T>(initial);
    const setPropValue = (newVal : T) => {
      prop.current = newVal;
    };
  
    return [prop.current, setPropValue];
}