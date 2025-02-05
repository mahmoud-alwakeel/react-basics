'use client';

import { useEffect, useRef, useState } from "react";


function Home() {

    const [counter, setCounter] = useState<number>(0);
    const [success, setSuccess] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    const handleInputChange = (e) => {
        console.log(e.target.value);

    }
    const incrementCounter = () => {
        setCounter(counter + 1);
        if (counter === 10) {
            setSuccess(true);
        }
    }

    useEffect(() => {
        console.log('success')
    }, [success])

    useEffect(() => {
        console.log('counter')
    }, [counter])


    return (
        <>
            <div>
                <p>Counter: {counter}</p>
                <button onClick={incrementCounter}>Click to increment</button>
            </div>
            <div>

            </div>
            <div>
                <input ref={inputRef} onChange={handleInputChange} type="text" />
                <button onClick={handleClick}>Click to Focus</button>
            </div>
        </>


    );
}

export default Home;