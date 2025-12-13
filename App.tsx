import React, { useState, useEffect } from 'react';
import { Particles, Fog, CRTEffects } from './components/Effects';
import { Navigation } from './components/Navigation';
import { Landing } from './views/Landing';
import { Story } from './views/Story';
import { Overview } from './views/Overview';
import { Problems } from './views/Problems';
import { Register } from './views/Register';
import { Final } from './views/Final';
import { ViewState } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <main className="relative bg-void-black text-retro-white min-h-screen font-sans selection:bg-stranger-red selection:text-white flex flex-col">
      {/* Global Visual Effects */}
      <CRTEffects />
      <Fog />
      <Particles />

      {/* Navigation - Hidden on Landing, visible elsewhere */}
      {currentView !== ViewState.LANDING && (
        <Navigation currentView={currentView} setView={setCurrentView} />
      )}

      {/* View Router */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === ViewState.LANDING && (
            <motion.div
              key="landing"
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
            >
              <Landing onEnter={() => setCurrentView(ViewState.STORY)} />
            </motion.div>
          )}

          {currentView === ViewState.STORY && (
            <motion.div
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Story />
               <div className="flex justify-center pb-20">
                 <button 
                   onClick={() => setCurrentView(ViewState.OVERVIEW)}
                   className="text-white border-b border-stranger-red pb-1 font-heading tracking-widest hover:text-stranger-red transition-colors"
                 >
                   CONTINUE TO BRIEFING
                 </button>
               </div>
            </motion.div>
          )}

          {currentView === ViewState.OVERVIEW && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Overview />
               <div className="flex justify-center pb-20">
                 <button 
                   onClick={() => setCurrentView(ViewState.PROBLEMS)}
                   className="text-white border-b border-stranger-red pb-1 font-heading tracking-widest hover:text-stranger-red transition-colors"
                 >
                   ACCESS ARCHIVES
                 </button>
               </div>
            </motion.div>
          )}

          {currentView === ViewState.PROBLEMS && (
            <motion.div
              key="problems"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Problems onAccess={() => setCurrentView(ViewState.REGISTER)} />
            </motion.div>
          )}

          {currentView === ViewState.REGISTER && (
            <motion.div
              key="register"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Register onFinish={() => setCurrentView(ViewState.FINAL)} />
            </motion.div>
          )}
          
           {currentView === ViewState.FINAL && (
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Final />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* GLOBAL FOOTER */}
      <footer className="relative z-50 py-6 text-center opacity-40 hover:opacity-80 transition-opacity">
        <p className="font-sans text-xs text-gray-500 tracking-wider">
          © Yash Koparde — 2025
        </p>
      </footer>
    </main>
  );
};

export default App;