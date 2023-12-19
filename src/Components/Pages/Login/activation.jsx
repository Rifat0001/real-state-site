import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Activation() {
    const [info,setInfo] = useState("")
    const params = useParams();
    useEffect(()=>{
        activationCheck()
    },[])
    const activationCheck = async() =>{
        const config = {
            headers: {
                    'Content-Type': 'application/json'
                }
        };
        const uid = params.uid;
        const token = params.token;
        const body = JSON.stringify({ uid, token });
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/users/activation/`, body,config);
            setInfo("Congratulations! Your email has been successfully activated.")
        }catch (error) {
            setInfo(
                Object.keys(error.response.data).map((key) => (
                    error.response.data[key]
                  ))
            )
        }
    }
    return (
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
            <div className="alert max-w-lg text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{info}</span>
            </div>
        </div>
    )
  }
  export default Activation;