import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {

    const[currentFormIndex, setCurrentFormIndex] = useState(0)
  
    function next(){
        setCurrentFormIndex(i => {
            if(i >= steps.length - 1){
                return i
            }
            return i + 1
        })
    }

    function back(){
        setCurrentFormIndex(i => {
            if(i <= 0){
                return i
            }
            return (i - 1)
        })
    }

    function goto(idx: number){
        setCurrentFormIndex(idx)
    }

  return {
    step: steps[currentFormIndex],
    steps,
    currentFormIndex,
    isFirstStep: currentFormIndex === 0,
    isLastStep: currentFormIndex === steps.length - 1,
    next,
    back,
    goto
  };
}