"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signUp, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    const { error: signUpError } = await signUp(email, password, name);
    
    if (signUpError) {
      setError(signUpError.message);
    } else {
      navigate("/dashboard", { replace: true });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Content Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 via-accent/10 to-background p-8 flex-col justify-between relative overflow-hidden">
        <div className="flex items-center gap-2 z-10">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">InterviewAI</span>
        </div>

        <div className="flex-1 flex items-center justify-center z-10">
          <div className="text-center space-y-6 max-w-md">
            <h2 className="text-4xl font-bold text-foreground">
              Start Your Interview Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Practice with AI-powered interviews, get instant feedback, and land your dream job.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-primary">10K+</span>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-primary">50K+</span>
                <p className="text-sm text-muted-foreground">Interviews</p>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-primary">95%</span>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground z-10">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl" />
      </div>

      {/* Right Signup Section */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 lg:hidden mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">InterviewAI</span>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create an account</h1>
            <p className="text-muted-foreground">Start your free trial today</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 bg-background border-border/60 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-background border-border/60 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pr-10 bg-background border-border/60 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </Label>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full h-12" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Get started"}
            </Button>
          </form>

          {/* Social Signup */}
          <div className="space-y-4">
            <Button variant="outline" className="w-full h-12" type="button">
              <Mail className="w-5 h-5 mr-2" />
              Sign up with Google
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-center text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
