'use client';

import { useEffect, useMemo, useRef, useState } from "react";

const calculateIncome = () => {
    let number = 10;
    for (let i = 0; i < 1000; i++) {
        number += 1;
    }
    console.log("calculating....")
    return number;
}

function Home() {

    const [counter, setCounter] = useState<number>(0);
    const [success, setSuccess] = useState<boolean>(false);
    const [shouldCalculate, setshouldCalculate] = useState<boolean>(false);
    const income = useMemo(() => calculateIncome(), [shouldCalculate],)

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
            setshouldCalculate(true);
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