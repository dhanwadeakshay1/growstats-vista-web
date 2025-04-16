
import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import NewsletterSubscription from "@/components/home/NewsletterSubscription";

const FooterWithNewsletter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Growstats Media Logo"
                className="h-10 w-auto"
                onError={(e) => {
                  console.error("Logo failed to load in Footer", {
                    src: e.currentTarget.src,
                    alt: e.currentTarget.alt,
                  });
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-xl font-semibold text-white">Growstats Media</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering businesses through data-driven digital marketing strategies and innovative web development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-growstats-red" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-growstats-red" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-growstats-red" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-growstats-red" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-growstats-red">Home</Link></li>
              <li><Link to="/about" className="hover:text-growstats-red">About Us</Link></li>
              <li><Link to="/services" className="hover:text-growstats-red">Services</Link></li>
              <li><Link to="/blog" className="hover:text-growstats-red">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-growstats-red">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/digital-marketing" className="hover:text-growstats-red">Digital Marketing</Link></li>
              <li><Link to="/services/web-development" className="hover:text-growstats-red">Web Development</Link></li>
              <li><Link to="/services/seo-optimization" className="hover:text-growstats-red">SEO Optimization</Link></li>
              <li><Link to="/services/content-creation" className="hover:text-growstats-red">Content Creation</Link></li>
              <li><Link to="/services/analytics" className="hover:text-growstats-red">Analytics & Reporting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest trends, tips, and insights.
            </p>
            <NewsletterSubscription />
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {currentYear} Growstats Media. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-growstats-red">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-growstats-red">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-growstats-red">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithNewsletter;
