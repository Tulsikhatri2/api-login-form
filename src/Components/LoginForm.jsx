import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {

    const {register, handleSubmit, formState:{errors}}= useForm()

    const onsubmit = (info) => console.log(info)
  return (
    <div className='row'>
        <div className='col-4'></div>
        <div className='col-4 text-center mt-5 pb-5'
        style={{
            boxShadow:"0px 0px 2vh black"
        }}>
            <h3 className='mt-3'>Login</h3>
            <form onSubmit={handleSubmit(onsubmit)} className='mt-5'>
                <input 
                {...register("email", {required:true})}
                placeholder='Enter Email'
                className='form-control mt-3'/>
                {errors.email && (<span style={{fontSize:"1.8vh", color:"red"}}>This field is required</span>)}
                <input
                {...register("password", {required:true})}
                placeholder='Enter Password'
                className='form-control mt-3'/>
                {errors.email && (<span style={{fontSize:"1.8vh", color:"red"}}>This field is required</span>)}
                <input type='submit'
                className='btn btn-success form-control mt-3'/>
            </form>
        </div>
        <div className='col-4'></div>
    </div>
  )
}

export default LoginForm