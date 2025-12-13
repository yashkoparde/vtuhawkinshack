  import React from 'react';
  import { motion } from 'framer-motion';

  export const Final: React.FC = () => {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-void-black text-center px-4">
        
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0505_0%,_#000000_100%)] z-0" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10"
        >
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full border-2 border-stranger-red mx-auto flex items-center justify-center animate-pulse">
              <div className="w-12 h-12 rounded-full bg-stranger-red/20" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading text-white tracking-[0.2em] uppercase mb-4">
            Stand By
          </h1>
          
          <p className="font-mono text-stranger-red text-sm tracking-widest uppercase mb-12">
            Waiting for Transmission...Check your WhatsApp/Instagram for the link to establish secured connection
          </p>
          
          <p className="font-sans text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Good luck, Operative. The fate of Hawkins and the internet rests in your code.
          </p>
        </motion.div>

        {/* GLOBAL TRADEMARK FOOTER */}
        <div className="fixed bottom-4 right-6 z-30 pointer-events-none">
          <p className="text-xs tracking-widest text-gray-500 opacity-70">
            © Yash Koparde — 2025
          </p>
        </div>
      </div> // <-- Closed outermost div
    );
  };
