// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
const BlogCarousel = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    return (
        <div className='py-20 max-w-[2150px] bg-[#F0F2F5] mx-auto xl:px-40 md:px-10 sm:px-2 px-4'>
            <div className=''>
                <h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold text-center'>Our <span className='text-primary'>Blogs</span></h3>
                <p className=' text-slate-500 text-center mt-6'>Read the blog and stay update with all the latest real estate news</p>
            </div>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'blue',
                    '--swiper-pagination-color': 'blue',
                }}
                zoom={true}
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    blogs.map((blog, index) =>
                        <SwiperSlide key={index}>
                            <div className="card   w-96 p-2 my-14  bg-white  rounded-md drop-shadow-lg shadow-xl">
                                <figure><img src={blog.image_url} className='w-full h-[280px]' alt="Shoes" /></figure>
                                <div className="card-body h-80">
                                    <h2 className="card-title text-black">{blog.blog_name}</h2>
                                    <p className='text-slate-800 font-semibold'>{blog.date}</p>
                                    <p className='text-slate-600'>{blog.details.slice(0, 200)}</p>
                                    <div className="card-actions justify-end">
                                        <button className='text-primary'>Read More </button>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default BlogCarousel;