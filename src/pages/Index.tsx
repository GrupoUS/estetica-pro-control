
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight, Shield, Clock, Users, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-dark text-white">
      {/* Header/Navbar */}
      <header className="border-b border-neon-purple/20 bg-black/40 backdrop-blur-md sticky top-0 z-10">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-neon-purple animate-pulse-neon" />
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-neon">
              NEON PRO
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="border-neon-purple/40 text-white hover:bg-neon-purple/10">
                Login
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-gradient-neon hover:shadow-neon-hover">
                Começar agora
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068')] bg-cover bg-center opacity-10"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight neon-text">
            Transforme sua clínica de estética com soluções de gestão inteligentes
          </h1>
          <p className="text-xl md:text-2xl text-neon-gray max-w-3xl mx-auto mb-10">
            Automatize agendamentos, gerencie prontuários, controle finanças e impulsione o marketing do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastro">
              <Button size="lg" className="bg-gradient-neon hover:shadow-neon-hover text-lg px-8 py-6">
                Teste grátis por 14 dias
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-neon-purple/40 text-white hover:bg-neon-purple/10 text-lg px-8 py-6">
              Ver demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/30 px-4">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text">
            Soluções completas para sua clínica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-neon-purple/20 hover:shadow-neon transition-all duration-300">
              <div className="bg-neon-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Agenda Inteligente</h3>
              <p className="text-neon-gray">
                Automatize agendamentos, envie confirmações via WhatsApp e reduza faltas com lembretes automáticos.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-neon-purple/20 hover:shadow-neon transition-all duration-300">
              <div className="bg-neon-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Prontuário Digital</h3>
              <p className="text-neon-gray">
                Armazene históricos, fotos antes/depois e documento assinados digitalmente com segurança LGPD.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-neon-purple/20 hover:shadow-neon transition-all duration-300">
              <div className="bg-neon-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Gestão Financeira</h3>
              <p className="text-neon-gray">
                Controle pagamentos, assinaturas recorrentes, repasses e emita notas fiscais automaticamente.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-neon-purple/20 hover:shadow-neon transition-all duration-300">
              <div className="bg-neon-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Marketing Automático</h3>
              <p className="text-neon-gray">
                Retenha clientes com campanhas automáticas, lembretes personalizados e SDR de vendas com IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-gradient-neon p-[1px] rounded-2xl">
            <div className="bg-neon-black rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
                Pronto para transformar sua clínica?
              </h2>
              <p className="text-lg text-neon-gray mb-8 max-w-2xl mx-auto">
                Experimente o NEON PRO gratuitamente por 14 dias e descubra como nossa plataforma pode revolucionar a gestão da sua clínica de estética.
              </p>
              <Link to="/cadastro">
                <Button size="lg" className="bg-white text-neon-black hover:bg-neon-light text-lg px-8 py-7">
                  Começar teste gratuito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 py-10 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Sparkles className="h-6 w-6 text-neon-purple" />
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-neon">
                NEON PRO
              </span>
            </div>
            <div className="flex gap-6 mb-6 md:mb-0">
              <Link to="/sobre" className="text-neon-gray hover:text-white transition-colors">Sobre</Link>
              <Link to="/recursos" className="text-neon-gray hover:text-white transition-colors">Recursos</Link>
              <Link to="/preco" className="text-neon-gray hover:text-white transition-colors">Preços</Link>
              <Link to="/blog" className="text-neon-gray hover:text-white transition-colors">Blog</Link>
              <Link to="/contato" className="text-neon-gray hover:text-white transition-colors">Contato</Link>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-neon-gray hover:text-neon-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-neon-gray hover:text-neon-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-neon-gray hover:text-neon-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-neon-purple/20 mt-8 pt-8 text-center text-sm text-neon-gray/60">
            <p>© {new Date().getFullYear()} NEON PRO - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
