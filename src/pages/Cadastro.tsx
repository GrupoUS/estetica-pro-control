
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Sparkles, Key, Mail, UserCircle2 } from "lucide-react";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [concordaTermos, setConcordaTermos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações básicas
    if (!nome || !email || !senha || !confirmarSenha) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (senha !== confirmarSenha) {
      toast({
        title: "Senhas não coincidem",
        description: "A senha e a confirmação de senha devem ser idênticas.",
        variant: "destructive",
      });
      return;
    }

    if (!concordaTermos) {
      toast({
        title: "Termos e condições",
        description: "Você precisa concordar com os termos para continuar.",
        variant: "destructive",
      });
      return;
    }

    // Registrar usuário
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: senha,
        options: {
          data: {
            nome: nome,
          },
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Verifique seu e-mail para confirmar sua conta.",
      });
      
      // Redirecionar para a página principal após cadastro bem-sucedido
      // window.location.href = "/";
      
    } catch (error: any) {
      toast({
        title: "Erro no cadastro",
        description: error.message || "Ocorreu um erro ao cadastrar.",
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
            <h1 className="text-3xl font-bold neon-text">Crie sua conta</h1>
            <p className="text-neon-gray mt-2">
              Acesse todos os recursos da plataforma NEON PRO
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-neon-purple/20 shadow-neon">
            <form onSubmit={handleSubmit} className="space-y-5 form-elegant">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white text-sm font-medium">
                  Nome completo
                </Label>
                <div className="relative">
                  <UserCircle2 className="absolute left-3 top-2.5 h-5 w-5 text-neon-gray/70" />
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="h-10 pl-10 bg-black/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/30"
                  />
                </div>
              </div>

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
                <Label htmlFor="senha" className="text-white text-sm font-medium">
                  Senha
                </Label>
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

              <div className="space-y-2">
                <Label htmlFor="confirmarSenha" className="text-white text-sm font-medium">
                  Confirme sua senha
                </Label>
                <div className="relative">
                  <Key className="absolute left-3 top-2.5 h-5 w-5 text-neon-gray/70" />
                  <Input
                    id="confirmarSenha"
                    type="password"
                    placeholder="Confirme sua senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    className="h-10 pl-10 bg-black/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/30"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="termos" 
                  checked={concordaTermos}
                  onCheckedChange={(checked) => setConcordaTermos(!!checked)}
                  className="border-neon-purple/50 data-[state=checked]:bg-neon-purple data-[state=checked]:text-black"
                />
                <label
                  htmlFor="termos"
                  className="text-sm text-gray-300 leading-tight"
                >
                  Concordo com os{" "}
                  <Link to="/termos" className="text-neon-purple hover:underline">
                    Termos de Uso
                  </Link>
                  {" "}e{" "}
                  <Link to="/privacidade" className="text-neon-purple hover:underline">
                    Política de Privacidade
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full bg-gradient-neon hover:shadow-neon-hover transition-all duration-300 py-6"
              >
                {isLoading ? "Cadastrando..." : "Criar conta"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-neon-gray">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-neon-purple hover:underline">
                  Faça login
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

export default Cadastro;
