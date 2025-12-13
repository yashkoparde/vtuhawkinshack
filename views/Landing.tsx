import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* 1. LAYERED ATMOSPHERE */}
      
      {/* Deep Background Gradient - Forest/Night feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#090505] to-[#1a0505] opacity-90 z-0" />
      
      {/* Fog Layers */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(50, 10, 10, 0.4) 0%, transparent 60%)'
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles / Dust Motes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-stranger-red rounded-full opacity-40 blur-[1px]"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* 2. THE GATE (Visual Anchor) */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {/* The Core Crack */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[2px] h-[300px] bg-stranger-red shadow-[0_0_50px_20px_rgba(229,9,20,0.6)] blur-sm" />
        
        {/* Radiating Light */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-gradient-to-t from-stranger-red/20 to-transparent blur-[100px]"
          animate={{ height: ['30vh', '35vh', '30vh'], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* 3. CONTENT CONTAINER */}
      <div className="z-20 flex flex-col items-center justify-center space-y-12 relative">
        
        {/* Main Title Block */}
        <div className="text-center relative">
           <motion.div
             initial={{ scale: 1.1, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 2.5, ease: "easeOut" }}
           >
             {/* STRANGER THINGS STYLE TYPOGRAPHY */}
             <div className="relative">
                <h1 className="font-title text-6xl md:text-9xl tracking-normal stranger-text uppercase">
                  HAWKINS
                </h1>
                <h1 className="absolute top-0 left-0 w-full font-title text-6xl md:text-9xl tracking-normal stranger-text-filled uppercase opacity-0 animate-pulse-slow mix-blend-screen">
                  HAWKINS
                </h1>
             </div>
             
             <div className="w-full h-[2px] bg-stranger-red shadow-[0_0_10px_#E50914] mt-2 mb-4" />
             
             <div className="relative">
                <h2 className="font-title text-4xl md:text-7xl tracking-widest stranger-text uppercase">
                  HACK!
                </h2>
             </div>
           </motion.div>

           {/* Government Warning Subtitle */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 2, duration: 1 }}
             className="mt-8 flex flex-col items-center gap-2"
           >
             <div className="flex items-center gap-3">
               <span className="w-2 h-2 bg-stranger-red rounded-full animate-ping" />
               <p className="font-mono text-sm md:text-base text-gray-400 tracking-[0.2em] uppercase">
                Restricted Access
               </p>
               <span className="w-2 h-2 bg-stranger-red rounded-full animate-ping" />
             </div>
           </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          onClick={onEnter}
          className="group relative px-12 py-4 overflow-hidden bg-transparent border border-stranger-red/30 hover:border-stranger-red transition-all duration-300"
        >
          <div className="absolute inset-0 bg-stranger-red/10 group-hover:bg-stranger-red/20 transition-all duration-300" />
          
          {/* Glitchy borders */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-stranger-red" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-stranger-red" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-stranger-red" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-stranger-red" />
          
          <span className="relative font-heading text-lg tracking-[0.2em] text-white group-hover:text-stranger-red transition-colors uppercase">
            Enter Hawkins
          </span>
        </motion.button>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 text-stranger-red/50 z-20"
      >
        <ChevronDown size={32} />
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