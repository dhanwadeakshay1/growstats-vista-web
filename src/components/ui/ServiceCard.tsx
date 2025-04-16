
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
  iconColor?: string;
}

const ServiceCard = ({ icon, title, description, link, iconColor = "bg-growstats-red/20 text-growstats-red" }: ServiceCardProps) => {
  return (
    <Card className="card-shadow h-full flex flex-col bg-white hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-growstats-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader>
        <div className={`mb-6 h-14 w-14 rounded-xl ${iconColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <CardTitle className="text-xl font-display text-growstats-purple group-hover:text-growstats-red transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="mb-6 flex-grow text-gray-700">{description}</CardDescription>
        <Button asChild variant="outline" className="self-start group/btn border-growstats-blue text-growstats-blue hover:bg-growstats-blue/10 hover:text-growstats-blue">
          <Link to={link} className="flex items-center">
            Learn More
            <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
