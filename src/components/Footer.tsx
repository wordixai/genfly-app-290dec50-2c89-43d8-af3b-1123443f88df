import { Link } from "react-router-dom";
import { BriefcaseIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BriefcaseIcon className="h-6 w-6" />
              <span className="font-bold text-xl">JobBoard</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find your dream job or the perfect candidate with our job board platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-sm text-muted-foreground hover:text-foreground">Browse Jobs</Link></li>
              <li><Link to="/companies" className="text-sm text-muted-foreground hover:text-foreground">Companies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Post a Job</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Find Candidates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}