import React from 'react';
import { motion } from 'framer-motion';
import { Lock, AlertTriangle, ExternalLink, ShieldAlert } from 'lucide-react';
import { ViewState } from '../types';

interface ProblemsProps {
  onAccess: () => void;
}

export const Problems: React.FC<ProblemsProps> = ({ onAccess }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      
      {/* Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-[50vw] h-[50vw] bg-stranger-red/5 rounded-full blur-[100px]"
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-black/80 border border-stranger-red/30 p-1 md:p-2 backdrop-blur-sm relative"
      >
        {/* Decorative Top Bar */}
        <div className="bg-stranger-red/10 h-8 flex items-center justify-between px-4 border-b border-stranger-red/20 mb-1">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
          </div>
          <span className="font-mono text-xs text-stranger-red tracking-widest">SECURE CONNECTION // ENCRYPTED</span>
        </div>

        {/* Main Terminal Area */}
        <div className="border border-white/5 p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden bg-black">
          
          {/* Scanning Line Animation */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-stranger-red/50 shadow-[0_0_10px_#E50914] z-10"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative inline-block">
               <ShieldAlert size={80} className="text-stranger-red mb-4 mx-auto" strokeWidth={1} />
               <Lock size={30} className="text-white absolute bottom-4 right-[-10px] bg-black rounded-full p-1 border border-stranger-red" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-wider mb-2">
              Classified
            </h2>
            <p className="font-mono text-stranger-red tracking-[0.3em] text-sm uppercase">
              Clearance Level 4 Required
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6 max-w-lg mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-yellow-500 bg-yellow-500/5 border border-yellow-500/20 p-4">
              <AlertTriangle size={20} />
              <span className="font-mono text-sm uppercase tracking-wider">
                Access Denied on this Terminal
              </span>
            </div>

            <p className="font-sans text-gray-400 leading-relaxed">
              The problem database is located on a secure external server to prevent Mind Flayer interference. 
              Do not attempt to decrypt locally.
            </p>

            <div className="pt-8">
              <motion.button 
                onClick={onAccess}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stranger-red text-white font-heading tracking-widest uppercase hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)]"
              >
                <span>Access Database</span>
                <ExternalLink size={18} />
                
                {/* Button Glitch Effect */}
                <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100" />
              </motion.button>
            </div>
          </motion.div>

        </div> {/* end Main Terminal Area */}
      </motion.div>

      {/* GLOBAL TRADEMARK FOOTER */}
      <div className="fixed bottom-4 right-6 z-30 pointer-events-none">
        <p className="text-xs tracking-widest text-gray-500 opacity-70">
          © Yash Koparde — 2025
        </p>
      </div>
    </div>
  );
};
