import { useMultistepForm } from "./useMultistepForm"
function App() {
  const { currentFormIndex,
          isFirstStep,
          isLastStep,
          steps, 
          back,
          next } = useMultistepForm([<h1>hello one</h1>,<p>two</p>])
  return (
    <div style={{
      position: "relative",
      background: "while",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Arial"
    }}>
      <form>
        <div style={{
          position: "absolute",
          top: ".5rem",
          right: ".5rem",
        }}>
        {currentFormIndex+1} / {steps.length}  
        </div>

        <div>
          {steps[currentFormIndex]}
        </div>

        <div style={{
          
          marginTop:"3rem",
          display: "flex",
          gap: "1rem",
          justifyContent:"flex-end"

        }}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="button" onClick={next}>
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>

      </form>

    </div>
  )
  
}

export default App
