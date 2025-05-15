
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, CalendarCheck, CreditCard, FileText, 
  BarChart3, ShoppingCart, TrendingUp, UserPlus, 
  AlertTriangle, ArrowRight, Clock, CheckCircle 
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Dashboard = () => {
  // Check if user is logged in
  const { data: session, isLoading: sessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      return data.session;
    },
  });

  // If not logged in, redirect to login page
  if (!sessionLoading && !session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar would go here */}
      
      <div className="ml-0 lg:ml-64 transition-all duration-300 min-h-screen">
        {/* Top header would go here */}
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo ao seu painel de controle da clínica.</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-l-4 border-l-primary bg-muted/20 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground text-sm">Agenda Hoje</p>
                    <p className="text-3xl font-bold mt-1">12</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" /> +8% esta semana
                    </p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CalendarCheck className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary bg-muted/20 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground text-sm">Faturamento</p>
                    <p className="text-3xl font-bold mt-1">R$8.942</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" /> +12% este mês
                    </p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary bg-muted/20 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground text-sm">Pacientes</p>
                    <p className="text-3xl font-bold mt-1">284</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <UserPlus className="h-3 w-3 mr-1" /> +5 novos hoje
                    </p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-amber-500 bg-muted/20 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground text-sm">Estoque Baixo</p>
                    <p className="text-3xl font-bold mt-1">3</p>
                    <p className="text-sm text-amber-600 flex items-center mt-1">
                      <AlertTriangle className="h-3 w-3 mr-1" /> Itens para repor
                    </p>
                  </div>
                  <div className="bg-amber-500/10 p-2 rounded-full">
                    <ShoppingCart className="h-6 w-6 text-amber-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Today's Appointments */}
            <Card className="lg:col-span-2 hover:shadow-neon transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Agendamentos de Hoje</CardTitle>
                  <Button variant="outline" size="sm">
                    Ver Todos
                  </Button>
                </div>
                <CardDescription>Lista de clientes agendados para hoje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Appointment 1 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Ana Silva</p>
                        <p className="text-sm text-muted-foreground">Limpeza de Pele • 09:30</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Confirmado</Badge>
                  </div>
                  
                  {/* Appointment 2 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Carlos Mendes</p>
                        <p className="text-sm text-muted-foreground">Botox • 11:00</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Pendente</Badge>
                  </div>
                  
                  {/* Appointment 3 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Patricia Santos</p>
                        <p className="text-sm text-muted-foreground">Preenchimento Labial • 14:15</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Confirmado</Badge>
                  </div>
                  
                  {/* Appointment 4 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">João Oliveira</p>
                        <p className="text-sm text-muted-foreground">Massagem Terapêutica • 16:30</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Confirmado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Adicionar Agendamento <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Tasks & Reminders */}
            <Card className="hover:shadow-neon transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle>Tarefas Pendentes</CardTitle>
                <CardDescription>Lembretes e ações necessárias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Task 1 */}
                  <div className="p-3 rounded-lg border relative">
                    <Badge className="absolute right-3 top-3 bg-amber-100 text-amber-600 border-amber-200">Alta</Badge>
                    <p className="font-medium pr-16">Confirmar consultas de amanhã</p>
                    <p className="text-sm text-muted-foreground mt-1">8 consultas pendentes de confirmação</p>
                    <div className="flex items-center mt-4">
                      <Button variant="outline" size="sm" className="text-xs mr-2">
                        <CheckCircle className="h-3 w-3 mr-1" /> Marcar como concluído
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Adiar
                      </Button>
                    </div>
                  </div>
                  
                  {/* Task 2 */}
                  <div className="p-3 rounded-lg border relative">
                    <Badge className="absolute right-3 top-3 bg-red-100 text-red-600 border-red-200">Urgente</Badge>
                    <p className="font-medium pr-16">Reposição de estoque</p>
                    <p className="text-sm text-muted-foreground mt-1">3 produtos abaixo do limite mínimo</p>
                    <div className="flex items-center mt-4">
                      <Button variant="outline" size="sm" className="text-xs mr-2">
                        <CheckCircle className="h-3 w-3 mr-1" /> Marcar como concluído
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Adiar
                      </Button>
                    </div>
                  </div>
                  
                  {/* Task 3 */}
                  <div className="p-3 rounded-lg border relative">
                    <Badge className="absolute right-3 top-3 bg-blue-100 text-blue-600 border-blue-200">Normal</Badge>
                    <p className="font-medium pr-16">Follow-up pós-procedimento</p>
                    <p className="text-sm text-muted-foreground mt-1">5 clientes para contatar hoje</p>
                    <div className="flex items-center mt-4">
                      <Button variant="outline" size="sm" className="text-xs mr-2">
                        <CheckCircle className="h-3 w-3 mr-1" /> Marcar como concluído
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Adiar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Ver Todas as Tarefas <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Recent Transactions */}
            <Card className="lg:col-span-2 hover:shadow-neon transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Transações Recentes</CardTitle>
                  <Button variant="outline" size="sm">
                    Ver Todas
                  </Button>
                </div>
                <CardDescription>Últimas movimentações financeiras</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Transaction 1 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Pagamento - Limpeza de Pele</p>
                        <p className="text-sm text-muted-foreground">Ana Silva • 09:35</p>
                      </div>
                    </div>
                    <p className="font-semibold text-green-600">+R$180,00</p>
                  </div>
                  
                  {/* Transaction 2 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Pagamento - Botox</p>
                        <p className="text-sm text-muted-foreground">Carlos Mendes • 11:15</p>
                      </div>
                    </div>
                    <p className="font-semibold text-green-600">+R$850,00</p>
                  </div>
                  
                  {/* Transaction 3 */}
                  <div className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-red-600 transform rotate-180" />
                      </div>
                      <div>
                        <p className="font-medium">Pagamento - Fornecedor</p>
                        <p className="text-sm text-muted-foreground">Produtos Estéticos Ltda • 13:20</p>
                      </div>
                    </div>
                    <p className="font-semibold text-red-600">-R$1.230,00</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Registrar Nova Transação <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Low Stock Alert */}
            <Card className="hover:shadow-neon transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Alertas de Estoque</CardTitle>
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <CardDescription>Itens que precisam de reposição</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Stock Item 1 */}
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Ácido Hialurônico</p>
                      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">Crítico</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-muted-foreground">Estoque: 2 un</p>
                      <p className="text-sm text-muted-foreground">Mínimo: 10 un</p>
                    </div>
                  </div>
                  
                  {/* Stock Item 2 */}
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Toxina Botulínica</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Baixo</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-muted-foreground">Estoque: 5 un</p>
                      <p className="text-sm text-muted-foreground">Mínimo: 8 un</p>
                    </div>
                  </div>
                  
                  {/* Stock Item 3 */}
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Luvas Nitrílicas</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Baixo</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-muted-foreground">Estoque: 3 cx</p>
                      <p className="text-sm text-muted-foreground">Mínimo: 5 cx</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Gerenciar Estoque <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
