
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8">
        <h1 className="text-7xl font-bold mb-6 text-growstats-purple">404</h1>
        <p className="text-2xl font-semibold mb-4 text-growstats-blue">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          We can't seem to find the page you're looking for. The page may have been moved, deleted, or never existed.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-growstats-blue hover:bg-growstats-blue/90 text-white w-full">
            <Link to="/" className="flex items-center justify-center">
              <HomeIcon size={18} className="mr-2" />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-growstats-purple text-growstats-purple w-full">
            <Link to="/blog">Browse Our Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
