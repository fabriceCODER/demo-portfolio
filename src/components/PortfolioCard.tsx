
import { useState } from 'react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  url?: string;  // Optional URL for the project
}

const PortfolioCard = ({ title, category, description, imageSrc, url = "#" }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        {imageError ? (
          <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center">
            <ImageIcon size={48} className="text-gray-300 mb-2" />
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
        <div className={`absolute inset-0 bg-harper-navy/70 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-montserrat text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-harper-navy transition-colors flex items-center gap-2"
          >
            <span>View Details</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-harper-terracotta text-sm font-medium uppercase tracking-wider">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-harper-navy">{title}</h3>
        <p className="mt-3 text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
