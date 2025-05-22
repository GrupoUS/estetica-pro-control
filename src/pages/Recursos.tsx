
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Recursos = () => {
  // Lista de recursos do NEON PRO
  const features = [
    {
      icon: "🗓️",
      title: "Agenda Inteligente",
      description: "Sistema completo de agendamentos com confirmação automática por e-mail e gerenciamento de horários disponíveis."
    },
    {
      icon: "📄",
      title: "Prontuário Digital",
      description: "Prontuário eletrônico completo com histórico de atendimentos, tratamentos e evolução fotográfica antes/depois."
    },
    {
      icon: "💰",
      title: "Controle Financeiro",
      description: "Gestão completa de receitas, despesas, comissões e conciliação bancária integrada."
    },
    {
      icon: "📊",
      title: "Relatórios Avançados",
      description: "Dashboards intuitivos com métricas de desempenho, taxa de retorno e análises de conversão."
    },
    {
      icon: "👤",
      title: "CRM Integrado",
      description: "Gestão de relacionamento com clientes, histórico de compras e campanhas de marketing automatizadas."
    },
    {
      icon: "⚙️",
      title: "Automações Personalizadas",
      description: "Crie fluxos de automação para confirmações, lembretes e reativação de clientes."
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
              Recursos do NEON PRO
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
              Conheça todas as funcionalidades que irão transformar a gestão da sua clínica de estética avançada
            </p>
            <Link to="/cadastro">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg neon-glow">
                Começar Agora
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center border border-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Pronto para revolucionar sua clínica?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Agende uma demonstração personalizada e descubra como o NEON PRO pode otimizar seus processos e aumentar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/cadastro">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg neon-glow">
                  Teste Grátis por 14 Dias
                </Button>
              </Link>
              <Link to="/precos">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-lg">
                  Ver Planos e Preços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recursos;
