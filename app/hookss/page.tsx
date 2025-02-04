'use client';

import { useState } from "react";


function Home() {
 
 const [counter, setCounter] = useState<number>(0);

 const incrementCounter = () =>  setCounter(counter + 1);

 
    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Click to increment</button>
        </div>
    );
}

export default Home;