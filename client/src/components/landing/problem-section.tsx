import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900" id="problem">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Most polls are ignored – response rates{" "}
            <span className="text-red-500">&lt;10%</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Traditional surveys suffer from feedback fatigue. People are overwhelmed with requests for their opinions 
            but rarely see the value in participating. tPolls changes this by introducing incentives that make 
            participation rewarding and meaningful, creating a sustainable ecosystem for community-driven decision making.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
