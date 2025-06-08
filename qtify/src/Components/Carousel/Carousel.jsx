import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import leftArrow from "../../Assets/left_arrow.svg";
import rightArrow from "../../Assets/right_arrow.svg";
import "../Carousel/Carousel.css";

function Carousel ({items, renderComponent}) {
    return (
        <div style={{ position: "relative", padding: "1rem 2rem" }}>
            <button className="custom-swiper-prev nav-btn">
                <img src={leftArrow} alt="Previous" />
            </button>
            <button className="custom-swiper-next nav-btn">
                <img src={rightArrow} alt="Next" />
            </button>

        <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
                600: {slidesPerView: 3},
                900: {slidesPerView: 5},
                1200: {slidesPerView: 7},
            }}
            navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    {renderComponent(item)}
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}

export default Carousel;