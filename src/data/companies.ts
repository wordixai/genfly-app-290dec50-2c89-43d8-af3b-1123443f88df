import { Company } from "@/types";

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?q=80&w=1000&auto=format&fit=crop",
    website: "https://techcorp.example.com",
    location: "San Francisco, CA",
    description: "TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes. We focus on creating user-friendly applications that solve real-world problems.",
    industry: "Software Development",
    size: "501-1000 employees",
    founded: 2010,
    jobs: ["1", "5"]
  },
  {
    id: "2",
    name: "DataSystems",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    website: "https://datasystems.example.com",
    location: "Remote",
    description: "DataSystems specializes in big data solutions and analytics platforms. We help businesses make sense of their data and derive actionable insights.",
    industry: "Data Analytics",
    size: "201-500 employees",
    founded: 2015,
    jobs: ["2"]
  },
  {
    id: "3",
    name: "CreativeMinds",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop",
    website: "https://creativeminds.example.com",
    location: "New York, NY",
    description: "CreativeMinds is a design agency focused on creating beautiful and functional digital experiences. We combine creativity with technical expertise to deliver outstanding results.",
    industry: "Design",
    size: "51-200 employees",
    founded: 2012,
    jobs: ["3"]
  },
  {
    id: "4",
    name: "CloudNative",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    website: "https://cloudnative.example.com",
    location: "Austin, TX",
    description: "CloudNative specializes in cloud infrastructure and DevOps solutions. We help businesses modernize their infrastructure and adopt cloud-native technologies.",
    industry: "Cloud Computing",
    size: "201-500 employees",
    founded: 2017,
    jobs: ["4"]
  }
];