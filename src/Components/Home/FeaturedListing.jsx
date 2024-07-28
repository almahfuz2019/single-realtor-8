"use client";
import Image from "next/image";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function FeaturedListing() {
  // Sample data
  const properties = [
    {
      id: 1,
      type: "For Sell",
      price: "$ 5,87,876",
      name: "Maplewood Garden Estates",
      address: "42/A, Trudo Road, Toronto, Canada",
      beds: 3,
      baths: 2,
      area: "1980 Sq-m",
      parking: 1,
      imageUrl: "https://i.ibb.co/mC1NN9X/Rectangle-3972.png",
      iconBed: "https://i.ibb.co/zxXzn8z/Mask-group-5.png",
      iconBath: "https://i.ibb.co/K7h7dhk/Mask-group-6.png",
      iconArea: "https://i.ibb.co/6BBg95r/Mask-group-7.png",
      iconParking: "https://i.ibb.co/ySWkHT2/Mask-group-8.png",
    },
    {
      id: 2,
      type: "For Buy",
      price: "$ 5,87,876",
      name: "Maplewood Garden Estates",
      address: "42/A, Trudo Road, Toronto, Canada",
      beds: 3,
      baths: 2,
      area: "1980 Sq-m",
      parking: 1,
      imageUrl: "https://i.ibb.co/mC1NN9X/Rectangle-3972.png",
      iconBed: "https://i.ibb.co/zxXzn8z/Mask-group-5.png",
      iconBath: "https://i.ibb.co/K7h7dhk/Mask-group-6.png",
      iconArea: "https://i.ibb.co/6BBg95r/Mask-group-7.png",
      iconParking: "https://i.ibb.co/ySWkHT2/Mask-group-8.png",
    },
    {
      id: 3,
      type: "For Rent",
      price: "$ 5,87,876",
      name: "Maplewood Garden Estates",
      address: "42/A, Trudo Road, Toronto, Canada",
      beds: 3,
      baths: 2,
      area: "1980 Sq-m",
      parking: 1,
      imageUrl: "https://i.ibb.co/mC1NN9X/Rectangle-3972.png",
      iconBed: "https://i.ibb.co/zxXzn8z/Mask-group-5.png",
      iconBath: "https://i.ibb.co/K7h7dhk/Mask-group-6.png",
      iconArea: "https://i.ibb.co/6BBg95r/Mask-group-7.png",
      iconParking: "https://i.ibb.co/ySWkHT2/Mask-group-8.png",
    },
    {
      id: 4,
      type: "For Rent",
      price: "$ 5,87,876",
      name: "Maplewood Garden Estates",
      address: "42/A, Trudo Road, Toronto, Canada",
      beds: 3,
      baths: 2,
      area: "1980 Sq-m",
      parking: 1,
      imageUrl: "https://i.ibb.co/mC1NN9X/Rectangle-3972.png",
      iconBed: "https://i.ibb.co/zxXzn8z/Mask-group-5.png",
      iconBath: "https://i.ibb.co/K7h7dhk/Mask-group-6.png",
      iconArea: "https://i.ibb.co/6BBg95r/Mask-group-7.png",
      iconParking: "https://i.ibb.co/ySWkHT2/Mask-group-8.png",
    },
    {
      id: 5,
      type: "For Rent",
      price: "$ 5,87,876",
      name: "Maplewood Garden Estates",
      address: "42/A, Trudo Road, Toronto, Canada",
      beds: 3,
      baths: 2,
      area: "1980 Sq-m",
      parking: 1,
      imageUrl: "https://i.ibb.co/mC1NN9X/Rectangle-3972.png",
      iconBed: "https://i.ibb.co/zxXzn8z/Mask-group-5.png",
      iconBath: "https://i.ibb.co/K7h7dhk/Mask-group-6.png",
      iconArea: "https://i.ibb.co/6BBg95r/Mask-group-7.png",
      iconParking: "https://i.ibb.co/ySWkHT2/Mask-group-8.png",
    },
    {
      id: 6,
      type: "For Rent",
      price: "$ 5,87,876",
      name: "Maplewood Garden Estates",
      address: "42/A, Trudo Road, Toronto, Canada",
      beds: 3,
      baths: 2,
      area: "1980 Sq-m",
      parking: 1,
      imageUrl: "https://i.ibb.co/mC1NN9X/Rectangle-3972.png",
      iconBed: "https://i.ibb.co/zxXzn8z/Mask-group-5.png",
      iconBath: "https://i.ibb.co/K7h7dhk/Mask-group-6.png",
      iconArea: "https://i.ibb.co/6BBg95r/Mask-group-7.png",
      iconParking: "https://i.ibb.co/ySWkHT2/Mask-group-8.png",
    },
  ];

  return (
    <div className="bg-neutral py-32 ">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex w-80 mx-auto flex-col mb-4">
          <div className="divider text-xl">Featured Condos</div>
        </div>
        <h1 className="text-center text-5xl text-primary">
          Own a piece of paradise.
          <br /> Experience luxury living.
        </h1>
        {/* Search Tabs */}
        <h6 className="text-primary text-3xl md:mt-20 mt-16 mb-6">
          Find Any Condos
        </h6>
        <div
          className=" w-full  py-8 px-4 rounded-xl text-black bg-[#88A9C3]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Tabs>
            <TabList className="flex flex-wrap justify-center space-x-2 lg:space-x-4 mb-8 font-merriweather">
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-xl font-medium"
                selectedClassName="border-b-2 border-primary font-bold"
              >
                Sell
              </Tab>
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-xl font-medium"
                selectedClassName="border-b-2 border-primary font-bold"
              >
                Buy
              </Tab>
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-lg md:text-xl font-medium"
                selectedClassName="border-b-2 border-primary font-bold"
              >
                Rent
              </Tab>
            </TabList>

            {/* Sell Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-roboto sm:px-20 lg:px-0">
                <select className="w-full lg:w-1/4 p-2 rounded-xl text-base bg-transparent border border-[#211C1DCC] text-[#211C1DCC]">
                  <option>Property Category</option>
                  <option>Property Category sell</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Location</option>
                  <option>Location1 sell</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Average Price</option>
                  <option>Average Price</option>
                  <option>Average Price</option>
                  <option>Average Price sell</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full lg:w-1/4 p-2 bg-neutral text-lg md:text-2xl text-primary rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea242493] hover:to-[#c61414ed]"
                >
                  Browse
                </button>
              </form>
            </TabPanel>

            {/* Buy Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-roboto sm:px-20 lg:px-0">
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Property Category</option>
                  <option>Property Category buy</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Location</option>
                  <option>Location1 buy</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Average Price</option>
                  <option>Average Price buy</option>
                  <option>Average Price</option>
                  <option>Average Price</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full lg:w-1/4 p-2 bg-primary text-lg md:text-2xl text-white rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea242493] hover:to-[#c61414ed]"
                >
                  Browse
                </button>
              </form>
            </TabPanel>

            {/* Rent Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-roboto sm:px-20 lg:px-0">
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Property Category</option>
                  <option>Property Category rent</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Location</option>
                  <option>Location1 rent</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full lg:w-1/4 p-2 text-[#211C1DCC] rounded-xl text-base bg-transparent border border-[#211C1DCC]">
                  <option>Average Price</option>
                  <option>Average Price rent</option>
                  <option>Average Price</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full lg:w-1/4 p-2 bg-primary text-lg md:text-2xl text-white rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea242493] hover:to-[#c61414ed]"
                >
                  Browse
                </button>
              </form>
            </TabPanel>
          </Tabs>
        </div>
        {/* featured  */}
        <h6 className="text-primary text-3xl mt-20 mb-6">
          All Featured Condos
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="max-w-sm  rounded overflow-hidden border p-2 border-primary"
            >
              <div className="relative">
                <Image
                  className="w-full "
                  src={property.imageUrl}
                  alt={property.name}
                  width={500}
                  height={300}
                />
                <p className="inline-block absolute bottom-0 bg-[#88A9C3] text-primary text-xs px-2 py-1 rounded-l uppercase tracking-wide">
                  {property.type}
                </p>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center mb-2"></div>
                <div className=" text-primary text-2xl mb-2 text-center">
                  {property.price}
                </div>
                <p className="text-primary text-2xl text-center">
                  {property.name}
                </p>
                <p className="text-[#091235CC] text-lg mb-4 flex items-start gap-2 mt-2">
                  <Image
                    src="https://i.ibb.co/VLP40XW/Mask-group-4.png"
                    alt="Bed"
                    width={20}
                    height={20}
                  />
                  {property.address}
                </p>
                <hr className="bg-black text-black h-[2px] mb-4" />
                <div className="grid grid-cols-2 gap-2 items-center justify-between text-gray-700 text-sm">
                  <div className="flex items-center">
                    <Image
                      src={property.iconBed}
                      alt="Bed"
                      width={20}
                      height={20}
                    />
                    <span className="ml-2">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={property.iconBath}
                      alt="Bath"
                      width={20}
                      height={20}
                    />
                    <span className="ml-2">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={property.iconArea}
                      alt="Area"
                      width={20}
                      height={20}
                    />
                    <span className="ml-2">{property.area}</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={property.iconParking}
                      alt="Parking"
                      width={20}
                      height={20}
                    />
                    <span className="ml-2">{property.parking} Parking</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className=" rounded bg-[#88A9C3] px-12 py-3 text-sm text-primary shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          {" "}
          See All
        </a>
      </div>
    </div>
  );
}
