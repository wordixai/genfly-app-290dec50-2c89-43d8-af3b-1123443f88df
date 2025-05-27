import { useState } from "react";
import { JobCard } from "@/components/JobCard";
import { JobFilter } from "@/components/JobFilter";
import { jobs } from "@/data/jobs";
import { Job, JobType } from "@/types";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

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
    setCurrentPage(1);
  };

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>
      
      <div className="mb-8">
        <JobFilter onFilterChange={handleFilterChange} />
      </div>

      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredJobs.length} jobs
        </p>
      </div>

      {currentJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No jobs found matching your criteria.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}