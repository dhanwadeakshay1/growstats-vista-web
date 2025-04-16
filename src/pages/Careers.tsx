
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Briefcase, Clock, MapPin, ArrowRight } from 'lucide-react';

const Careers = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-growstats-red to-growstats-purple text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
            Careers at GrowStats Media
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our current openings and take the next step in your career journey with GrowStats Media. 
            We're always looking for talented individuals who are passionate about digital marketing and web development.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-growstats-purple hover:bg-gray-100 transition-colors duration-300"
          >
            <a href="#openings">View All Openings</a>
          </Button>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-growstats-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-growstats-red" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Competitive Salary</h3>
              <p className="text-gray-600">We offer competitive compensation packages aligned with industry standards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-growstats-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-growstats-blue" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible working hours and remote work options to suit your lifestyle</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-growstats-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-growstats-green" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Prime Location</h3>
              <p className="text-gray-600">Modern office spaces in convenient locations with great amenities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-growstats-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-growstats-purple" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Career Growth</h3>
              <p className="text-gray-600">Clear paths for advancement and professional development opportunities</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="openings" className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 text-center text-growstats-blue">Current Openings</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Discover your next career opportunity with us and join a team dedicated to excellence and innovation</p>
          
          <div className="grid gap-6 md:gap-8">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <Badge className="bg-growstats-red mb-2">Full-time</Badge>
                    <h3 className="text-xl font-bold mb-2">Senior Digital Marketing Specialist</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>Remote / Pune, India</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-growstats-blue border-growstats-blue">
                    New
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  We're looking for an experienced digital marketing specialist to develop and implement effective marketing strategies, analyze campaign performance, and drive business growth for our clients.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600">
                  <li>5+ years of experience in digital marketing</li>
                  <li>Proficiency in SEO, SEM, and social media marketing</li>
                  <li>Strong analytical skills and data-driven approach</li>
                </ul>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 2 days ago</span>
                <Button variant="outline" className="border-growstats-blue text-growstats-blue hover:bg-growstats-blue hover:text-white">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <Badge className="bg-growstats-red mb-2">Full-time</Badge>
                    <h3 className="text-xl font-bold mb-2">Web Developer</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>Pune, India</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our development team to build responsive, user-friendly websites and web applications for our diverse client base, using modern frameworks and best practices.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600">
                  <li>3+ years of experience in web development</li>
                  <li>Proficiency in HTML, CSS, JavaScript, and React</li>
                  <li>Experience with responsive design and cross-browser compatibility</li>
                </ul>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 1 week ago</span>
                <Button variant="outline" className="border-growstats-blue text-growstats-blue hover:bg-growstats-blue hover:text-white">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <Badge className="bg-growstats-green mb-2">Part-time</Badge>
                    <h3 className="text-xl font-bold mb-2">Content Writer</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Create compelling, SEO-friendly content for blogs, websites, social media, and marketing materials across various industries and niches.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600">
                  <li>Strong writing and editing skills</li>
                  <li>Understanding of SEO principles</li>
                  <li>Ability to adapt writing style to different audiences</li>
                </ul>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 3 weeks ago</span>
                <Button variant="outline" className="border-growstats-blue text-growstats-blue hover:bg-growstats-blue hover:text-white">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Don't See a Suitable Position?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to our success.
          </p>
          <Button asChild className="bg-growstats-blue hover:bg-growstats-blue/90">
            <a href="/contact">Send Open Application</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
