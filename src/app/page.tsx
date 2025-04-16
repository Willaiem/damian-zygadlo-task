"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PropertyTypeBadge } from "@/components/PropertyTypeBadge";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

interface PropertyCardProps {
  image: string;
  price: string;
  name: string;
  address: string;
  type: "HOUSE" | "APARTMENT";
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  name,
  address,
  type,
}) => (
  <div className="bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg w-72 flex-shrink-0 snap-center">
    <div className="relative">
      <Image
        width={192}
        height={192}
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <PropertyTypeBadge type={type} />
    </div>
    <div className="p-4 pt-6">
      <div className="flex justify-between items-center">
        <p className="text-indigo-600 text-lg">
          <span className="font-bold">{price}</span>{" "}
          <span className="text-gray-500 text-sm font-normal">/month</span>
        </p>
        <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-indigo-400 hover:text-indigo-600 hover:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1 focus:bg-indigo-100 active:bg-indigo-600 active:text-white active:border-indigo-600 transition-colors duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm overflow-hidden whitespace-nowrap text-ellipsis w-50">
        {address}
      </p>
    </div>
  </div>
);

const EstateryApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Houses" | "Apartments">("Houses");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

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

  const houseProperties = [
    {
      id: 1,
      image: "/house_1.jpg",
      price: "$3,440",
      name: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      type: "HOUSE" as const,
    },
    {
      id: 2,
      image: "/house_2.jpg",
      price: "$6,550",
      name: "St. Crystal",
      address:
        "2100 Highland Way, Highland Lake, Florida, United States of America",
      type: "HOUSE" as const,
    },
    {
      id: 3,
      image: "/house_3.jpg",
      price: "$4,950",
      name: "Faulkner Ave",
      address: "909 Woodland St, Michigan, MI",
      type: "HOUSE" as const,
    },
  ];

  const apartmentProperties = [
    {
      id: 1,
      image: "/apartment_1.jpg",
      price: "$2,140",
      name: "Tarpon Bay",
      address: "103 Lake Shores, Michigan, IN",
      type: "APARTMENT" as const,
    },
    {
      id: 2,
      image: "/apartment_2.jpg",
      price: "$1,450",
      name: "Cove Red",
      address: "243 Curlew Road, Palm Harbor, TX",
      type: "APARTMENT" as const,
    },
    {
      id: 3,
      image: "/apartment_3.jpg",
      price: "$3,850",
      name: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
      type: "APARTMENT" as const,
    },
  ];

  const propertiesToDisplay =
    activeTab === "Houses" ? houseProperties : apartmentProperties;

  const scrollbarHideClass = "scrollbar-hide";

  return (
    <div className="min-h-screen">
      {" "}
      {/* Removed bg-gray-50 */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex text-2xl font-bold text-black">
            <img
              src="/logo.svg"
              alt="Estatary Logo"
              className="w-8 h-8 mr-1 rounded"
            />
            Estatary
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-black hover:text-indigo-600 font-semibold transition-colors"
            >
              Rent
            </a>
            <a
              href="#"
              className="text-black hover:text-indigo-600 font-semibold transition-colors"
            >
              Buy
            </a>
            <a
              href="#"
              className="text-black hover:text-indigo-600 font-semibold transition-colors"
            >
              Sell
            </a>
            <a
              href="#"
              className="text-black hover:text-indigo-600 font-semibold transition-colors"
            >
              Manage Property
            </a>
            <a
              href="#"
              className="text-black hover:text-indigo-600 font-semibold transition-colors"
            >
              Resources
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex text-gray-600 font-bold border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
              Login
            </button>
            <button className="hidden md:block bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors">
              Sign up
            </button>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col p-6 md:hidden">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 text-2xl font-semibold text-gray-800 mb-auto">
              <a href="#" className="hover:text-indigo-600">
                Rent
              </a>
              <a href="#" className="hover:text-indigo-600">
                Buy
              </a>
              <a href="#" className="hover:text-indigo-600">
                Sell
              </a>
              <a href="#" className="hover:text-indigo-600">
                Manage Property
              </a>
              <a href="#" className="hover:text-indigo-600">
                Resources
              </a>
            </nav>
            <div className="flex flex-col space-y-4">
              <button className="text-gray-800 font-bold border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors text-lg">
                Login
              </button>
              <button className="bg-indigo-600 text-white font-medium rounded-lg px-4 py-3 hover:bg-indigo-700 transition-colors text-lg">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>
      <main>
        <section className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-0">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Buy, rent, or sell <br /> your property easily
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-balance mb-10 max-w-lg mx-auto lg:mx-0">
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>
            {/* Statistics - Reverted Layout */}
            <div className="flex justify-center lg:justify-start space-x-12 mb-8">
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="text-3xl md:text-4xl font-bold text-indigo-600">
                  50k+
                </p>
                <p className="text-gray-500">renters</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="text-3xl md:text-4xl font-bold text-indigo-600">
                  10k+
                </p>
                <p className="text-gray-500">properties</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 overflow-hidden pt-4">
          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end ">
            <div className="rounded-lg max-w-md w-full">
              <Image
                src="/hero_illustration.svg"
                alt="Hero illustration showing a map and property card"
                width={500}
                height={450}
                priority
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 pt-8">
            {/* Updated Tabs Container */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-indigo-50 p-1 rounded-lg space-x-1">
                <button
                  onClick={() => setActiveTab("Houses")}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeTab === "Houses"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Houses
                </button>
                <button
                  onClick={() => setActiveTab("Apartments")}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeTab === "Apartments"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Apartments
                </button>
              </div>
            </div>

            <div className="text-center md:text-left mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                We make it easy for houses <br className="hidden md:inline" />{" "}
                and apartments.
              </h2>
              <p className="text-gray-600 text-balance max-w-xl mx-auto md:mx-0">
                Whether you're selling your current home, getting financing, or
                buying a new home, we make it easy and efficient. The best part?
                you'll save a bunch of money and time with our services.
              </p>
            </div>
          </div>

          {/* Adjusted Horizontal Scrolling Container */}
          <div
            className={`lg:grid lg:grid-cols-3 lg:gap-8 lg:container lg:mx-auto lg:px-4 ${
              !propertiesToDisplay.length
                ? ""
                : `flex overflow-x-auto space-x-4 lg:space-x-0 pb-6 lg:pb-0 snap-x snap-mandatory ${scrollbarHideClass} pl-[max(1rem,calc(50%-theme(spacing.72)/2))] lg:pl-0 pr-4 lg:pr-0`
            }`}
          >
            {propertiesToDisplay.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                price={property.price}
                name={property.name}
                address={property.address}
                type={property.type}
              />
            ))}
            {propertiesToDisplay.length === 0 && (
              <div className="w-full text-center py-10 lg:col-span-3">
                <p className="text-gray-500">
                  No properties found for this category.
                </p>
              </div>
            )}
            <div className="flex-shrink-0 w-1 snap-end lg:hidden"></div>
          </div>
        </section>

        {/* Added bg-gray-50 here */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-lg mx-auto">
              See what our property managers, landlords, and tenants have to say
            </p>
            <p className="text-2xl font-semibold md:text-3xl text-gray-800 max-w-3xl mx-auto mb-8 leading-relaxed h-88 overflow-hidden">
              {testimonialsData[activeTestimonialIndex].quote}
            </p>
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
      </main>
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="text-2xl font-bold text-indigo-600 mb-6 flex items-center">
            <Image
              width={32}
              height={32}
              src="/logo.svg"
              alt="Estatary Logo"
              className="w-8 h-8 mr-2 rounded"
            />
            Estatary
          </div>
          <nav className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex justify-center space-x-8">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 text-sm font-semibold tracking-wider transition-colors"
              >
                HELP CENTER
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 text-sm font-semibold tracking-wider transition-colors"
              >
                FAQ
              </a>
            </div>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 text-sm font-semibold tracking-wider transition-colors"
            >
              TERMS & PRIVACY
            </a>
          </nav>
          <hr className="w-full border-gray-300 mb-8" />
          <p className="text-gray-500 text-sm mb-6">
            ©{new Date().getFullYear()} Estatery. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img
                src="https://placehold.co/20x20/9ca3af/ffffff?text=F"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img
                src="https://placehold.co/20x20/9ca3af/ffffff?text=I"
                alt="Instagram"
                className="w-5 h-5"
              />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img
                src="https://placehold.co/20x20/9ca3af/ffffff?text=T"
                alt="Twitter"
                className="w-5 h-5"
              />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img
                src="https://placehold.co/20x20/9ca3af/ffffff?text=in"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EstateryApp;
