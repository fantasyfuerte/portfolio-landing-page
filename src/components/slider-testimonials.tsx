"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataTestimonials } from "@/data";

function SliderTestimonials() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
      loop={true}
    >
      {dataTestimonials.map(({ id, name, description, imageUrl }) => (
        <SwiperSlide key={id}>
          <Image
            src={imageUrl}
            alt={name}
            width="100"
            height="100"
            className="mx-auto rounded-full"
          />
          <h4 className="text-center">{name}</h4>
          <div className="mt-5 text-center">{description}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderTestimonials;
