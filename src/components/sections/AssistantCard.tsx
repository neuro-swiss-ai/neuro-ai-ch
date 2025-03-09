
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

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
      className="group h-[520px] w-full max-w-sm mx-auto"
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
              {emoji} {name} – {shortDescription}
            </h3>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img 
              src={imagePath} 
              alt={name} 
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
          <h3 className="text-xl font-bold text-white mb-2">
            {emoji} {name} – {shortDescription}
          </h3>
          
          <div className="text-white/90 mb-4 overflow-y-auto hide-scrollbar max-h-[320px] whitespace-pre-line text-base">
            {description}
          </div>
          
          <p className="text-mauve font-medium mb-6">{callToAction}</p>
          
          <div className="mt-auto">
            <a 
              href="https://calendly.com/neuroai-ch/neuro-ai-interview" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block mb-3"
            >
              <Button variant="default" className="w-full group">
                <Calendar className="mr-2 h-4 w-4" />
                Réserver une démo
              </Button>
            </a>
            
            <a 
              href="https://wa.me/message/OFHBXHWDIADHA1" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full group border-white/20 bg-transparent hover:bg-white/10">
                <MessageCircle className="mr-2 h-4 w-4 text-green-500 group-hover:animate-pulse" />
                Contacter par WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantCard;
