
import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <Layout>
      <PageHeader 
        title="Join Our Team" 
        subtitle="Build your career with a company that's passionate about digital marketing and innovation."
      />

      <section className="section bg-gradient-to-r from-growstats-red to-growstats-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
            Ready to Join Our Team?
          </h2>
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
      
      {/* This is a placeholder for the job openings section */}
      <section id="openings" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center text-growstats-blue">Current Openings</h2>
          <div className="grid gap-8">
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="text-sm text-growstats-red font-medium mb-2">Full-time</p>
              <h3 className="text-xl font-bold mb-2">Senior Digital Marketing Specialist</h3>
              <p className="text-gray-600 mb-4">
                We're looking for an experienced digital marketing specialist to join our growing team.
              </p>
              <Button variant="outline" className="border-growstats-blue text-growstats-blue">
                Apply Now
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="text-sm text-growstats-red font-medium mb-2">Full-time</p>
              <h3 className="text-xl font-bold mb-2">Web Developer</h3>
              <p className="text-gray-600 mb-4">
                Join our development team and help create stunning websites for our clients.
              </p>
              <Button variant="outline" className="border-growstats-blue text-growstats-blue">
                Apply Now
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="text-sm text-growstats-red font-medium mb-2">Part-time</p>
              <h3 className="text-xl font-bold mb-2">Content Writer</h3>
              <p className="text-gray-600 mb-4">
                Help create engaging content for our clients across various industries.
              </p>
              <Button variant="outline" className="border-growstats-blue text-growstats-blue">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
