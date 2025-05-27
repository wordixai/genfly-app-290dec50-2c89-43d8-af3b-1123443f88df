import { Company } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, BriefcaseIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link to={`/companies/${company.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="w-16 h-16 rounded-md overflow-hidden">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{company.name}</h3>
            <p className="text-sm text-muted-foreground">{company.industry}</p>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPinIcon className="h-4 w-4" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BriefcaseIcon className="h-4 w-4" />
            <span>{company.size}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge variant="outline">{company.jobs.length} open positions</Badge>
          <span className="text-sm font-medium">Founded {company.founded}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}