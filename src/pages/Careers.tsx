
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Clock, Briefcase } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Senior SEO Specialist",
      department: "Digital Marketing",
      location: "Pune, India",
      type: "Full-time",
      description: "We're looking for an experienced SEO Specialist to lead our SEO strategies and initiatives, helping our clients achieve higher search rankings and traffic.",
      requirements: [
        "5+ years of experience in SEO",
        "Deep knowledge of on-page and off-page SEO techniques",
        "Experience with SEO tools like Semrush, Ahrefs, Google Analytics",
        "Strong analytical and problem-solving skills",
        "Excellent communication skills"
      ]
    },
    {
      title: "Front-end Developer",
      department: "Web Development",
      location: "Pune, India (Remote Available)",
      type: "Full-time",
      description: "We're seeking a talented Front-end Developer to create responsive and user-friendly websites and web applications for our clients.",
      requirements: [
        "3+ years of experience in front-end development",
        "Proficiency in HTML, CSS, JavaScript, and React",
        "Experience with responsive design and mobile-first approaches",
        "Knowledge of UI/UX principles",
        "Portfolio showcasing your front-end development work"
      ]
    },
    {
      title: "Social Media Manager",
      department: "Digital Marketing",
      location: "Pune, India",
      type: "Full-time",
      description: "Join our team as a Social Media Manager to develop and implement engaging social media strategies for our diverse client base.",
      requirements: [
        "3+ years of experience in social media management",
        "Proven track record of growing social media presence",
        "Experience with social media scheduling tools and analytics",
        "Creative content creation skills",
        "Strong understanding of various social media platforms"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary & Benefits",
      description: "We offer industry-competitive salaries, health insurance, and retirement benefits."
    },
    {
      title: "Professional Growth",
      description: "Regular training opportunities, conference attendance, and skill development programs."
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous paid time off."
    },
    {
      title: "Collaborative Environment",
      description: "Join a team of passionate professionals in a supportive and innovative workplace."
    },
    {
      title: "Career Advancement",
      description: "Clear paths for career progression and opportunities to grow within the company."
    },
    {
      title: "Modern Office Space",
      description: "Work in our newly designed office with state-of-the-art facilities and amenities."
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Careers at GrowStats"
        subtitle="Join our team of digital marketing and web development experts"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Grow Your Career With Us
              </h2>
              <p className="body-text mb-6">
                At GrowStats Media, we're always on the lookout for talented individuals who are passionate about digital marketing and web development. Join our diverse team of experts and work with leading clients across various industries.
              </p>
              <p className="body-text mb-8">
                We believe in fostering a collaborative, inclusive, and innovative work environment where each team member can thrive and make a significant impact. If you're creative, results-driven, and eager to learn, we'd love to hear from you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={20} />
                    </div>
                    <span className="font-semibold">Collaborative Culture</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={20} />
                    </div>
                    <span className="font-semibold">Learning Opportunities</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={20} />
                    </div>
                    <span className="font-semibold">Work-Life Balance</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={20} />
                    </div>
                    <span className="font-semibold">Growth Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="GrowStats Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Join Our Team</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Current Openings</h2>
            <p className="subheading">
              Explore our current job opportunities and find the perfect role for your skills and career aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openings.map((job, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-display">{job.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-4">{job.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full">Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that matches your skillset?
            </p>
            <Button variant="outline">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Why Join GrowStats?</h2>
            <p className="subheading">
              Discover the benefits of being a part of our growing team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-growstats-700 to-accent-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our current openings and take the next step in your career journey with GrowStats Media.
          </p>
          <Button asChild size="lg" className="bg-white text-growstats-700 hover:bg-white/90">
            <a href="#openings">View All Openings</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
