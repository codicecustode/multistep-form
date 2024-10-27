import { FormWrapper } from "./FormWrapper"
type AccountData = {
    email: string,
    contact: string,
    username: string,
    password: string
}
type AccountFormProps = AccountData & {
    updatefields: (fields: Partial<AccountData>) => void
}
export function AccountForm({email, contact, username, password, updatefields}: AccountFormProps){
    return(
        <FormWrapper title="Account details">
            <label>Email</label>
            <input 
                autoFocus 
                required 
                type="text"
                value = {email}
                onChange = {(e) => updatefields({ email: e.target.value})}
            />

            <label>Contact No.</label>
            <input 
                required 
                type="number"
                value = {contact}
                onChange = {(e) => updatefields({ contact: e.target.value})}
            />

            <label>Username</label>
            <input 
                required  
                type="text"
                value = {username}
                onChange = {(e) => updatefields({ username: e.target.value})}
            />

            <label>Password</label>
            <input 
                required 
                type="text"
                value = {password}
                onChange = {(e) => updatefields({ password: e.target.value})}
            />
        </FormWrapper>
    )
    
}