import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import logo from '../assets/Asset 62.png'
import bgImg from '../assets/Asset 3@150x.webp'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const [error,setError]=useState(false)
  const navigate  = useNavigate()
  const handleForm = (e) =>{
e.preventDefault()
if (e.target[0].value === 'Tubamap' & e.target[1].value === 'Tuba@2024' ){
  navigate('/home')
  setError(false)
}else{
  setError(true)
}
  }
  return (
    <div className='vh-100 vw-100 d-flex justify-content-center align-items-center LoginParent' style={{backgroundImage:`url(${bgImg})`}}>
<div className=" py-4  rounded-4  d-flex flex-column loginGlass justify-content-center align-items-center ">
<img src={logo} alt="logo" className='logoLogin' />
<Form className='  w-100 d-flex flex-column  justify-content-center align-items-center' onSubmit={handleForm}>
<Form.Group className="mb-3 w-75" controlId="formBasicEmail">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter userName" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
        <Form.Label className='text-white'>password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      {
        error&&      <span className='text-danger my-2'>Please enter valid UserName or password</span>

      }
      <button className="button">
        Login
  <span className="button-span"></span>
</button>

</Form>
</div>
    </div>
  )
}
