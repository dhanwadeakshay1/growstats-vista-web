
import React from "react";
import { BarChart2, Mail, Search, Share2, Globe, Braces, LineChart, Headphones, Database, Smartphone, Users } from "lucide-react";
import ServiceItem from "./ServiceItem";

const ServicesGrid = () => {
  const services = [
    {
      icon: <BarChart2 size={28} />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to help your business reach its target audience and achieve measurable results.",
      benefits: [
        "Increased online visibility",
        "More qualified leads",
        "Higher conversion rates",
        "Enhanced brand recognition",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <Mail size={28} />,
      title: "Email Marketing",
      description:
        "Targeted email campaigns designed to nurture leads, build customer relationships, and drive conversions.",
      benefits: [
        "Personalized messaging",
        "Automated email sequences",
        "Performance tracking",
        "Increased customer retention",
      ],
      link: "/services/email-marketing",
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies that improve your website's ranking on search engines and increase organic traffic.",
      benefits: [
        "Higher search engine rankings",
        "Increased organic traffic",
        "Technical SEO improvements",
        "Comprehensive keyword strategy",
      ],
      link: "/services/seo",
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Marketing",
      description:
        "Engaging social media campaigns that build brand awareness, foster community, and drive customer engagement.",
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Community building",
        "Content marketing integration",
      ],
      link: "/services/smm",
    },
    {
      icon: <Globe size={28} />,
      title: "Website Development",
      description:
        "Custom website design and development services that create stunning, functional, and user-friendly websites.",
      benefits: [
        "Responsive design",
        "SEO-friendly architecture",
        "Fast loading times",
        "Intuitive user experience",
      ],
      link: "/services/web-development",
    },
    {
      icon: <Braces size={28} />,
      title: "Web Applications",
      description:
        "Custom web application development services that solve complex business problems and streamline processes.",
      benefits: [
        "Tailored to your needs",
        "Robust security measures",
        "Intuitive user interface",
        "Scalable infrastructure",
      ],
      link: "/services/web-applications",
    },
    {
      icon: <LineChart size={28} />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics and reporting services that provide actionable insights for data-driven decision making.",
      benefits: [
        "Custom dashboards",
        "Regular performance reports",
        "Data-driven insights",
        "ROI measurement",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <Headphones size={28} />,
      title: "Dedicated Support",
      description:
        "Ongoing support and maintenance services to ensure your digital assets continue to perform at their best.",
      benefits: [
        "24/7 technical support",
        "Regular performance audits",
        "Continuous optimization",
        "Training and resources",
      ],
      link: "/contact",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-3 mb-4 text-growstats-purple">Tailored Solutions for Your Business Growth</h2>
          <p className="body-text text-gray-700">
            At GrowStats Media, we offer a comprehensive range of digital services designed to help your business thrive in the digital landscape. Whether you're looking to increase your online visibility, generate more leads, or create a stunning website, we have the expertise to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceItem key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
