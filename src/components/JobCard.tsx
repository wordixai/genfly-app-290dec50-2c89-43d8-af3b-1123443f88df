import { Job } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="w-12 h-12 rounded-md overflow-hidden">
            <img 
              src={job.logo || "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop"} 
              alt={`${job.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPinIcon className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span>Posted {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge variant="secondary">{job.type}</Badge>
          <span className="text-sm font-medium">{job.salary}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}