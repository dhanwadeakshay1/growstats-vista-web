
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, User, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { blogPosts, featuredPost, categories } from "@/data/blogData";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorPhoto?: string;
  image: string;
  slug: string;
  category: string;
  readTime?: string;
}

const BlogCard = ({ title, excerpt, date, author, authorPhoto, image, slug, category, readTime }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col card-shadow hover:shadow-xl transition-shadow duration-300">
      <div className="h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </div>
      <CardHeader className="pt-5 pb-2">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-growstats-red/10 text-growstats-red rounded-full">
            {category}
          </span>
          {readTime && (
            <span className="ml-2 text-xs font-medium px-2 py-1 bg-growstats-purple/10 text-growstats-purple rounded-full">
              {readTime} min read
            </span>
          )}
        </div>
        <CardTitle className="text-xl font-display text-growstats-purple">
          <Link to={`/blog/${slug}`} className="hover:text-growstats-red transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-700">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          {authorPhoto ? (
            <img src={authorPhoto} alt={author} className="w-6 h-6 rounded-full object-cover" />
          ) : (
            <User size={14} />
          )}
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} />
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const FeaturedPost = ({ title, excerpt, date, author, authorPhoto, image, slug, category, readTime }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden mb-12 card-shadow hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex space-x-2 mb-4">
            <span className="text-xs font-medium px-2 py-1 bg-growstats-red/20 text-growstats-red rounded-full">
              Featured
            </span>
            <span className="text-xs font-medium px-2 py-1 bg-growstats-purple/20 text-growstats-purple rounded-full">
              {category}
            </span>
            {readTime && (
              <span className="text-xs font-medium px-2 py-1 bg-growstats-blue/20 text-growstats-blue rounded-full">
                {readTime} min read
              </span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display text-growstats-purple">{title}</h2>
          <p className="text-muted-foreground mb-6 text-gray-700">
            {excerpt}
          </p>
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              {authorPhoto ? (
                <img src={authorPhoto} alt={author} className="w-6 h-6 rounded-full object-cover" />
              ) : (
                <User size={14} />
              )}
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          </div>
          <Button asChild className="self-start bg-growstats-blue hover:bg-growstats-blue/90 text-white">
            <Link to={`/blog/${slug}`} className="flex items-center">
              Read Article
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Blog = () => {
  const [activePage, setActivePage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Simulate successful subscription
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <Layout>
      <PageHeader
        title="Blog & Resources"
        subtitle="Insights, strategies, and industry updates from our digital marketing experts"
        bgClass="bg-gradient-to-r from-growstats-purple to-growstats-blue"
      />

      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-6 text-growstats-purple">Filter by Topic</h2>
            <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="flex flex-nowrap overflow-x-auto pb-2 bg-white p-1 border rounded-lg space-x-1 mb-4">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="bg-white data-[state=active]:bg-growstats-red/10 data-[state=active]:text-growstats-red whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Featured Post */}
          <FeaturedPost {...featuredPost} />

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-growstats-blue text-growstats-blue"
                disabled={activePage === 1}
                onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              <Button 
                variant={activePage === 1 ? "default" : "outline"}
                className={activePage === 1 ? "bg-growstats-blue hover:bg-growstats-blue/90" : "border-growstats-blue text-growstats-blue"}
                onClick={() => setActivePage(1)}
              >
                1
              </Button>
              
              <Button 
                variant={activePage === 2 ? "default" : "outline"}
                className={activePage === 2 ? "bg-growstats-blue hover:bg-growstats-blue/90" : "border-growstats-blue text-growstats-blue"}
                onClick={() => setActivePage(2)}
              >
                2
              </Button>
              
              <Button 
                variant={activePage === 3 ? "default" : "outline"}
                className={activePage === 3 ? "bg-growstats-blue hover:bg-growstats-blue/90" : "border-growstats-blue text-growstats-blue"}
                onClick={() => setActivePage(3)}
              >
                3
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="border-growstats-blue text-growstats-blue"
                disabled={activePage === 3}
                onClick={() => setActivePage(prev => Math.min(prev + 1, 3))}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-xl text-center shadow-lg border border-growstats-purple/10">
            <h3 className="text-2xl font-bold mb-4 font-display text-growstats-purple">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-gray-700">
              Stay updated with the latest digital marketing insights, trends, and tips delivered directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-300 px-4 py-2 w-full focus:border-growstats-blue focus:ring-1 focus:ring-growstats-blue focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-growstats-red hover:bg-growstats-red/90 text-white">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
