
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="card-shadow h-full flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4 h-12 w-12 rounded-lg bg-growstats-red/20 flex items-center justify-center text-growstats-red">
          {icon}
        </div>
        <CardTitle className="text-xl font-display text-growstats-purple">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="mb-6 flex-grow text-gray-700">{description}</CardDescription>
        <Button asChild variant="outline" className="self-start group border-growstats-blue text-growstats-blue hover:bg-growstats-blue/10 hover:text-growstats-blue">
          <Link to={link} className="flex items-center">
            Learn More
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
