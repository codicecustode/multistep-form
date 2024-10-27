import { FormEvent, useState } from "react"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
import { AddressForm } from "./AddressForm"
import { AccountForm } from "./AccountForm"
type FormData = {
  firstname: string,
  lastname: string,
  age: string,
  city: string,
  district: string,
  zipcode: string,
  state: string,
  email: string,
  contact: string,
  username: string,
  password: string,
  Email: string
}

const INITIAL_DATA: FormData = {
  firstname: "",
  lastname: "",
  age: "",
  city: "",
  district: "",
  zipcode: "",
  state: "",
  email: "",
  contact: "",
  username: "",
  password: "",
  Email: ""
}
function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updatefields(fields : Partial<FormData>){
    setData((prev) =>{
      return {
        ...prev,
        ...data
      }
    })
  }

  const { 
    currentFormIndex,
    isFirstStep,
    isLastStep,
    steps, 
    back,
    next 
  } = useMultistepForm([
        <UserForm {...data} updatefields={updatefields}/>,
        <AddressForm {...data} updatefields={updatefields}/>,
        <AccountForm {...data} updatefields={updatefields}/>
      ])

  function handleSubmit(e: FormEvent){
    e.preventDefault()
    next()
  }
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
      <form onSubmit = {handleSubmit}>
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
          <button type="submit">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>

      </form>

    </div>
  )
  
}

export default App
