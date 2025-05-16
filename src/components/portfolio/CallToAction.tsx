
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="container mx-auto text-center max-w-2xl">
      <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
      <p className="mb-8 text-lg">
        Let's collaborate to bring your vision to life with thoughtful, impactful design.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          to="/contact" 
          className="inline-block px-8 py-4 bg-harper-terracotta text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
        >
          Get in Touch
        </Link>
        <a 
          href="tel:+254794500945"
          className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-harper-navy transition-colors"
        >
          <Phone size={18} />
          <span>Call Me: 0794500945</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
