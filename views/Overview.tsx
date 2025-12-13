import React from 'react';
import { motion } from 'framer-motion';
import { RULES } from '../constants';
import { ShieldAlert, Timer, Award, Binary, Cpu, Network } from 'lucide-react';

const Card: React.FC<{ title: string; children: React.ReactNode; delay: number }> = ({ title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-black/60 border border-white/10 p-8 relative overflow-hidden h-full flex flex-col"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lab-green to-transparent opacity-50" />
    <h3 className="font-heading text-2xl text-white mb-6 uppercase tracking-wider flex items-center gap-2">
      {title}
    </h3>
    <div className="font-mono text-sm text-gray-300 space-y-4 flex-grow">
      {children}
    </div>
  </motion.div>
);

export const Overview: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* HEADER */}
      <motion.div 
        initial={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        className="mb-16 border-b border-white/10 pb-8"
      >
        <div className="flex items-center gap-4 mb-2">
           <ShieldAlert className="text-stranger-red" size={32} />
           <p className="font-mono text-lab-green tracking-[0.2em] text-sm">CLASSIFIED // TOP SECRET</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-tight">
          Mission Briefing
        </h1>
        <p className="font-sans text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
          The Hawkins Power and Light company has detected unauthorized energy signatures in the local grid.
          These signatures are not random, they are encoded. The Upside Down is attempting to communicate via digital protocols.
        </p>
      </motion.div>

      {/* CONTEXT BLOCKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 bg-white/5 border-l-2 border-stranger-red"
         >
            <h3 className="text-xl font-heading text-white mb-3 flex items-center gap-2"><Binary size={18} /> The Objective</h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
               We need to intercept, decode, and neutralize these signals before the Gate widens. 
               Participants will act as specialized cryptographers and engineers. 
               Your code is the containment wall.
            </p>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 bg-white/5 border-l-2 border-lab-green"
         >
            <h3 className="text-xl font-heading text-white mb-3 flex items-center gap-2"><Cpu size={18} /> Required Protocol</h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
               Lateral thinking is mandatory. Standard algorithms may fail against non-Euclidean logic.
               Collaboration is encouraged—just as the Party relies on each other, you must rely on your team.
            </p>
         </motion.div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Directives" delay={0.2}>
          <ul className="space-y-4">
            {RULES.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-stranger-red mt-1">►</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Time Dilation" delay={0.4}>
          <div className="flex items-center gap-4 mb-4">
            <Timer className="text-white" />
            <span className="text-xl">One Grand Hour</span>
          </div>
          <p>The temporal window is narrow. Synchronization is key. Do not get lost in the void.</p>
          <div className="mt-6 p-4 border border-stranger-red/30 bg-stranger-red/10">
            <p className="text-xs text-stranger-red uppercase">Warning: Time moves differently here.</p>
          </div>
        </Card>

        <Card title="The Reward" delay={0.6}>
           <div className="flex items-center gap-4 mb-4">
            <Award className="text-white" />
            <span className="text-xl">GRAND PRIZE</span>
          </div>
          <p>Survival is the primary reward. However, top operatives will receive:</p>
          <ul className="mt-4 list-disc list-inside text-gray-400">
            <li>Aura by Certificate</li>
            <li>Arcade Crown Status</li>
            <li>Live Screening of Final Episode </li>
          </ul>
        </Card>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 flex items-center justify-center gap-4 opacity-50"
      >
        <Network size={20} className="text-gray-500" />
        <span className="font-mono text-xs text-gray-500 tracking-widest">
          SECURE CHANNEL ESTABLISHED
        </span>
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
