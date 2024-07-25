import React from 'react'

export default function team() {

  interface Person {
  image_source: string;
  name: string;
  position: string;
}


  const people1: Person[] = [
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "John Doe",
    position: "Software Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Jane Smith",
    position: "Product Manager",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Alice Johnson",
    position: "Data Scientist",
  },
];

const people2: Person[] = [
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Bob Brown",
    position: "UX Designer",
  },
  {
    image_source: "https://img.freepik.com/premium-photo/young-male-digital-marketer-stands-confidently-his-office-smiling-proudly_927165-1874.jpg",
    name: "Charlie White",
    position: "QA Engineer",
  },
]

// Convert the array to a JSON string
// const peopleJSON = JSON.stringify(people, null, 2);

// // Output the JSON string
// console.log(peopleJSON);


  return (
    <div>
      {/* Heading - Our Team */}
      <div className=' text-3xl font-semibold flex w-screen justify-center'>
        <h1>
          OUR TEAM
        </h1>
      </div>
      {/* 1st row - 3 pics */}
      <div className=' flex justify-center gap-20 p-4 mt-10 '>
        {people1.map((eachPerson) => (
          <div className=' text-center font-medium'> 
            <img className=' h-[300px] rounded-2xl' src={eachPerson.image_source} />
            <div className=' p-4'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800' >{eachPerson.name}</h2>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300'>{eachPerson.position}</h2>
            </div>
          </div>
        ))}
      </div>
      {/* 2nd row - leftout pics */}
      <div className='justify-items-center gap-20 p-4 m-2 mt-20 grid grid-cols-4 '>
        {people2.map((eachPerson) => (
          <div className=' text-center font-medium'> 
            <img className=' h-[300px] rounded-2xl' src={eachPerson.image_source} />
            <div className=' p-4'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-rose-800' >{eachPerson.name}</h2>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-300' >{eachPerson.position}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  )
}
