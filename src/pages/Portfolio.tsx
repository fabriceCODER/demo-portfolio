
import { useState } from "react";
import CategoryFilter from "@/components/portfolio/CategoryFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import ProcessSteps from "@/components/portfolio/ProcessSteps";
import CallToAction from "@/components/portfolio/CallToAction";
import ContactLinks from "@/components/portfolio/ContactLinks";
import { PortfolioItem } from "@/components/portfolio/PortfolioGrid";

// Categories for filtering
const categories = ["All", "Brand Design", "Digital Design", "Print", "Packaging", "Illustration"];

// Process steps data
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, audience, and competitive landscape through in-depth research."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a creative approach and roadmap tailored to your specific needs and objectives."
  },
  {
    number: "03",
    title: "Creation",
    description: "Designing thoughtful solutions that align with your brand and resonate with your audience."
  },
  {
    number: "04",
    title: "Refinement",
    description: "Iterating and polishing the designs based on feedback to achieve the ideal outcome."
  }
];

const Portfolio = () => {
  // Sample portfolio items with improved images
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Essence Brand Identity",
      category: "Brand Design",
      description: "A complete brand overhaul for a natural beauty company, including logo, packaging, and digital assets. The design focuses on organic shapes and a soft color palette to reflect the brand's commitment to natural ingredients.",
      imageSrc: "https://images.unsplash.com/photo-1586767003402-8ade266faa70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/essence"
    },
    {
      id: 2,
      title: "Nomad Travel Magazine",
      category: "Print",
      description: "Editorial design and art direction for a premium travel publication focusing on sustainable tourism. Each spread was carefully crafted to balance stunning photography with readable typography and engaging layouts.",
      imageSrc: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/nomad"
    },
    {
      id: 3,
      title: "Mindful App Interface",
      category: "Digital Design",
      description: "A meditation app interface designed with accessibility and user engagement as core principles. The minimalist UI creates a calming experience while providing intuitive navigation throughout the user journey.",
      imageSrc: "https://images.unsplash.com/photo-1616077168697-1685dd057d20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/mindful"
    },
    {
      id: 4,
      title: "Artisan Coffee Packaging",
      category: "Packaging",
      description: "Distinctive packaging design for a specialty coffee roaster, emphasizing craft quality and sustainable materials. Each variant uses a color system to differentiate bean origins while maintaining brand consistency.",
      imageSrc: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/coffee"
    },
    {
      id: 5,
      title: "Botanical Illustrations",
      category: "Illustration",
      description: "A series of detailed botanical illustrations commissioned for a gardening publication. Each illustration combines scientific accuracy with artistic flourish to create visually engaging educational content.",
      imageSrc: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/botanical"
    },
    {
      id: 6,
      title: "Summit Financial Website",
      category: "Digital Design",
      description: "A complete website redesign for a financial advisory firm, focusing on clear information architecture and trust-building visual elements. The interface balances professionalism with approachability.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/summit"
    },
    {
      id: 7,
      title: "Harvest Festival Branding",
      category: "Brand Design",
      description: "Comprehensive event branding for an annual community harvest festival, including logo, signage, merchandise, and digital assets. The design evokes warmth and community through its vibrant color palette.",
      imageSrc: "https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/harvest"
    },
    {
      id: 8,
      title: "Wellness Product Line",
      category: "Packaging",
      description: "A cohesive packaging system for a wellness product line including supplements, teas, and skincare. The minimal design uses subtle color coding and clear typography to create a premium yet accessible brand experience.",
      imageSrc: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://example.com/portfolio/wellness"
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter items based on active category
  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <main className="pt-24">
      <section className="section-padding bg-harper-cream">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-harper-navy mb-6 animate-fade-in">
              My Portfolio
            </h1>
            <p className="text-gray-700 text-lg animate-fade-in mb-6">
              Explore a selection of my work across various disciplines and industries. 
              Each project represents a unique challenge and creative solution.
            </p>
            
            {/* Professional Contact Links */}
            <ContactLinks />
          </div>
          
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          {/* Portfolio Grid */}
          <PortfolioGrid items={filteredItems} />
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-harper-navy mb-6">My Design Process</h2>
            <p className="text-gray-700">
              Every successful project follows a thoughtful and strategic approach. 
              Here's how I work with clients to bring their vision to life.
            </p>
          </div>
          
          <ProcessSteps steps={processSteps} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-harper-navy text-white">
        <CallToAction />
      </section>
    </main>
  );
};

export default Portfolio;
