import { FormWrapper } from "./FormWrapper"
export function AccountForm(){
    return(
        <FormWrapper title="Account details">
            <label>Email</label>
            <input 
                autoFocus 
                required 
                type="text"
            />

            <label>Contact No.</label>
            <input 
                required 
                type="number"
            />

            <label>Username</label>
            <input 
                required  
                type="text"
            />

            <label>Password</label>
            <input 
                required 
                type="text"
            />
        </FormWrapper>
    )
    
}