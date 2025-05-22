
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-muted/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-neon-gold font-bold text-xl neon-text">NEON PRO</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/recursos" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Recursos
            </Link>
            <Link to="/precos" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Preços
            </Link>
            <Link to="/suporte" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Suporte
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary/10">
                Entrar
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-gradient-neon text-primary-foreground hover:shadow-neon transition-all">
                Cadastrar
              </Button>
            </Link>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card shadow-lg rounded-b-lg">
            <Link to="/recursos" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/30 rounded-md">
              Recursos
            </Link>
            <Link to="/precos" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/30 rounded-md">
              Preços
            </Link>
            <Link to="/suporte" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/30 rounded-md">
              Suporte
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-primary hover:text-primary/80 hover:bg-muted/30 rounded-md">
              Entrar
            </Link>
            <Link to="/cadastro" className="block w-full">
              <Button className="w-full bg-gradient-neon text-primary-foreground hover:shadow-neon transition-all">
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
