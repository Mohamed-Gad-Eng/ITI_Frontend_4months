import { useState } from "react"
import { login } from "../../services/auth.api"
import { toast, Toaster } from "sonner"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { changeAuth } from "../../store/slices/auth"


export default function Login() {
 const navigate= useNavigate()
 const dispatch=useDispatch()
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    usernameError: null,
    passwordError: null
  })


  const handleChange = (evt) => {
    //  console.log(evt.target);

    if (evt.target.name == "name") {
      setUser({ ...user, username: evt.target.value })//{password:'',email:'mona'}
      setErrors({ ...errors, usernameError: (evt.target.value.length == 0) ? 'User name is Required' : (evt.target.value.length < 3) ? 'user name must be at lease 3 characters' : null })
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value })
      setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? 'Password is required' : (evt.target.value.length < 6) ? 'Password must be at least 6 characters' : null })
    }

  }


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const res = await login(user)
      localStorage.setItem('token', res.data.accessToken)
       dispatch(changeAuth(true))
      navigate('/')
    } catch (err) {
     toast.error('Invalid user name or password')
    }



  }

  return (
    <>
    <Toaster position="top-center" richColors/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto mt-5'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input type="text" className={`form-control ${(errors.usernameError) ? 'border-danger' : ''}`} id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="Enter User name"
                  name="name"
                  value={user.username}
                  onChange={(e) => { handleChange(e) }}
                />
                {errors.usernameError && <small id="emailHelp" className="form-text  text-danger">{errors.usernameError}</small>}
              </div>
              <div className="form-group my-3">
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
