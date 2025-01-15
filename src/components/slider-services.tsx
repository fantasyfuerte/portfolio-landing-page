"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";

function SliderServices() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      loop={true}
      className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="flex px-[23px] py-8 h-[225px] md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
            <div className="mb-4 text-secondary text-4xl">{service.icon}</div>
            <div>
              <h3 className="text-lg mb-4 font-bold">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderServices;
