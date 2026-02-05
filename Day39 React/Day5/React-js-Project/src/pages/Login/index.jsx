import { useState } from "react"


export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    emailError: null,
    passwordError: null
  })


  const handleChange = (evt) => {
    //  console.log(evt.target);

    if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value })//{password:'',email:'mona'}
      setErrors({ ...errors, emailError: (evt.target.value.length == 0) ? 'Email is Required' : (!evt.target.value.includes('@')) ? 'Email must include @' : null })
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value })
      setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? 'Password is required' : (evt.target.value.length < 6) ? 'Password must be at least 6 characters' : null })
    }

  }


  const handleSubmit = (evt) => {
    evt.preventDefault()

    console.log(user);
    //api call


  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto mt-5'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className={`form-control ${(errors.emailError) ? 'border-danger' : ''}`} id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={(e) => { handleChange(e) }}
                />
                {errors.emailError && <small id="emailHelp" className="form-text  text-danger">{errors.emailError}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className={`form-control ${(errors.passwordError) ? 'border-danger shadow-none' : ''}`} id="exampleInputPassword1"
                  placeholder="Password" name="password" value={user.password}
                  onChange={(e) => { handleChange(e) }}
                />
                {errors.passwordError && <small id="emailHelp" className="form-text  text-danger">{errors.passwordError}</small>}

              </div>
              <button type="submit" disabled={(errors.emailError || errors.passwordError || user.email == '' || user.password == '')} className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
