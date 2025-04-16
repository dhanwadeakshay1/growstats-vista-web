
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactCTA from "@/components/home/ContactCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  image: string;
}

const servicesData: Record<string, ServiceData> = {
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Comprehensive digital strategies to grow your business online",
    description:
      "Our digital marketing services are designed to help businesses establish a strong online presence, attract targeted traffic, and convert visitors into customers. We take a data-driven approach to digital marketing, focusing on strategies that deliver measurable results and ROI.",
    benefits: [
      {
        title: "Increased Online Visibility",
        description: "Get found by potential customers searching for your products or services online.",
      },
      {
        title: "Higher Conversion Rates",
        description: "Turn more visitors into leads and customers with optimized conversion strategies.",
      },
      {
        title: "Better ROI",
        description: "Get more value from your marketing budget with targeted, data-driven campaigns.",
      },
      {
        title: "Competitive Advantage",
        description: "Stay ahead of competitors with innovative digital marketing strategies.",
      },
    ],
    process: [
      {
        title: "Discovery & Analysis",
        description: "We begin by understanding your business, goals, target audience, and current digital presence.",
      },
      {
        title: "Strategy Development",
        description: "Based on our analysis, we develop a customized digital marketing strategy tailored to your needs.",
      },
      {
        title: "Campaign Implementation",
        description: "We execute the strategy across various digital channels, creating engaging content and campaigns.",
      },
      {
        title: "Monitoring & Optimization",
        description: "We continuously monitor campaign performance and make data-driven adjustments for optimal results.",
      },
      {
        title: "Reporting & Analysis",
        description: "Regular reporting and insights help you understand performance and inform future strategies.",
      },
    ],
    faqs: [
      {
        question: "What digital marketing services do you offer?",
        answer: "We offer a comprehensive range of digital marketing services, including SEO, PPC advertising, social media marketing, email marketing, content marketing, and more.",
      },
      {
        question: "How long does it take to see results from digital marketing?",
        answer: "The timeline varies depending on the specific strategies and your starting point. Some channels like PPC can deliver quick results, while SEO typically takes 3-6 months to show significant improvements.",
      },
      {
        question: "How do you measure the success of digital marketing campaigns?",
        answer: "We track various KPIs depending on your goals, such as website traffic, conversion rates, lead generation, sales, ROI, and more. We provide regular reports to show the impact of our work.",
      },
      {
        question: "Do you work with businesses of all sizes?",
        answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our strategies and packages to suit your specific needs and budget.",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  "email-marketing": {
    title: "Email Marketing",
    subtitle: "Engaging email campaigns that convert leads into customers",
    description:
      "Our email marketing services help businesses connect with their audience through personalized, targeted email campaigns. We focus on creating engaging content that nurtures leads, builds customer relationships, and drives conversions, all while maintaining high deliverability rates.",
    benefits: [
      {
        title: "Personalized Communication",
        description: "Deliver the right message to the right person at the right time with segmented campaigns.",
      },
      {
        title: "Increased Engagement",
        description: "Capture attention and encourage interaction with well-designed, mobile-responsive emails.",
      },
      {
        title: "Higher Conversion Rates",
        description: "Convert more leads into customers with strategic email sequences and compelling calls to action.",
      },
      {
        title: "Improved Customer Retention",
        description: "Build lasting relationships with your audience through regular, valuable communication.",
      },
    ],
    process: [
      {
        title: "Audience Analysis",
        description: "We analyze your existing customer base and help you segment your audience for targeted messaging.",
      },
      {
        title: "Strategy Development",
        description: "We create a comprehensive email marketing strategy based on your business goals and audience needs.",
      },
      {
        title: "Email Design & Content Creation",
        description: "Our team designs visually appealing emails and crafts compelling content that resonates with your audience.",
      },
      {
        title: "Campaign Setup & Automation",
        description: "We set up campaigns and automation sequences to deliver the right messages at optimal times.",
      },
      {
        title: "Testing & Optimization",
        description: "We conduct A/B testing and continuously optimize your emails for better performance.",
      },
    ],
    faqs: [
      {
        question: "How often should I send emails to my subscribers?",
        answer: "The optimal frequency depends on your industry, audience preferences, and content quality. We'll help you find the right balance to maintain engagement without overwhelming your subscribers.",
      },
      {
        question: "How do you measure email marketing success?",
        answer: "We track key metrics like open rates, click-through rates, conversion rates, list growth, and ROI to evaluate campaign performance.",
      },
      {
        question: "Can you help me build my email list?",
        answer: "Yes, we can help you implement effective list-building strategies, including lead magnets, opt-in forms, and landing pages to grow your subscriber base.",
      },
      {
        question: "What email marketing platforms do you work with?",
        answer: "We have experience with major platforms including Mailchimp, HubSpot, ActiveCampaign, Constant Contact, and more. We can recommend the best platform for your needs.",
      },
    ],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  "seo": {
    title: "SEO Optimization",
    subtitle: "Data-driven strategies to improve your search engine rankings",
    description:
      "Our SEO services are designed to help your website rank higher in search engine results, driving more organic traffic and qualified leads to your business. We use proven, white-hat techniques that align with the latest search engine algorithms and best practices.",
    benefits: [
      {
        title: "Increased Organic Traffic",
        description: "Attract more visitors to your website through improved search engine rankings.",
      },
      {
        title: "Higher Quality Leads",
        description: "Reach users actively searching for your products or services.",
      },
      {
        title: "Improved User Experience",
        description: "Enhance your website's usability and performance for both users and search engines.",
      },
      {
        title: "Long-Term Results",
        description: "Create a sustainable foundation for ongoing organic traffic growth.",
      },
    ],
    process: [
      {
        title: "Comprehensive SEO Audit",
        description: "We analyze your website's current SEO performance, identifying strengths, weaknesses, and opportunities.",
      },
      {
        title: "Keyword Research & Strategy",
        description: "We identify valuable keywords and develop a strategy to target them effectively.",
      },
      {
        title: "On-Page Optimization",
        description: "We optimize your website's content, meta tags, internal linking, and structure for better search performance.",
      },
      {
        title: "Technical SEO",
        description: "We resolve technical issues that may be hindering your website's search performance.",
      },
      {
        title: "Off-Page SEO & Link Building",
        description: "We implement strategies to build your website's authority through quality backlinks and digital PR.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 3-6 months, depending on your website's current state, competition, and target keywords.",
      },
      {
        question: "What makes your SEO services different from others?",
        answer: "We focus on sustainable, white-hat techniques that provide long-term results. Our approach is data-driven, transparent, and tailored to your specific business goals.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer: "No reputable SEO agency can guarantee specific rankings, as search algorithms are complex and constantly changing. We focus on implementing proven strategies that improve your visibility over time.",
      },
      {
        question: "How do you stay updated with SEO trends and algorithm changes?",
        answer: "Our team continuously monitors industry news, participates in professional communities, and conducts regular training to stay ahead of the latest SEO developments.",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  "smm": {
    title: "Social Media Marketing",
    subtitle: "Engaging strategies to build your brand presence on social platforms",
    description:
      "Our social media marketing services help businesses connect with their audience, build brand awareness, and drive engagement across various social platforms. We create tailored strategies that align with your business goals and target audience preferences.",
    benefits: [
      {
        title: "Increased Brand Awareness",
        description: "Expand your reach and make your brand more recognizable to potential customers.",
      },
      {
        title: "Enhanced Customer Engagement",
        description: "Build meaningful relationships with your audience through regular interaction.",
      },
      {
        title: "Improved Brand Reputation",
        description: "Establish your brand as an authority in your industry through valuable content.",
      },
      {
        title: "Higher Website Traffic",
        description: "Drive qualified traffic to your website from your social media platforms.",
      },
    ],
    process: [
      {
        title: "Social Media Audit",
        description: "We analyze your current social media presence and identify opportunities for improvement.",
      },
      {
        title: "Strategy Development",
        description: "We create a comprehensive social media strategy aligned with your business goals.",
      },
      {
        title: "Content Creation & Curation",
        description: "We develop engaging, shareable content that resonates with your target audience.",
      },
      {
        title: "Community Management",
        description: "We actively engage with your audience, responding to comments and messages promptly.",
      },
      {
        title: "Performance Analysis",
        description: "We track key metrics and provide regular reports on your social media performance.",
      },
    ],
    faqs: [
      {
        question: "Which social media platforms should my business be on?",
        answer: "The best platforms for your business depend on your industry, target audience, and goals. We'll help you identify the most effective platforms for your specific needs.",
      },
      {
        question: "How often should I post on social media?",
        answer: "Posting frequency varies by platform and audience. We'll develop a posting schedule that maintains engagement without overwhelming your audience.",
      },
      {
        question: "Do you handle paid social media advertising?",
        answer: "Yes, we offer comprehensive paid social media advertising services, including strategy development, campaign setup, audience targeting, and optimization.",
      },
      {
        question: "How do you measure social media marketing success?",
        answer: "We track various metrics including engagement rates, follower growth, reach, website traffic, lead generation, and conversions to evaluate performance.",
      },
    ],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  "web-development": {
    title: "Website Development",
    subtitle: "Custom websites designed for performance, usability, and growth",
    description:
      "Our web development services focus on creating stunning, functional websites that help businesses establish a strong online presence and achieve their digital goals. We combine innovative design with technical excellence to deliver websites that not only look great but also perform exceptionally.",
    benefits: [
      {
        title: "Professional Online Presence",
        description: "Establish credibility with a polished, professional website that represents your brand.",
      },
      {
        title: "Improved User Experience",
        description: "Engage visitors with intuitive navigation and compelling design.",
      },
      {
        title: "Mobile Responsiveness",
        description: "Reach users on all devices with fully responsive design.",
      },
      {
        title: "SEO-Friendly Architecture",
        description: "Build a strong foundation for search engine visibility.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We work with you to understand your business goals, target audience, and website requirements.",
      },
      {
        title: "Design & Wireframing",
        description: "We create detailed wireframes and design mockups for your approval.",
      },
      {
        title: "Development",
        description: "Our developers bring the designs to life, coding a website that's both beautiful and functional.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "We thoroughly test your website across devices and browsers to ensure flawless performance.",
      },
      {
        title: "Launch & Support",
        description: "We handle the website launch and provide ongoing support and maintenance.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "The timeline depends on the complexity and scope of your project. A simple website might take 4-6 weeks, while more complex projects can take 3-6 months or more.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All websites we develop are fully responsive, ensuring optimal viewing and interaction across all devices, from desktops to smartphones.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Yes, we offer website redesign services to update your existing site with modern design, improved functionality, and better user experience.",
      },
      {
        question: "Do you provide website maintenance services?",
        answer: "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally.",
      },
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h2 className="heading-2 mb-6">Service Not Found</h2>
          <p className="body-text mb-8">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={service.title}
        subtitle={service.subtitle}
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-3 mb-6">Overview</h2>
              <p className="body-text mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Key Benefits</h2>
            <p className="subheading">
              Why our {service.title.toLowerCase()} services can make a difference for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Our Process</h2>
            <p className="subheading">
              How we deliver exceptional {service.title.toLowerCase()} solutions for your business.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[50%] h-full w-0.5 bg-gray-200 hidden md:block"></div>
            {service.process.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 mb-12 items-center md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 relative">
                  <div
                    className={`absolute top-8 ${
                      index % 2 === 0 ? "md:-right-12" : "md:-left-12"
                    } h-10 w-10 rounded-full bg-white z-10 border-4 border-primary flex items-center justify-center text-primary font-bold`}
                  >
                    {index + 1}
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="subheading">
              Get answers to common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have more questions about our {service.title.toLowerCase()} services?
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default ServiceDetail;
