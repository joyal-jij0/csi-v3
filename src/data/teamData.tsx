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
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758195698/IMG-20250222-WA0058_gukbd4_e92076.jpg",
        name: "Nikhil Hatwal",
        position: "Chairperson",
        links: {
            linkedin: "https://www.linkedin.com/in/nikhil-hatwal-932b952b3/",
        },
    },
    {
        id: 2,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758195769/IMG-20250918-WA0017_nzrgsw_bdafd3.jpg",
        name: "Vidit Kaushik",
        position: "Vice-Chairperson",
        links: {
            linkedin: "https://www.linkedin.com/in/vidit-kaushik-92618b2b5/",
        },
    },
    {
        id: 3,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758195833/IMG-20250909-WA0116_qiyvza_5aeb62.jpg",
        name: "Kashvi Sharma",
        position: "Secretary",
        links: {
            linkedin: "https://www.linkedin.com/in/kashvi-sharma-27063523b/",
        },
    },
    {
        id: 4,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758443965/WhatsApp_Image_2025-09-21_at_14.09.10_vuuvfg.jpg",
        name: "Yash",
        position: "Joint Secretary",
        links: {
            linkedin: "https://www.linkedin.com/in/yash243/",
        },
    },
    {
        id: 5,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758196041/Nipun_unu254_b0991d.jpg",
        name: "Nipun Agrawal",
        position: "Treasurer",
        links: { linkedin: "https://www.linkedin.com/in/nipun-agrawal-527168266/" },
    },
    {
        id: 6,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758195576/Pratham_Gupta_qht7c1.jpg",
        name: "Pratham Gupta",
        position: "Technical Head",
        links: { linkedin: "https://www.linkedin.com/in/prathamgupta006/" },
    },
    {
        id: 7,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758211274/Screenshot_2025-09-18_213054_f2tkwy.png",
        name: "Shubham Jha",
        position: "Content Head",
        links: {
            linkedin: "https://www.linkedin.com/in/shubham-jha-a37a49263/",
        },
    },
    {
        id: 8,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758209858/Rishabh_final_2_toql10_98af6c.jpg",
        name: "Rishabh Tripathi",
        position: "PR Head",
        links: {
            linkedin: "https://www.linkedin.com/in/rishabh-tripathi-9985aa319/",
        },
    },
    {
        id: 9,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758197080/Niyati_zdq75z_34962e.jpg",
        name: "Niyati Chugh",
        position: "Event Management Head",
        links: {
            linkedin: "https://www.linkedin.com/in/niyati-chugh-8098a1286/",
        },   
    },
    {
        id: 10,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758197130/Dhruv_ypi5cm_a9a469.jpg",
        name: "Dhruv Mehra",
        position: "Event Management Head",
        links: {
            linkedin: "https://www.linkedin.com/in/dhruv-mehra-1b2742315/",
        },   
    },
    {
        id: 11,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758197164/Bhumi_t7ltp9_3e033e.webp",
        name: "Bhumi Rajbhar",
        position: "Social Media and Photography Head",
        links: {
            linkedin: "https://www.linkedin.com/in/bhumi-rajbhar-292633291/",
        },   
    },
    {
        id: 12,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758197212/liesha_gupta_pryso1_0ac19b.jpg",
        name: "Liesha Gupta",
        position: "Social Media and Photography Head",
        links: {
            linkedin: "https://www.linkedin.com/in/liesha-gupta/",
        },   
    },
    {
        id: 13,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758196144/Ashwani_2_mn8spt_a066d0.jpg",
        name: "Ashwani Kumar",
        position: "Logistics and Hospitality Head",
        links: {
            linkedin: "https://www.linkedin.com/in/ashwani-kumar-21568b201/",
        },
    },
    {
        id: 14,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758197321/IMG-20250910-WA0068_zarlo6_be3469.jpg",
        name: "Parthsaarthie Sharma",
        position: "Logistics and Hospitality Head",
        links: {
            linkedin: "https://www.linkedin.com/in/parthsaarthie-sharma/",
        },   
    },
    {
        id: 15,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758197265/lakshay_g3rfnf_2bd269.jpg",
        name: "Lakshay Gupta",
        position: "Photography Head",
        links: {
            linkedin: "https://www.linkedin.com/in/lakshay-gupta-b189b0287/",
        },   
    },
    {
        id: 16,
        image_source:
            "https://res.cloudinary.com/dmwkrlwik/image/upload/v1758196524/Naveen_edited_damfmh.jpg",
        name: "Naveen Verma",
        position: "Data Head",
        links: {
            linkedin: "https://www.linkedin.com/in/naveen-verma-396b93276/",
        },   
    },
];

// CSI_Advisors_Pics
export const people3: Person[] = [
    {
        id: 1,
        image_source:
            "https://res.cloudinary.com/dop6gul0f/image/upload/v1754420295/saksham_gupta_pkpr36.jpg",
        name: "Saksham Gupta",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/saksham-gupta-057669126/",
        },
    },
    {
        id: 2,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871017/Vidhi_Jain-fotor-20240805204258_f1s3wi.jpg",
        name: "Vidhi Jain",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/vidhi-jain-vee27032004/",
        },
    },
    {
        id: 3,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871010/Ansh_Malik-fotor-20240805203113_cvukvu.jpg",
        name: "Ansh Malik",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/ansh-malik-b476b0261/",
        },
    },
    {
        id: 4,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871022/Yash_Gupta-fotor-2024080520447_tmuw7q.jpg",
        name: "Yash Gupta",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/thisisyashgupta/",
        },
    },
    {
        id: 5,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871007/Aryan_Dutta-fotor-20240805203429_aqpw49.jpg",
        name: "Aryan Dutta",
        position: "Advisor",
        links: { linkedin: "https://www.linkedin.com/in/aryan-dutta-134b66257/" },
    },
    {
        id: 6,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871023/Prajjwal_Sharma-fotor-20240805204020_q4dq1z.jpg",
        name: "Prajjwal Sharma",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/prajjwaldev/",
        },
    },
    {
        id: 7,
        image_source:
            "https://res.cloudinary.com/drt5gi5mx/image/upload/v1722871021/Naman_Mangla-fotor-20240805203952_xkpys2.jpg",
        name: "Naman Mangla",
        position: "Advisor",
        links: { linkedin: "https://www.linkedin.com/in/naman-mangla-533aa9246/" },
    },
    {
        id: 8,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758385745/joyal_p9ztey.jpg",
        name: "Joyal Jijo",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/joyal-jijo/",
        },
    },
    {
        id: 9,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758442968/WhatsApp_Image_2025-09-21_at_13.46.49_ihk9md.jpg",
        name: "Kumar Harsh",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/kharsh560/",
        },
    },
    {
        id: 10,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758385853/Aadarsh_axdu3k.jpg",
        name: "Adarsh singh",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/adarshsingh9540/",
        },   
    },
    {
        id: 11,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758442794/WhatsApp_Image_2025-09-21_at_13.46.48_jvzpsl.jpg",
        name: "Ashish",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/ashish-k-750815316/",
        },   
    },
    {
        id: 12,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758386009/ayan_b9mz4c.jpg",
        name: "Ayan Gairola",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/ayan-gairola-a18a59189/",
        },   
    },
    {
        id: 13,
        image_source:
            "https://res.cloudinary.com/dbokcixdi/image/upload/v1758443067/WhatsApp_Image_2025-09-21_at_13.46.49_1_rwntyj.jpg",
        name: "Parth",
        position: "Advisor",
        links: {
            linkedin: "https://www.linkedin.com/in/parth-goel-1208dg01/",
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
        name: "Technical Team",
        leads: [
            {
                name: "Pratham Gupta",
                links: { linkedin: "https://www.linkedin.com/in/prathamgupta006/" },
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
            { name: "Lakshit Goyal", links: { linkedin: "https://www.linkedin.com/in/lakshitgoyal12031984924333/" } },
            { name: "Kshitij Dahiya", links: { linkedin: "" } },
            { name: "Chaitanya Kumar Jadaun", links: { linkedin: "" } },
            { name: "Chirag Rajput", links: { linkedin: "https://www.linkedin.com/in/chirag-rajput-8b31602bb/" } },
            {
                name: "Dakshata",
                links: { linkedin: "https://www.linkedin.com/in/daky2024/" },
            },
            { name: "Ashi", links: { linkedin: "" } },
        ],
    },
    {
        name: "Event Management Executives",
        leads: [
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
        
        ],
        people: [
            /*{
                name: "Yakshit Wadhwa",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/yakshit-wadhwa-52246228b/",
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
                name: "Tinish",
                links: {
                    linkedin: "https://www.linkedin.com/in/tinish-k-550aa32a3/",
                },
            },*/
            { name: "Navya Gupta", links: { linkedin: "" } },
            { name: "Arjun Jain", links: { linkedin: "" } },
            { name: "Sidhant Malik", links: { linkedin: "" } },
            { name: "Yatin Kumar", links: { linkedin: "" } },
            { name: "Tiya Arora", links: { linkedin: "" } },
            { name: "Devansh Malik", links: { linkedin: "" } },
            { name: "Krish Mittal", links: { linkedin: "" } },
            { name: "Aniket Gupta", links: { linkedin: "" } },
            { name: "Krish Vishwakarma", links: { linkedin: "" } },
            { name: "Prathak Gupta", links: { linkedin: "" } },
        ],
    },
    {
        name: "Public Relations Executives",
        leads: [
            {
                name: "Rishabh Tripathi",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/rishabh-tripathi-9985aa319/",
                },
            },
        ],
        people: [
            { name: "Harshit", links: { linkedin: "" } },
            {
                name: "Shreya Chaudhary",
                links: { linkedin: "" },
            },
            { name: "Pari Goel", links: { linkedin: "" } },
            {
                name: "Bhavit Anand",
                links: {
                    linkedin: "",
                },
            },
            { name: "Mridul Pandey", links: { linkedin: "" } },
            { name: "Sahib Singh Sodhi", links: { linkedin: "" } },
            { name: "Gunjika Adhikari", links: { linkedin: "" } },
            { name: "Yashmit Kamal", links: { linkedin: "" } },
            { name: "Tanisha Bihani", links: { linkedin: "" } },
            { name: "Harsh Manocha", links: { linkedin: "" } },
            { name: "Nishtha Jain", links: { linkedin: "" } },
        ],
    },
    {
        name: "Social Media and Photography Executives",
        leads: [{ 
                    name: "Bhumi Rajbhar",
                    links: { 
                        linkedin: "" 
                }},
                { 
                    name: "Liesha Gupta",
                    links: {
                         linkedin: "https://www.linkedin.com/in/liesha-gupta/" 
                    }
                },
                { name: "Lakshay Gupta", links: { linkedin: "" } }
        ],
        people: [
            { name: "Reva Verma", links: { linkedin: "" } },
            { name: "Daksh Dua", links: { linkedin: "" } },
            { name: "Ridhi Garg", links: { linkedin: "" } },
            { name: "Ansh Chaudhary", links: { linkedin: "" } },
            { name: "Lakshay Jain", links: { linkedin: "" } },
            { name: "Pradyumn Kumar", links: { linkedin: "" } },
        ],
    },
    {
        name: "Content Executives",
        leads: [
            {
                name: "Shubham Jha",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/shubham-jha-a37a49263/",
                },
            },
        ],
        people: [
            { name: "Aarav Singh", links: { linkedin: "" } },
            { name: "Suhani Gupta", links: { linkedin: "" } },
            { name: "Aryan Maurya", links: { linkedin: "" } },
            { name: "kareena Grover", links: { linkedin: "" } },
            { name: "Krish Anand", links: { linkedin: "" } },
            { name: "Richa Garg", links: { linkedin: "" } },
        ],
    },
    {
        name: "Logistics and Hospitality Executives",
        leads: [
            {
                name: "Parthsaarthie Sharma",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/parthsaarthie-sharma/",
                },
            },
            {
                name: "Ashwani Kumar",
                links: {
                    linkedin:
                        "https://www.linkedin.com/in/ashwani-kumar-21568b201/",
                },
            },
        ],
        people: [
            { name: "Prathak Gupta", links: { linkedin: "" } },
            { name: "Somya", links: { linkedin: "" } },
            { name: "Juhi Chauhan", links: { linkedin: "" } },
            { name: "Piyush Kar", links: { linkedin: "" } },
            { name: "Suvir Sarabhai", links: { linkedin: "" } },
            { name: "Hansika Gupta", links: { linkedin: "" } },
            { name: "Hari Pratap Singh", links: { linkedin: "" } },
            { name: "Mayank", links: { linkedin: "" } },
        ],
    },
    
];

/*export interface TechnicalDepartment {
    name: string;
    leads: Person[];
    people?: Person[];
}

export const TechinalDeptData: TechnicalDepartment[] = [
     There must be only one lead per team in Technical Department 
    {
        name: "Dev Team",
        leads: [
                { 
                    name: "Adarsh Singh",
                    links: {linkedin: "https://www.linkedin.com/in/adarshsingh9540/"} 
                },
        ],
        people: [
            //{ name: "Vrishank Sharma", links: { linkedin: ""} },
            { name: "Kumar Harsh", links: {linkedin: "https://www.linkedin.com/in/kharsh560/" } },
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
                name: "Pratham Gupta",
                links: { linkedin: "https://www.linkedin.com/in/prathamgupta006/" },
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
            { name: "Lakshit Goyal", links: { linkedin: "" } },
            { name: "Kshitij Dahiya", links: { linkedin: "" } },
            { name: "Chaitanya Kumar Jadaun", links: { linkedin: "" } },
            { name: "Chirag Rajput", links: { linkedin: "https://www.linkedin.com/in/chirag-rajput-8b31602bb/" } },
            {
                name: "Dakshata",
                links: { linkedin: "https://www.linkedin.com/in/daky2024/" },
            },
            { name: "Ashi", links: { linkedin: "" } },
        ],
    },
];*/

export default executivesData;
