
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, TrendingUp, Award, Users } from "lucide-react";

interface AchievementCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  bgColor: string;
}

const AchievementCard = ({ icon, number, title, description, bgColor }: AchievementCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className={`${bgColor} h-2`}></div>
      <CardContent className="p-6 pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center text-growstats-700">
            {icon}
          </div>
          <h3 className="text-3xl font-bold mb-1 font-display text-growstats-700">{number}</h3>
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <BarChart2 size={28} />,
      number: "90+",
      title: "Projects Completed",
      description: "Successful digital transformations across various industries",
      bgColor: "bg-growstats-red"
    },
    {
      icon: <Users size={28} />,
      number: "85+",
      title: "Happy Clients",
      description: "Businesses achieving their digital goals with our solutions",
      bgColor: "bg-growstats-blue"
    },
    {
      icon: <TrendingUp size={28} />,
      number: "200%",
      title: "Average Growth",
      description: "Typical performance improvement for our clients' campaigns",
      bgColor: "bg-growstats-green"
    },
    {
      icon: <Award size={28} />,
      number: "19+",
      title: "Expert Team Members",
      description: "Specialists working to deliver exceptional results",
      bgColor: "bg-growstats-purple"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">Our Growth Impact</h2>
          <p className="subheading">
            Real results that demonstrate our commitment to delivering measurable success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
