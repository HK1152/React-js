import { useEffect, useState } from 'react'
import React, { createContext } from 'react'
import { getLocalStorages,setLocalStorages} from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData, setUserData] = useState(null)

   useEffect(()=>{
    setLocalStorages()
     const {emp} =  getLocalStorages()
    setUserData(emp)
   
   },[])
    
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;
