import { people1, people2, executivesData } from '@/data/teamData'
import React from 'react'
import Image from "next/image";
export default function Team() {
  return (
    <div>
        <div className=' text-3xl font-semibold flex w-screen justify-center cursor-default'>
          <h1>
            OUR TEAM
          </h1>
        </div>
        <div className=' flex justify-center sm:gap-20 gap-10 p-4 sm:mt-10 mt-2 '>
          {people1.map((eachPerson) => (
            <div className='font-medium'> 
              <div className='flex justify-center overflow-hidden sm:rounded-2xl rounded-full'>
                  {/* <img className=' sm:h-[300px] h-[130px]  sm:hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} /> */}
                  <Image 
                  alt='TeamMemberImage' 
                  layout="responsive" 
                  width={16} 
                  height={9} 
                  className='sm:h-[300px] sm:w-[200px] h-[130px] sm:hover:scale-[1.2] transition-transform duration-500' 
                  src="https://res.cloudinary.com/dx5dlghqe/image/upload/v1722053621/gwlfy7f9oi1hcbdlczki.jpg" />
              </div>
              <div className='text-xs sm:text-xl text-center p-4'>
                <h2 
                  className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default'
                  >
                  {eachPerson.name}
                </h2>
                <h2 
                  className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default'
                  >
                  {eachPerson.position}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className='justify-items-center sm:gap-20 gap-10 p-4 m-2 sm:mt-20 mt-5 grid grid-cols-4'>
          {people2.map((eachPerson) => (
            <div className='font-medium'> 
              <div className='flex justify-center overflow-hidden sm:rounded-2xl rounded-full'>
                {/* <img className=' sm:h-[300px] h-[130px] sm:hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} /> */}
                <Image 
                alt='TeamMemberImage' 
                layout="responsive" 
                width={16} 
                height={9} 
                className='sm:h-[300px] sm:w-[200px] h-[130px]  sm:hover:scale-[1.2] transition-transform duration-500' 
                src="https://res.cloudinary.com/dx5dlghqe/image/upload/v1722053621/gwlfy7f9oi1hcbdlczki.jpg" />
              </div>
              <div className='text-xs sm:text-xl  text-center p-4'>
                <h2 
                  className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default'
                  >
                  {eachPerson.name}
                </h2>
                <h2 
                  className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default'
                  >
                  {eachPerson.position}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-8 mr-8 border-t-2 border-dashed border-white-600 pt-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
          {executivesData.map((dept, index) => (
            <div key={dept.name} className="p-4">
              <h2 className="text-xl text-center font-bold mb-2">{dept.name}</h2>
              <ul className={`
                text-center
                ${index % 3 === 0 ? 'md:text-left' : ''}
                ${index % 3 === 1 ? 'md:text-center' : ''}
                ${index % 3 === 2 ? 'md:text-right' : ''}
              `}>
                {dept.people.map((person) => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
    
  )
}
