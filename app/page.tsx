'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Invitation from './components/Invitation';
import PhotoReveal from './components/PhotoReveal';
import EventDetails from './components/EventDetails';
import RSVPModal from './components/RSVPModal';

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      {!isInvitationOpen ? (
        <Invitation onOpen={() => setIsInvitationOpen(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <PhotoReveal />
          <EventDetails onRSVPClick={() => setShowRSVP(true)} />
        </motion.div>
      )}

      <AnimatePresence>
        {showRSVP && (
          <RSVPModal onClose={() => setShowRSVP(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}