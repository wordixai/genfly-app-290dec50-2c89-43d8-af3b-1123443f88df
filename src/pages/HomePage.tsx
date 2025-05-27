import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/JobCard";
import { CompanyCard } from "@/components/CompanyCard";
import { JobFilter } from "@/components/JobFilter";
import { jobs } from "@/data/jobs";
import { companies } from "@/data/companies";
import { Job, JobType } from "@/types";
import { BriefcaseIcon, BuildingIcon } from "lucide-react";

export default function HomePage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const featuredCompanies = companies.slice(0, 4);

  const handleFilterChange = (filters: {
    search: string;
    location: string;
    types: JobType[];
  }) => {
    let results = jobs;

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.location) {
      const locationTerm = filters.location.toLowerCase();
      results = results.filter((job) =>
        job.location.toLowerCase().includes(locationTerm)
      );
    }

    if (filters.types.length > 0) {
      results = results.filter((job) => filters.types.includes(job.type));
    }

    setFilteredJobs(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse thousands of job listings from top companies and find the perfect role for your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/companies">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Companies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Find Your Next Opportunity</h2>
          <JobFilter onFilterChange={handleFilterChange} />

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5" />
                Latest Jobs
              </h3>
              <Link to="/jobs">
                <Button variant="ghost">View all jobs</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.slice(0, 6).map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BuildingIcon className="h-5 w-5" />
              Featured Companies
            </h2>
            <Link to="/companies">
              <Button variant="ghost">View all companies</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have found their dream jobs through our platform.
          </p>
          <Link to="/jobs">
            <Button size="lg" variant="secondary">
              Find Jobs Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}