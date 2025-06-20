import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// Custom hook to demonstrate useEffect
const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("From useEffect");
    return () => {
      console.log("unmounted");
    }
},[count])
  return (
    <div>
      
    </div>
  )
}

export default Effect
