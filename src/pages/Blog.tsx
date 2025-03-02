
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-background">
          <div className="container-custom">
            <h1 className="text-4xl font-display font-bold text-gradient mb-6">Blog</h1>
            <p className="text-white/70 max-w-2xl">
              Consultez nos derniers articles et actualités sur l'IA et l'innovation.
            </p>
            
            <div className="mt-10 text-center">
              <p className="text-white/70">
                Contenu à venir prochainement...
              </p>
              <div className="mt-8">
                <Button variant="outline" onClick={() => window.history.back()}>
                  Retourner à l'accueil
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
