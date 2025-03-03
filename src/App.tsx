
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

const queryClient = new QueryClient();

function App() {
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
