
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHeader title="Privacy Policy" />

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-lg mb-6">
              This Privacy Policy describes how GrowStats Media Private Limited ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website, products, and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we collect automatically when you use our services, and information we obtain from third-party sources.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Information You Provide to Us</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact information (such as name, email address, postal address, and phone number)</li>
              <li>Account credentials (such as username and password)</li>
              <li>Profile information (such as profile picture and preferences)</li>
              <li>Payment information (such as credit card details and billing address)</li>
              <li>Communications (such as emails, chat messages, and feedback)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Information We Collect Automatically</h3>
            <p>When you use our services, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Device information (such as IP address, browser type, operating system)</li>
              <li>Usage information (such as pages visited, time spent on pages, links clicked)</li>
              <li>Location information (such as general location derived from IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, promotions, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve your experience</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sharing of Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>With service providers who perform services on our behalf</li>
              <li>With business partners with whom we jointly offer products or services</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
              <li>If we believe disclosure is necessary to comply with applicable laws and regulations</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices</h2>
            <p>You have several choices regarding your information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Account Information:</strong> You may update or correct your account information by logging into your account settings.</li>
              <li><strong>Cookies:</strong> Most browsers allow you to adjust your cookie settings. Please note that disabling cookies may affect the functionality of our services.</li>
              <li><strong>Marketing Communications:</strong> You may opt out of receiving promotional emails by following the instructions in those emails.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">International Data Transfers</h2>
            <p>
              Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16, and we do not knowingly collect personal information from children under 16.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-8">
              <strong>GrowStats Media Private Limited</strong><br />
              15TH B, SECOND FLOOR, CITY VISTA,<br />
              FOUNTAIN ROAD KHARADI,<br />
              PUNE, Maharashtra, India, 411014<br /><br />
              <a href="mailto:mail@growstatsmedia.com" className="text-primary hover:underline">mail@growstatsmedia.com</a>
            </p>

            <p className="text-sm text-muted-foreground">
              Last Updated: April 16, 2025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
