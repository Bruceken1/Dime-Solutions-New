import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Auth = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", fullName: "" });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        toast({ title: "Welcome back!" });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: { full_name: form.fullName },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast({
          title: "Account created!",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="hero-gradient min-h-screen flex items-center justify-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="p-8 rounded-2xl bg-[hsl(var(--navy)/0.7)] border border-[hsl(var(--navy-light)/0.3)] backdrop-blur-sm">
            <h1 className="font-heading text-2xl font-bold text-on-dark mb-2 text-center">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-on-dark-muted text-sm text-center mb-6">
              {isLogin ? "Sign in to your account" : "Join Dime Solutions"}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <Input
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  required
                  className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted"
                />
              )}
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted"
              />
              <Input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={6}
                className="bg-[hsl(var(--navy)/0.5)] border-[hsl(var(--navy-light)/0.3)] text-on-dark placeholder:text-on-dark-muted"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full gradient-cyan text-accent-foreground font-semibold glow-cyan"
              >
                {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
            <p className="text-on-dark-muted text-sm text-center mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-cyan hover:underline font-semibold"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Auth;
