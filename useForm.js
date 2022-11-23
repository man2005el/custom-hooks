import { useState, useEffect } from "react";



export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
        
    }

    const onReset = () => {
        setFormState(initialForm);
        
    }

    //useEffect(() => {console.log('UE Called')}, [])
    //useEffect(() => {console.log('FS Called')}, [formState])
//useEffect(() => {console.log('EM Called')}, [email]) 
    
    return{
        ...formState,formState, onInputChange, onReset
    } 
    
}
