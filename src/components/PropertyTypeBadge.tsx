import React from "react";

interface PropertyTypeBadgeProps {
  type: "HOUSE" | "APARTMENT";
}

const Triangle = () => (
  <div
    className="absolute left-1 -bottom-[3px] w-0 h-0"
    style={{
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: "6px solid #4f46e5", // Match bg-indigo-600
      transform: "rotate(225deg)",
      left: "2px",
    }}
  />
);

export const PropertyTypeBadge: React.FC<PropertyTypeBadgeProps> = ({
  type,
}) => {
  return (
    <div className="absolute bottom-0 left-[-8] translate-y-1/2 z-10">
      <div className="relative inline-flex items-center bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide shadow">
        <img
          src="/property_card_icon.svg"
          className="w-4 h-4 mr-1.5"
          aria-hidden="true"
        />
        {type}
        <Triangle />
      </div>
    </div>
  );
};
