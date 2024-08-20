import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const SignupForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        axios.post("https://665b-103-9-14-232.ngrok-free.app/api/v1/signup",
            {
                signupname:data.name,
                signupemail:data.email,
                signuppassword:data.password,
                signuppassword_confirmation:data.passwordConfirmation
            }
        )
        .then((response)=>console.log(response,"response"))
        .catch((error)=>console.log(error,"error"))
      };

  return (
   <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 mt-5 text-center pb-5"
        style={{
            boxShadow:"0px 0px 2vh black"
        }}>
            <h3 className='mt-4'>Signup</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <input
              {...register("name", { required: true })}
              className="form-control mt-2"
              placeholder="Enter Name"
            />
            {errors.name && (
              <span className="text-danger" style={{ fontSize: "1.8vh" }}>
                This field is required
              </span>
            )}
            <input
              {...register("email", { required: true })}
              className="form-control mt-3"
              placeholder="Enter Email"
            />
            {errors.email && (
              <span className="text-danger" style={{ fontSize: "1.8vh" }}>
                This field is required
              </span>
            )}
            <input
              {...register("password", { required: true })}
              className="form-control mt-3"
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-danger" style={{ fontSize: "1.8vh" }}>
                This field is required
              </span>
            )}
            <input
              {...register("passwordCofirmation", { required: true })}
              className="form-control mt-3"
              placeholder="Confirm Password"
            />
            {errors.passwordCofirmation && (
              <span className="text-danger" style={{ fontSize: "1.8vh" }}>
                This field is required
              </span>
            )}
            <input
              type="submit"
              className="btn btn-success form-control mt-3"
            />
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  )
}

export default SignupForm