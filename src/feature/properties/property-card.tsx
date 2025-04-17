import Image from "next/image";
import { PropertyTypeBadge } from "./property-type-badge";

interface PropertyCardProps {
  image: string;
  price: string;
  name: string;
  address: string;
  type: "HOUSE" | "APARTMENT";
}

const HeartShape = () => {
  return (
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
  );
};

export const PropertyCard = ({
  image,
  price,
  name,
  address,
  type,
}: PropertyCardProps) => (
  <div className="bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg w-72 flex-shrink-0 snap-center">
    <div className="relative">
      <Image
        width={192}
        height={192}
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg rounded-b-[0]"
      />
      <PropertyTypeBadge type={type} />
    </div>
    <div className="p-4 pt-6">
      <div className="flex justify-between items-center">
        <p className="text-indigo-600 text-lg">
          <span className="font-bold">{price}</span>
          <span className="text-gray-500 text-sm font-normal">/month</span>
        </p>
        <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-indigo-400 hover:text-indigo-600 hover:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1 focus:bg-indigo-100 active:bg-indigo-600 active:text-white active:border-indigo-600 transition-colors duration-150">
          <HeartShape />
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm overflow-hidden whitespace-nowrap text-ellipsis w-50">
        {address}
      </p>
    </div>
  </div>
);
