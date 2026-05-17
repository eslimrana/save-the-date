'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InvitationProps {
  onOpen: () => void;
}

export default function Invitation({ onOpen }: InvitationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleClick = () => {
    if (videoRef.current && !isPlaying) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      onOpen();
    }, 300);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      {/* Video container */}
      <motion.div
        className="relative w-full h-screen cursor-pointer"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          onEnded={handleVideoEnd}
          onPlay={() => setHasStarted(true)}
          playsInline
          muted
          poster="/photos/envelope_poster.png"
        >
          <source src="/R&E.mp4" type="video/mp4" />
          {!hasStarted && (
            <img
              src="/photos/envelope_poster.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          )}
        </video>

        {/* Tap to open instruction */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              className="absolute bottom-20 left-0 right-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="text-center"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="font-sans text-white/60 text-sm tracking-[0.3em]">
                  TIKLAYARAK AÇ
                </p>
                <div className="w-8 h-px bg-white/30 mx-auto mt-2" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* White fade overlay at the end */}
        <AnimatePresence>
          {videoEnded && (
            <motion.div
              className="absolute inset-0 bg-black z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}