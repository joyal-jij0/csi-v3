export interface Person {
  image_source: string;
  name: string;
  position: string;
}

 export const people1: Person[] = [
  {
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131248/csi/team/llgn4s6xwckilkumschq.png",
    name: "Prof. Neelam Sharma",
    position: "Patron",
  },
  {
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131288/csi/team/ov4sqvmtmkqejhvyufag.png",
    name: "Prof. S.S. Deswal",
    position: "Patron",
  },
  {
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/bttwzako6b0qhvhm2xmi.jpg",
    name: "Prof. Sachin Gupta",
    position: "Patron",
  },
  {
    image_source: "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131324/csi/team/zbnwrkews8ahtnavdjcj.jpg",
    name: "Dr. Vinay Kumar Saini",
    position: "Faculty Coordinator",
  },
  {
    image_source: "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713107597/CSI%20Website/Team/WhatsApp_Image_2024-04-14_at_19.35.00_mfxbdn.jpg",
    name: "Prof. Bhaskar Kapoor",
    position: "Faculty Coordinator",
  },
  {
    image_source: "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1716394844/CSI%20Website/Team/dkafmzugaexyltcxcjrb.png",
    name: "Mr. Arun Garg",
    position: "Mentor",
  },
];
export const people2: Person[] = [
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

export interface Department {
  name: string;
  people: string[];
}

export const executivesData: Department[] = [
  {
    name: "Technical Executives",
    people: ["Name 1", "Name 2", "Name 3"]
  },
  {
    name: "Public Relations Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  },
  {
    name: "Sponsorship Executives",
    people: ["Name 1", "Name 2", "Name 3"]
  },
  {
    name: "Technical Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  },
  {
    name: "Public Relations Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  },
  {
    name: "Sponsorship Executives",
    people: ["Name 1", "Name 2", "Name 3", "Name 4"]
  }
];

export default executivesData;