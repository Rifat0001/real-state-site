import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const BlogCarousel = () => {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    return (
        <div>
            <div className="relative">
                <div className="text-center py-4  text-xl font-bold">Carousel</div>
                <div className="absolute right-0 top-5 ">
                    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                        <FiChevronLeft />
                    </button>
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                        <FiChevronRight />
                    </button>
                </div>
                <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    {
                        blogs.map(blog =>
                            <div key={blog.date} className="card w-96 p-2 my-14  bg-white  rounded-md drop-shadow-lg mx-8 shadow-xl">
                                <figure><img src={blog.image_url} className='w-full' alt="Shoes" /></figure>
                                <div className="card-body h-80">
                                    <h2 className="card-title text-black">{blog.blog_name}</h2>
                                    <p className='text-slate-800 font-semibold'>{blog.date}</p>
                                    <p className='text-slate-600'>{blog.details.slice(0, 200)}</p>
                                    <div className="card-actions justify-end">
                                        <button className='text-primary'>Read More </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogCarousel;