
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Award, TrendingUp, Users } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";

const About = () => {
  const team = [
    {
      name: "Rahul Khanna",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Rahul founded GrowStats with a vision to help businesses leverage data to drive growth.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Head of Digital Marketing",
      bio: "Priya brings 8 years of expertise in developing data-driven marketing strategies that deliver measurable results for clients.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Vikram Patel",
      position: "Technical Director",
      bio: "Vikram leads our development team, ensuring high-quality website and application development for our clients.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      name: "Anita Roy",
      position: "SEO Specialist",
      bio: "Anita has helped numerous businesses improve their search visibility and drive organic traffic through effective SEO strategies.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="About GrowStats Media"
        subtitle="Leading digital marketing and web development agency in Pune"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="body-text mb-6">
                Founded in 2013, GrowStats Media began as a small team of passionate digital marketers with a vision to help businesses leverage the power of data to drive growth. Our journey started in a small office in Pune with just three team members and a handful of clients.
              </p>
              <p className="body-text mb-6">
                Over the years, we've grown into a full-service digital marketing and web development agency, working with clients across various industries throughout India and beyond. Today, our diverse team of 25+ experts continues to deliver innovative digital solutions that help businesses thrive in the ever-evolving digital landscape.
              </p>
              <p className="body-text mb-8">
                What sets us apart is our data-driven approach and commitment to transparency. We believe in forming lasting partnerships with our clients, focusing not just on immediate results but on long-term sustainable growth.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="font-display font-bold text-3xl text-growstats-700">200+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="font-display font-bold text-3xl text-growstats-700">150+</p>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="font-display font-bold text-3xl text-growstats-700">10+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <p className="font-display font-bold text-3xl text-growstats-700">25+</p>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="GrowStats Office"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-medium">Our office in Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Our Mission & Values</h2>
            <p className="subheading">
              We are driven by a set of core values that guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-accent-100 flex items-center justify-center text-accent-700 mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="body-text">
                To empower businesses with innovative digital solutions that drive measurable growth and create lasting success. We aim to be the trusted partner that helps clients navigate the digital landscape and unlock their full potential online.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-growstats-100 flex items-center justify-center text-growstats-700 mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="body-text">
                To become the leading digital growth agency in India, known for delivering exceptional results, fostering innovation, and setting industry standards for excellence in digital marketing and web development.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-growstats-100 flex items-center justify-center text-growstats-700">
                    <Check size={16} />
                  </div>
                  <h4 className="font-semibold">Excellence</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  We strive for excellence in everything we do, continuously raising the bar for ourselves and the industry.
                </p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-growstats-100 flex items-center justify-center text-growstats-700">
                    <Check size={16} />
                  </div>
                  <h4 className="font-semibold">Innovation</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  We embrace creativity and forward-thinking approaches to solve complex digital challenges.
                </p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-growstats-100 flex items-center justify-center text-growstats-700">
                    <Check size={16} />
                  </div>
                  <h4 className="font-semibold">Integrity</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  We operate with honesty, transparency, and ethical practices in all our client relationships.
                </p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-growstats-100 flex items-center justify-center text-growstats-700">
                    <Check size={16} />
                  </div>
                  <h4 className="font-semibold">Collaboration</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  We believe in the power of teamwork, both within our agency and in partnership with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="subheading">
              The passionate professionals behind GrowStats Media's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-accent-700 mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default About;
