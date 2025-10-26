import React from "react";
import Image from "next/image";

const InfiniteScrollBrand = () => {
  const logos = [
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722239365/dolfy_okslvf.png", alt: "Dolfy Learning" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722239908/awsap-modify_ogpqgc.jpg", alt: "Download" },
    { src:"https://res.cloudinary.com/djhilzrxt/image/upload/v1722794702/Uno_eo5gl6.jpg",alt:"uno"},
    {src:"https://res.cloudinary.com/dzvdh7yez/image/upload/v1724785424/pizza_hut_yss9fg.png",alt:"pizza hut"},
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238954/festa-new_h4sim3.jpg", alt: "Festa Marketing" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238970/idp-new_iqlzgc.png", alt: "IDP" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238968/meta_space_xhg8di.png", alt: "Meta Space" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238965/momentum_ias_ptmdje.png", alt: "Momentum IAS" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238948/programming_pathshala_new_cpoipf.jpg", alt: "Programming Pathshala" },
    { src: "https://res.cloudinary.com/djhilzrxt/image/upload/v1722794668/Zenzia_tfxldh.jpg",alt:"zenzia"},
    { src: "https://res.cloudinary.com/dbokcixdi/image/upload/v1761488505/Unstop_Logo_r4ebyi.png",alt:"Unstop"},
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317178/social-media-default-screen_afwm4g.jpg", alt: "Krafton India" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317178/YTCJwDgo_400x400_gib8gq.jpg", alt: "IEEE Smart Cities" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317178/wtn_logo_8_qh7tvv.png", alt: "kyndryl" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317178/the_belgian_waffle_co_logo_gnp6zd.jpg", alt: "The Belgian Waffle Co" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317178/stockedgelogoimage28102022144458_ra0sny.png", alt: "Stockedge" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317177/epyc_logo_dzluh8.jpg", alt: "EPYC" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317177/Mother_Dairy.svg_j84cj5.png", alt: "Mother Dairy" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317177/Social-Imagery-47_visg4h.webp", alt: "Unidays" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317177/CNCF_Community_Groups_Logo_2023_PRjuBUd_zvgrko.webp", alt: "Cloud Native Community groups" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317177/images_s3lguz.jpg", alt: "MapmyIndia" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756317176/360_F_238159412_HhVnn8jBWgYG9IoRSlPw2Iz5FMZz93CH_sly5np.jpg", alt: "Bistro" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756321734/reskilll_paqslv.png", alt: "Reskill" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756321570/Screenshot_2025-08-28_at_12.35.41_AM_eqnlbo.png", alt: "Launched Global" },
    { src: "https://res.cloudinary.com/dcvl4olut/image/upload/v1756318894/Microsoft-Azure-Logo_vvmcjr.png", alt: "Microsoft Azure" },
    
  ];

  return (
    <div className="mt-8 sm:mt-10 md:mt-14 overflow-hidden flex flex-col">
      <div className="flex items-center justify-center my-2 sm:my-3 md:my-4 py-2 sm:py-3 md:py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-white">TRUSTED BY</h2>
      </div>
      <div className="relative w-full overflow-hidden ">
        <div className="flex animate-marquee">
          <ul className="flex items-center space-x-6 sm:space-x-14 md:space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <li key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={96}
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
