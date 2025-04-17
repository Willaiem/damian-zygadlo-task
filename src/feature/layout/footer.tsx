import Image from "next/image";

const footerLinks = ["HELP CENTER", "FAQ", "TERMS & PRIVACY"];

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <nav className="flex flex-col sm:flex-row sm:justify-between space-y-4 mb-8 w-full">
          <div className="text-2xl font-bold text-black mb-6 flex self-start">
            <Image
              width={32}
              height={32}
              src="/logo.svg"
              alt="Estatary Logo"
              className="w-8 h-8 mr-2 rounded"
            />
            Estatary
          </div>

          <div className="flex justify-center-safe space-x-24 max-sm:flex-wrap self-center max-md:max-w-[400px]">
            {footerLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-indigo-600 text-sm font-semibold tracking-wider transition-colors max-lg:my-4"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <hr className="w-full border-gray-300 mb-8" />
        <div className="w-full flex max-lg:flex-col items-center min-lg:justify-between">
          <p className="text-gray-500 text-sm mb-6">
            ©{new Date().getFullYear()} Estatery. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img
                src="/facebook_logo.svg"
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
                src="/instagram_logo.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img src="/twitter_logo.svg" alt="Twitter" className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <img
                src="/linkedin_logo.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
