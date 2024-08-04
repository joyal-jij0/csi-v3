import { people1, people2, executivesData, TechinalDeptData } from "@/data/teamData";
import React from "react";
import Image from "next/image";
export default function Team() {
  return (
    <div>
        <div className=' sm:text-3xl text-2xl font-semibold flex w-screen justify-center px-5 cursor-default'>
          <h1>
            FACULTY COORDINATORS
          </h1>
        </div>
        {/* Nand Kishore Sir's Photo  */}
        <div className='flex flex-col w-screen items-center my-8'>
          <div className='overflow-hidden rounded-xl'>
            <img className=' opacity-85 rounded-xl h-auto sm:w-60 w-36  sm:hover:scale-[1.1] transition-all duration-500' src='https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131195/csi/team/k7in6h3xqjfzqr9dwcma.jpg' />
          </div>
          <div className='text-xs sm:text-xl text-center p-4'>
                <h2 
                  className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default'
                  >
                  Dr. Nand Kishore Garg
                </h2>
                <h2 
                  className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default'
                  >
                  Chief Patron
                </h2>
              </div>
        </div>
        {/* First row of rest of the faculty coordinators pics */}
        <div className=' justify-items-center sm:gap-10 sm:grid sm:grid-cols-3 grid-cols-1 '>
          {people1.map((eachPerson) => (
            <div key={eachPerson.id} className='font-medium'> 
              <div className='flex justify-center overflow-hidden rounded-full'>
                  <img className='h-auto sm:w-60 w-36 rounded-full sm:hover:scale-[1.1] transition-transform duration-500' src={eachPerson.image_source} />
                  {/* <Image 
                  alt='TeamMemberImage' 
                  layout="responsive" 
                  width={16} 
                  height={9} 
                  className='sm:min-h-[300px] sm:w-[200px] min-h-[130px]  sm:hover:scale-[1.2] transition-transform duration-500' 
                  src="https://res.cloudinary.com/dx5dlghqe/image/upload/v1722053621/gwlfy7f9oi1hcbdlczki.jpg" /> */}
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
        {/* Second row of multiple pics of core student team members */}
        <div className=' sm:text-3xl text-2xl font-semibold flex w-screen justify-center px-5 mt-10 cursor-default'>
          <h1>
            OUR TEAM
          </h1>
        </div>
        {/* Earlier, the div below had this class:- {className='justify-items-center sm:gap-20 gap-10 p-4 m-2 sm:mt-20 mt-5 grid grid-cols-4'} */}
        <div className='justify-items-center sm:gap-10 gap-10 mt-10 sm:grid sm:grid-cols-4 grid-cols-1'>
          {people2.map((eachPerson) => (
            <div key={eachPerson.id} className='font-medium'> 
              <div className='flex justify-center overflow-hidden sm:rounded-2xl rounded-xl '>
                {/* sm:w-[150px] sm:h-[220px] h-[130px] w-[80px] */}
                {/* Upon simply writing "w-35" mobile version width changes! And that in "sm:w-50" changes bigger screen's width */}
                <img className='h-auto sm:w-50 w-36 sm:hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} />
                {/* <div className='sm:h-fit sm:w-[150px] h-fit w-[80px]'>
                  <Image 
                  alt='TeamMemberImage' 
                  layout="responsive" 
                  width={16} 
                  height={9} 
                  className='sm:hover:scale-[1.2] transition-transform duration-500' 
                  src="https://res.cloudinary.com/dx5dlghqe/image/upload/v1722053621/gwlfy7f9oi1hcbdlczki.jpg" />
                </div> */}
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

        {/* Pratham's Code -> Bootom Most Row of rest of the team member's names */}
        {/* <div className="ml-8 mr-8 border-t-2 border-dashed border-white-600 pt-8"></div> */}
        <div className="justify-items-center mt-10">
          <h1 className="text-3xl font-semibold text-center p-5 cursor-default">Technical Executives</h1>
          <div className="grid grid-cols-1 sm:grid-cols-4">
            {TechinalDeptData.map((dept, index) => (
              <div key={dept.name} className="p-4">
                <ul className='text-center sm:text-center' >
                <h2 className="text-xl text-center font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-300 cursor-default">
                  {dept.name}
                </h2>
                  <li>
                      <h2 className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-yellow-600 to-yellow-100 cursor-default">
                        {dept.lead}
                      </h2>
                  </li>
                  {dept.people.map((person) => (
                    <li key={person}>
                      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-100 cursor-default">
                        {person}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          {executivesData.map((dept, index) => (
            <div key={dept.name} className="mt-10">
              <h1 className="text-3xl font-semibold text-center p-5 cursor-default">{dept.name}</h1>
              <ul className='text-center sm:text-center' >
                {
                  dept.leads.map((lead) => (
                    <li key={lead}>
                      <h2 className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-yellow-600 to-yellow-100 cursor-default">
                        {lead}
                      </h2>
                    </li>
                  ))
                }
                {dept.people.map((person) => (
                  <li key={person}>
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-100 cursor-default">
                      {person}
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  );
}