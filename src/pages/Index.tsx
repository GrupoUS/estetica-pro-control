
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CalendarCheck, CreditCard, FileText, ShoppingCart, Users, MessageSquare, Settings, BarChart3, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-10"></div>
        <div className="container px-4 py-20 md:py-32 mx-auto flex flex-col items-center text-center relative z-10">
          <Badge variant="outline" className="mb-4 py-1.5 text-neon-purple border-neon-purple animate-pulse-neon">
            NEON PRO - A REVOLUÇÃO NA GESTÃO DE CLÍNICAS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight neon-text">
            Sistema Inteligente para<br />Clínicas de Estética
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            Automatize agendamentos, prontuários, marketing e finanças em uma única plataforma integrada com IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-neon-gradient text-white shadow-neon hover:shadow-neon-hover">
              Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
              Ver Demonstração
            </Button>
          </div>
          
          <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border neon-border shadow-xl">
            <AspectRatio ratio={16 / 9}>
              <div className="absolute inset-0 bg-gradient-dark flex items-center justify-center text-white text-xl">
                <div className="p-8 text-center">
                  <p className="text-lg opacity-80 mb-3">Preview do Dashboard NEON PRO</p>
                  <Button variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20">
                    Ver Todas Funcionalidades
                  </Button>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Todas as Ferramentas que Sua Clínica Precisa</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Tudo integrado em uma plataforma única, moderna e intuitiva. Não perca mais tempo com múltiplos sistemas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-accent hover:shadow-neon transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CalendarCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Agenda Inteligente</CardTitle>
                <CardDescription>
                  Agendamentos online, confirmação automática via WhatsApp e gerenciamento eficiente de horários.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Visão semanal e mensal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Confirmação automatizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Lista de espera inteligente</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature 2 */}
            <Card className="border-accent hover:shadow-neon transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prontuário Eletrônico</CardTitle>
                <CardDescription>
                  Registro digital completo de pacientes com fotos antes/depois e histórico de tratamentos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Upload de imagens antes/depois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Histórico de tratamentos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Assinatura digital</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature 3 */}
            <Card className="border-accent hover:shadow-neon transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gestão Financeira</CardTitle>
                <CardDescription>
                  Controle de receitas, despesas, comissões e assinaturas recorrentes integrado ao Stripe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Conciliação bancária automática</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Integração com Stripe</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Emissão de notas fiscais</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature 4 */}
            <Card className="border-accent hover:shadow-neon transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CRM e Marketing</CardTitle>
                <CardDescription>
                  Automação de relacionamento com clientes, campanhas personalizadas e retenção.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Campanhas de aniversário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Follow-up pós-procedimento</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Análise de ROI</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature 5 */}
            <Card className="border-accent hover:shadow-neon transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gestão de Estoque</CardTitle>
                <CardDescription>
                  Controle de produtos, alertas de estoque baixo e integração com fornecedores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Alertas automáticos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Gestão de fornecedores</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Integração via webhook</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Feature 6 */}
            <Card className="border-accent hover:shadow-neon transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Atendimento com IA</CardTitle>
                <CardDescription>
                  Chatbots inteligentes para suporte, agendamento e até SDR de vendas automatizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Suporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Qualificação de leads</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">Transferência para humanos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">DEPOIMENTOS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Veja como o NEON PRO está transformando a gestão de clínicas de estética por todo o Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-gradient-to-br from-background to-muted/30">
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Clara Antunes</p>
                    <p className="text-sm text-muted-foreground">Estética Avançada SP</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "O sistema revolucionou nossa clínica! Automatizamos 90% das confirmações e o controle financeiro ficou muito mais eficiente. 
                  Os pacientes adoraram o chatbot de atendimento."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="bg-gradient-to-br from-background to-muted/30">
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Rafael Mendes</p>
                    <p className="text-sm text-muted-foreground">Clinique Estética RJ</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "Aumentamos nossa receita em 35% com as automações de marketing e o SDR virtual. 
                  A agenda inteligente eliminou os horários ociosos e a gestão ficou muito mais simples."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="bg-gradient-to-br from-background to-muted/30">
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                    <AvatarFallback>JF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Juliana Fontes</p>
                    <p className="text-sm text-muted-foreground">Beleza & Saúde MG</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "O prontuário digital com fotos antes/depois transformou o relacionamento com os clientes. 
                  O atendimento de IA nos ajuda 24h por dia e as integrações funcionam perfeitamente!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">PLANOS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o Plano Ideal para Sua Clínica</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Planos flexíveis que crescem com seu negócio. Cancele quando quiser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-accent">
              <CardHeader className="text-center pb-2">
                <CardTitle>Básico</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">R$197</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Para clínicas iniciantes</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Agenda inteligente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prontuário digital básico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gestão financeira simples</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte por e-mail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>1 usuário</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Começar Grátis</Button>
              </CardFooter>
            </Card>
            
            {/* Pro Plan - Highlighted */}
            <Card className="border-primary relative shadow-neon">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-neon-gradient">Mais Popular</Badge>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle>Profissional</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">R$397</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Para clínicas em crescimento</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tudo do plano Básico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Confirmação automática via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prontuário com fotos antes/depois</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>CRM e automações de marketing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Até 5 usuários</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-neon-gradient shadow-neon hover:shadow-neon-hover">Começar Grátis</Button>
              </CardFooter>
            </Card>
            
            {/* Premium Plan */}
            <Card className="border-accent">
              <CardHeader className="text-center pb-2">
                <CardTitle>Premium</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">R$697</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Para clínicas estabelecidas</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tudo do plano Profissional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>SDR de vendas automatizado com IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dashboard avançado com métricas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Integrações customizadas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte VIP 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Usuários ilimitados</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Começar Grátis</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-10"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Transformar Sua Clínica?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Junte-se a centenas de clínicas que já estão usando o NEON PRO para automatizar processos e aumentar resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-neon-gradient text-white shadow-neon hover:shadow-neon-hover">
              Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
