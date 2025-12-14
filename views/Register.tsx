import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ArrowRight } from 'lucide-react';

interface RegisterProps {
  onFinish: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onFinish }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-void-black text-center px-6">
      
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-stranger-red/20 rounded-full blur-md"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="z-20 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-title stranger-text uppercase mb-4">
            Friends Don't Lie.
          </h1>
          <h1 className="text-5xl md:text-7xl font-title text-stranger-red text-shadow-red uppercase mb-8">
            Code Wins.
          </h1>
          <div className="w-24 h-1 bg-stranger-red mx-auto shadow-[0_0_15px_#E50914]" />
        </motion.div>

        {/* Instructions */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono text-gray-400 text-lg md:text-xl tracking-wide max-w-2xl mb-12 leading-relaxed"
        >
          To receive the classified problem set and your team's submission link, you must contact the organizer directly.
          <br /><br />
          <span className="text-white">DM on any platform below to establish a secure connection.</span>
        </motion.p>

        {/* Contact Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 w-full justify-center mb-16"
        >
          <a 
            href="https://wa.me/qr/RRGKBVFA3QSJP1" 
            className="group min-w-[200px] px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all duration-300 font-heading tracking-widest uppercase text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
          
          <a 
            href="https://instagram.com/am_yashhh" 
            className="group min-w-[200px] px-8 py-4 bg-[#E1306C]/10 border border-[#E1306C]/50 text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300 font-heading tracking-widest uppercase text-sm flex items-center justify-center gap-2"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
        </motion.div>

        {/* Secondary Action to Final Page */}
        <motion.button 
          onClick={onFinish}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, x: 5 }}
          transition={{ delay: 2 }}
          className="text-gray-500 hover:text-white font-mono text-sm tracking-widest uppercase flex items-center gap-2"
        >
          <span>I have established contact</span>
          <ArrowRight size={14} />
        </motion.button>
      </div> 
    </div>
  );
};
