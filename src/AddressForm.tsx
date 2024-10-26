export function AddressForm(){
    return(
        <>
            <label>City</label>
            <input 
                autoFocus 
                required 
                type="text"
            />

            <label>District</label>
            <input 
                required 
                type="text"
            />

            <label>Zip Code</label>
            <input 
                required  
                type="number"
            />

            <label>State</label>
            <input 
                required 
                type="text"
            />
        </>
    )
    
}