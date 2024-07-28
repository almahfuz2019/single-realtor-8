"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const TestimonialSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    
    slides: {
      perView: 1,
      spacing:15
    },
  });

  return (
    <div className="lg:pl-10 ">
      {/* Header section */}
      <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20  ">
        <h1
          data-aos-delay="200"
          className="text-primary font-bold text-4xl  md:text-5xl md:leading-[55px] playfair-display-font"
        >
          Testimonial
        </h1>
        <div className="w-[156px] bg-primary mx-auto h-[2px] md:h-[3px] -mt-3"></div>
        <p
          data-aos-delay="400"
          className="sm:text-xl text-[#091235CC] text-sm font-normal "
        >
          Genuine Reviews of Our Clients: Highlighting Their Real Estate
          Success.
        </p>
      </header>
      <div ref={sliderRef} className="keen-slider ">
        <div className="keen-slider__slide p-10 bg-[#88A9C3] rounded-lg shadow-md">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="https://i.ibb.co/Lr3zLTp/Ellipse-18.png"
              height="80"
              width="80"
              alt="Client"
              className="rounded-full"
            />
            <div>
              <h3 className="md:text-2xl text-primary text-xl font-medium">
                Ben S. & Sandra S.
              </h3>
              <p className="md:text-xl text-primary text-base font-light mt-2">
                Happy Clients
              </p>
            </div>
          </div>
          <p className="mb-4 text-primary text-xl text-justify border py-5 border-primary border-x-0">
            Working with Mason Mount was an exceptional experience. Their
            expertise and dedication made the process of buying our new home
            seamless and enjoyable. They went above and beyond to ensure we
            found the perfect property. Highly recommend!
          </p>
          <div className="flex justify-center gap-2 mt-5">
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>{" "}
        <div className="keen-slider__slide p-10 bg-[#88A9C3] rounded-lg shadow-md">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="https://i.ibb.co/Lr3zLTp/Ellipse-18.png"
              height="80"
              width="80"
              alt="Client"
              className="rounded-full"
            />
            <div>
              <h3 className="md:text-2xl text-primary text-xl font-medium">
                Ben S. & Sandra S.
              </h3>
              <p className="md:text-xl text-primary text-base font-light mt-2">
                Happy Clients
              </p>
            </div>
          </div>
          <p className="mb-4 text-primary text-xl text-justify border py-5 border-primary border-x-0">
            Working with Mason Mount was an exceptional experience. Their
            expertise and dedication made the process of buying our new home
            seamless and enjoyable. They went above and beyond to ensure we
            found the perfect property. Highly recommend!
          </p>
          <div className="flex justify-center gap-2 mt-5">
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/0yBq971/Star-11.png"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>{" "}
        {/* Add more slides as needed */}
      </div>
      <div className="flex justify-center gap-10 mt-4">
        <Image
          onClick={() => instanceRef.current.prev()}
          src="https://i.ibb.co/rsWwtHZ/Frame-1000008552.png"
          height="50"
          width="50"
          alt="Client"
          className="rounded-full cursor-pointer"
        />
        <Image
          onClick={() => instanceRef.current.next()}
          src="https://i.ibb.co/LrLTjKS/Frame-1000008553.png"
          height="50"
          width="50"
          alt="Client"
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;
