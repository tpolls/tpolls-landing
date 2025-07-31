import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleStartPolling = () => {
    // TODO: Implement navigation to app
    console.log("Start Polling clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Abstract Background Elements */}
      <div className="abstract-lines" />
      <div className="abstract-shape w-96 h-96 -top-48 -left-48" />
      <div className="abstract-shape w-64 h-64 -bottom-32 -right-32" style={{ animationDelay: '3s' }} />
      <div className="abstract-shape w-32 h-32 top-1/4 right-1/4" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
        >
          Redefining{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Consensus
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-600 mb-12"
        >
          Community-driven polls with rewards on TON
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            onClick={handleStartPolling}
            size="lg"
            className="bg-primary text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
          >
            Start Polling
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-slate-400 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
