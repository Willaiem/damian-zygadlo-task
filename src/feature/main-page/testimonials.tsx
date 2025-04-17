"use client";
import { useState } from "react";
import { AnimatedElement } from "../animations/AnimatedElement";
import Image from "next/image";

const testimonialsData = [
  {
    quote:
      "“Estatary is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”",
    name: "Mira Culos",
    title: "Renter",
    image: "/testimonial_person_1.png",
  },
  {
    quote:
      "“I check Estatery almost every day — whether I’m seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”",
    name: "Mark Brown",
    title: "Renter",
    image: "/testimonial_person_2.png",
  },
  {
    quote:
      "“Estatary turns home shopping into a daily delight. Whether I’m planning for the future or just exploring what’s out there, I always find something exciting and new.”",
    name: "Jake White",
    title: "Renter",
    image: "/testimonial_person_3.png",
  },
];

export const Testimonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <AnimatedElement>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
        </AnimatedElement>
        <AnimatedElement delay={150}>
          <p className="text-gray-600 text-lg mb-12 max-w-lg mx-auto">
            See what our property managers, landlords, and tenants have to say
          </p>
        </AnimatedElement>
        <AnimatedElement delay={300} className="min-h-[256px]">
          <p className="text-2xl font-semibold md:text-3xl text-gray-800 max-w-3xl mx-auto mb-8 leading-relaxed h-88 overflow-hidden">
            {testimonialsData[activeTestimonialIndex].quote}
          </p>
        </AnimatedElement>
        <p className="text-lg text-gray-800 mb-10">
          <span className="font-bold">
            {testimonialsData[activeTestimonialIndex].name}
          </span>
          ,{" "}
          <span className="text-gray-500">
            {testimonialsData[activeTestimonialIndex].title}
          </span>
        </p>
        <div className="flex justify-center items-center space-x-4">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={index}
              className={`relative transition-opacity duration-200 ${
                activeTestimonialIndex !== index
                  ? "opacity-50 hover:opacity-100"
                  : ""
              }`}
              onClick={() => setActiveTestimonialIndex(index)}
            >
              <Image
                width={64}
                height={64}
                src={testimonial.image}
                alt={testimonial.name || `Testimonial ${index + 1}`}
                className={`w-16 h-16 rounded-full transition-all duration-200 ${
                  activeTestimonialIndex === index
                    ? "border-4 border-indigo-600 bg-pink-200 p-0.5"
                    : "border-4 border-transparent bg-slate-200"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
