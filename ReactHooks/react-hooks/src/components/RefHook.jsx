import React, { createRef, useEffect, useState } from 'react'

function RefHook() {
    const refVar=createRef();
    const [values,setValues]=useState({

        username:'',
        email:'',
        password:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values.username)
        console.log(values.email)
        console.log(values.password)

    }
    useEffect(()=>{
        refVar.current.focus()
    })
  return (
    <div>
      <input ref={refVar} type='text' name='username' value={values.username} onChange={(e)=>setValues({...values,username:e.target.value})}/>
      <input ref={refVar} type='email' name='email' value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})}/>
      <input ref={refVar} type='password' name='password' value={values.password} onChange={(e)=>setValues({...values,password:e.target.value})}/>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default RefHook
