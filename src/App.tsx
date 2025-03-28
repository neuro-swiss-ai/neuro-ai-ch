
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";
import Reservation from "@/pages/Reservation";
import Solutions from "@/pages/Solutions";
import Audits from "@/pages/Audits";
import Formations from "@/pages/Formations";
import Assistants from "@/pages/Assistants";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  // Add an effect to properly initialize language from localStorage on app start
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "fr";
    if (savedLanguage !== "fr" && savedLanguage !== "en") {
      localStorage.setItem("language", "fr");
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:postId",
      element: <BlogPost />,
    },
    {
      path: "/reservation",
      element: <Reservation />,
    },
    {
      path: "/solutions",
      element: <Solutions />,
    },
    {
      path: "/audits",
      element: <Audits />,
    },
    {
      path: "/formations",
      element: <Formations />,
    },
    {
      path: "/assistants",
      element: <Assistants />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
