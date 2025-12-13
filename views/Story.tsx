import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-void-black text-center px-6 py-32">
      
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0505_0%,_#000000_100%)] z-0" />

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-heading text-white uppercase mb-6 tracking-widest">
          The Story
        </h1>
        <p className="font-mono text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
          Hawkins is not what it seems. Beneath the quiet town lies a hidden world—the Upside Down.
          <br /><br />
          Signals from another dimension have begun to interfere with the energy grid. Unseen forces are trying to communicate.
        </p>
        <p className="font-mono text-gray-400 text-lg md:text-xl leading-relaxed">
          Only skilled operatives—your team—can intercept, decode, and contain these anomalies. 
          Failure is not an option. Time is slipping.
        </p>
      </motion.div>

      {/* Footer */}
      <div className="fixed bottom-4 right-6 z-30 pointer-events-none">
        <p className="text-xs tracking-widest text-gray-500 opacity-70">
          © Yash Koparde — 2025
        </p>
      </div>
    </div>
  );
};
