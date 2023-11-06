import { useForm } from "react-hook-form";
import './Tabs.css';

import React, { useState } from 'react';
import { useNavigate,useParams  } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [info,setInfo] = useState({
        'display':'hidden',
        'msg':''
      })
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,

    } = useForm();

    const password = watch("password");
    const re_password = watch("re_password");
    const onSubmit = async(data) => {
        const uid = params.uid;
        const token = params.token;
        const new_password = data.password;
        const re_new_password = data.re_password
        console.log(data);
        try{
            const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
            };
            const body = JSON.stringify({ uid, token, new_password, re_new_password });
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/users/reset_password_confirm/`, body,config);
            // Add a page/dialog to show "your password has been reset successfully"
            navigate("/login")
          }catch(error){
            console.log(error);
            setInfo({
                'display':'flex',
                'msg':Object.keys(error.response.data).map((key) => (
                  <div key={key}>
                    {error.response.data[key]}
                  </div>
                ))
            })
        }
    };

    return (
        <div>
            <div className="card pb-5 flex mx-auto md:w-1/3 w-full">
                <div className={`alert alert-warning text-sm mt-3 ${info.display}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span >{info.msg}</span>
                </div>
            </div>
            <div className="card pb-5 flex mx-auto md:w-1/3 w-full border rounded-none">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-black font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="New Password"
                            className="input border-black text-black rounded-md    bg-white w-full"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                            })}
                        />
                        {errors.password?.type === "required" && (
                            <span className="font-bold text-error">
                                Password is required.
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="font-bold text-error">
                                Password must be 8 characters.
                            </span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span className="font-bold text-error">
                                Password must be less than 20 characters,
                            </span>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-black font-bold">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            name="re_password"
                            placeholder="Confirm Password"
                            className="input border-black text-black rounded-md    bg-white w-full"
                            {...register("re_password", {
                                required: true,
                                validate: (value) => value == password,
                            })}
                        />
                        {errors.re_password?.type === "required" && (
                            <span className="font-bold text-error">
                                Confirm Password is required
                            </span>
                        )}
                        {password !== re_password && (
                            <span className="font-bold text-error">
                                Password and Confirm Password do not match
                            </span>
                        )}
                    </div>
                    <div className="form-control mt-2">
                        <input
                            type="submit"
                            className="btn btn-gradient rounded-md text-white"
                            value="Reset Password"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
