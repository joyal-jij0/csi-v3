export interface Person {
    id: number;
    image_source: string;
    name: string;
    position: string;
    links?: {
        twitter?: string;
        linkedin?: string;
    };
}

export const people1: Person[] = [
    {
        id: 1,
        image_source:
            "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131248/csi/team/llgn4s6xwckilkumschq.png",
        name: "Prof. Neelam Sharma",
        position: "Patron",
        links: {
            linkedin: "https://in.linkedin.com/in/prof-neelam-sharma-291792257",
        },
    },
    {
        id: 2,
        image_source:
            "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131288/csi/team/ov4sqvmtmkqejhvyufag.png",
        name: "Prof. S.S. Deswal",
        position: "Patron",
        links: {
            linkedin:
                "https://www.linkedin.com/in/prof-dr-satvir-deswal-b94079a",
        },
    },
    {
        id: 3,
        image_source:
            "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/bttwzako6b0qhvhm2xmi.jpg",
        name: "Prof. Sachin Gupta",
        position: "Patron",
        links: {
            linkedin: "https://www.linkedin.com/in/drsachingupta",
        },
    },
    {
        id: 4,
        image_source:
            "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/zbnwrkews8ahtnavdjcj.jpg",
        name: "Dr. Vinay Kumar Saini",
        position: "Faculty Coordinator",
        links: {
            linkedin: "https://www.linkedin.com/in/vinaykumarsaini",
        },
    },
    {
        id: 5,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722872645/zisr7smueyjxu6nhgkui.jpg",
        name: "Prof. Bhaskar Kapoor",
        position: "Faculty Coordinator",
        links: {
            linkedin: "https://in.linkedin.com/in/dr-bhaskar-kapoor-6b4b7819",
        },
    },
    {
        id: 6,
        image_source:
            "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1716394844/CSI%20Website/Team/dkafmzugaexyltcxcjrb.png",
        name: "Mr. Arun Garg",
        position: "Mentor",
        links: {
            linkedin: "https://www.linkedin.com/in/arungargofficial",
        },
    },
];

// CSI_Head_Members_Pics
export const people2: Person[] = [
    {
        id: 1,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Jain-fotor-20240805204147_tzo4za.jpg",
        name: "Saksham Gupta",
        position: "Chairperson",
    },
    {
        id: 2,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Vidhi_Jain-fotor-20240805204258_f1s3wi.jpg",
        name: "Vidhi Jain",
        position: "Vice-Chairperson",
    },
    {
        id: 3,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Agarwal-fotor-2024080520410_g3ug6h.jpg",
        name: "Saksham Agarwal",
        position: "Secretary",
    },
    {
        id: 4,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871022/Yash_Gupta-fotor-2024080520447_tmuw7q.jpg",
        name: "Yash Gupta",
        position: "Joint Secretary",
    },
    {
        id: 5,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871023/Prajjwal_Sharma-fotor-20240805204020_q4dq1z.jpg",
        name: "Prajjwal Sharma",
        position: "Technical Head",
    },
    {
        id: 6,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871007/Aryan_Dutta-fotor-20240805203429_aqpw49.jpg",
        name: "Aryan Dutta",
        position: "Content Head",
    },
    // {
    //     id: 7,
    //     image_source:
    //         "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Deven_Puri-fotor-20240805203737_ybb2sd.jpg",
    //     name: "Deven Puri",
    //     position: "Event Management Head",
    // },
    {
        id: 8,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871010/Ansh_Malik-fotor-20240805203113_cvukvu.jpg",
        name: "Ansh Malik",
        position: "PR Co-Head",
    },
    {
        id: 9,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871021/Naman_Mangla-fotor-20240805203952_xkpys2.jpg",
        name: "Naman Mangla",
        position: "PR Co-Head",
    },
    {
        id: 10,
        image_source:
            "https://res.cloudinary.com/du0mba5mz/image/upload/v1727416816/CSI/6321017259627233825_kotexk.jpg",
        name: "Harsh Maurya",
        position: "Photography Head",
    },
    {
        id: 11,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871020/Vidit_Kaushik-fotor-20240805204338_gyktgs.jpg",
        name: "Vidit Kaushik",
        position: "Coordiator Head",
    },
];

export interface Department {
    name: string;
    leads: string[];
    people: string[];
}

export const executivesData: Department[] = [
    {
        name: "Event Management Executives",
        leads: ["Deven Puri"],
        people: [
            "Parthsaarthie Sharma",
            "Shashwat Shankar",
            "Yakshit Wadhwa",
            "Lakshay Sharma",
            "Naveen Verma",
            "Nikhil Hatwal",
            "Niyati Chugh",
            "Dhruv Mehra",
            "Parth Goel",
            "Liesha",
            "Tinish",
            "Vidit",
        ],
    },
    {
        name: "Public Relations Executives",
        leads: ["Ansh Malik", "Naman Mangla"],
        people: [
            "Priyaanshu Sengupta",
            "Rishabh Tripathi",
            "Kashvi Sharma",
            "Dhruv Goel",
            "Garv Goel",
            "Neeyati",
            "Anmol",
        ],
    },
    {
        name: "Photography Executives",
        leads: ["Harsh Maurya"],
        people: ["Nipun Agrawal", "Mridul Dutta", ],
    },
    {
        name: "Content Executives",
        leads: ["Aryan Dutta"],
        people: [
            "Shubham Jha",
            "Yash",
        ],
    },
];

export interface TechnicalDepartment {
    name: string;
    lead: string;
    people?: string[];
}

export const TechinalDeptData: TechnicalDepartment[] = [
    {
        name: "Dev Team",
        lead: "Adarsh Singh",
        people: [
            "Vrishank Sharma",
            "Kumar Harsh",
            "Arpan Taneja",
            "Aditya Singh",
            "Ashish",
        ],
    },
    {
        name: "Research Team",
        lead: "Joyal Jijo",
        people: ["Pratham Gupta"]
    },
    {
        name: "ML Team",
        lead: "Gaurish Kadian",
        people: ["Ayan Gairola","Aditi"],
    },
    {
        name: "DSA Team",
        lead: "Devesh Tuteja",
        people: ["Nikita Bansal"],
    },
];

export default executivesData;
