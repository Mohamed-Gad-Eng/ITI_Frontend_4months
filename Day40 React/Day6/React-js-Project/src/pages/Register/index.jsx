import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

    const { handleSubmit, register, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className={`form-control `} id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z]{3,6}(@)(gmail|outlook)(.com)$/
                                })}
                            />
                            {(errors.email?.type == 'required') ?
                                <p className='text-danger'>Email is Required</p> : (errors.email?.type == 'pattern') ?
                                    <p className='text-danger'>Email should match the email pattern</p> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={`form-control `} id="exampleInputPassword1"
                                placeholder="Password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6
                                })}
                            />

                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
