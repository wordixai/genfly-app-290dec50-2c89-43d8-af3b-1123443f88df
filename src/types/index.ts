export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  salary: string;
  description: string;
  requirements: string[];
  postedAt: string;
  logo?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
  location: string;
  description: string;
  industry: string;
  size: string;
  founded: number;
  jobs: string[];
}

export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
export type LocationType = "Remote" | "On-site" | "Hybrid";