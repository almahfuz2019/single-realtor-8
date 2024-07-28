import React from 'react'
import ContactForm from './ContactForm'
import TestimonialSlider from './TestimonialSlider'

export default function Contact() {
  return (
    <div className=" overflow-hidden  py-32 lg:py-[136px] px-4 bg-[#E3DDD7] mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 border border-x-0 py-16 gap-10  border-primary max-w-[1320px] mx-auto">
        <ContactForm />

        <TestimonialSlider />
      </div>
    </div>
  );
}
