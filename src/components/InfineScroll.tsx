import React from "react";

const InfiniteScrollBrand = () => {
  const logos = [
    { src: "/company-logo/dolfy learning.jpeg", alt: "Dolfy Learning" },
    { src: "https://www.google-melange.com/archive/gsoc/2013/orgs/owasp/logo-200.png", alt: "Download" },
    { src: "/company-logo/festa-new.jpeg", alt: "Festa Marketing" },
    { src: "/company-logo/idp-new.png", alt: "IDP" },
    { src: "/company-logo/meta space'.png", alt: "Meta Space" },
    { src: "/company-logo/momentum ias.png", alt: "Momentum IAS" },
    { src: "/company-logo/programming pathshala new.jpeg", alt: "Programming Pathshala" },
  ];

  return (
    <div className="mt-8 sm:mt-10 md:mt-14 overflow-hidden flex flex-col">
      <div className="flex items-center justify-center my-2 sm:my-3 md:my-4 py-2 sm:py-3 md:py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-white">Trusted By</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          <ul className="flex items-center space-x-8 sm:space-x-12 md:space-x-20">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <li key={index} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-full" 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollBrand;