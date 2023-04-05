import React, { useContext } from 'react'
import { contextExp } from '../App'
function ComponentB() {
    const user=useContext(contextExp)
  return (
    <div>
        {user}
      
    </div>
  )
}

export default ComponentB
