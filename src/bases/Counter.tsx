import { useState } from "react"

export const Counter = ( { initialValue = 0 }) => {
    const [counter, setCounter] = useState( initialValue );

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>Counter: { counter }</h1>

            <button className="btn-success" onClick={ handleClick }>Aumentar</button>
        </>
    )
}
