"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatedElement } from "../animations/AnimatedElement";
import { PropertyCard } from "./property-card";

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

export const HousesAndApartments = () => {
  const [activeTab, setActiveTab] = useState<"Houses" | "Apartments">("Houses");

  const propertiesToDisplay =
    activeTab === "Houses" ? houseProperties : apartmentProperties;

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mb-4 relative mt-[-4rem] flex md:hidden items-center justify-center px-4 lg:px-0">
        <div className="max-w-md lg:max-w-none w-full lg:h-full flex justify-center lg:justify-end">
          <Image
            src="/hero_illustration.svg"
            alt="Hero illustration showing a map and property card"
            width={500}
            height={450}
            priority
            className="w-full h-auto max-w-xl lg:max-w-none lg:h-full lg:object-contain lg:object-right"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
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

        <div className="text-center mb-10 md:mb-12 flex flex-col items-start md:items-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              We make it easy for houses <br className="hidden md:inline" /> and
              apartments.
            </h2>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
              Whether you're selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you'll save a bunch of money and time with our services.
            </p>
          </AnimatedElement>
        </div>
      </div>

      <div
        className={`flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory max-lg:pl-16 pr-4 lg:grid lg:grid-cols-3 lg:gap-2 max-w-5xl lg:mx-auto lg:px-4 lg:space-x-0 lg:pb-0 lg:snap-none lg:pl-0 lg:pr-0 justify-items-center-safe`}
      >
        {propertiesToDisplay.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
        {propertiesToDisplay.length === 0 && (
          <div className="w-full text-center py-10 lg:col-span-3">
            <p className="text-gray-500">
              No properties found for this category.
            </p>
          </div>
        )}
        <div className="flex-shrink-0 w-1 snap-end lg:hidden" />
      </div>
    </section>
  );
};
