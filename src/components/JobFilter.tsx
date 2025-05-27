import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { JobType } from "@/types";
import { Search } from "lucide-react";

interface JobFilterProps {
  onFilterChange: (filters: {
    search: string;
    location: string;
    types: JobType[];
  }) => void;
}

export function JobFilter({ onFilterChange }: JobFilterProps) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [types, setTypes] = useState<JobType[]>([]);

  const jobTypes: JobType[] = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
  ];

  const handleTypeChange = (type: JobType) => {
    setTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ search, location, types });
  };

  const handleReset = () => {
    setSearch("");
    setLocation("");
    setTypes([]);
    onFilterChange({ search: "", location: "", types: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <div className="flex-1">
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit">Search</Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Job Type</Label>
        <div className="flex flex-wrap gap-4">
          {jobTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={types.includes(type)}
                onCheckedChange={() => handleTypeChange(type)}
              />
              <Label htmlFor={`type-${type}`} className="font-normal">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}