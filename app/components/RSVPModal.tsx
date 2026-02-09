'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface RSVPModalProps {
  onClose: () => void;
}

export default function RSVPModal({ onClose }: RSVPModalProps) {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwlGJ72qm6aL_euqtqJHX32Ykvg2J45G2mqzhhEnwnOUxGhutzYlkvEl5Um01M_1Qj9Mw/exec';
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          guestCount: parseInt(guestCount),
        }),
      });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-[#FDF8F3] rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-2 border-black"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black transition-colors cursor-pointer hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            <div className="text-center mb-8">
              <h2 className="font-serif text-4xl text-[#2C2C2C] mb-2">Katılım Durumu</h2>
              <div className="w-16 h-px bg-gold mx-auto" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm text-[#2C2C2C] mb-2 tracking-wide font-medium">
                  İsminiz
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ad Soyad"
                  style={{
                    color: '#2C2C2C',
                    WebkitTextFillColor: '#2C2C2C',
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gold/20 bg-white 
                           focus:border-gold focus:outline-none transition-colors
                           font-sans text-base font-medium placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="guestCount" className="block font-sans text-sm text-[#2C2C2C] mb-2 tracking-wide font-medium">
                  Kaç kişi katılacaksınız?
                </label>
                <select
                  id="guestCount"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  required
                  style={{
                    color: '#2C2C2C',
                    WebkitTextFillColor: '#2C2C2C',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gold/20 bg-white 
                           focus:border-gold focus:outline-none transition-colors
                           font-sans text-base font-medium"
                >
                  <option value="1" style={{ color: '#2C2C2C' }}>1 kişi</option>
                  <option value="2" style={{ color: '#2C2C2C' }}>2 kişi</option>
                  <option value="3" style={{ color: '#2C2C2C' }}>3 kişi</option>
                  <option value="4" style={{ color: '#2C2C2C' }}>4 kişi</option>
                  <option value="5" style={{ color: '#2C2C2C' }}>5 kişi</option>
                  <option value="6" style={{ color: '#2C2C2C' }}>6 kişi</option>
                  <option value="7" style={{ color: '#2C2C2C' }}>7 kişi</option>
                  <option value="8" style={{ color: '#2C2C2C' }}>8+ kişi</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full py-3 bg-[#2C2C2C] text-cream rounded-lg border-2 border-gold/30
                         hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition-all duration-300
                         font-sans tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
              </button>
            </form>
          </>
        ) : (
          <motion.div
            className="text-center py-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-2">Teşekkürler!</h3>
            <p className="font-sans text-charcoal/70">Katılım durumunuz alındı.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}