import React, { createContext,useState } from 'react'

export const Rapid=createContext()
const Context = ({children}) => {
 
   const[cart,setCart]=useState([]) 
  return (
    <div>
      <Rapid.Provider value={{cart,setCart}}>
         {children}
      </Rapid.Provider>
    </div>
  )
}

export default Context
