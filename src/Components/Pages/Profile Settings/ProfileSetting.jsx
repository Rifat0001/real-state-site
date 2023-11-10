import { useState } from "react";
import { useEffect } from "react";
import { connect,useSelector } from 'react-redux';
import axios from 'axios';
import '/src/Components/Settings/Settings.css'
const ProfileSetting = () => {
    const fetchData = async()=>{
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/profile/details/`, config, { withCredentials: true });
            setName(res.data.name);
            setTitle(res.data.title);
            setNumber(res.data.number);
            setEmail(res.data.email);
            setSkype(res.data.skype);
            setWebsite(res.data.website);
            setFacebook(res.data.facebook_link);
            setTwitter(res.data.twitter);
            setLinkedin(res.data.linkedin_link);
            setPinterest(res.data.pinterest);
            setDescription(res.data.description);
            // console.log(res.data.name);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    },[])
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [skype, setSkype] = useState("");
    const [website, setWebsite] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [pinterest, setPinterest] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSkypeChange = (e) => {
        setSkype(e.target.value);
    };
    
    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value);
    };
    
    const handleFacebookChange = (e) => {
        setFacebook(e.target.value);
    };
    
    const handleTwitterChange = (e) => {
        setTwitter(e.target.value);
    };
    
    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value);
    };
    
    const handlePinterestChange = (e) => {
        setPinterest(e.target.value);
    };
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const updateProfile = async()=>{
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                }
            };
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/profile/update/`,{
                "name": name,
                "number": number,
                "skype_link": skype,
                "facebook_link": facebook,
                "linkedin_link": linkedin,
                "title": title,
                "email": email,
                "website": website,
                "twitter": twitter,
                "pinterest": pinterest,
                "description": description 
            }, config, { withCredentials: true });
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = () => {
        // You can use the state values (name, title, number, email, etc.) as needed, for instance, send them to an API or perform any action upon form submission.
        updateProfile();
        console.log("Submitted:", { name, title, number, email /* ... other fields */ });
    };
    return (
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-2xl pb-2 primary-color border-b-2  font-semibold"> Profile Settings</h1>
            <div className="mt-4">
                <div>
                    <div className="flex md:flex-row gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered border  border-black"
                                color="black"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your title"
                                className="input input-bordered border border-black"
                                color="black"
                                value={title}
                                onChange={handleTitleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="number"
                                placeholder="Enter your number"
                                className="input input-bordered border  border-black"
                                color="black"
                                value={number}
                                onChange={handleNumberChange}
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered border border-black"
                                color="black"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your skype link"
                                className="input input-bordered border  border-black"
                                color="black"
                                value={skype}
                                onChange={handleSkypeChange}
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your website"
                                className="input input-bordered border border-black"
                                color="black"
                                value={website}
                                onChange={handleWebsiteChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your facebook link"
                                className="input input-bordered border  border-black"
                                color="black"
                                value={facebook}
                                onChange={handleFacebookChange}
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your twitter"
                                className="input input-bordered border border-black"
                                color="black"
                                value={twitter}
                                onChange={handleTwitterChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row my-6 gap-6 flex-col">
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your linkedin link"
                                className="input input-bordered border  border-black"
                                color="black"
                                value={linkedin}
                                onChange={handleLinkedinChange}
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                placeholder="Enter your pinterest"
                                className="input input-bordered border border-black"
                                color="black"
                                value={pinterest}
                                onChange={handlePinterestChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea
                            name="message"
                            cols="10"
                            rows="20"
                            className="input input-bordered border-black shadow pt-2"
                            placeholder="Enter your description"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    <div className="my-6 flex ">
                        <button className="btn w-full btn-gradient" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        </div >
    );
};



export default ProfileSetting;