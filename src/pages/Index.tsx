
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Agenda Inteligente",
    description: "Elimine conflitos de horários e maximize o uso da sua agenda com confirmações automáticas e lembretes via WhatsApp.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Prontuário Digital",
    description: "Registre todo o histórico do paciente, fotos antes/depois e tenha acesso à evolução completa dos tratamentos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Gestão Financeira",
    description: "Controle repasses para profissionais, emita notas fiscais e tenha uma visão clara das suas finanças em tempo real.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "CRM e Marketing",
    description: "Automatize campanhas de aniversário, mensagens pós-procedimento e acompanhe o ROI de cada ação de marketing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Gestão de Estoque",
    description: "Receba alertas de estoque baixo, evite desperdícios e gerencie seus produtos com precisão e facilidade.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Automação n8n",
    description: "Crie fluxos personalizados de automação para confirmação de consultas, cobranças e follow-ups de pacientes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: "Com o Clínica.AI, reduzi em 70% o tempo gasto com tarefas administrativas. Agora posso focar mais nos meus pacientes e na qualidade dos tratamentos.",
    author: "Dra. Fernanda Costa",
    role: "Clínica Estética Avançada",
  },
  {
    content: "O sistema de agendamento inteligente e as confirmações automáticas reduziram nossas faltas em 85%. O ROI da plataforma é incrível!",
    author: "Dr. Ricardo Mendes",
    role: "Diretor da Beauty Med",
  },
  {
    content: "A gestão financeira e o controle de repasses para os profissionais tornaram muito mais fácil acompanhar a saúde financeira da minha clínica.",
    author: "Dra. Patrícia Almeida",
    role: "Proprietária da Estética Premium",
  },
];

const pricingPlans = [
  {
    name: "Básico",
    price: "R$ 297",
    period: "/mês",
    description: "Para clínicas pequenas em fase inicial.",
    features: [
      "Até 3 profissionais",
      "Agenda e agendamento online",
      "Prontuário eletrônico básico",
      "Confirmações automáticas",
      "Suporte por email",
    ],
    cta: "Começar Grátis",
    ctaLink: "/cadastro?plano=basico",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 547",
    period: "/mês",
    description: "Para clínicas em expansão com necessidades avançadas.",
    features: [
      "Até 10 profissionais",
      "Tudo do plano Básico",
      "Gestão financeira completa",
      "CRM e automação de marketing",
      "Integração com fornecedores",
      "API para integrações personalizadas",
      "Suporte prioritário",
    ],
    cta: "Assinar Agora",
    ctaLink: "/cadastro?plano=premium",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para redes de clínicas com necessidades específicas.",
    features: [
      "Profissionais ilimitados",
      "Tudo do plano Premium",
      "Multi-localidades",
      "Personalização completa",
      "Gerente de conta dedicado",
      "Treinamento e onboarding avançado",
      "SLA garantido",
    ],
    cta: "Falar com Vendas",
    ctaLink: "/contato",
    highlighted: false,
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Transforme a gestão da sua</span>
                    <span className="block text-brand-600">clínica de estética</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Automatize processos, aumente a satisfação dos clientes e impulsione seus resultados com nossa plataforma completa para clínicas de estética avançada.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link to="/cadastro">
                        <Button className="w-full bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 md:py-4 md:text-lg md:px-10">
                          Começar Agora
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link to="/demonstracao">
                        <Button variant="outline" className="w-full px-8 py-3 md:py-4 md:text-lg md:px-10">
                          Ver Demonstração
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Profissional de estética atendendo cliente"
            />
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Funcionalidades</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tudo que sua clínica precisa em um só lugar
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Nossa plataforma foi desenvolvida especificamente para as necessidades de clínicas de estética avançada.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-brand-500 rounded-md shadow-lg">
                            <span className="text-white">{feature.icon}</span>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 bg-aesthetic-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Depoimentos</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                O que nossos clientes dizem
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="text-gray-600 italic mb-4">"{testimonial.content}"</div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section id="precos" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Preços</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Planos que se adaptam ao seu crescimento
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Escolha o plano ideal para o tamanho e as necessidades da sua clínica.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg shadow-lg overflow-hidden ${plan.highlighted ? 'border-2 border-brand-500 transform scale-105' : 'border border-gray-200'}`}
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-aesthetic-100 text-aesthetic-800" id={`tier-${plan.name.toLowerCase()}`}>
                        {plan.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      {plan.price}
                      <span className="ml-1 text-2xl font-medium text-gray-500">{plan.period}</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
                  </div>
                  <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link to={plan.ctaLink}>
                        <Button 
                          className={`w-full ${plan.highlighted ? 'bg-brand-600 hover:bg-brand-700' : 'bg-white border border-brand-600 text-brand-600 hover:bg-brand-50'}`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-brand-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Pronto para transformar sua clínica?</span>
              <span className="block text-brand-200">Comece a usar hoje, sem compromisso.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link to="/cadastro">
                  <Button className="bg-white text-brand-600 hover:bg-gray-50 px-5 py-3 text-base font-medium">
                    Começar Agora
                  </Button>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link to="/contato">
                  <Button variant="outline" className="text-white border-white hover:bg-brand-600 px-5 py-3 text-base font-medium">
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
