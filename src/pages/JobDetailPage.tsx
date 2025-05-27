import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { jobs } from "@/data/jobs";
import { companies } from "@/data/companies";
import { CalendarIcon, MapPinIcon, BuildingIcon, ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((job) => job.id === id);
  const company = companies.find((company) => company.id === job?.companyId);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-8">The job you're looking for doesn't exist or has been removed.</p>
        <Link to="/jobs">
          <Button>Browse All Jobs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/jobs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeftIcon className="h-4 w-4" />
        <span>Back to jobs</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BuildingIcon className="h-4 w-4" />
                  <Link to={`/companies/${job.companyId}`} className="hover:text-foreground">
                    {job.company}
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Posted {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Badge className="mb-2">{job.type}</Badge>
              <span className="text-lg font-semibold">{job.salary}</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="prose max-w-none">
                <p>{job.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </section>

            <div className="pt-4">
              <Button size="lg">Apply Now</Button>
            </div>
          </div>
        </div>

        <div>
          {company && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden mb-4">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">{company.industry}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm">{company.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{company.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Company size:</span>
                      <span>{company.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Founded:</span>
                      <span>{company.founded}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-2">
                    <Link to={`/companies/${company.id}`}>
                      <Button variant="outline" className="w-full">
                        View Company Profile
                      </Button>
                    </Link>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full flex items-center gap-2">
                        <span>Visit Website</span>
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-6">
            <h3 className="font-semibold mb-4">Similar Jobs</h3>
            <div className="space-y-4">
              {jobs
                .filter(j => j.id !== job.id && j.type === job.type)
                .slice(0, 3)
                .map(similarJob => (
                  <Link key={similarJob.id} to={`/jobs/${similarJob.id}`} className="block">
                    <Card className="hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4">
                        <h4 className="font-medium">{similarJob.title}</h4>
                        <p className="text-sm text-muted-foreground">{similarJob.company}</p>
                        <div className="flex justify-between items-center mt-2">
                          <Badge variant="outline">{similarJob.type}</Badge>
                          <span className="text-xs text-muted-foreground">{similarJob.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}