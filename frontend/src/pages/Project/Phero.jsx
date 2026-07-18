import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, ShoppingBag, Code2 } from "lucide-react";

function Phero() {
    const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-black flex items-center pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[520px] lg:h-[520px] rounded-full bg-cyan-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] lg:w-[480px] lg:h-[480px] rounded-full bg-blue-400/20 blur-[120px]"
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE - Content */}
        <div className="text-center lg:text-left">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 mb-6 sm:mb-8 text-sm sm:text-base mx-auto lg:mx-0"
          >
            <Sparkles size={18} />
            Digital Agency
          </motion.div>

          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            Your Vision
             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            .Our Code.
            </span>
<br />
          Extraordinary Digital Experiences.
          </h1> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-[1.1] tracking-tight">
  <span className="whitespace-nowrap">
    Your Vision
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
      .Our Code.
    </span>
  </span>
  <br />
  Extraordinary Digital Experiences.
</h1>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
           At AP Solutions, we specialize in crafting modern websites using React.js, WordPress, Shopify, 
           and custom technologies. Every project is designed with performance, responsiveness, user experience, 
           and business growth in mind—helping brands stand out in today's competitive digital world.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <motion.button
             u
            
              whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgb(6 182 212)" }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-cyan-500 flex items-center gap-3 font-semibold text-base shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
             onClick={() => navigate("/Portfolio")}
              whileHover={{ scale: 1.08, backgroundColor: "#111827", color: "#fff" }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full border border-black/30 text-base font-medium"
            >
              View Portfolio
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            {[
              ["120+", "Projects"],
              ["60+", "Clients"],
              ["5★", "Reviews"],
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white/70 border border-white/60 backdrop-blur-lg p-5 text-center"
              >
                <h2 className="text-3xl font-bold text-cyan-500">{item[0]}</h2>
                <p className="text-gray-500 mt-1 text-sm">{item[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Showcase Card with Hover Effect */}
        <div className="relative flex justify-center mt-12 lg:mt-0">
          {/* Rotating Border Rings */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[440px] lg:h-[440px] rounded-full border border-cyan-500/30"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full border border-purple-500/30"
          />

          {/* Main Showcase Card */}
          <motion.div
            whileHover={{ scale: 1.06, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-[340px] rounded-[32px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-7 sm:p-9 overflow-hidden group"
          >
            {/* Hover Shine Effect */}
            <motion.div
              initial={{ x: "-120%" }}
              whileHover={{ x: "180%" }}
              transition={{ duration: 1.1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
            />

            <div className="space-y-6 relative z-10">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300"
              >
                <Code2 className="text-cyan-500" size={34} />
                <div>
                  <h3 className="font-bold text-base">Custom Development</h3>
                  <p className="text-gray-500 text-sm">React • Next.js • Node.js</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300"
              >
                <Globe className="text-purple-500" size={34} />
                <div>
                  <h3 className="font-bold text-base">WordPress Development</h3>
                  <p className="text-gray-500 text-sm">Elementor • WooCommerce</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300"
              >
                <ShoppingBag className="text-cyan-500" size={34} />
                <div>
                  <h3 className="font-bold text-base">Shopify Stores</h3>
                  <p className="text-gray-500 text-sm">Custom Themes & Apps</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-7 h-12 rounded-full border-2 border-cyan-400 flex justify-center">
          <div className="w-2 h-3 rounded-full bg-cyan-400 mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

export default Phero;