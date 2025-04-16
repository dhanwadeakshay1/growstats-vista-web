
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";
import { Mail } from "lucide-react";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const NewsletterSubscription = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate email format
      if (!email || !email.includes('@') || !email.includes('.')) {
        throw new Error("Please enter a valid email address");
      }

      // Insert into Supabase newsletter_subscribers table
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { 
            email: email,
            subscribed_at: new Date().toISOString(),
            status: "active"
          }
        ]);

      if (error) {
        // Check for unique constraint violations (email already subscribed)
        if (error.code === '23505') {
          toast({
            title: "Already subscribed!",
            description: "This email is already subscribed to our newsletter.",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter.",
          variant: "default",
        });
      }
      
      // Reset form
      setEmail("");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Unable to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="block w-full rounded-md pl-10 text-sm focus:border-growstats-blue focus:ring-growstats-blue"
          required
        />
      </div>
      <div className="mt-3 sm:ml-3 sm:mt-0">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-growstats-red hover:bg-growstats-red/90"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
};

export default NewsletterSubscription;
