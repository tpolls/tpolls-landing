import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Users } from "lucide-react";

export default function Community() {
  const handleTelegramJoin = () => {
    // TODO: Replace with actual Telegram link
    window.open("https://t.me/tpolls", "_blank");
  };

  const handleTwitterFollow = () => {
    // TODO: Replace with actual Twitter link
    window.open("https://twitter.com/tpolls", "_blank");
  };

  const handleBetaSignup = () => {
    // TODO: Implement beta signup functionality
    console.log("Beta signup clicked");
  };

  return (
    <section className="py-32 bg-white" id="community">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Community
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
            Be part of the revolution in community-driven decision making. Connect with other creators, 
            share insights, and help shape the future of incentivized polling.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={handleTelegramJoin}
              size="lg"
              className="bg-[#0088cc] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0088cc]/90 transition-colors flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Join our Telegram
            </Button>
            
            <Button
              onClick={handleTwitterFollow}
              size="lg"
              className="bg-[#1da1f2] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#1da1f2]/90 transition-colors flex items-center gap-3"
            >
              <Twitter className="w-6 h-6" />
              Follow on Twitter
            </Button>
            
            <Button
              onClick={handleBetaSignup}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-3"
            >
              <Users className="w-6 h-6" />
              Join the Beta
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
