
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link: string;
}

const ServiceItem = ({
  icon,
  title,
  description,
  benefits,
  link,
}: ServiceItemProps) => (
  <Card className="card-shadow h-full bg-white">
    <CardHeader>
      <div className="h-14 w-14 rounded-lg bg-growstats-red/10 flex items-center justify-center text-growstats-red mb-4">
        {icon}
      </div>
      <CardTitle className="text-2xl font-display text-growstats-purple">{title}</CardTitle>
      <CardDescription className="text-base mt-2 text-gray-600">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <h4 className="font-semibold mb-2 text-growstats-blue">Key Benefits:</h4>
      <ul className="space-y-1 mb-6">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start space-x-2">
            <div className="h-5 w-5 rounded-full bg-growstats-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-growstats-green" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="w-full border-growstats-blue text-growstats-blue hover:bg-growstats-blue/10">
        <Link to={link}>Learn More</Link>
      </Button>
    </CardContent>
  </Card>
);

export default ServiceItem;
