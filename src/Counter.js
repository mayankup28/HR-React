import React, { useState } from 'react'

function Counter() {
    const[count,setcount]=useState(0)
    
    return (
    <>
    <h1>Count is {count}</h1>
    <button onClick={()=>setcount(pre=>pre+1)}>Increament</button>
    <button disabled={count===0} onClick={()=>setcount(pre=>pre-1)}>Decrement</button>
    </>
    )
}

export default Counter