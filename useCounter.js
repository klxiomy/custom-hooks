import { useState } from "react"


export const useCounter = (initialValue=10) =>{

    const [counter, setCounter] = useState(initialValue);

    const increment = (value=1) =>{
        setCounter((current)=> current+value)
    }

    const decrement = () =>{
        setCounter((current)=> current-1)
    }

    const reset = () =>{
        setCounter(initialValue)
    }


    return{
        counter,
        increment,
        decrement,
        reset
    }
}