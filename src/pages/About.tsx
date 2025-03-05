
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
          <div className="container-custom relative">
            {/* Bouton de retour */}
            <Link to="/" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{t("back")}</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">{t("about_us")}</h1>
            
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">{t("our_mission")}</h2>
              <p className="text-white/80 mb-6">
                {t("mission_text_1")}
              </p>
              <p className="text-white/80">
                {t("mission_text_2")}
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">{t("our_history")}</h2>
              <p className="text-white/80 mb-6">
                {t("history_text_1")}
              </p>
              <p className="text-white/80 mb-6">
                {t("history_text_2")}
              </p>
              <p className="text-white/80">
                {t("history_text_3")}
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">{t("our_values")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-display font-medium text-mauve mb-3">{t("pragmatism")}</h3>
                  <p className="text-white/80 mb-6">
                    {t("pragmatism_text")}
                  </p>

                  <h3 className="text-xl font-display font-medium text-mauve mb-3">{t("transparency")}</h3>
                  <p className="text-white/80">
                    {t("transparency_text")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-mauve mb-3">{t("ethics")}</h3>
                  <p className="text-white/80 mb-6">
                    {t("ethics_text")}
                  </p>

                  <h3 className="text-xl font-display font-medium text-mauve mb-3">{t("innovation_value")}</h3>
                  <p className="text-white/80">
                    {t("innovation_text")}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  {t("discuss_project")}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
