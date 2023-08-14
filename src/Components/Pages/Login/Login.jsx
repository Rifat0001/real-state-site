import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Tabs.css'
import Forget from "./Forget";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className="card pb-5 flex mx-auto md:w-1/3 w-full border rounded-none ">
            <div className="">

                <div>
                    <h1 className="text-2xl font-bold mt-6 text-primary">Login Here</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered border-black rounded-md text-black bg-white"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <span className="font-bold text-error text-start">Email is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Password</span>
                            </label>
                            <div className="w-full relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Your Password"
                                    className="input border-black text-black rounded-md    bg-white w-full"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <button
                                    type="button"
                                    className=" border-none input rounded-none eye "
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                </button>
                            </div>
                            {errors.password?.type === "required" && (
                                <span className="font-bold text-error text-start">
                                    Password is required.
                                </span>
                            )}
                        </div>
                        <Link to='/forget' className="text-start text-black hover:text-primary underline">
                            Forget Password?
                        </Link>

                        <div className="form-control mt-2">
                            <input
                                type="submit"
                                className="btn btn-primary rounded-md text-white"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Login;
