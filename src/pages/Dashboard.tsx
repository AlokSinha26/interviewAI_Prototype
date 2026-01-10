import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, Trophy, TrendingUp, Calendar, ChevronRight, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";

const pastInterviews = [
  {
    id: 1,
    title: "Software Engineer - Technical",
    date: "Jan 8, 2024",
    score: 85,
    duration: "25 min",
    status: "completed",
  },
  {
    id: 2,
    title: "Product Manager - Behavioral",
    date: "Jan 6, 2024",
    score: 78,
    duration: "30 min",
    status: "completed",
  },
  {
    id: 3,
    title: "Data Analyst - Case Study",
    date: "Jan 4, 2024",
    score: 92,
    duration: "35 min",
    status: "completed",
  },
];

const badges = [
  { name: "First Interview", icon: "🎯", earned: true },
  { name: "5 Sessions", icon: "🔥", earned: true },
  { name: "High Scorer", icon: "⭐", earned: true },
  { name: "Consistent", icon: "📈", earned: false },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Mic2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">InterviewAI</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">John</span>
          </h1>
          <p className="text-muted-foreground">Ready to practice? Let's improve your interview skills today.</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm">Avg Score</span>
            </div>
            <p className="font-display text-3xl font-bold">85%</p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-neon-green" />
              </div>
              <span className="text-muted-foreground text-sm">Improvement</span>
            </div>
            <p className="font-display text-3xl font-bold">+12%</p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <span className="text-muted-foreground text-sm">Sessions</span>
            </div>
            <p className="font-display text-3xl font-bold">12</p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-neon-orange/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-neon-orange" />
              </div>
              <span className="text-muted-foreground text-sm">Practice Time</span>
            </div>
            <p className="font-display text-3xl font-bold">5.2h</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Start Interview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 border-primary/20"
            >
              <h2 className="font-display text-xl font-semibold mb-2">Start New Interview</h2>
              <p className="text-muted-foreground mb-6">
                Choose your interview type and begin practicing with our AI interviewer.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/interview">
                  <Button variant="hero" size="lg">
                    <Play className="w-5 h-5" />
                    Quick Practice
                  </Button>
                </Link>
                <Button variant="glass" size="lg">
                  Technical Interview
                </Button>
                <Button variant="glass" size="lg">
                  Behavioral Interview
                </Button>
              </div>
            </motion.div>

            {/* Past Interviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold">Past Interviews</h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {pastInterviews.map((interview, index) => (
                  <motion.div
                    key={interview.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <h3 className="font-medium mb-1">{interview.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{interview.date}</span>
                        <span>•</span>
                        <span>{interview.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-display text-lg font-bold text-primary">{interview.score}%</p>
                        <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h2 className="font-display text-lg font-semibold mb-4">Weekly Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Clarity</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Structure</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6"
            >
              <h2 className="font-display text-lg font-semibold mb-4">Skill Badges</h2>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className={`p-3 rounded-xl text-center transition-all ${
                      badge.earned
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-secondary/30 opacity-50"
                    }`}
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <p className="text-xs mt-1 font-medium">{badge.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
