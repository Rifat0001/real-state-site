import { useForm } from 'react-hook-form';

const Forget = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className='text-center w-full md:w-1/3 mx-auto'>
            <h1 className='text-2xl mt-3 text-primary font-bold'>Reset your password!</h1>
            <div>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-black font-bold">Your Email</span>
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
                    <div className="form-control mt-2">
                        <input
                            type="submit"
                            className="btn btn-error rounded-md text-white"
                            value="Reset"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Forget;