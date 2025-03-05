
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Audits = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">{t("our_audits")}</h1>
            
            {/* Introduction */}
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">{t("evaluate_optimize")}</h2>
              <p className="text-white/80 mb-6">
                {t("ai_business")}
              </p>
              <p className="text-white/80">
                {t("methodical_approach")}
              </p>
            </div>
            
            {/* Nos services */}
            <h2 className="text-3xl font-display font-bold text-white mb-6">{t("our_services_audits")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <div className="glass-effect rounded-2xl p-8 card-hover">
                <div className="h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3 text-center">{t("ai_audit")}</h3>
                <p className="text-white/70">
                  {t("ai_audit_text")}
                </p>
                <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                  <li>{t("business_processes")}</li>
                  <li>{t("data_sources")}</li>
                  <li>{t("tech_infrastructure")}</li>
                  <li>{t("optimization_opportunities")}</li>
                  <li>{t("key_performance")}</li>
                </ul>
              </div>
              
              {/* Service 2 */}
              <div className="glass-effect rounded-2xl p-8 card-hover">
                <div className="h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3 text-center">{t("strategic_consulting")}</h3>
                <p className="text-white/70">
                  {t("strategic_text")}
                </p>
                <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                  <li>{t("ai_vision")}</li>
                  <li>{t("priority_initiatives")}</li>
                  <li>{t("appropriate_tech")}</li>
                  <li>{t("necessary_resources")}</li>
                  <li>{t("potential_roi")}</li>
                </ul>
              </div>
              
              {/* Service 3 */}
              <div className="glass-effect rounded-2xl p-8 card-hover">
                <div className="h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3 text-center">{t("personalized_support")}</h3>
                <p className="text-white/70">
                  {t("support_text")}
                </p>
                <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                  <li>{t("tech_partners")}</li>
                  <li>{t("change_management")}</li>
                  <li>{t("implementation_supervision")}</li>
                  <li>{t("results_measurement")}</li>
                  <li>{t("skills_transfer")}</li>
                </ul>
              </div>
            </div>
            
            {/* Témoignage */}
            <div className="glass-effect rounded-2xl p-8 mb-16">
              <blockquote className="text-xl text-white/90 italic mb-6">
                {t("audit_testimonial")}
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-mauve/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-medium">JD</span>
                </div>
                <div>
                  <p className="font-medium text-white">Jean Dupont</p>
                  <p className="text-white/70">Directeur de l'innovation, Entreprise de services financiers</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  {t("book_ai_audit")}
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

export default Audits;
