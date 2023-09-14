import './HomeComponents.css'
const GetinTouch = () => {
    return (
        <div className='get-touch  bg-fixed'>
            <div className='py-10 overlay items-center gap-4 flex md:flex-row flex-col max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4'>
                <div className='md:space-y-8 space-y-4 md:mt-0 mt-8 md:w-7/12 w-full'>
                    <h1 className='md:text-5xl text-3xl text-white font-bold md:font-semibold'>We help you buy or sell your property quickly</h1>
                    <p className='text-gray'>Engage with our professional real estate agents to sell, buy or rent your home.  Get emails directly to your inbox and manage the lead as you wish.</p>
                </div>
                <div className='bg-white w-full md:mt-0 mt-6 md:w-5/12 rounded-md p-8 space-y-4'>
                    <h1 className='text-2xl text-black font-semibold'>Get in touch</h1>
                    <p className='text-slate-500 font-semibold'>Fill out this form and one of our agents will be in touch with you soon.</p>
                    <div>
                        <form className='space-y-4 forma'>
                            <input className='border  p-2 rounded-md text-black w-full ' type="text" placeholder='Your Name' />
                            <input className='border  p-2 rounded-md text-black w-full ' type="text" placeholder='Your Email' />
                            <input className='border  p-2 rounded-md text-black w-full ' type="text" placeholder='Your Phone Number' />
                            <textarea className='border  p-2 rounded-md text-black w-full ' placeholder='Type your message' name="" id="" cols="10" rows="5"></textarea>
                            <button className='btn btn-gradient w-full border-none'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetinTouch;