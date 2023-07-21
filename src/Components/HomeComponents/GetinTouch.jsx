import './HomeComponents.css'
const GetinTouch = () => {
    return (
        <div className='get-touch  bg-fixed'>
            <div className='py-10 overlay items-center gap-4 flex max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4'>
                <div className='space-y-8 w-7/12'>
                    <h1 className='text-5xl text-white font-semibold'>We help you buy or sell your property quickly</h1>
                    <p className='text-white'>Engage with our professional real estate agents to sell, buy or rent your home.  Get emails directly to your inbox and manage the lead as you wish.</p>
                </div>
                <div className='bg-[#F2F3F3] w-5/12 rounded-md p-8 space-y-4'>
                    <h1 className='text-2xl text-black font-semibold'>Get in touch</h1>
                    <p className='text-slate-500 font-semibold'>Fill out this form and one of our agents will be in touch with you soon.</p>
                    <div>
                        <form className='space-y-4'>
                            <input className='border bg-white p-2 rounded-md text-black w-full drop-shadow-sm' type="text" placeholder='Your Name' />
                            <input className='border bg-white p-2 rounded-md text-black w-full drop-shadow-sm' type="text" placeholder='Your Email' />
                            <input className='border bg-white p-2 rounded-md text-black w-full drop-shadow-sm' type="text" placeholder='Your Phone Number' />
                            <textarea className='border bg-white p-2 rounded-md text-black w-full drop-shadow-sm' placeholder='Type your message' name="" id="" cols="10" rows="5"></textarea>
                            <button className='btn btn-primary btn-outline w-full bg-white'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetinTouch;