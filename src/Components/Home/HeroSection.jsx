import Image from "next/image";
import React from "react";

export default function HeroSection() {
  // Fun facts data
  let data = [
    { id: "1", count: "15", name: "Years Of Experience" },
    { id: "2", count: "300+", name: "Property Transaction" },
    { id: "3", count: "1k+", name: "Happy Clients" },
    { id: "4", count: "1B+", name: "Net Revenue" },
  ];
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="relative bg-[url(https://i.ibb.co/CBJdFw7/Rectangle-3977.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl  sm:text-5xl text-neutral">
              Unlocking possibilities. The #1 choice for your next chapter.
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#E4D4C8CC]">
              Experience unparalleled service & expertise with our top-rated
              realtor, guiding you to your dream home & a bright future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 ">
              <a
                href="#"
                className="block w-full rounded bg-[#88A9C3] px-12 py-3 text-sm text-primary shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Contact Me
              </a>

              <a
                href="#"
                className="block w-full rounded bg-transparent border border-neutral px-12 py-3 text-sm font-medium text-neutral shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Explore Property
              </a>
            </div>
          </div>
          {/* Fun facts section */}
          <div className="bg-neutral grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center py-4 rounded-br-3xl px-4 rounded-tl-3xl rounded-bl-0 rounded-tr-0 mt-20 overflow-hidden">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="text-black text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={index * 100} // Staggering delay
              >
                <h3
                  className="font-bold text-3xl md:text-4xl mb-3 centuryGothic-font"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100 + 200} // Staggering delay for the count
                >
                  {item.count}
                </h3>
                <p
                  className="font-normal text-base md:text-xl"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={index * 200 + 300} // Staggering delay for the description
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
