
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
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gradient mb-4">
            {t("transform_business")}
          </h2>
          <h3 className="text-2xl font-display text-white/90 mb-6">
            {t("ready_transform")}
          </h3>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t("contact_discover")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
              <Button variant="default" size="lg">
                {t("book_appointment")}
              </Button>
            </a>
            <a href="https://wa.me/message/OFHBXHWDIADHA1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white/20 bg-transparent hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                {t("contact_whatsapp")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
