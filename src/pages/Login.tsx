
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Key, Mail, Sparkles } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !senha) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Login realizado com sucesso!",
        description: "Você será redirecionado para o dashboard.",
      });
      
      // Redirecionar para a página principal após login bem-sucedido
      window.location.href = "/";
      
    } catch (error: any) {
      toast({
        title: "Erro no login",
        description: error.message || "Ocorreu um erro ao fazer login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-dark text-white">
      {/* Header com logo */}
      <header className="w-full py-6 px-4 flex justify-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-neon-purple animate-pulse-neon" />
          <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-neon">
            NEON PRO
          </h1>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Cabeçalho do formulário */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold neon-text">Entre na sua conta</h1>
            <p className="text-neon-gray mt-2">
              Acesse todos os recursos da plataforma NEON PRO
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-neon-purple/20 shadow-neon">
            <form onSubmit={handleSubmit} className="space-y-5 form-elegant">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-neon-gray/70" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 pl-10 bg-black/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="senha" className="text-white text-sm font-medium">
                    Senha
                  </Label>
                  <Link to="/esqueci-senha" className="text-xs text-neon-purple hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <Key className="absolute left-3 top-2.5 h-5 w-5 text-neon-gray/70" />
                  <Input
                    id="senha"
                    type="password"
                    placeholder="Sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="h-10 pl-10 bg-black/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/30"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full bg-gradient-neon hover:shadow-neon-hover transition-all duration-300 py-6"
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-neon-gray">
                Não tem uma conta?{" "}
                <Link to="/cadastro" className="text-neon-purple hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-neon-gray/60">
        <p>© {new Date().getFullYear()} NEON PRO - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Login;
