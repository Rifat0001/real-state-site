import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileImg = ({ images }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(images)
    return (
        <Slider {...sliderSettings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`item Slide ${index}`} className="w-full" />
                </div>
            ))}
        </Slider>
    );
};

export default MobileImg;
