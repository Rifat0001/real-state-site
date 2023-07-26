import play from "../../assets/playstore.png";
import apple from "../../assets/apple.png";
import mobile from "../../assets/mobile.png";
const AppDownLoad = () => {
    return (
        <div className="max-w-[2150px] bg-blue-100 py-20 mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
            <div className="    pb-8 rounded-md">
                <div className="flex  items-center ">
                    <div className="w-1/2 space-y-4">
                        <h1 className="text-5xl font-semibold text-black">Download <span className='text-primary'>Our App</span></h1>
                        <p className="text-black ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, qui. Excepturi porro adipisci vitae accusamus delectus. Dolores natus accusantium at perferendis totam quidem, minima ullam cumque, nihil, quam rem dicta?</p>
                        <div className='flex gap-8'>
                            <button><img src={play} className='w-48 h-16' alt="" /></button>
                            <button><img src={apple} className='w-48' alt="" /></button>
                        </div>
                    </div>
                    <div className='flex  w-1/2  justify-center'>
                        <img className='w-1/2' src={mobile} alt="" />
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AppDownLoad;
