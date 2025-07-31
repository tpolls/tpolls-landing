import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const demoScreenshots = [
  {
    title: "Poll Creation",
    description: "Intuitive interface for creating engaging polls",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    title: "Community Dashboard",
    description: "Track engagement and poll performance",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    title: "Token Rewards",
    description: "Automatic reward distribution on TON",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    title: "Analytics & Insights",
    description: "Deep insights into poll performance",
    imageUrl: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  }
];

export default function DemoSection() {
  return (
    <section className="py-32 bg-slate-50" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">See It In Action</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the tPolls interface through our interactive demo screenshots
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="horizontal-scroll flex gap-8 overflow-x-auto pb-8">
            {demoScreenshots.map((demo, index) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="flex-none w-80"
              >
                <Card className="shadow-lg overflow-hidden">
                  <img 
                    src={demo.imageUrl} 
                    alt={demo.title}
                    className="w-full h-96 object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-2">{demo.title}</h4>
                    <p className="text-slate-600 text-sm">{demo.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
