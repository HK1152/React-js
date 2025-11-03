import React, { useState } from 'react'
import { setLocalStorages } from '../../Utils/LocalStorage'

function Header(props) {
  // const [userName, setUserName] = useState('New user');


  // React.useEffect(() => {
  //   if (props.data && props.data.firstName) {
  //     setUserName(props.data.firstName);
  //   }
  // }, [props.data]);

  const logOut = () => {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  
  return (
    <div className='flex  justify-between  py-2 items-center '>
        <span className='text-2xl flex-col flex'><p><i>hello,</i></p><p><b className='text-4xl'>user Name ✌️</b></p></span>
        <button onClick={logOut} className='bg-red-700 px-5 py-1 rounded-2xl text-white hover:bg-red-800'>Log Out</button>
    </div>
  )
}

export default Header