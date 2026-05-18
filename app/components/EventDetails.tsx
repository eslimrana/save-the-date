'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface EventDetailsProps {
  onRSVPClick: () => void;
}

export default function EventDetails({ onRSVPClick }: EventDetailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">

      <motion.div
        className="max-w-3xl w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 relative border-2 border-gold/20"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Date */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-4">
            <h3 className="font-sans text-xs tracking-[0.4em] text-black/60 mb-3">
              DÜĞÜN TARİHİ
            </h3>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-3">
            25 Temmuz 2026
          </h2>
          
          <p className="font-sans text-base text-black/70">
            Cumartesi
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/30 to-gold/30" />
          <div className="text-black text-xl">✦</div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-gold/30 to-gold/30" />
        </div>

        <motion.div
          className="font-serif text-center text-black/70 text-base md:text-lg italic leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-serif text-xl md:text-3xl text-black tracking-widest mb-1 whitespace-nowrap">
            Kavgacı & Emiroğlu
          </p>
          <p className="font-sans text-xs tracking-[0.3em] text-black/80 mb-1">
            Aileleri olarak
          </p>
          <p className="font-serif text-base md:text-lg italic text-black/70 leading-relaxed">
            Düğünümüzde sizi aramızda görmek, bu güzel başlangıca sizinle birlikte adım atmak en büyük dileğimizdir.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/30 to-gold/30" />
          <div className="text-black text-xl">✦</div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-gold/30 to-gold/30" />
        </div>

        {/* Venue */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-block mb-4">
            <h3 className="font-sans text-xs tracking-[0.4em] text-black/60 mb-3">
              MEKAN
            </h3>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-black mb-3">
            Danıştay Eğitim Tesisi
          </h2>
          
          <p className="font-sans text-base text-black/70 mb-1">
            Üniversiteler, 1604. Cd, 06800 Çankaya
          </p>
          <p className="font-sans text-base text-black/70">
            Ankara, Türkiye
          </p>
        </motion.div>

        {/* Maps Link */}
        <a
          href="https://www.google.com/maps/dir//%C3%9Cniversiteler,+1604.+Cd,+06800+%C3%87ankaya%2FAnkara/@39.8516188,32.6390483,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d347e7e9e22d3d:0x51c512ec5efd9cb4!2m2!1d32.7491615!2d39.9009588?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 font-sans text-sm text-black hover:text-gold transition-colors underline decoration-black/30 hover:decoration-gold/70"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Konum için tıklayın
        </a>

        <motion.div
          className="text-center mb-1 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#C9A961]/40" />
              <span className="text-[#C9A961]/60 text-xs">✦</span>
              <div className="w-12 h-px bg-[#C9A961]/40" />
            </div>
            <p className="font-sans text-s text-black/80 tracking-wide italic max-w-xs">
              Düğünümüz sadece yetişkinlere özeldir
              <br />
              Çocuklara iyi geceler dileriz
            </p>
          </div>
        </motion.div>

        {/* RSVP Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-24 h-px bg-gold/30 mx-auto mb-8" />
          
          <button
            onClick={onRSVPClick}
            className="group relative inline-block cursor-pointer"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative px-16 py-4 bg-[#2C2C2C] text-white rounded-full border-2 border-[#C9A961]/30 
                hover:bg-[#C9A961] hover:text-[#2C2C2C] hover:border-[#C9A961] transition-all duration-300
                shadow-lg hover:shadow-2xl">
              <span className="font-sans text-sm tracking-[0.3em]">
                KATILIM
              </span>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}