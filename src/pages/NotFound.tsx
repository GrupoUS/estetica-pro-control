
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-8xl font-extrabold text-brand-600">404</h1>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900">Página não encontrada</p>
          <p className="mt-6 text-base text-gray-500">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
          <div className="mt-10">
            <Link to="/">
              <Button className="bg-brand-600 hover:bg-brand-700">
                Voltar para a página inicial
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
