import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, BuildingIcon, HomeIcon } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="font-bold text-xl">JobBoard</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <HomeIcon className="h-4 w-4" />
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/jobs">
            <Button variant="ghost" className="flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4" />
              <span>Jobs</span>
            </Button>
          </Link>
          <Link to="/companies">
            <Button variant="ghost" className="flex items-center gap-2">
              <BuildingIcon className="h-4 w-4" />
              <span>Companies</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}