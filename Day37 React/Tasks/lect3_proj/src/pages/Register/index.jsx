import { NavLink } from "react-router";
import { useForm } from 'react-hook-form'



export default function Signup() {

    const { handleSubmit, register, watch, formState: { errors, isValid } } = useForm({mode: "onChange"})
    const password = watch("password");
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow">

                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Create Account
                </h2>

                <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('name', {
                                required: "Name is required",
                                pattern: {
                                    value: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
                                    message: "Enter a valid name"
                                },
                                maxLength: 30,
                                minLength: {
                                    value: 3,
                                    message: "At least 3 letters"
                                }
                            })}
                        />
                        {errors.name &&
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        }
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('username', {
                                required: "Username is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9]+$/,
                                    message: "Username should only contain numbers and letters"
                                }
                            })}
                        />
                        {errors.username &&
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        }
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._]+@([a-zA-Z0-9.]+)(\.com)$/,
                                    message: "Please enter a valid email"
                                }
                            })}
                        />
                        {errors.email &&
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        }
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('password', {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Must contain uppercase, lowercase, number & special char",
                                },
                                minLength: { value: 8, message: "Minimum 8 characters" }
                            })}
                        />
                        {errors.password &&
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        }
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register('confirm', {
                                required: "Please confirm your password",
                                validate: (value) => value === password || "Passwords do not match"
                            })}
                        />
                        {errors.confirm &&
                            <p className="text-red-500 text-sm mt-1">{errors.confirm.message}</p>
                        }
                    </div>

                    {/* Button */}
                    <button
                        type="button"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer disabled:bg-green-200 disabled:cursor-default"
                        disabled={!isValid}
                        onSubmit={onSubmit()}
                    >
                        Sign Up
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <NavLink to="/signin">
                            <span className="text-red-600 font-medium hover:underline cursor-pointer">
                                Login
                            </span>
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>
    );
}
