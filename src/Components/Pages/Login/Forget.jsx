import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Forget = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
        let email = data.email.toLowerCase();
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/users/reset_password/`, {"email":email});
            navigate('/login')
        }catch (error) {
            console.log(error)
        }
    };
    return (
        <div className='text-center w-full md:w-1/3 mx-auto'>
            <h1 className='text-2xl mt-3 primary-color font-bold'>Reset your password!</h1>
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