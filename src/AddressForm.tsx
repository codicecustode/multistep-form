import { FormWrapper } from "./FormWrapper"
type AddressFromProps = {
    city: string,
    district: string,
    zipcode: string,
    state: string
}
export function AddressForm({city, district, zipcode, state}: AddressFromProps){
    return(
        <FormWrapper title="Address Details">
            <label>City</label>
            <input 
                autoFocus 
                required 
                type="text"
                value = {city}
            />

            <label>District</label>
            <input 
                required 
                type="text"
                value = {district}
            />

            <label>Zip Code</label>
            <input 
                required  
                type="number"
                value = {zipcode}
            />

            <label>State</label>
            <input 
                required 
                type="text"
                value = {state}
            />
        </FormWrapper>
    )
    
}