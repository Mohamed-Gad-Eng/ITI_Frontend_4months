import React, { useRef, useState } from 'react'

export default function LoginV2() {

    const emailRef = useRef(null);
    const [errors, setErrors] = useState({
        emailError: null,
        passwordError: null
    })
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const emailVal = emailRef.current.value
        if (emailVal.length == 0) {
            setErrors({ ...errors, emailError: 'Email is requires' })
        } else if (!emailVal.includes('@')) {
            setErrors({ ...errors, emailError: 'Email must includes @' })

        } else {
            setErrors({ ...errors, emailError: null })

        }


        if(!errors.emailError&&!errors.passwordError){
            //api calll
        }
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto mt-5'>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className={`form-control `} id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email"
                                name="email"
                                ref={emailRef}
                            />
                            {errors.emailError && <small id="emailHelp" className="form-text  text-danger">{errors.emailError}</small>}

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={`form-control `} id="exampleInputPassword1"
                                placeholder="Password" name="password"
                            />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
