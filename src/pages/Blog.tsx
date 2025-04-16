
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  category: string;
}

const BlogCard = ({ title, excerpt, date, author, image, slug, category }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <CardHeader>
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl font-display">
          <Link to={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <User size={14} />
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock size={14} />
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Proven SEO Strategies to Boost Your Website Traffic",
      excerpt: "Learn about the most effective SEO strategies that can help your website rank higher on search engines and drive more organic traffic.",
      date: "Apr 12, 2025",
      author: "Rahul Khanna",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "seo-strategies-to-boost-website-traffic",
      category: "SEO",
    },
    {
      title: "The Ultimate Guide to Email Marketing in 2025",
      excerpt: "Discover the latest email marketing trends, tools, and strategies that will help you create effective email campaigns in 2025.",
      date: "Apr 8, 2025",
      author: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "ultimate-guide-to-email-marketing",
      category: "Email Marketing",
    },
    {
      title: "How to Create a Social Media Strategy That Converts",
      excerpt: "Learn how to develop a social media marketing strategy that not only engages your audience but also drives conversions and sales.",
      date: "Apr 3, 2025",
      author: "Anita Roy",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "social-media-strategy-that-converts",
      category: "Social Media",
    },
    {
      title: "Web Development Trends You Need to Know in 2025",
      excerpt: "Stay ahead of the competition by keeping up with the latest web development trends that are shaping the digital landscape in 2025.",
      date: "Mar 28, 2025",
      author: "Vikram Patel",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "web-development-trends-2025",
      category: "Web Development",
    },
    {
      title: "The Power of Content Marketing: Why It Matters in 2025",
      excerpt: "Discover why content marketing remains one of the most effective digital marketing strategies and how to leverage it for your business.",
      date: "Mar 22, 2025",
      author: "Rahul Khanna",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "power-of-content-marketing",
      category: "Content Marketing",
    },
    {
      title: "How to Conduct a Comprehensive Website Audit",
      excerpt: "Learn the step-by-step process of conducting a website audit to identify issues and opportunities for improvement.",
      date: "Mar 15, 2025",
      author: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "how-to-conduct-website-audit",
      category: "Website Optimization",
    },
  ];

  const categories = [
    "All",
    "SEO",
    "Email Marketing",
    "Social Media",
    "Web Development",
    "Content Marketing",
    "Website Optimization",
    "Analytics",
  ];

  return (
    <Layout>
      <PageHeader
        title="Blog & Resources"
        subtitle="Insights, strategies, and industry updates from our digital marketing experts"
      />

      <section className="section">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category, i) => (
                <Button
                  key={i}
                  variant={i === 0 ? "default" : "outline"}
                  className="whitespace-nowrap"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Digital Marketing Trends 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full mb-4 inline-block">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Digital Marketing Trends to Watch in 2025</h2>
                  <p className="text-muted-foreground mb-6">
                    Explore the emerging digital marketing trends that are reshaping how businesses connect with their customers and drive growth in 2025.
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>Rahul Khanna</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>Apr 15, 2025</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/blog/digital-marketing-trends-2025">Read Article</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay updated with the latest digital marketing insights, trends, and tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-300 px-4 py-2 w-full"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
