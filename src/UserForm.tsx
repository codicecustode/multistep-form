import { FormWrapper } from "./FormWrapper"
type UserFormProps = {
    firstname: string,
    lastname: string,
    age: string
}
export function UserForm({firstname, lastname, age}: UserFormProps){
    return(
        <FormWrapper title="User Details">
            <label>First Name</label>
            <input 
                autoFocus 
                required 
                type="text"
                value = {firstname}
            />

            <label>Last Name</label>
            <input 
                required 
                type="text"
                value = {lastname}
            />

            <label>Age</label>
            <input 
                required 
                min={1} 
                type="number"
                value = {age}
            />
        </FormWrapper>
    )
}