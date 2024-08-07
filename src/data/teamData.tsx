export interface Person {
  id: number,
  image_source: string;
  name: string;
  position: string;
}

 export const people1: Person[] = [
  {
    id: 1,
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131248/csi/team/llgn4s6xwckilkumschq.png",
    name: "Prof. Neelam Sharma",
    position: "Patron",
  },
  {
    id: 2,
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131288/csi/team/ov4sqvmtmkqejhvyufag.png",
    name: "Prof. S.S. Deswal",
    position: "Patron",
  },
  {
    id: 3,
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/bttwzako6b0qhvhm2xmi.jpg",
    name: "Prof. Sachin Gupta",
    position: "Patron",
  },
  {
    id:4,
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/zbnwrkews8ahtnavdjcj.jpg",
    name: "Dr. Vinay Kumar Saini",
    position: "Faculty Coordinator",
  },
  {
    id: 5,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722872645/zisr7smueyjxu6nhgkui.jpg",
    name: "Prof. Bhaskar Kapoor",
    position: "Faculty Coordinator",
  },
  {
    id: 6,
    image_source: "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1716394844/CSI%20Website/Team/dkafmzugaexyltcxcjrb.png",
    name: "Mr. Arun Garg",
    position: "Mentor",
  },
];

// CSI_Head_Members_Pics
export const people2: Person[] = [
  {
    id: 1,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871013/KPA_Dharmanshu_Mahajan-fotor-2024080520398_vqe41z.jpg",
    name: "KPA Dharmanshu Mahajan",
    position: "Advisor",
  },
  {
    id:2,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871007/Asmi_Goyal-fotor-20240805203659_yqrmqg.jpg",
    name: "Asmi Goyal",
    position: "Advisor",
  },
  {
    id:3,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871010/Aryan_Goyal-fotor-2024080520351_xyscdc.jpg",
    name: "Aryan Goyal",
    position: "Advisor",
  },
  {
    id:4,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Jain-fotor-20240805204147_tzo4za.jpg",
    name: "Saksham Gupta",
    position: "Chairperson",
  },
  {
    id: 5,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Vidhi_Jain-fotor-20240805204258_f1s3wi.jpg",
    name: "Vidhi Jain",
    position: "Vice-Chairperson",
  },
  {
    id: 6,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Agarwal-fotor-2024080520410_g3ug6h.jpg",
    name: "Saksham Agarwal",
    position: "Secretary",
  },
  {
    id: 7,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871022/Yash_Gupta-fotor-2024080520447_tmuw7q.jpg",
    name: "Yash Gupta",
    position: "Joint Secretary",
  },
  {
    id: 8,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871023/Prajjwal_Sharma-fotor-20240805204020_q4dq1z.jpg",
    name: "Prajjwal Sharma",
    position: "Technical Head",
  },
  {
    id: 9, 
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871007/Aryan_Dutta-fotor-20240805203429_aqpw49.jpg",
    name: "Aryan Dutta",
    position: "Content Head",
  },
  {
    id: 10, 
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Deven_Puri-fotor-20240805203737_ybb2sd.jpg",
    name: "Deven Puri",
    position: "Event Managemet Head"
  },
  {
    id: 11,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871010/Ansh_Malik-fotor-20240805203113_cvukvu.jpg",
    name: "Ansh Malik",
    position: "PR Co-Head"
  },
  {
    id: 12, 
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871021/Naman_Mangla-fotor-20240805203952_xkpys2.jpg",
    name: "Naman Mangla",
    position: "PR Co-Head"
  },
  {
    id: 13, 
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871025/Harsh_Maurya-fotor-20240805203831_ovylt1.jpg",
    name: "Harsh Maurya",
    position: "Photography Head"
  },
  {
    id: 14,
    image_source: "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871020/Vidit_Kaushik-fotor-20240805204338_gyktgs.jpg",
    name: "Vidit Kaushik",
    position: "Coordiator Head"
  }
]

export interface Department {
  name: string;
  leads: string[];
  people: string[];
}

export const executivesData: Department[] = [
  {
    name: "Event Management Executives",
    leads: ["Deven Puri"],
    people: ["Dhruv Mehra", "Lakshay Sharma", "Naveen Verma", "Nikhil Hatwal", "Niyati Chugh", "Ritvik Kant", "Samya Goel", "Shashwat Shankar", "Tinish", "Yash Lohia"]
  },
  {
    name: "Public Relations Executives",
    leads: ["Ansh Malik", "Naman Mangla",],
    people: [
      "MD Azam Siddiqui",
      "Dhruv Goel",
      "Tanishq Sethi",
      "Garv Goel",
      "Priyaanshu Sengupta",
      "Sameer Koli",
      "Samaksh Bhagi",
      "Jiya",
      "Kashvi Sharma",
      "Shubham Mishra",
      "Rishabh Tripathi",
      "Sidhant Kumar"
  ]
  },
  {
    name: "Photography Executives",
    leads: ["Harsh Maurya"],
    people: ["Mridul Dutta", "Nipun Agrawal", "Vansh Puri"]
  },
  {
    name: "Content Executives",
    leads: ["Aryan Dutta"],
    people: [
      "Moksh",
      "Sarthak Rawat",
      "Yash",
      "Ujjawal Gupta",
      "MOHD KAIF",
      "Kanika Ahlawat",
      "Shubham Jha",
      "Ashish Jain"
  ]
  
  },
  {
    name: "Coordinators",
    leads: ["Vidit"],
    people: [
      "Komal Tyagi",
      "Muskan",
      "Parth Goel",
      "Parthsaarthie Sharma",
      "Vishankh",
      "Ravi Kumar",
      "Ayush Sinha",
      "Harshit Goel",
      "Yakshit Wadhwa"
  ]
  
  }
];

export interface TechnicalDepartment {
  name: string;
  lead: string;
  people: string[];
}

export const TechinalDeptData: TechnicalDepartment[] = [
  {
    name: "Dev Team",
    lead: "Joyal Jijo",
    people: ["Adarsh Singh", "Ashish", "Kumar Harsh", "Vrishank Sharma"]
  },
  {
    name: "UI/UX Team",
    lead: "Tanishq Sagar",
    people: ["Suhani Duggal"]
  },
  {
    name: "ML Team",
    lead: "Gaurish Kadian",
    people: ["Nipun Agrawal", "Vansh Puri"]
  },
  {
    name: "DSA Team",
    lead: "Devesh Tuteja",
    people: [ "Pratham Gupta", "Nikita Bansal"]
  }
];


export default executivesData;