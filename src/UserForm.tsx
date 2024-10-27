import { FormWrapper } from "./FormWrapper"
type UserData = {
    firstname: string,
    lastname: string,
    age: string
} 
type UserFormProps = UserData & {
    updatefields: (fields: Partial<UserData>) => void
}
export function UserForm({firstname, lastname, age, updatefields}: UserFormProps){
    return(
        <FormWrapper title="User Details">
            <label>First Name</label>
            <input 
                autoFocus 
                required 
                type="text"
                value={firstname}
                onChange={(e) => updatefields({ firstname: e.target.value })}
            />

            <label>Last Name</label>
            <input 
                required 
                value={lastname}
                onChange={(e) => updatefields({ lastname: e.target.value })}
            />

            <label>Age</label>
            <input 
                required 
                value={age}
                onChange={(e) => updatefields({ age: e.target.value })}
                type="number"
            />
        </FormWrapper>
    )
}