
import React from "react";

const ApproachSection = () => {
  return (
    <section className="section bg-growstats-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6 text-growstats-purple">Our Approach</h2>
            <p className="body-text mb-6 text-gray-700">
              We believe in a transparent, collaborative approach to every project. Our team works closely with you to understand your unique business needs and develop tailored strategies that deliver results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                    1
                  </div>
                  <h3 className="font-semibold text-growstats-purple">Discovery & Analysis</h3>
                </div>
                <p className="pl-11 text-gray-600">Understanding your business objectives, target audience, and current digital presence.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                    2
                  </div>
                  <h3 className="font-semibold text-growstats-purple">Strategy Development</h3>
                </div>
                <p className="pl-11 text-gray-600">Creating a customized plan to achieve your specific goals and objectives.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                    3
                  </div>
                  <h3 className="font-semibold text-growstats-purple">Implementation</h3>
                </div>
                <p className="pl-11 text-gray-600">Executing the strategy with precision, creativity, and attention to detail.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-growstats-red/10 flex items-center justify-center text-growstats-red">
                    4
                  </div>
                  <h3 className="font-semibold text-growstats-purple">Monitoring & Optimization</h3>
                </div>
                <p className="pl-11 text-gray-600">Continuously analyzing performance and making data-driven adjustments for optimal results.</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our Approach"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
