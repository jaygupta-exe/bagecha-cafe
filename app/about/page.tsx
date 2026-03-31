"use client";

import { motion } from 'framer-motion';
import { Sparkles, Coffee, Store, Leaf, MapPin, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const milestones = [
    {
      year: '2019',
      title: 'Adis Delicious & Aromatic',
      location: 'Chandigarh',
      icon: Coffee,
      description: 'Our journey began with unique flavors and warm hospitality'
    },
    {
      year: '2020',
      title: 'Adis Cafeteria',
      location: 'Mohali',
      icon: Store,
      description: 'Expanding to bring our experience to more communities'
    },
    {
      year: '2021',
      title: 'Adis Café',
      location: 'Jalandhar',
      icon: Coffee,
      description: 'Moving forward even during challenging times'
    },
    {
      year: '2023',
      title: 'Adis Café N Dine',
      location: 'Jalandhar',
      icon: Store,
      description: 'Growing stronger with customer support'
    },
    {
      year: '2026',
      title: 'Bagecha by Adis Café',
      location: 'Garden Theme Launch',
      icon: Leaf,
      description: 'Where nature meets comfort'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1763301331567-21c465b66e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBjYWZlJTIwb3V0ZG9vciUyMHBsYW50c3xlbnwxfHx8fDE3NzQ2MTk1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758980960366-d344cfddd004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBwbGFudHMlMjBjb3p5fGVufDF8fHx8MTc3NDYxOTU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzQ2MTg2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1684595011788-d7ac732cd6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZm9vZCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzQ2MTk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1766443775333-3e75fae0a82f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbGlnaHRzJTIwYW1iaWFuY2V8ZW58MXx8fHwxNzc0NjE5NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1710948410781-d5ba35329a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzc0NTk0MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assests/about-hero.jpg?v=${Date.now()}')`,
            filter: 'blur(3px)',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `linear-gradient(to bottom, rgba(54, 76, 17, 0.6), rgba(0, 0, 0, 0.8))`
          }}
        />

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h1 
            className="mb-6"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              background: 'linear-gradient(to right, #ffffff, #d4af37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About Bagecha
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where Nature Meets Comfort
          </motion.p>
          
          <motion.button
            className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #364c11, #2d3f0e)',
              boxShadow: '0 10px 30px rgba(54, 76, 17, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(54, 76, 17, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="relative z-10 flex items-center gap-2 text-white">
              Explore Our Story
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/20 to-yellow-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Story Timeline Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f05] to-black" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#d4af37'
              }}
            >
              Our Journey
            </h2>
            <p className="text-lg text-gray-400">A timeline of passion and growth</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#364c11] via-[#4a6516] to-[#364c11] hidden md:block" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <motion.div
                        className="p-6 rounded-3xl backdrop-blur-xl border border-[#364c11]/30 shadow-lg relative overflow-hidden group hover:border-[#4a6516] transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(54, 76, 17, 0.1), rgba(0, 0, 0, 0.6))',
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 20px 40px rgba(54, 76, 17, 0.3), 0 0 60px rgba(212, 175, 55, 0.15)'
                        }}
                      >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#364c11]/0 via-[#364c11]/10 to-[#364c11]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                            <Icon className="w-6 h-6 text-[#d4af37]" />
                            <h3 className="text-2xl" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 600, color: '#d4af37' }}>
                              {milestone.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 mb-2 text-gray-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{milestone.location}</span>
                          </div>
                          <p className="text-gray-300">{milestone.description}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-20 flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl border-2 border-[#364c11] shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, rgba(54, 76, 17, 0.8), rgba(45, 63, 14, 0.9))',
                          boxShadow: '0 0 30px rgba(54, 76, 17, 0.5), inset 0 0 20px rgba(212, 175, 55, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          boxShadow: '0 0 50px rgba(212, 175, 55, 0.6)'
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-xl font-bold text-[#d4af37]" style={{ fontFamily: 'var(--font-playfair)' }}>
                          {milestone.year}
                        </span>
                      </motion.div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="w-full md:w-5/12 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0f05]" />
        
        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="p-12 md:p-16 rounded-3xl backdrop-blur-2xl border border-[#364c11]/40 shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(54, 76, 17, 0.15), rgba(0, 0, 0, 0.7))',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 80px rgba(54, 76, 17, 0.1)'
            }}
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#364c11]/20 to-transparent rounded-tr-full" />
            
            <div className="relative z-10">
              <Leaf className="w-12 h-12 text-[#d4af37] mb-6 mx-auto" strokeWidth={1.5} />
              
              <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
                <p>
                  <span className="text-[#d4af37] font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Bagecha by Adis Café
                  </span>{' '}
                  is{' '}
                  <span className="text-white font-medium">more than just a café</span>
                  {' '}— it is an experience{' '}
                  <span className="text-white font-medium">built on passion</span>, growth, and a deep love for creating memorable moments.
                </p>

                <p>
                  Our journey began in <span className="text-[#d4af37]">2019 in Chandigarh</span> with our first outlet, Adis Delicious & Aromatic, where we introduced our unique flavors and warm hospitality. The overwhelming response encouraged us to expand, and in 2020, we launched our second outlet, Adis Cafeteria in Mohali.
                </p>

                <p>
                  Even during the challenging times of 2021, we continued to move forward by opening a small café in Jalandhar under the name Adis Café. With dedication and support from our customers, we grew stronger and transformed it into a larger space — Adis Café N Dine in 2023.
                </p>

                <p>
                  With the constant love and blessings of our customers, we took a step ahead in 2026 and introduced{' '}
                  <span className="text-[#d4af37] font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Bagecha by Adis Café
                  </span>
                  {' '}— a beautifully designed{' '}
                  <span className="text-white font-medium">garden-themed café</span>
                  {' '}where nature meets comfort.
                </p>

                <p className="text-center pt-4 border-t border-[#364c11]/30">
                  Today, our journey continues with multiple outlets including{' '}
                  <span className="text-[#d4af37]">Mastana Musafir by Adis Café</span> in Jalandhar and Rishikesh.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Visual Gallery Strip */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f05] to-black" />
        
        <div className="relative z-10">
          <motion.div
            className="text-center mb-12 px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#d4af37'
              }}
            >
              Experience Bagecha
            </h2>
            <p className="text-lg text-gray-400">Moments captured in our garden paradise</p>
          </motion.div>

          <div className="flex overflow-x-auto gap-6 px-6 pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#364c11]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Overlay Border Effect */}
                <div className="absolute inset-0 border-2 border-[#d4af37]/0 group-hover:border-[#d4af37]/50 transition-all duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative pt-32 pb-48 px-6 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(54, 76, 17, 0.3), rgba(0, 0, 0, 1))'
          }}
        />
        
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ 
              textShadow: [
                '0 0 20px rgba(212, 175, 55, 0.5)',
                '0 0 40px rgba(212, 175, 55, 0.8)',
                '0 0 20px rgba(212, 175, 55, 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 
              className="mb-8"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 700,
                background: 'linear-gradient(to right, #d4af37, #ffffff, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Come Experience Bagecha
            </h2>
          </motion.div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Step into a world where every corner tells a story, every dish is crafted with love, and every moment becomes a cherished memory.
          </p>
          
          <motion.button
            className="group relative px-10 py-5 rounded-full overflow-hidden transition-all duration-300 text-lg"
            style={{
              background: 'linear-gradient(135deg, #d4af37, #c9a030)',
              boxShadow: '0 15px 40px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
              color: '#000'
            }}
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 20px 50px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3 font-semibold">
              <MapPin className="w-5 h-5" />
              Visit Us
            </span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%', skewX: -15 }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center gap-6 md:gap-12 flex-wrap text-gray-500">
            <motion.div className="text-center" whileHover={{ scale: 1.1, color: '#d4af37' }}>
              <Coffee className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Premium Coffee</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.1, color: '#d4af37' }}>
              <Leaf className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Garden Ambiance</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.1, color: '#d4af37' }}>
              <Sparkles className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Memorable Moments</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Global Footer Inclusion */}
      <Footer />

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
