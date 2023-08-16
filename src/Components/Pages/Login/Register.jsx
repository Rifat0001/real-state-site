
import { useForm } from "react-hook-form";
import './Tabs.css'
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,

    } = useForm();

    const password = watch("password");
    const confirm_password = watch("confirm_password");
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="card pb-5 flex mx-auto md:w-1/3 w-full border rounded-none">
            <h1 className="text-2xl font-bold text-primary mt-6">Register Here</h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-black font-bold">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="input border-black text-black rounded-md    bg-white w-full"
                        {...register("name", { required: true })}
                    />
                    {errors.name?.type === "required" && (
                        <span className="font-bold text-error">Name is required</span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-black font-bold">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="input border-black text-black rounded-md    bg-white w-full"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                        <span className="font-bold text-error">Email is required</span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-black font-bold">Phone Number</span>
                    </label>
                    <input
                        name="phone"
                        type="number"
                        placeholder="Your Number"
                        className="input border-black text-black rounded-md    bg-white w-full"
                        {...register("phone", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                        <span className="font-bold text-error">Phone Number is required</span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-black font-bold">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        className="input border-black text-black rounded-md    bg-white w-full"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                        })}
                    />

                    {errors.password?.type === "required" && (
                        <span className="font-bold text-error">
                            Password is required.
                        </span>
                    )}
                    {errors.password?.type === "minLength" && (
                        <span className="font-bold text-error">
                            Password must be 6 characters.
                        </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                        <span className="font-bold text-error">
                            Password must be less than 20 characters,
                        </span>
                    )}
                    {errors.password?.type === "pattern" && (
                        <span className="font-bold text-error">
                            Password must have a capital letter and a special character.
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg text-black font-bold">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        className="input border-black text-black rounded-md    bg-white w-full"
                        {...register("confirm_password", {
                            required: true,
                            validate: (value) => value === password,
                        })}
                    />
                    {errors.confirm_password?.type === "required" && (
                        <span className="font-bold text-error">
                            Confirm Password is required
                        </span>
                    )}
                    {password !== confirm_password && (
                        <span className="font-bold text-error">
                            Password and Confirm Password do not match
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label-text text-lg text-start mb-1 text-black font-bold">Role Selection</label>
                    <select className="w-full role text-black  bg-white border-black h-12 rounded-lg ps-4" {...register("gender")}>
                        <option value="female">Agent</option>
                        <option value="male">Organization</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="form-control mt-2">
                    <input
                        type="submit"
                        className="btn btn-primary rounded-md text-white"
                        value="Register"
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;
