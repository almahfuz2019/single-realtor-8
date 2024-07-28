import Image from 'next/image';
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
export default function MyExpertise() {
  return (
    <div className="py-32 max-w-screen-xl mx-auto">
      <div className="flex w-80 mx-auto flex-col mb-4">
        <div className="divider text-xl">My Expertise</div>
      </div>
      <h1 className="text-center text-5xl text-primary">
        Your trusted advisor in <br /> navigating real estate.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="flex items-start gap-5 bg-[#E2E6E7] g p-10 rounded-lg custom-shadow">
          <div className="h-[80px] w-[80px]  ">
            {" "}
            <IoHomeOutline className="bg-black rounded-full text-white text-5xl  p-2" />
          </div>

          <div>
            <h5 className="text-3xl text-primary  mb-2">
              Sell Your Property Stress Free
            </h5>
            <p className="text-[#091235CC] text-xl">
              Experience a Smooth and Hassle-Free Selling Process with Our
              Expert Guidance, Proven Strategies, and Personalized Support.
              Achieve the Best Results with Confidence and Ease.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5 bg-[#E2E6E7] g p-10 rounded-lg custom-shadow">
          <div className="h-[80px] w-[80px]  ">
            {" "}
            <IoHomeOutline className="bg-black rounded-full text-white text-5xl  p-2" />
          </div>

          <div>
            <h5 className="text-3xl text-primary  mb-2">
              Sell Your Property Stress Free
            </h5>
            <p className="text-[#091235CC] text-xl">
              Experience a Smooth and Hassle-Free Selling Process with Our
              Expert Guidance, Proven Strategies, and Personalized Support.
              Achieve the Best Results with Confidence and Ease.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5 bg-[#E2E6E7] g p-10 rounded-lg custom-shadow">
          <div className="h-[80px] w-[80px]  ">
            {" "}
            <IoHomeOutline className="bg-black rounded-full text-white text-5xl  p-2" />
          </div>

          <div>
            <h5 className="text-3xl text-primary  mb-2">
              Sell Your Property Stress Free
            </h5>
            <p className="text-[#091235CC] text-xl">
              Experience a Smooth and Hassle-Free Selling Process with Our
              Expert Guidance, Proven Strategies, and Personalized Support.
              Achieve the Best Results with Confidence and Ease.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5 bg-[#E2E6E7] g p-10 rounded-lg custom-shadow">
          <div className="h-[80px] w-[80px]  ">
            {" "}
            <IoHomeOutline className="bg-black rounded-full text-white text-5xl  p-2" />
          </div>

          <div>
            <h5 className="text-3xl text-primary  mb-2">
              Sell Your Property Stress Free
            </h5>
            <p className="text-[#091235CC] text-xl">
              Experience a Smooth and Hassle-Free Selling Process with Our
              Expert Guidance, Proven Strategies, and Personalized Support.
              Achieve the Best Results with Confidence and Ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
