'use client';

import { useEffect, useState } from "react";


function Home() {
 
 const [counter, setCounter] = useState<number>(0);
 const [success, setSuccess] = useState<boolean>(false);

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

 
    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Click to increment</button>
        </div>
    );
}

export default Home;