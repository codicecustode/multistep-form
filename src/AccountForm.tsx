import { FormWrapper } from "./FormWrapper"
type AccountFormProps = {
    email: string,
    contact: string,
    username: string,
    password: string
}
export function AccountForm({email, contact, username, password}: AccountFormProps){
    return(
        <FormWrapper title="Account details">
            <label>Email</label>
            <input 
                autoFocus 
                required 
                type="text"
                value = {email}
            />

            <label>Contact No.</label>
            <input 
                required 
                type="number"
                value = {contact}
            />

            <label>Username</label>
            <input 
                required  
                type="text"
                value = {username}
            />

            <label>Password</label>
            <input 
                required 
                type="text"
                value = {password}
            />
        </FormWrapper>
    )
    
}