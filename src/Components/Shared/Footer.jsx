/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#88A9C3] py-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-20 items-start lg:items-end justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-[70%]">
            <Image
              data-aos="fade-up"
              className="-mt-12 mb-8"
              src="https://i.ibb.co/421gSwH/Frame-1000008324.png"
              height="140"
              width="240"
              alt="footer logo"
            />
            <h1 className="text-primary text-3xl md:text-[42px]  font-normal leading-[40px] md:leading-[50px]  font-merriweather">
              Get In Touch
            </h1>
            <p className="text-base md:text-xl  font-raleway text-[#091235CC] mt-4">
              Connect with Us Today for Personalized Assistance and Expert
              Guidance on Your Real Estate Journey. Let's Transform Your Dreams
              into Reality.
            </p>
            <a href="#contact">
              <button className="bg-neutral hover:bg-primary hover:text-neutral text-primary text-base md:text-xl lg:text-2xl font-roboto mt-6 px-6 md:px-8 py-2 md:py-2.5 rounded-md font-medium transition-colors duration-300 ease-in-out">
                Let's Talk
              </button>
            </a>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-auto">
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <Image
                  src="https://i.ibb.co/HCQd3Zg/Frame-456-7.png"
                  height="40"
                  width="40"
                  alt="Facebook"
                />
              </a>
              <a
                href="#"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <Image
                  src="https://i.ibb.co/GcSY5jK/Frame-457-4.png"
                  height="40"
                  width="40"
                  alt="Twitter"
                />
              </a>
              <a
                href="#"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <Image
                  src="https://i.ibb.co/HV3P13s/Frame-458-7.png"
                  height="40"
                  width="40"
                  alt="Instagram"
                />
              </a>
            </div>

            <h1 className="text-primary text-3xl md:text-[42px]   font-normal leading-[40px] md:leading-[50px]  font-merriweather">
              Quick Links
            </h1>
            <div className="flex flex-wrap gap-4 text-base md:text-xl  text-[#091235CC] font-roboto mt-4">
              <a href="#home" className="hover:text-primary">
                Home
              </a>
              <a href="#aboutme" className="hover:text-primary">
                About Me
              </a>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
              <a href="#listing" className="hover:text-primary">
                Featured Property
              </a>
              <a href="#neighborhood" className="hover:text-primary">
                Neighborhood
              </a>
              <a href="#testimonial" className="hover:text-primary">
                Testimonial
              </a>
              <a href="#insights" className="hover:text-primary">
                Insights
              </a>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
              <a href="#work-process" className="hover:text-primary">
                Work Process
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
