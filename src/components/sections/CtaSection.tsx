
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CtaSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-[#0a0a10] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-mauve-dark blur-[150px]"></div>
      </div>
    </section>
  );
};

export default CtaSection;
