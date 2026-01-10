import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Phone, Clock, MessageSquare, Volume2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Interview = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isAISpeaking, setIsAISpeaking] = useState(true);
  const totalQuestions = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate AI speaking pattern
    const speakInterval = setInterval(() => {
      setIsAISpeaking((prev) => !prev);
    }, 3000);
    return () => clearInterval(speakInterval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndInterview = () => {
    navigate("/analysis");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              ← Back
            </Link>
            <div className="h-6 w-px bg-border" />
            <span className="font-medium">Mock Interview</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timer)}</span>
            </div>
            <div className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Q{questionNumber}/{totalQuestions}
            </div>
          </div>
        </div>
      </header>

      {/* Main Interview Area */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* AI Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            {/* AI Visualization */}
            <div className="relative inline-flex items-center justify-center mb-6">
              {/* Outer glow rings */}
              <motion.div
                className="absolute w-48 h-48 rounded-full border border-primary/20"
                animate={{
                  scale: isAISpeaking ? [1, 1.1, 1] : 1,
                  opacity: isAISpeaking ? [0.3, 0.5, 0.3] : 0.2,
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-40 h-40 rounded-full border border-primary/30"
                animate={{
                  scale: isAISpeaking ? [1, 1.15, 1] : 1,
                  opacity: isAISpeaking ? [0.4, 0.6, 0.4] : 0.3,
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              
              {/* Core AI orb */}
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-neon"
                animate={{
                  boxShadow: isAISpeaking
                    ? [
                        "0 0 20px hsl(var(--primary) / 0.3)",
                        "0 0 40px hsl(var(--primary) / 0.5)",
                        "0 0 20px hsl(var(--primary) / 0.3)",
                      ]
                    : "0 0 20px hsl(var(--primary) / 0.3)",
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Volume2 className="w-12 h-12 text-primary-foreground" />
              </motion.div>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-neon-green"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-sm text-muted-foreground">
                {isAISpeaking ? "AI is speaking..." : "Listening to you..."}
              </span>
            </div>
          </motion.div>

          {/* Current Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Current Question</p>
                <h2 className="font-display text-lg font-medium">
                  Tell me about a challenging project you worked on and how you overcame the obstacles you faced.
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Voice Waveform */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-1 h-16 mb-8"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1 rounded-full ${
                  isMuted ? "bg-muted" : "bg-gradient-to-t from-primary to-accent"
                }`}
                animate={{
                  height: isMuted ? 4 : [8, Math.random() * 40 + 8, 8],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.02,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <Button
              variant="glass"
              size="icon"
              className="w-14 h-14 rounded-full"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full px-8"
              onClick={handleEndInterview}
            >
              <Phone className="w-5 h-5 rotate-[135deg]" />
              End Interview
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Tips Bar */}
      <footer className="border-t border-border px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            💡 <span className="font-medium">Tip:</span> Use the STAR method (Situation, Task, Action, Result) for behavioral questions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Interview;
