import { useState } from "react";
import { NavLink } from "react-router";
import { HiEye, HiEyeOff } from "react-icons/hi";



export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        emailError: null,
        passwordError: null
    })

    const [show, setShow] = useState(false);

    const handleChange = (e) => {

        if (e.target.name == "email") {
            setFormData({ ...formData, email: e.target.value })
            setErrors({ ...errors, emailError: (e.target.value.length == 0) ? 'Email is Required' : (!e.target.value.includes('@')) ? 'Email must include @' : null })
        } else if (e.target.name == "password") {
            setFormData({ ...formData, password: e.target.value })
            setErrors({ ...errors, passwordError: (e.target.value.length == 0) ? 'Password is required' : (e.target.value.length < 8) ? 'Password must be at least 8 characters' : null })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Login
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Welcome back! Please sign in.
                </p>

                <form className="mt-6 space-y-5" onSubmit={(e) => { handleSubmit(e) }}>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your mail"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={formData.email}
                            onChange={(e) => { handleChange(e) }}
                        />
                        {errors.emailError && <p className="text-red-500">{errors.emailError}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={formData.password}
                                onChange={(e) => { handleChange(e) }}
                            />
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >{show ? <HiEyeOff size={20} /> : <HiEye size={20} />}</button>
                        </div>
                        {errors.passwordError && <p className="text-red-500">{errors.passwordError}</p>}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition disabled:bg-blue-200 disabled:cursor-default"
                        disabled={(errors.emailError || errors.passwordError || formData.email == '' || formData.password == '')}
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{" "}

                        <NavLink to="/signup">
                            <span className="text-red-600 font-medium hover:underline cursor-pointer">
                                Register
                            </span>
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>
    );
}
