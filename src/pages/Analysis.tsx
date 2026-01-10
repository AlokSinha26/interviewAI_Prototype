import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  MessageSquare, 
  Volume2, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Download,
  Share2,
  RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  {
    name: "Confidence Score",
    score: 82,
    icon: Trophy,
    color: "primary",
    description: "Strong presence and clear voice projection",
  },
  {
    name: "Speech Clarity",
    score: 88,
    icon: Volume2,
    color: "neon-green",
    description: "Excellent pronunciation and pacing",
  },
  {
    name: "Answer Quality",
    score: 75,
    icon: MessageSquare,
    color: "accent",
    description: "Good structure, could add more specifics",
  },
  {
    name: "Overall Progress",
    score: 85,
    icon: TrendingUp,
    color: "neon-orange",
    description: "+8% improvement from last session",
  },
];

const strengths = [
  "Clear and confident speaking voice",
  "Good use of specific examples",
  "Strong closing statements",
  "Professional tone throughout",
];

const improvements = [
  "Add more quantifiable results to answers",
  "Reduce use of filler words (um, uh)",
  "Provide more context in STAR responses",
  "Practice more concise opening statements",
];

const Analysis = () => {
  const overallScore = 82;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-neon-green" />
            <span className="text-sm text-neon-green font-medium">Interview Completed</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Performance Analysis
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's a detailed breakdown of your mock interview performance with personalized suggestions.
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 text-center mb-8 max-w-md mx-auto"
        >
          <div className="relative inline-flex items-center justify-center mb-4">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-secondary"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={440}
                initial={{ strokeDashoffset: 440 }}
                animate={{ strokeDashoffset: 440 - (440 * overallScore) / 100 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <motion.span
                className="font-display text-5xl font-bold gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {overallScore}
              </motion.span>
              <span className="text-muted-foreground text-sm">Overall Score</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Great job! You're performing above average.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-${metric.color}/10 flex items-center justify-center`}>
                  <metric.icon className={`w-5 h-5 text-${metric.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{metric.name}</p>
                  <p className="font-display text-2xl font-bold">{metric.score}%</p>
                </div>
              </div>
              <Progress value={metric.score} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Strengths & Improvements */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-neon-green" />
              </div>
              <h2 className="font-display text-xl font-semibold">Strengths</h2>
            </div>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-orange/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-neon-orange" />
              </div>
              <h2 className="font-display text-xl font-semibold">Areas to Improve</h2>
            </div>
            <ul className="space-y-3">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-neon-orange flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/interview">
            <Button variant="hero" size="lg">
              <RotateCcw className="w-5 h-5" />
              Practice Again
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="glass" size="lg">
              Back to Dashboard
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Analysis;
