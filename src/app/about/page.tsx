import React from 'react';
import PlaceholderCard from '../../components/PlaceHolderCard';
import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const AboutCSI: React.FC = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">ABOUT CSI</h2>
        <p className="mb-20 text-center">
          The Computer Society of India chapter at MAIT, founded in 2009,
          unites passionate students and faculty. They collaborate to <br className="hidden md:inline" /> explore
          new business ideas through open discussions, interactive sessions,
          and practical activities. This fosters critical thinking <br className="hidden md:inline" /> and equips
          members with valuable business skills.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5">
          <PlaceholderCard className="md:relative md:-top-5" />
          <PlaceholderCard className='md:relative md:top-20' />
          <PlaceholderCard className="md:relative md:top-5" />
        </div>
        <div className="mb-20 mt-60">
          <h2 className="text-4xl font-bold mb-12 text-center">VISION</h2>
          <p className="text-center max-w-2xl mx-auto">
            CSI envisions a future where innovation, education, and sustainable practices
            converge to elevate India's trajectory towards progress.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">MISSION</h2>
          <p className="text-center max-w-3xl mx-auto">
            Our mission revolves around orchestrating a myriad of initiatives: from comprehensive workshops
            and insightful seminars to dynamic awareness campaigns. These endeavors are meticulously
            designed to champion skill development, foster entrepreneurial spirit, and champion environmental
            conservation. Our dedication to these causes stems from a fervent belief in their capacity to catalyze
            national growth and prosperity.
          </p>
        </div>
         {/* Objectives Section */}
         <div className="mt-20 mt:gap-10">
          <h2 className="text-4xl font-bold mb-24 text-center">OBJECTIVES</h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-60 ">
            <div className="flex flex-col items-center max-w-xs">
              <div className="relative w-[250px] h-[200px] mb-4">
                <Image 
                  src="/about/image1.png" 
                  alt="Students collaborating" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="text-center">
                To cultivate students' interest in the field of management or commerce in a convivial environment, without the pressure of being graded.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <div className="relative w-[250px] h-[200px] mb-">
                <Image 
                  src="/about/image2.png"  
                  alt="Sustainable development" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="text-center">
                Commitment to Sustainable Development: Central to our mission is the creation of an environment that not only promotes innovation but also ensures sustainable progress.
              </p>
            </div>
          </div>
    </div>
    {/* About MATES Section */}
    <div className="mt-20">
    <h2 className="text-4xl font-bold mb-10 text-center">ABOUT MATES</h2>
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 relative mb-8">
        <Image
          src="/about/image3.png" 
          alt="MATES Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-center max-w-3xl mx-auto">
        Maharaja Agrasen Technical Education Society (MATES) is a charitable trust comprising a group of well-known Educationists, 
        Industrialists, Businessmen, Professionals, and Philanthropists with an aim to promote quality education in the field of Technology, 
        Management, Law, Pharmacy, and Health Services to shape the human society for a better future. With its constant growth and 
        consistent efforts, MATES has been able to keep up its commitment to serving the society and its people.
      </p>
    </div>
  </div>

{/* Contact Section */}
<div className="mt-20 md:mt-40 flex flex-col md:flex-row justify-between items-start mb-12 px-4 md:px-10 lg:px-20">
  <div className='w-full md:w-1/2 mb-8 md:mb-0'>
    <h3 className="text-xl md:text-2xl font-bold mb-6">CONTACT US</h3>
    <div className="flex items-center mb-4">
      <FaMapMarkerAlt className="mr-2" />
      <p className="text-sm md:text-base">Maharaja Agrasen Institute <br></br> Of Technology</p>
    </div>
    <div className="flex items-center mb-4">
      <FaEnvelope className="mr-2" />
      <p className="text-sm md:text-base">Email@Gmail.Com</p>
    </div>
    <div className="flex items-center">
      <FaPhone className="mr-2" />
      <p className="text-sm md:text-base">+91 9871010872</p>
    </div>
  </div>
  <div className="w-full md:w-1/6">
    <h3 className="text-lg md:text-xl font-bold mb-4">FOLLOW US ON</h3>
    <div className="flex space-x-4">
      <FaInstagram size={20} className="md:text-2xl" />
      <FaLinkedin size={20} className="md:text-2xl" />
    </div>
    <hr className='border my-4 md:my-5'></hr>
    <div className="mt-6 md:mt-8">
      <h3 className="text-lg md:text-xl font-bold mb-4">FOR MORE UPDATES</h3>
<a
      href="#"
      className="inline-flex items-center py-2 px-4 bg-slate-900 hover:bg-slate-700 focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 text-white rounded-md transition duration-300 text-sm md:text-base"
    >
      <svg className="w-8 h-8 fill-current mr-2" viewBox="0 0 24 24">
        <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
      </svg>
      <span>Subscribe</span>
    </a>
      </div>
    </div>
  </div>
</div>

{/* Footer */}
<hr className='border my-2'></hr>
<footer className="text-white text-center py-2">
  <div className="flex-grow mt-3"></div>
  <p className='text-sm md:text-base'>COPYRIGHT © 2024 CSI-INNOVATION</p>
  {/* <div className="flex-grow"></div> */}
</footer>
</div>


  );
};

export default AboutCSI;