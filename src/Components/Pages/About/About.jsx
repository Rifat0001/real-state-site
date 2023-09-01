import './About.css';
// import img '../../../assets/team.jpg';
import apple from "../../../assets/team.jpg";
const About = () => {
    return (
        <div>
            <div className='feature  bg-fixed'>
                <div className='overlay py-40'>
                    <h1 className='text-white text-6xl font-semibold text-center'>About Us</h1>
                </div>
            </div>
            {/* content start of this page  */}
            <div className='max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4'>
                {/* top  */}
                <div className='flex md:flex-row flex-col items-center justify-center py-8  gap-8'>
                    <div className='w-full'>
                        <img className='w-full' src={apple} alt="" />
                    </div>
                    <div className='w-full space-y-6'>
                        <h1 className='font-bold text-5xl text-black' >Our <span className='text-primary'>Team</span></h1>
                        <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit veritatis reprehenderit expedita dignissimos commodi fugiat id consequatur odit est. Necessitatibus pariatur delectus voluptatum aspernatur placeat eum ex recusandae, doloribus sapiente, dolorem, nemo assumenda. Magnam, libero sit asperiores assumenda quidem sapiente?</p>
                        <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut perspiciatis sapiente et placeat! Accusantium, cum quam numquam dolor nulla reiciendis et, atque odit dolorem vel eligendi. Natus modi magnam aperiam.</p>
                        <button className='btn btn-primary'>Ream More</button>
                    </div>
                </div>
                {/* gallery  */}
                <section className="my-8">
                    <div className="text-center">
                        <h1 className="text-5xl text-black font-bold mb-4">Our
                            <span className="text-primary"> Gallery</span>
                        </h1>
                        <p className="md:mx-48 mx-8 text-black" >A visual feast for toy enthusiasts and collectors alike! Step into a world of wonder as we showcase a stunning array of action figures, playsets, and vehicles that will ignite your imagination.</p>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                        <img src="https://i.ibb.co/Cv89SP2/OIP-3.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                        <img src="https://i.ibb.co/TwS7WDw/R-1.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                        <img src="https://i.ibb.co/7GbhyrN/OIP-4.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                        <img src="https://i.ibb.co/CzTsWy2/R-2.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                        <img src="https://i.ibb.co/X7cS7SV/OIP-5.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />

                        <img src="https://i.ibb.co/1J9GWGJ/R-3.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />

                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;