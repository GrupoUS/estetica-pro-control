
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Check } from 'lucide-react';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const registerMutation = useMutation({
    mutationFn: async () => {
      // 1. Create user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            phone
          }
        }
      });
      
      if (authError) throw authError;
      
      if (authData.user) {
        // 2. Create clinic
        const { data: clinicData, error: clinicError } = await supabase
          .from('clinics')
          .insert({ name: clinicName })
          .select()
          .single();
        
        if (clinicError) throw clinicError;
        
        // 3. Update user profile with clinic_id
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ 
            name, 
            phone,
            clinic_id: clinicData.id,
            role: 'admin' 
          })
          .eq('id', authData.user.id);
        
        if (profileError) throw profileError;
        
        return { user: authData.user, clinic: clinicData };
      } else {
        throw new Error('Erro ao criar usuário');
      }
    },
    onSuccess: () => {
      toast({
        title: 'Conta criada com sucesso',
        description: 'Bem-vindo ao NEON PRO!',
      });
      navigate('/dashboard');
    },
    onError: (error: any) => {
      toast({
        title: 'Erro ao criar conta',
        description: error.message || 'Ocorreu um erro ao criar sua conta. Tente novamente.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-12">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-pink/5"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[30%] bg-neon-purple/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[35%] h-[40%] bg-neon-pink/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center">
        <Link to="/" className="mb-8">
          <h1 className="text-3xl font-bold neon-text tracking-tight">NEON PRO</h1>
        </Link>
        
        <Card className="w-full max-w-lg backdrop-blur-sm bg-background/80 border-accent shadow-neon">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Criar Conta</CardTitle>
            <CardDescription className="text-center">
              Cadastre-se para começar a usar o NEON PRO
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome completo" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-elegant"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinicName">Nome da Clínica</Label>
                  <Input 
                    id="clinicName" 
                    placeholder="Nome da sua clínica" 
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    required
                    className="form-elegant"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-elegant"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    placeholder="(00) 00000-0000" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="form-elegant"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Crie uma senha forte" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-elegant"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-sm border flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                  <Label htmlFor="terms" className="text-sm font-normal">
                    Eu concordo com os{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80">
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80">
                      Política de Privacidade
                    </Link>
                  </Label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-neon-gradient font-medium shadow-neon hover:shadow-neon-hover" 
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Criando conta...
                  </>
                ) : (
                  'Criar Conta'
                )}
              </Button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">ou continue com</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="btn-neon">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="btn-neon">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Já possui uma conta?{" "}
              <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                Entrar
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cadastro;
