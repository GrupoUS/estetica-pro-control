
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Precos = () => {
  // Planos disponíveis
  const plans = [
    {
      name: "Essencial",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para clínicas iniciantes com foco em organização básica",
      features: [
        "Agenda com até 3 profissionais",
        "Cadastro de clientes ilimitado",
        "Prontuário digital básico",
        "Controle financeiro simples",
        "Relatórios básicos",
        "Suporte por e-mail"
      ],
      cta: "Começar Teste Grátis",
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 397",
      period: "/mês",
      description: "A escolha ideal para clínicas em crescimento",
      features: [
        "Agenda com até 10 profissionais",
        "Cadastro de clientes ilimitado",
        "Prontuário digital completo",
        "Controle financeiro avançado",
        "Relatórios detalhados",
        "Automação de marketing",
        "Suporte prioritário",
        "Aplicativo mobile"
      ],
      cta: "Escolher Plano Profissional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 797",
      period: "/mês",
      description: "Solução completa para redes de clínicas",
      features: [
        "Profissionais ilimitados",
        "Múltiplas unidades",
        "Prontuário avançado com IA",
        "Gestão financeira corporativa",
        "Business Intelligence",
        "API para integrações",
        "Gestor de sucesso dedicado",
        "Implementação personalizada"
      ],
      cta: "Falar com Consultor",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 neon-text">
              Planos e Preços
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
              Escolha o plano ideal para transformar a gestão da sua clínica de estética com o NEON PRO
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border ${plan.popular ? 'border-primary neon-glow' : 'border-border'} 
                           bg-card transition-all duration-300 flex flex-col`}
              >
                <CardHeader>
                  {plan.popular && (
                    <div className="py-1 px-3 bg-primary text-primary-foreground text-xs font-semibold rounded-full inline-block mb-2">
                      Mais Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/cadastro" className="w-full">
                    <Button 
                      className={`w-full ${plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/90'}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Perguntas Frequentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">O teste gratuito tem todas as funcionalidades?</h3>
                <p className="text-muted-foreground">Sim! Durante os 14 dias de teste, você terá acesso completo a todas as funcionalidades do plano escolhido, sem nenhuma limitação.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Preciso fornecer cartão de crédito?</h3>
                <p className="text-muted-foreground">Não é necessário informar dados de pagamento para iniciar o período de teste gratuito. Você só paga quando decidir continuar após os 14 dias.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Posso mudar de plano depois?</h3>
                <p className="text-muted-foreground">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento, com os valores ajustados proporcionalmente.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Como funciona o suporte técnico?</h3>
                <p className="text-muted-foreground">Oferecemos suporte por e-mail para todos os planos, com tempos de resposta variados. Planos superiores incluem suporte prioritário e atendimento por chat.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Precos;
