import { AnimatedElement } from "../animations/AnimatedElement";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative lg:bg-gradient-to-r from-white via-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:pb-16 max-lg:pb-0 relative z-10 lg:flex lg:items-center">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-12">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Buy, rent, or sell <br /> your property easily
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-lg md:text-xl text-gray-700 text-balance mb-10 max-w-lg mx-auto lg:mx-0">
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>
          </AnimatedElement>

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
      </div>

      <div className="relative mt-[-4rem] lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:flex items-center justify-center lg:justify-end px-4 lg:px-0">
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
    </section>
  );
};
