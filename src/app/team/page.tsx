import React from 'react'
import { people1, people2  } from '@/data/teamData'

export default function team() {
  
// Convert the array to a JSON string
// const peopleJSON = JSON.stringify(people, null, 2);

// // Output the JSON string
// console.log(peopleJSON);


  return (
    <div>
      {/* Heading - Our Team */}
      <div className=' text-3xl font-semibold flex w-screen justify-center cursor-default'>
        <h1>
          OUR TEAM
        </h1>
      </div>
      {/* 1st row - 3 pics */}
      <div className=' flex justify-center gap-20 p-4 mt-10 '>
        {people1.map((eachPerson) => (
          <div className=' text-center font-medium'> 
            <div className=' overflow-hidden rounded-3xl'>
              <img className=' h-[300px] rounded-2xl hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} />
            </div>
            <div className=' p-4'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default' >{eachPerson.name}</h2>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default'>{eachPerson.position}</h2>
            </div>
          </div>
        ))}
      </div>
      {/* 2nd row - leftout pics */}
      <div className='justify-items-center gap-20 p-4 m-2 mt-20 grid grid-cols-4 '>
        {people2.map((eachPerson) => (
          <div className=' text-center font-medium'> 
            <div className=' overflow-hidden rounded-3xl'>
              <img className='h-[300px] rounded-2xl hover:scale-[1.2] transition-transform duration-500' src={eachPerson.image_source} />
            </div>
            <div className=' p-4'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800 cursor-default' >{eachPerson.name}</h2>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300 cursor-default' >{eachPerson.position}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
