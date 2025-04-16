
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
    <Card className="card-shadow h-full flex flex-col">
      <CardHeader>
        <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl font-display">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="mb-6 flex-grow">{description}</CardDescription>
        <Button asChild variant="outline" className="self-start group">
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
