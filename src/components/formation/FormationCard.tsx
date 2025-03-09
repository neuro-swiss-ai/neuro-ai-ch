
import { useState } from "react";

interface FormationCardProps {
  title: string;
  duration: string;
  imageSrc: string;
  description: string;
}

const FormationCard = ({ title, duration, imageSrc, description }: FormationCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-80 rounded-xl preserve-3d transition-all duration-500 cursor-pointer"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front of card */}
      <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-display font-medium text-white">{title}</h3>
          <p className="text-white/80">{duration}</p>
        </div>
      </div>
      
      {/* Back of card */}
      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-mauve/90 to-purple-800/90 rounded-xl p-6 flex items-center justify-center">
        <div>
          <h3 className="text-xl font-display font-medium text-white mb-3">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
