
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nomeClinica, setNomeClinica] = useState("");
  const [planoSelecionado, setPlanoSelecionado] = useState("basico");
  const [concordaTermos, setConcordaTermos] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Verificar se há um plano na URL e selecionar automaticamente
    const queryParams = new URLSearchParams(location.search);
    const planoParam = queryParams.get('plano');
    if (planoParam === 'basico' || planoParam === 'premium' || planoParam === 'enterprise') {
      setPlanoSelecionado(planoParam);
    }
  }, [location]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!concordaTermos) {
      toast({
        title: "Termos e Condições",
        description: "Você precisa concordar com os termos para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);

    try {
      // Aqui será implementado o registro com Supabase
      toast({
        title: "Cadastro simulado",
        description: "A integração com Supabase será implementada em breve.",
      });
      setLoading(false);
      
      // Após registro bem-sucedido, redirecionar para o dashboard
      // navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao criar sua conta. Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-aesthetic-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Crie sua conta</CardTitle>
            <CardDescription className="text-center">
              Comece a transformar sua clínica de estética hoje
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue={planoSelecionado} onValueChange={setPlanoSelecionado} className="w-full mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basico">Básico</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basico" className="mt-4 text-center p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold text-lg">Plano Básico</h3>
                <p className="font-bold text-2xl text-brand-600 my-2">R$ 297<span className="text-sm text-gray-500">/mês</span></p>
                <p className="text-gray-600 text-sm">Para clínicas pequenas em fase inicial</p>
              </TabsContent>
              
              <TabsContent value="premium" className="mt-4 text-center p-4 bg-gray-50 rounded-md border-2 border-brand-500">
                <h3 className="font-semibold text-lg">Plano Premium</h3>
                <p className="font-bold text-2xl text-brand-600 my-2">R$ 547<span className="text-sm text-gray-500">/mês</span></p>
                <p className="text-gray-600 text-sm">Para clínicas em expansão com necessidades avançadas</p>
              </TabsContent>
              
              <TabsContent value="enterprise" className="mt-4 text-center p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold text-lg">Plano Enterprise</h3>
                <p className="font-bold text-2xl text-brand-600 my-2">Personalizado</p>
                <p className="text-gray-600 text-sm">Para redes de clínicas com necessidades específicas</p>
              </TabsContent>
            </Tabs>
            
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email profissional</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@clinica.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nome-clinica">Nome da sua clínica</Label>
                  <Input
                    id="nome-clinica"
                    type="text"
                    placeholder="Nome da sua clínica"
                    value={nomeClinica}
                    onChange={(e) => setNomeClinica(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="termos" 
                  checked={concordaTermos}
                  onCheckedChange={(checked) => setConcordaTermos(checked as boolean)}
                />
                <label
                  htmlFor="termos"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Concordo com os{" "}
                  <Link to="/termos" className="text-brand-600 hover:text-brand-800">
                    Termos de Serviço
                  </Link>{" "}
                  e{" "}
                  <Link to="/privacidade" className="text-brand-600 hover:text-brand-800">
                    Política de Privacidade
                  </Link>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700" disabled={loading || !concordaTermos}>
                {loading ? "Criando conta..." : "Criar conta"}
              </Button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Google OAuth será implementado com Supabase" })}>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              
              <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Microsoft OAuth será implementado com Supabase" })}>
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                  <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                Microsoft
              </Button>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mt-2">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-brand-600 hover:text-brand-800 font-medium">
                Faça login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cadastro;
