import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo.png" 
                alt="Growstats Media Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-4">
              Empowering businesses with cutting-edge digital marketing solutions and web development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-growstats-600">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-growstats-600">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-growstats-600">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-growstats-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services/email-marketing" className="text-muted-foreground hover:text-primary transition-colors">Email Marketing</Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">SEO Optimization</Link>
              </li>
              <li>
                <Link to="/services/smm" className="text-muted-foreground hover:text-primary transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">Website Development</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">15TH B, SECOND FLOOR, CITY VISTA, FOUNTAIN ROAD KHARADI, PUNE, Maharashtra, India, 411014</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:mail@growstatsmedia.com" className="text-muted-foreground hover:text-primary transition-colors">mail@growstatsmedia.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+918888888888" className="text-muted-foreground hover:text-primary transition-colors">+91 8888 888 888</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GrowStats Media Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
