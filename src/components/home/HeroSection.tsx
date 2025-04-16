
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-growstats-50 via-white to-accent-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 pointer-events-none">
        <div className="absolute -top-[30%] -right-[30%] w-[80%] h-[80%] bg-accent-300 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[30%] w-[80%] h-[80%] bg-growstats-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-6 animate-fade-up">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="text-sm font-medium text-growstats-700">Leading Digital Marketing Agency</span>
            </div>

            <h1 className="heading-1">
              <span className="block">Grow Your Business with</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-growstats-600 to-accent-600">Data-Driven Strategies</span>
            </h1>
            
            <p className="subheading max-w-lg">
              We help businesses thrive in the digital landscape with tailored marketing solutions and innovative web development services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/services" className="flex items-center">
                  Our Services 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <p className="font-display font-bold text-xl md:text-2xl text-growstats-700">98%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <p className="font-display font-bold text-xl md:text-2xl text-growstats-700">200+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <p className="font-display font-bold text-xl md:text-2xl text-growstats-700">10+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up mt-6 lg:mt-0">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Analytics"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Data-Driven Results</h3>
                  <p className="text-white/80">Real-time analytics for informed decisions</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements - only visible on medium screens and above */}
            <div className="hidden md:flex absolute -top-8 -right-8 bg-white p-3 rounded-xl shadow-lg items-center space-x-3 z-10 border border-gray-100">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">Google Analytics</p>
                <p className="text-xs text-gray-500">Conversion Rate +150%</p>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-3 rounded-xl shadow-lg z-10 border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="font-semibold text-sm">Social Media Growth</p>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-xs text-right mt-1 text-gray-500">75% increase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
