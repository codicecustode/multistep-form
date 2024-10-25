import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {

    const[currentFromIndex, setCurrentFromIndex] = useState(0)
  
    function next(){
        setCurrentFromIndex(i => {
            if(i >= steps.length - 1){
                return i
            }
            return i + 1
        })
    }

    function back(){
        setCurrentFromIndex(i => {
            if(i <= 0){
                return i
            }
            return (i - 1)
        })
    }

    function goto(idx: number){
        setCurrentFromIndex(idx)
    }

  return {
    step: steps[currentFromIndex],
    steps,
    next,
    back,
    goto
  };
}