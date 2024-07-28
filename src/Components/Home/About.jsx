import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Get the edge you deserve with the #1 Realtors.
          </h2>
          <p className="mt-4 max-w-2xl text-xl mx-auto">
            Meet David Smith, a dedicated and experienced real estate
            professional with over a decade of experience in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">About David Smith</h3>
              <p className="mb-4">
                David's passion for helping clients find their dream homes is
                evident in his personalized approach and unwavering commitment
                to excellence. He specializes in residential properties, with a
                keen focus on first-time homebuyers, luxury estates, and
                investment properties.
              </p>
              <p className="mb-4">
                David's in-depth knowledge of the local market, combined with
                his strong negotiation skills, ensures that his clients receive
                the best possible deals. He is known for his attention to
                detail, responsiveness, and ability to make the buying or
                selling process smooth and stress-free. His clients appreciate
                his honest advice, tailored strategies, and his ability to
                listen to their unique needs and preferences.
              </p>
              <p className="mb-4">
                In addition to his professional expertise, David Smith is an
                active member of the community. He volunteers with local
                charities and participates in neighborhood events, fostering
                strong connections and staying informed about the latest market
                trends. When he's not working, David enjoys exploring the
                outdoors, spending time with his family, and discovering new
                restaurants and cultural activities in the area.
              </p>
              <p>
                Whether you're looking to buy, sell, or invest, David Smith is
                the trusted real estate advisor you need to turn your real
                estate dreams into reality.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Quick Info</h4>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-blue-500 mr-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-500 mr-4" />
                <span>matthew.davidson@xyzrealty.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 mr-4" />
                <span>1234 Broadway, New York, NY 10001</span>
              </div>
              <Image
                src="/path/to/your/image.jpg"
                alt="David Smith"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <p className="text-sm">Exceptional Market Expertise</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <p className="text-sm">Excellent Communication</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <p className="text-sm">Unique Negotiation Skills</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <p className="text-sm">Client-Focused Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
