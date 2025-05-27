import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { companies } from "@/data/companies";
import { jobs } from "@/data/jobs";
import { JobCard } from "@/components/JobCard";
import { MapPinIcon, ArrowLeftIcon, ExternalLinkIcon, BuildingIcon, UsersIcon, CalendarIcon } from "lucide-react";

export default function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const company = companies.find((company) => company.id === id);
  const companyJobs = jobs.filter((job) => job.companyId === id);

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Company Not Found</h1>
        <p className="mb-8">The company you're looking for doesn't exist or has been removed.</p>
        <Link to="/companies">
          <Button>Browse All Companies</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/companies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeftIcon className="h-4 w-4" />
        <span>Back to companies</span>
      </Link>

      <div className="bg-muted/30 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold">{company.name}</h1>
                <p className="text-muted-foreground">{company.industry}</p>
              </div>
              
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <span>Visit Website</span>
                  <ExternalLinkIcon className="h-4 w-4" />
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4 text-muted-foreground" />
                <span>{company.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <BuildingIcon className="h-4 w-4 text-muted-foreground" />
                <span>{company.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <span>Founded {company.founded}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about">
        <TabsList className="mb-6">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="jobs">
            Open Positions ({companyJobs.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
              <p className="whitespace-pre-line">{company.description}</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="jobs">
          {companyJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <p className="text-muted-foreground">No open positions at this time.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}