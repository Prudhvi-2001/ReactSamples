import React, { createRef, useEffect, useState } from 'react'

function RefHook() {
    const refVar=createRef();
    const [values,setValues]=useState({

        username:'',
        email:'',
        password:''
    })
    const handleSubmit=(e)=>{
        const user=values.username
        const mail=values.email
        const pass=values.password
        e.preventDefault()
        fetch('http://localhost:5000/register',{
            method:'POST',
            crossDomain:true,
            header:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Acess-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                user,
                mail,
                pass,

            })

            
        }) 
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))

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
