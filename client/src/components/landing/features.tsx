import { motion } from "framer-motion";
import { Gamepad2, Coins, Shield, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Gamepad2,
    title: "Gamified Polls",
    description: "Transform boring surveys into engaging game-like experiences with points, badges, and leaderboards.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Coins,
    title: "Token Rewards",
    description: "Reward participants with TON tokens for their valuable feedback and active community participation.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Shield,
    title: "Anti-Bot Mechanism",
    description: "Advanced verification ensures authentic responses from real users, maintaining data integrity.",
    gradient: "from-accent to-primary"
  },
  {
    icon: MessageCircle,
    title: "Runs on Telegram",
    description: "Seamlessly integrated with Telegram and powered by TON blockchain for secure, fast transactions.",
    gradient: "from-primary to-accent"
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Features & Benefits</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Everything you need to create engaging, rewarding poll experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
            >
              <Card className="border border-slate-200 dark:border-slate-700 dark:bg-slate-800 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
