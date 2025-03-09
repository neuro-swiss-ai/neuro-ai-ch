import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Import pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import Formations from "@/pages/Formations";
import Solutions from "@/pages/Solutions";
import Audits from "@/pages/Audits";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Assistants from "@/pages/Assistants";
import Reservation from "@/pages/Reservation";
import NotFound from "@/pages/NotFound";
import Tom from "@/pages/Tom";

// Import contexts
import { LanguageProvider } from "@/contexts/LanguageContext";

const queryClient = new QueryClient();

function App() {
  return (
    <LanguageProvider>
      <div className="bg-background text-foreground">
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/audits" element={<Audits />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/assistants" element={<Assistants />} />
            <Route path="/tom" element={<Tom />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </LanguageProvider>
  );
}

export default App;
