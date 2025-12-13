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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <main className="relative bg-void-black text-retro-white min-h-screen font-sans selection:bg-stranger-red selection:text-white flex flex-col">
      
      {/* Global Effects */}
      <CRTEffects />
      <Fog />
      <Particles />

      {currentView !== ViewState.LANDING && (
        <Navigation currentView={currentView} setView={setCurrentView} />
      )}

      <div className="flex-grow">
        <AnimatePresence mode="wait">

          {currentView === ViewState.LANDING && (
            <motion.div key="landing" exit={{ opacity: 0 }}>
              <Landing onEnter={() => setCurrentView(ViewState.STORY)} />
            </motion.div>
          )}

          {currentView === ViewState.STORY && (
            <motion.div key="story">
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
            <motion.div key="overview">
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
            <motion.div key="problems">
              <Problems onAccess={() => setCurrentView(ViewState.REGISTER)} />
            </motion.div>
          )}

          {currentView === ViewState.REGISTER && (
            <motion.div key="register">
              <Register onFinish={() => setCurrentView(ViewState.FINAL)} />
            </motion.div>
          )}

          {currentView === ViewState.FINAL && (
            <motion.div key="final">
              <Final />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <footer className="py-6 text-center opacity-40">
        <p className="text-xs text-gray-500 tracking-wider">
          © Yash Koparde — 2025
        </p>
      </footer>
    </main>
  );
};

export default App;
