
import { useForm } from "react-hook-form";
const Checkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
            <h1 className="text-5xl primary-color font-semibold">Check Out</h1>
            <hr className="border-2 border-black my-4" />
            <form className="card-body w-full md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
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
                        <span className="label-text text-lg text-black font-bold">Address</span>
                    </label>
                    <input
                        name="address"
                        type="text"
                        placeholder="Your Address"
                        className="input border-black text-black rounded-md    bg-white w-full"
                        {...register("address", { required: true })}
                    />
                    {errors.address?.type === "required" && (
                        <span className="font-bold text-error">Address is required</span>
                    )}
                </div>


                <div className="form-control mt-2">
                    <input
                        type="submit"
                        className="btn btn-gradient rounded-md text-white"
                        value="Check out"
                    />
                </div>
            </form>
        </div>
    );
};

export default Checkout;
