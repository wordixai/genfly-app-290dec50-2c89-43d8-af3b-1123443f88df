import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";
import { Company } from "@/types";
import { Search } from "lucide-react";

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term.trim()) {
      setFilteredCompanies(companies);
      return;
    }
    
    const results = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(term.toLowerCase()) ||
        company.industry.toLowerCase().includes(term.toLowerCase()) ||
        company.location.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredCompanies(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Companies</h1>
      
      <div className="mb-8 max-w-md">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search companies..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-8"
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredCompanies.length} companies
        </p>
      </div>

      {filteredCompanies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No companies found matching your search.</p>
        </div>
      )}
    </div>
  );
}