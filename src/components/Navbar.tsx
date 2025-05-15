
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-brand-600 font-bold text-xl">Clínica.AI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/recursos" className="text-gray-600 hover:text-brand-600 px-3 py-2 text-sm font-medium">
              Recursos
            </Link>
            <Link to="/precos" className="text-gray-600 hover:text-brand-600 px-3 py-2 text-sm font-medium">
              Preços
            </Link>
            <Link to="/suporte" className="text-gray-600 hover:text-brand-600 px-3 py-2 text-sm font-medium">
              Suporte
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4">
                Entrar
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-brand-600 hover:bg-brand-700">
                Cadastrar
              </Button>
            </Link>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link to="/recursos" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50 rounded-md">
              Recursos
            </Link>
            <Link to="/precos" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50 rounded-md">
              Preços
            </Link>
            <Link to="/suporte" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50 rounded-md">
              Suporte
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-brand-600 hover:text-brand-700 hover:bg-gray-50 rounded-md">
              Entrar
            </Link>
            <Link to="/cadastro" className="block w-full">
              <Button className="w-full bg-brand-600 hover:bg-brand-700">
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
