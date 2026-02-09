'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const photos = [
  '/photos/photo1.png',
  '/photos/photo2.png',
  '/photos/photo3.png',
];

export default function PhotoReveal() {
  const [currentSet, setCurrentSet] = useState(0);
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFlash(true);
      
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % Math.ceil(photos.length / 3));
        setShowFlash(false);
      }, 200);
      
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-20">
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Save the Date with Arc Text */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-start justify-center z-30 pointer-events-none pt-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="text-center relative">
          <svg viewBox="0 0 600 200" className="w-full max-w-2xl">
            <defs>
              <path
                id="arc"
                d="M 50,180 Q 300,50 550,180"
                fill="transparent"
              />
            </defs>
            <text className="font-serif text-5xl md:text-6xl fill-white drop-shadow-2xl" style={{ letterSpacing: '0.15em' }}>
              <textPath href="#arc" startOffset="50%" textAnchor="middle">
                Tarihi Not Edin
              </textPath>
            </text>
          </svg>

          <motion.p
            className="text-white/80 font-sans text-sm tracking-widest -mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            25.07.2026
          </motion.p>
        </div>
      </motion.div>

      {/* Photo Booth Strips */}
      <div className="relative z-20 mt-3">
        {/* First Strip - Bottom, tilted left */}
        <motion.div
          className="relative -ml-8"
          initial={{ scale: 0.8, opacity: 0, y: 50, rotate: -2 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotate: -3 }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3
          }}
        >
          <div className="bg-white p-2 shadow-2xl relative">
            <div className="space-y-1.5">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="relative w-32 h-40 bg-white overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentSet}-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={photos[index % photos.length]}
                        alt={`Photo ${index + 1}`}
                        fill
                        className="object-cover grayscale"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]" />
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showFlash && (
              <motion.div
                className="absolute inset-0 bg-white z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Second Strip - Top, tilted right, offset */}
        <motion.div
          className="absolute -top-8 -right-24 -ml-8"
          initial={{ scale: 0.8, opacity: 0, y: 50, rotate: 2 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotate: 4 }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
        >
          <div className="bg-white p-2 shadow-2xl relative">
            <div className="space-y-1.5">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`second-${index}`}
                  className="relative w-32 h-40 bg-white overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.15 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentSet}-second-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={photos[index % photos.length]}
                        alt={`Photo ${index + 1}`}
                        fill
                        className="object-cover grayscale"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]" />
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showFlash && (
              <motion.div
                className="absolute inset-0 bg-white z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="text-white/80 text-sm tracking-widest font-sans">
          KAYDIRIN
        </div>
        <div className="w-px h-12 bg-white/50 mx-auto mt-2" />
      </motion.div>
    </section>
  );
}