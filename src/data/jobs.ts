import { Job } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const jobs: Job[] = [
  {
    id: uuidv4(),
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyId: "1",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We're looking for a Senior Frontend Developer to join our team. You'll be responsible for building user interfaces for our web applications using React and TypeScript.",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management libraries",
      "Understanding of web accessibility standards"
    ],
    postedAt: "2023-10-15",
    logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: uuidv4(),
    title: "Backend Engineer",
    company: "DataSystems",
    companyId: "2",
    location: "Remote",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Join our backend team to build scalable APIs and services. You'll work with Node.js, Express, and PostgreSQL to create robust backend solutions.",
    requirements: [
      "3+ years of Node.js experience",
      "Experience with SQL databases",
      "Knowledge of RESTful API design",
      "Familiarity with cloud services (AWS/Azure/GCP)"
    ],
    postedAt: "2023-10-18",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: uuidv4(),
    title: "UX/UI Designer",
    company: "CreativeMinds",
    companyId: "3",
    location: "New York, NY",
    type: "Contract",
    salary: "$90,000 - $120,000",
    description: "We're seeking a talented UX/UI Designer to create beautiful and functional user interfaces for our products. You'll work closely with our product and development teams.",
    requirements: [
      "Portfolio demonstrating UI/UX skills",
      "Experience with Figma or similar tools",
      "Understanding of user-centered design principles",
      "Ability to create wireframes and prototypes"
    ],
    postedAt: "2023-10-20",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: uuidv4(),
    title: "DevOps Engineer",
    company: "CloudNative",
    companyId: "4",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Join our DevOps team to build and maintain our cloud infrastructure. You'll work with Kubernetes, Docker, and CI/CD pipelines.",
    requirements: [
      "Experience with Kubernetes and Docker",
      "Knowledge of CI/CD tools (Jenkins, GitHub Actions)",
      "Familiarity with infrastructure as code (Terraform)",
      "Understanding of cloud platforms (AWS preferred)"
    ],
    postedAt: "2023-10-22",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: uuidv4(),
    title: "Product Manager",
    company: "TechCorp",
    companyId: "1",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140,000 - $170,000",
    description: "We're looking for a Product Manager to lead our product development efforts. You'll work with cross-functional teams to define product strategy and roadmap.",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Experience with agile methodologies"
    ],
    postedAt: "2023-10-25",
    logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?q=80&w=1000&auto=format&fit=crop"
  }
];