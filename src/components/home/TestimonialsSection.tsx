
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonial = ({ content, name, position, company, rating, image }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
        </div>
        <p className="mb-6 italic">{content}</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{position}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "GrowStats transformed our online presence completely. Their SEO and social media strategies have doubled our leads in just 3 months!",
      name: "Anita Sharma",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      content:
        "The team at GrowStats delivered an exceptional website that perfectly captures our brand essence. The entire process was smooth and professional.",
      name: "Rahul Patel",
      position: "CEO",
      company: "Innovate Designs",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      content:
        "Working with GrowStats on our email marketing campaigns has been game-changing. They understand our audience and create content that truly engages.",
      name: "Priya Singh",
      position: "Sales Manager",
      company: "RetailPlus",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-growstats-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">Client Success Stories</h2>
          <p className="subheading">
            Don't take our word for it - hear what our clients have to say about working with GrowStats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
