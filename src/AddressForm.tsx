import { FormWrapper } from "./FormWrapper"
type AddressData = {
    city: string,
    district: string,
    zipcode: string,
    state: string
}
type AddressFromProps = AddressData & {
    updatefields: (fields: Partial<AddressData>) => void
}
export function AddressForm({city, district, zipcode, state, updatefields}: AddressFromProps){
    return(
        <FormWrapper title="Address Details">
            <label>City</label>
            <input 
                autoFocus 
                required 
                type="text"
                value = {city}
                onChange = {(e) => updatefields({ city: e.target.value })}
            />

            <label>District</label>
            <input 
                required 
                type="text"
                value = {district}
                onChange = {(e) => updatefields({ district: e.target.value })}
            />

            <label>Zip Code</label>
            <input 
                required  
                type="number"
                value = {zipcode}
                onChange = {(e) => updatefields({ zipcode: e.target.value })}
            />

            <label>State</label>
            <input 
                required 
                type="text"
                value = {state}
                onChange = {(e) => updatefields({ state: e.target.value })}
            />
        </FormWrapper>
    )
    
}