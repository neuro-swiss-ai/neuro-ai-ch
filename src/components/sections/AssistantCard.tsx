
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface AssistantCardProps {
  name: string;
  emoji: string;
  imagePath: string;
  shortDescription: string;
  description: string;
  callToAction: string;
  contactText: string;
}

const AssistantCard = ({
  name,
  emoji,
  imagePath,
  shortDescription,
  description,
  callToAction,
  contactText,
}: AssistantCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-[400px] w-full max-w-xs mx-auto"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-white">
              {name} – {shortDescription} {emoji}
            </h3>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img 
              src={imagePath} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className="p-4 bg-black/40 backdrop-blur-sm">
            <p className="text-white/80 text-sm">
              Survolez pour découvrir
            </p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden flex flex-col p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {name} – {shortDescription} {emoji}
          </h3>
          
          <p className="text-white/90 mb-3">{description}</p>
          <p className="text-white font-medium mb-6">{callToAction}</p>
          
          <div className="mt-auto">
            <a 
              href="https://wa.me/message/OFHBXHWDIADHA1" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="default" className="w-full group">
                <MessageCircle className="mr-2 h-4 w-4 text-green-500 group-hover:animate-pulse" />
                {contactText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantCard;
