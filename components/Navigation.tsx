import React from 'react';
import { ViewState } from '../types';
import { motion } from 'framer-motion';
import { Radio, Skull, Terminal, Play, UserPlus } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const NavItem: React.FC<{ 
  label: string; 
  icon: React.ReactNode; 
  isActive: boolean; 
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 uppercase font-heading tracking-widest transition-all duration-300 ${
      isActive 
        ? 'text-stranger-red text-shadow-red scale-105' 
        : 'text-gray-500 hover:text-white'
    }`}
  >
    <span className={isActive ? 'animate-pulse' : ''}>{icon}</span>
    <span className="hidden md:inline">{label}</span>
  </button>
);

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 bg-gradient-to-b from-black to-transparent"
    >
      <div className="flex space-x-2 md:space-x-6 backdrop-blur-sm bg-black/40 border border-white/10 rounded-full px-6 py-2">
        <NavItem 
          label="Intro" 
          icon={<Radio size={16} />} 
          isActive={currentView === ViewState.LANDING} 
          onClick={() => setView(ViewState.LANDING)} 
        />
        <NavItem 
          label="The Story" 
          icon={<Skull size={16} />} 
          isActive={currentView === ViewState.STORY} 
          onClick={() => setView(ViewState.STORY)} 
        />
        <NavItem 
          label="Briefing" 
          icon={<Terminal size={16} />} 
          isActive={currentView === ViewState.OVERVIEW} 
          onClick={() => setView(ViewState.OVERVIEW)} 
        />
        <NavItem 
          label="Classified" 
          icon={<Play size={16} />} 
          isActive={currentView === ViewState.PROBLEMS} 
          onClick={() => setView(ViewState.PROBLEMS)} 
        />
         <NavItem 
          label="Join" 
          icon={<UserPlus size={16} />} 
          isActive={currentView === ViewState.REGISTER} 
          onClick={() => setView(ViewState.REGISTER)} 
        />
      </div>
    </motion.nav>
  );
};