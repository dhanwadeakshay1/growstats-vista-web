
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { blogPosts, featuredPost } from "@/data/blogData";

const BlogDetail = () => {
  const { slug } = useParams();
  
  // Find the blog post by slug
  const post = slug === featuredPost.slug 
    ? featuredPost 
    : blogPosts.find((post) => post.slug === slug);

  // If post not found, show error
  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-16 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center mb-6">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            We couldn't find the blog post you were looking for.
          </p>
          <Button asChild className="bg-growstats-blue hover:bg-growstats-blue/90 text-white">
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Generate paragraph content for the blog post
  const generateContent = () => {
    const paragraphs = [];
    
    // Intro paragraph
    paragraphs.push(`${post.excerpt} This comprehensive guide explores the latest trends, best practices, and expert strategies to help you stay ahead in the competitive digital landscape.`);
    
    // Main sections - generate 3-4 sections based on the post title
    const topics = [
      `Understanding ${post.title.split(':')[0].split('to')[0]}`,
      `Key Strategies for Success`,
      `Implementation Guidelines`,
      `Measuring Results and Performance`,
    ];
    
    topics.forEach(topic => {
      paragraphs.push(`<h2 class="text-2xl font-bold mt-8 mb-4 text-growstats-purple">${topic}</h2>`);
      paragraphs.push(`<p class="mb-6">In today's rapidly evolving digital landscape, ${topic.toLowerCase()} has become increasingly important for businesses aiming to maintain a competitive edge. Research shows that organizations implementing effective ${topic.toLowerCase()} strategies see an average of 23% improvement in key performance metrics. This section explores the fundamental concepts, practical applications, and emerging trends in this area.</p>`);
      paragraphs.push(`<p class="mb-6">Industry experts recommend a structured approach when developing your ${topic.toLowerCase()} strategy. Begin by conducting a thorough assessment of your current position, identify specific goals aligned with your business objectives, and implement data-driven methodologies to track progress. This ensures your efforts remain focused and measurable throughout the implementation process.</p>`);
    });
    
    // Conclusion
    paragraphs.push(`<h2 class="text-2xl font-bold mt-8 mb-4 text-growstats-purple">Conclusion</h2>`);
    paragraphs.push(`<p class="mb-6">As we've explored throughout this article, ${post.title.split(':')[0].toLowerCase()} represents a critical component of modern digital strategy. By implementing the approaches outlined above, organizations can achieve significant improvements in efficiency, reach, and overall performance. Remember that success requires ongoing refinement and adaptation to changing market conditions and customer expectations.</p>`);
    
    return (
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: paragraphs.join('') }} />
    );
  };

  return (
    <Layout>
      <PageHeader
        title={post.title}
        subtitle={`Published ${post.date} • ${post.readTime} min read`}
        bgClass="bg-gradient-to-r from-growstats-purple to-growstats-blue"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-growstats-blue hover:text-growstats-purple transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </div>
          
          {/* Blog Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-xs font-medium px-2 py-1 bg-growstats-red/10 text-growstats-red rounded-full">
                {post.category}
              </span>
              <span className="text-xs font-medium px-2 py-1 bg-growstats-purple/10 text-growstats-purple rounded-full flex items-center">
                <ClockIcon size={12} className="mr-1" />
                {post.readTime} min read
              </span>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="flex items-center mr-6">
                {post.authorPhoto ? (
                  <img src={post.authorPhoto} alt={post.author} className="w-10 h-10 rounded-full object-cover mr-2" />
                ) : (
                  <UserIcon size={16} className="mr-2" />
                )}
                <span className="text-sm text-gray-700">{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-2" />
                <span className="text-sm text-gray-700">{post.date}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
          
          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {generateContent()}
          </div>
          
          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {post.authorPhoto ? (
                <img src={post.authorPhoto} alt={post.author} className="w-20 h-20 rounded-full object-cover" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-growstats-purple/20 flex items-center justify-center">
                  <UserIcon size={32} className="text-growstats-purple" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-700 mb-4">
                  {post.author} is a digital marketing expert with over 10 years of experience in {post.category}. 
                  Specializing in developing data-driven strategies that deliver measurable results for businesses 
                  across various industries.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-growstats-blue text-growstats-blue">
                    View Profile
                  </Button>
                  <Button size="sm" className="bg-growstats-red hover:bg-growstats-red/90 text-white">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-growstats-purple">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.category === post.category && relatedPost.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Link to={`/blog/${relatedPost.slug}`} className="block">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 text-growstats-purple hover:text-growstats-red transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-700 line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 bg-growstats-blue/10 p-8 md:p-12 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-growstats-blue">Want to learn more about {post.category}?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our {post.category} experts to discuss your specific needs and discover how we can help your business grow.
            </p>
            <Button className="bg-growstats-red hover:bg-growstats-red/90 text-white">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
