import { motion } from "framer-motion";
import { Brain, BarChart3, MessageSquare, Clock, Target, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Voice Interviewer",
    description: "Practice with our advanced AI that simulates real interview scenarios with natural conversation.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Get detailed insights on your speaking clarity, confidence level, and answer quality.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Feedback",
    description: "Receive instant suggestions and tips to improve your responses during practice.",
  },
  {
    icon: Clock,
    title: "Flexible Practice",
    description: "Practice anytime, anywhere. Choose from quick 5-minute sessions to full mock interviews.",
  },
  {
    icon: Target,
    title: "Role-Specific Questions",
    description: "Customized questions based on your target role, industry, and experience level.",
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Track your improvement over time with weekly reports and skill badges.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">ace your interview</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive tools to help you prepare, 
            practice, and perfect your interview skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
