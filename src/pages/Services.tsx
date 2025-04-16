
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ServicesGrid from "@/components/services/ServicesGrid";
import ApproachSection from "@/components/services/ApproachSection";
import ContactCTA from "@/components/home/ContactCTA";

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive digital marketing and web development solutions tailored to your business needs"
        bgClass="bg-gradient-to-r from-growstats-red to-growstats-purple"
      />
      
      <ServicesGrid />
      <ApproachSection />
      <ContactCTA />
    </Layout>
  );
};

export default Services;
