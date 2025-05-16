
import PortfolioCard from "@/components/PortfolioCard";

export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  url?: string;
};

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid = ({ items }: PortfolioGridProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No projects found in this category.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <PortfolioCard
          key={item.id}
          title={item.title}
          category={item.category}
          description={item.description}
          imageSrc={item.imageSrc}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
