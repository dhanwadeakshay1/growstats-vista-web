
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="GrowStats Team"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold font-display text-growstats-700">10+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="heading-2 mb-6">
              Leading Digital Growth Agency in Pune
            </h2>
            <p className="body-text mb-6">
              GrowStats Media is a premier digital marketing and web development agency based in Pune, India. We help businesses of all sizes establish a strong online presence and achieve their growth goals through data-driven strategies.
            </p>
            <p className="body-text mb-6">
              Founded by a team of passionate digital marketers and developers, GrowStats has grown into a full-service agency with expertise across various digital marketing channels and web development technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-growstats-600"></div>
                <span>Results-Oriented</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-growstats-600"></div>
                <span>Data-Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-growstats-600"></div>
                <span>Transparent</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-growstats-600"></div>
                <span>Client-Focused</span>
              </div>
            </div>
            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
