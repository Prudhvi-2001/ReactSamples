import React, { useState } from 'react'
import SampleProp from './SampleProp'

function UsestateHook() {
  const [account,setAccount]=useState('signup')
  const [values,setValues]=useState({
    firstname:'prudhvi',
    email:'prudhvi@gmail.com',
  })
  const [loggedIn,setLoggesin]=useState(false)
  const [submitted,setSubmitted]=useState(false)
  const names =[{
    id:1,
    name:'prudhvi'
  },{
    id :2,
    name:'dileep'

  }]
  const handleSubmit=()=>{
    setValues({
      firstname:'dileep',
      email:'dileep@gmail.com'
    })
  }
  return (
    <div>
      {
        account==='login' ? <p> You are LoggedIn</p>:<p>You are not LoggedIn Please SignUp</p>
      }
      <button 
      onClick={()=>setAccount('login')}>Click</button><br/>
    {values.firstname} , {values.email}<br/>
    <button onClick={handleSubmit}>Change Details</button>
    {loggedIn || submitted ?<p>Logged In</p>:<p>Not Logged In</p>}
    {names.map(detail=><SampleProp {...detail}/>)}
    </div>
  )
}

export default UsestateHook
