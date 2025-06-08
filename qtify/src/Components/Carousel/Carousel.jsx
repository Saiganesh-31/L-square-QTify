import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import leftArrow from "../../assets/left_arrow.svg";
import rightArrow from "../../assets/right_arrow.svg";
import "../Carousel/Carousel.css";

function Carousel ({items, renderComponent, navigationId}) {
    const prevClass = `custom-swiper-prev-${navigationId}`;
    const nextClass = `custom-swiper-next-${navigationId}`;
    return (
        <div style={{ position: "relative", padding: "1rem 2rem" }}>
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
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
          }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    {renderComponent(item)}
                </SwiperSlide>
            ))}
        </Swiper>

        <button className={`${prevClass} nav-btn`}>
            <img src={leftArrow} alt="Previous" />
        </button>
        <button className={`${nextClass} nav-btn`}>
            <img src={rightArrow} alt="Next" />
        </button>
        </div>
    );
}

export default Carousel;