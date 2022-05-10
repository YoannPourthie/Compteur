import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState (0);

    const minus = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <>
         <button onClick={minus}>-</button>
         {count}
         <button onClick={() => setCount(count + 1)}>+</button>
         <br />
         <button onClick={reset}>Reset</button>
        </>
    )
}

export default Count;