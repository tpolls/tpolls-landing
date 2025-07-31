import { motion } from "framer-motion";
import { Plus, Users, Coins } from "lucide-react";

const steps = [
  {
    icon: Plus,
    title: "Create a Poll",
    description: "Design engaging polls with custom questions, multiple choice options, and set reward parameters to incentivize meaningful participation from your community."
  },
  {
    icon: Users,
    title: "Engage Your Community",
    description: "Share your polls directly within Telegram channels and groups. Our seamless integration makes it easy for users to participate without leaving their favorite messaging app."
  },
  {
    icon: Coins,
    title: "Reward Participants",
    description: "Automatically distribute TON tokens to participants based on their engagement level. Create a sustainable reward system that keeps your community coming back."
  }
];

const gradients = [
  "from-primary to-secondary",
  "from-secondary to-accent",
  "from-accent to-primary"
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-800" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">How It Works</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Three simple steps to revolutionize community engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${gradients[index]} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
