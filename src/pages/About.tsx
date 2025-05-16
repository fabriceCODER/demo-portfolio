
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      {/* About Hero */}
      <section className="section-padding bg-harper-cream">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-harper-navy mb-6 animate-fade-in">
                About <span className="text-harper-terracotta">Alex Harper</span>
              </h1>
              <p className="text-gray-700 text-lg animate-fade-in">
                I'm a multidisciplinary designer with a passion for creating meaningful brand 
                experiences that resonate with audiences and drive business growth. With a 
                background in both traditional and digital design, I bring a holistic approach 
                to every project I undertake.
              </p>
            </div>
            
            <div className="lg:w-1/2 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Alex Harper in studio"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* My Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-harper-navy mb-8 text-center">My Story</h2>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                My journey into design began over a decade ago when I discovered a passion for visual storytelling 
                during my studies at the California Institute of Arts. What started as a curiosity quickly evolved 
                into a lifelong pursuit of creative excellence.
              </p>
              
              <p>
                After graduating with honors, I spent three years at a boutique design agency in San Francisco, 
                where I honed my skills working with startups and established brands alike. This experience taught 
                me the importance of strategic thinking and how design decisions impact business outcomes.
              </p>
              
              <p>
                In 2018, I took the leap to establish my independent practice, allowing me to work more closely 
                with clients and develop deeper relationships. My approach centers around understanding the unique 
                challenges each client faces and crafting tailored solutions that address their specific needs.
              </p>
              
              <p>
                When I'm not designing, you'll find me exploring hiking trails with my camera, experimenting with 
                new cooking recipes, or mentoring emerging designers. These activities fuel my creativity and keep 
                me connected to the world around me, which ultimately informs my design work.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Expertise */}
      <section className="section-padding bg-harper-cream">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-harper-navy mb-8 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
              <h3 className="text-xl font-bold text-harper-terracotta mb-4">Brand Identity</h3>
              <p className="text-gray-700 mb-6">
                Creating cohesive visual systems that communicate brand values and resonate with target audiences.
              </p>
              <ul className="space-y-2">
                {["Logo Design", "Visual Identity Systems", "Brand Guidelines", "Brand Strategy"].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle size={16} className="text-harper-sage mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
              <h3 className="text-xl font-bold text-harper-terracotta mb-4">Digital Design</h3>
              <p className="text-gray-700 mb-6">
                Crafting intuitive digital experiences that engage users and achieve business objectives.
              </p>
              <ul className="space-y-2">
                {["Web Design", "UI/UX Design", "Mobile Interfaces", "Interactive Prototypes"].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle size={16} className="text-harper-sage mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
              <h3 className="text-xl font-bold text-harper-terracotta mb-4">Print Design</h3>
              <p className="text-gray-700 mb-6">
                Designing tangible materials that make a lasting impression through thoughtful details.
              </p>
              <ul className="space-y-2">
                {["Editorial Design", "Packaging", "Marketing Collateral", "Environmental Graphics"].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle size={16} className="text-harper-sage mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education & Experience */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-harper-navy mb-12 text-center">Education & Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-harper-navy mb-6">Education</h3>
              
              <div className="space-y-10">
                <div className="relative pl-8 border-l-2 border-harper-terracotta">
                  <div className="absolute w-4 h-4 bg-harper-terracotta rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-lg">MFA in Graphic Design</h4>
                  <p className="text-harper-terracotta">California Institute of Arts</p>
                  <p className="text-gray-600">2013 - 2015</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-harper-terracotta">
                  <div className="absolute w-4 h-4 bg-harper-terracotta rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-lg">BA in Visual Arts</h4>
                  <p className="text-harper-terracotta">University of California, Berkeley</p>
                  <p className="text-gray-600">2009 - 2013</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-harper-terracotta rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-lg">Certificate in UX Design</h4>
                  <p className="text-harper-terracotta">Nielsen Norman Group</p>
                  <p className="text-gray-600">2016</p>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-harper-navy mb-6">Experience</h3>
              
              <div className="space-y-10">
                <div className="relative pl-8 border-l-2 border-harper-sage">
                  <div className="absolute w-4 h-4 bg-harper-sage rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-lg">Independent Designer</h4>
                  <p className="text-harper-terracotta">Alex Harper Design Studio</p>
                  <p className="text-gray-600">2018 - Present</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-harper-sage">
                  <div className="absolute w-4 h-4 bg-harper-sage rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-lg">Senior Designer</h4>
                  <p className="text-harper-terracotta">Spark Creative Agency</p>
                  <p className="text-gray-600">2015 - 2018</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-harper-sage rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-lg">Design Intern</h4>
                  <p className="text-harper-terracotta">IDEO</p>
                  <p className="text-gray-600">Summer 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Approach */}
      <section className="section-padding bg-harper-navy text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">My Design Philosophy</h2>
            <p className="text-xl italic mb-8">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <p className="mb-4">
              I believe that great design is the perfect balance between aesthetics and function. 
              Every project begins with deep research and understanding of the client's goals, target audience,
              and market context. Only then do I begin crafting solutions that are both beautiful and effective.
            </p>
            <p>
              My work is guided by principles of clarity, purpose, and emotional connection, 
              ensuring that every design not only looks good but delivers tangible results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
