
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section bg-harper-cream flex items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center pt-24">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-harper-navy">
              Crafting Stories Through{" "}
              <span className="text-harper-terracotta">Design</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Hi, I'm Alex Harper, a creative professional specializing in visual storytelling. 
              I transform ideas into compelling visual narratives that resonate with audiences 
              and drive results for brands and businesses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-harper-terracotta text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border border-harper-navy text-harper-navy font-medium rounded-md hover:bg-harper-navy hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Alex Harper"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
              <h2 className="text-3xl font-bold text-harper-navy mb-4">About Me</h2>
              <p className="text-gray-700">
                With over 8 years of experience in the creative industry, I've developed a 
                unique approach to design that combines strategic thinking with artistic vision.
                My goal is to create meaningful connections between brands and their audiences
                through thoughtful, intentional design.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 text-harper-terracotta font-medium hover:underline"
              >
                Learn more about my journey
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-harper-sage rounded-lg flex items-center justify-center p-6">
                  <span className="font-montserrat font-bold text-4xl text-white">8+</span>
                  <span className="ml-2 font-medium text-white leading-tight">Years<br/>Experience</span>
                </div>
                <div className="aspect-square bg-harper-terracotta rounded-lg flex items-center justify-center p-6">
                  <span className="font-montserrat font-bold text-4xl text-white">50+</span>
                  <span className="ml-2 font-medium text-white leading-tight">Brands<br/>Served</span>
                </div>
                <div className="aspect-square bg-harper-sand rounded-lg flex items-center justify-center p-6">
                  <span className="font-montserrat font-bold text-4xl text-harper-navy">12</span>
                  <span className="ml-2 font-medium text-harper-navy leading-tight">Design<br/>Awards</span>
                </div>
                <div className="aspect-square bg-harper-navy rounded-lg flex items-center justify-center p-6">
                  <span className="font-montserrat font-bold text-4xl text-white">100%</span>
                  <span className="ml-2 font-medium text-white leading-tight">Client<br/>Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="section-padding bg-harper-cream">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-harper-navy">Featured Work</h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Here's a selection of my recent projects that showcase my design philosophy
              and creative approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="Essence Brand Identity"
              category="Brand Design"
              description="A complete brand overhaul for a natural beauty company, including logo, packaging, and digital assets."
              imageSrc="https://images.unsplash.com/photo-1586767003402-8ade266faa70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <PortfolioCard
              title="Nomad Travel Magazine"
              category="Editorial Design"
              description="Editorial design and art direction for a premium travel publication focusing on sustainable tourism."
              imageSrc="https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <PortfolioCard
              title="Mindful App Interface"
              category="UI/UX Design"
              description="A meditation app interface designed with accessibility and user engagement as core principles."
              imageSrc="https://images.unsplash.com/photo-1616077168697-1685dd057d20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-harper-navy text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding bg-harper-sage text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
            
            <blockquote className="text-xl italic">
              "Alex has a remarkable ability to understand brand essence and translate it into 
              visual language. The work delivered exceeded our expectations and directly 
              contributed to our 40% growth in customer engagement."
            </blockquote>
            
            <div className="mt-6">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm opacity-80">Marketing Director, Elemental Brands</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-harper-navy mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-700 mb-8">
              Let's collaborate to bring your vision to life with designs that captivate and inspire.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-harper-terracotta text-white font-medium rounded-md hover:bg-opacity-90 transition-colors text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
