import { link } from "fs";
import { Linkedin } from "lucide-react";

export interface Person {
    id?: number;
    image_source?: string;
    name: string;
    position?: string;
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
            "https://res.cloudinary.com/dop6gul0f/image/upload/v1754420295/saksham_gupta_pkpr36.jpg",
        name: "Saksham Gupta",
        position: "Chairperson",
        links: {
            linkedin: "https://www.linkedin.com/in/saksham-gupta-057669126/",
        },
    },
    {
        id: 2,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Vidhi_Jain-fotor-20240805204258_f1s3wi.jpg",
        name: "Vidhi Jain",
        position: "Vice-Chairperson",
        links: {
            linkedin: "https://www.linkedin.com/in/vidhi-jain-vee27032004/",
        },
    },
    {
        id: 3,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Saksham_Agarwal-fotor-2024080520410_g3ug6h.jpg",
        name: "Saksham Aggarwal",
        position: "Secretary",
        links: {
            linkedin: "https://www.linkedin.com/in/saksham-aggarwal-6b9276260/",
        },
    },
    {
        id: 4,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871010/Ansh_Malik-fotor-20240805203113_cvukvu.jpg",
        name: "Ansh Malik",
        position: "Joint Secretary",
        links: {
            linkedin: "https://www.linkedin.com/in/ansh-malik-b476b0261/",
        },
    },
    {
        id: 5,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871023/Prajjwal_Sharma-fotor-20240805204020_q4dq1z.jpg",
        name: "Prajjwal Sharma",
        position: "Technical Head",
        links: { linkedin: "https://www.linkedin.com/in/prajjwaldev/" },
    },
    {
        id: 6,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871007/Aryan_Dutta-fotor-20240805203429_aqpw49.jpg",
        name: "Aryan Dutta",
        position: "Content Head",
        links: {
            linkedin: "https://www.linkedin.com/in/aryan-dutta-134b66257/",
        },
    },
    {
        id: 7,
        image_source:
            "https://res.cloudinary.com/dop6gul0f/image/upload/v1754420295/nipun_fu2mzz.jpg",
        name: "Nipun Agrawal",
        position: "Treasurer",
        links: { linkedin: "" },
    },
    {
        id: 8,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871022/Yash_Gupta-fotor-2024080520447_tmuw7q.jpg",
        name: "Yash Gupta",
        position: "Advisor",
        links: { linkedin: "" },
    },
    {
        id: 9,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871021/Naman_Mangla-fotor-20240805203952_xkpys2.jpg",
        name: "Naman Mangla",
        position: "PR Head",
        links: {
            linkedin: "https://www.linkedin.com/in/naman-mangla-533aa9246/",
        },
    },
    {
        id: 11,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871020/Vidit_Kaushik-fotor-20240805204338_gyktgs.jpg",
        name: "Vidit Kaushik",
        position: "Logistics and Hospitality Head",
        links: {
            linkedin: "https://www.linkedin.com/in/vidit-kaushik-92618b2b5/",
        },
    },
];

export interface Department {
    name: string;
    leads: Person[];
    people: Person[];
}

export const executivesData: Department[] = [
    {
        name: "Event Management Executives",
        leads: [{ name: "", links: { linkedin: "" } }],
        people: [
            {
                name: "Parthsaarthie Sharma",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/parthsaarthie-sharma/",
                },
            },
            { name: "Bhumi Rajbhar", links: { linkedin: "" } },
            {
                name: "Yakshit Wadhwa",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/yakshit-wadhwa-52246228b/",
                },
            },
            { name: "Ashwani Kumar", links: { linkedin: "" } },
            {
                name: "Naveen Verma",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/naveen-verma-396b93276/",
                },
            },
            {
                name: "Nikhil Hatwal",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/nikhil-hatwal-932b952b3/",
                },
            },
            {
                name: "Niyati Chugh",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/niyati-chugh-8098a1286/",
                },
            },
            {
                name: "Dhruv Mehra",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/dhruv-mehra-1b2742315/",
                },
            },
            {
                name: "Parth Goel",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/parth-goel-0512a82b0/",
                },
            },
            {
                name: "Liesha",
                links: {
                    linkedin: "https://www.linkedin.com/in/liesha-gupta/",
                },
            },
            {
                name: "Tinish",
                links: {
                    linkedin: "https://www.linkedin.com/in/tinish-k-550aa32a3/",
                },
            },
            { name: "Krish", links: { linkedin: "" } },
            { name: "Devansh Malik", links: { linkedin: "" } },
            { name: "Yatin Kumar", links: { linkedin: "" } },
            { name: "Krish Vishwakarma", links: { linkedin: "" } },
            { name: "Tiya Arora", links: { linkedin: "" } },
            { name: "Arjun Jain", links: { linkedin: "" } },
            { name: "Aniket Gupta", links: { linkedin: "" } },
            { name: "Navya Gupta", links: { linkedin: "" } },
            { name: "Sidhant Malik", links: { linkedin: "" } },
        ],
    },
    {
        name: "Public Relations Executives",
        leads: [
            {
                name: "Naman Mangla",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/naman-mangla-533aa9246/",
                },
            },
        ],
        people: [
            {
                name: "Rishabh Tripathi",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/rishabh-tripathi-9985aa319/",
                },
            },
            {
                name: "Kashvi Sharma",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/kashvi-sharma-27063523b/",
                },
            },
            { name: "Tanisha Bihani", links: { linkedin: "" } },
            {
                name: "Garv Goel",
                links: { linkedin: "https://www.linkedin.com/in/garv-goel/" },
            },
            { name: "Mridul Pandey", links: { linkedin: "" } },
            {
                name: "Anmol Kumar",
                links: {
                    linkedin: "https://www.linkedin.com/in/anmolkumar05/",
                },
            },
            { name: "Pari Goel", links: { linkedin: "" } },
            { name: "Paarth Chhabra", links: { linkedin: "" } },
            { name: "Bhavit Anand", links: { linkedin: "" } },
            { name: "Shreya Chaudhary", links: { linkedin: "" } },
            { name: "Harsh Manocha", links: { linkedin: "" } },
            { name: "Harshit", links: { linkedin: "" } },
            { name: "Sahib Singh Sodhi", links: { linkedin: "" } },
            { name: "Yashmit Kamal", links: { linkedin: "" } },
            { name: "Gunjika Adhikari", links: { linkedin: "" } },
            { name: "Nishtha Jain", links: { linkedin: "" } },
        ],
    },
    {
        name: "Social Media and Photography Executives",
        leads: [{ name: "", links: { linkedin: "" } }],
        people: [
            { name: "Lakshay Gupta", links: { linkedin: "" } },
            { name: "Daksh Dua", links: { linkedin: "" } },
            { name: "Pradyumn Kumar", links: { linkedin: "" } },
            { name: "Ridhi Garg", links: { linkedin: "" } },
            { name: "Ansh Chaudhary", links: { linkedin: "" } },
            { name: "Lakshay Jain", links: { linkedin: "" } },
            { name: "Vansh Nanda", links: { linkedin: "" } },
            { name: "Reva Verma", links: { linkedin: "" } },
        ],
    },
    {
        name: "Content Executives",
        leads: [
            {
                name: "Aryan Dutta",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/aryan-dutta-134b66257/",
                },
            },
        ],
        people: [
            {
                name: "Shubham Jha",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/shubham-jha-a37a49263/",
                },
            },
            {
                name: "Yash",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/yash-yash-b941742b9/",
                },
            },
            { name: "Krish Anand", links: { linkedin: "" } },
            { name: "Aarav Singh", links: { linkedin: "" } },
            { name: "Kareena Grover", links: { linkedin: "" } },
            { name: "Ashutosh", links: { linkedin: "" } },
            { name: "Aryan Kaushik", links: { linkedin: "" } },
            { name: "Suhani Gupta", links: { linkedin: "" } },
            { name: "Richa Garg", links: { linkedin: "" } },
        ],
    },
    {
        name: "Logistics and Hospitality Executives",
        leads: [
            {
                name: "Vidit Kaushik",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/vidit-kaushik-92618b2b5/",
                },
            },
        ],
        people: [
            { name: "Hari Pratap", links: { linkedin: "" } },
            { name: "Vipin Sharma", links: { linkedin: "" } },
            { name: "Mayank", links: { linkedin: "" } },
            { name: "Somya", links: { linkedin: "" } },
            { name: "Suvir Sarabhai", links: { linkedin: "" } },
            { name: "Prathak Gupta", links: { linkedin: "" } },
            { name: "Piyush Kar", links: { linkedin: "" } },
            { name: "Juhi", links: { linkedin: "" } },
            { name: "Sushant Rishi", links: { linkedin: "" } },
            { name: "Hansika Gupta", links: { linkedin: "" } },
            { name: "Avani Basra", links: { linkedin: "" } },
        ],
    },
];

export interface TechnicalDepartment {
    name: string;
    leads: Person[];
    people?: Person[];
}

export const TechinalDeptData: TechnicalDepartment[] = [
    /* There must be only one lead per team in Technical Department */
    {
        name: "Dev Team",
        leads: [{ name: "", links: { linkedin: "" } }],
        people: [
            //{ name: "Vrishank Sharma", links: { linkedin: ""} },
            { name: "Kumar Harsh", links: {linkedin: "https://www.linkedin.com/in/kharsh560/" } },
            { name: "Adarsh Singh", links: {linkedin: ""} },
        //{ name: "Ashish", links: {linkedin: "https://www.linkedin.com/in/ashish-k-750815316/"} }
        ],
    },
    {
        name: "Research Team",
        leads: [
            {
                name: "Joyal Jijo",
                links: { linkedin: "https://www.linkedin.com/in/joyal-jijo/" },
            },
        ],
        people: [
            {
                name: "Pratham Gupta",
                links: {
                    linkedin: "https://www.linkedin.com/in/prathamgupta006/",
                },
            },
            { name: "Ashish", links: { linkedin: "" } },
            { name: "Vrishank Sharma", links: { linkedin: "" } },
            { name: "Kshitij", links: { linkedin: "" } },
        ],
    },
    {
        name: "ML Team",
        leads: [
            {
                name: "Gaurish Kadian",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/gaurish-kadian-087172258/",
                },
            },
        ],
        people: [
            {
                name: "Ayan Gairola",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/ayan-gairola-a18a59189/",
                },
            },
            {
                name: "Aditi",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/aditi-karn-29b5a6245/",
                },
            },
        ],
    },
    {
        name: "Technical Team",
        leads: [
            {
                name: "Prajjwal Sharma",
                links: { linkedin: "https://www.linkedin.com/in/prajjwaldev/" },
            },
        ],
        people: [
            { name: "Aryan Kaushik", links: { linkedin: "" } },
            {
                name: "Akshit Malia",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/akshit-malia-6b35b0256/",
                },
            },
            { name: "Anish Sabharwal", links: { linkedin: "" } },
            { name: "Lakshit Goyal", links: { linkedin: "" } },
            { name: "Chaitanya Kumar Jadaun", links: { linkedin: "" } },
            { name: "Chirag Rajput", links: { linkedin: "" } },
            {
                name: "Dakshata",
                links: { linkedin: "https://www.linkedin.com/in/daky2024/" },
            },
        ],
    },
];

export default executivesData;
