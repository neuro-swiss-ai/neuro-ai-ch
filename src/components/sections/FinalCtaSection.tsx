
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCtaSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a10] to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-mauve-dark blur-[150px]"></div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
