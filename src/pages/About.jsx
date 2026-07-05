// import React from "react";
// import about from "../assets/about.png";
// import { Building2, Rocket, Eye, Coins } from "lucide-react";
// import { motion } from "framer-motion";
// import {
//   FaCode,
//   FaRocket,
//   FaShieldAlt,
//   FaArrowRight,
// } from "react-icons/fa";

// export default function AboutHero() {
//   const cards = [
//     {
//       icon: <FaCode />,
//       title: "Website Development",
//       desc: "Fast, responsive and scalable websites."
//     },
//     {
//       icon: <FaRocket />,
//       title: "Digital Growth",
//       desc: "SEO, marketing and business growth solutions."
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Reliable Support",
//       desc: "Maintenance and lifetime technical support."
//     }
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#f7fbff] text-black">

//       {/* Background Blur */}
//       <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

//       <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

//       {/* Floating Circles */}

//       <motion.div
//         animate={{
//           y: [0, -30, 0]
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 6
//         }}
//         className="absolute top-24 right-24 h-8 w-8 rounded-full bg-blue-500"
//       />

//       <motion.div
//         animate={{
//           y: [0, 25, 0]
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 8
//         }}
//         className="absolute left-10 bottom-40 h-5 w-5 rounded-full bg-blue-500"
//       />

//       <div className="max-w-7xl mx-auto px-6 py-24">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT */}

//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//           >

//             <h1 className="text-5xl md:text-6xl font-black leading-tight mt-15">

//               Building
//               <span className="text-blue-500"> Digital </span>

//               Experiences That
//               Grow Businesses
//             </h1>

//             <p className="mt-8 text-black-300 text-lg leading-8 max-w-xl">
//               We create premium websites, web applications,
//               eCommerce stores and digital experiences that help
//               brands grow online.
//             </p>

//             <div className="flex flex-wrap gap-5 mt-10">

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   y: -4
//                 }}
//                 whileTap={{ scale: .9 }}
//                 className="bg-blue-500 px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
//               >
//                 Our Services
//                 <FaArrowRight />
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   borderColor: "#22d3ee"
//                 }}
//                 className="border border-black/30 px-8 py-4 rounded-xl"
//               >
//                 Contact Us
//               </motion.button>

//             </div>

//           </motion.div>

//           {/* RIGHT */}

//           <motion.div

//             initial={{ opacity:0,x:100 }}

//             whileInView={{ opacity:1,x:0 }}

//             transition={{ duration:1 }}

//             whileHover={{ scale:1.04 }}

//             className="relative"
//           >

//             <motion.div

//               animate={{
//                 rotate:[0,5,0,-5,0]
//               }}

//               transition={{
//                 repeat:Infinity,
//                 duration:8
//               }}

//               className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
//             />

//             <img
//               src={about}
//               alt=""
//               className="relative rounded-3xl w-full mt-15"
//             />

//           </motion.div>

//         </div>

//         {/* Cards */}

//         <div className="grid md:grid-cols-3 gap-8 mt-20">

//           {cards.map((card,index)=>(

//             <motion.div

//               key={index}

//               initial={{opacity:0,y:50}}

//               whileInView={{opacity:1,y:0}}

//               transition={{
//                 delay:index*.2
//               }}

//               whileHover={{
//                 y:-12,
//                 scale:1.04,
//                 rotateX:5
//               }}

//               className="bg-black/5 backdrop-blur-xl border border-black/10 rounded-3xl p-8 group cursor-pointer"
//             >

//               <div className="text-5xl text-blue-500 mb-5 group-hover:rotate-12 transition">

//                 {card.icon}

//               </div>

//               <h2 className="text-2xl font-bold">

//                 {card.title}

//               </h2>

//               <p className="mt-4 text-black-300">

//                 {card.desc}

//               </p>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>



// /**
//  * MissionVisionValues.jsx
//  * ------------------------------------------------------------------
//  * "About" page section for a digital agency — core hub (agency)
//  * powering three outward values: Mission, Vision, Values.
//  *
//  * Stack: React + Tailwind CSS + Framer Motion
//  * Drop-in usage:
//  *   import MissionVisionValues from "./MissionVisionValues";
//  *   <MissionVisionValues />
//  *
//  * Fully responsive — desktop shows the hub-and-spoke diagram,
//  * mobile collapses into a vertical flow with the same animated
//  * "current" line running through it.
//  * ------------------------------------------------------------------
//  */

// const ITEMS = [
//   {
//     key: "mission",
//     label: "Mission",
//     Icon: Rocket,
//     color: "#2F6FED",
//     glow: "rgba(47,111,237,0.35)",
//     top: "10%",
//     copy:
//       "We turn ambitious ideas into digital products people actually want to use — combining strategy, design and engineering into one seamless build.",
//   },
//   {
//     key: "vision",
//     label: "Vision",
//     Icon: Eye,
//     color: "#0FB5AE",
//     glow: "rgba(15,181,174,0.35)",
//     top: "50%",
//     copy:
//       "To be the studio ambitious brands call first — the standing partner behind their next decade of digital growth, not a one-off vendor.",
//   },
//   {
//     key: "values",
//     label: "Values",
//     Icon: Coins,
//     color: "#F5A524",
//     glow: "rgba(245,165,36,0.35)",
//     top: "90%",
//     copy:
//       "Transparency, craftsmanship and relentless curiosity. We say what we mean, ship what we promise, and never stop sharpening the work.",
//   },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.18, delayChildren: 0.15 },
//   },
// };

// const nodeVariant = {
//   hidden: { opacity: 0, x: 24, scale: 0.9 },
//   show: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const hubVariant = {
//   hidden: { opacity: 0, scale: 0.8 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function MissionVisionValues() {
//   return (
//     <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-28 px-6 overflow-hidden">
//       {/* ambient backdrop */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-20"
//         style={{ background: "radial-gradient(circle, #2F6FED, transparent 70%)" }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
//         style={{ background: "radial-gradient(circle, #F5A524, transparent 70%)" }}
//       />

//       <div className="relative mx-auto max-w-6xl">
//         {/* Eyebrow + Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 sm:mb-20 max-w-2xl"
//         >
//           <span
//             className="inline-block text-xs tracking-[0.25em] uppercase font-medium text-[#2F6FED] mb-4"
//             style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//           >
//             What Drives Us
//           </span>
//           <h2
//             className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-[#0F172A]"
//             style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//           >
//             One studio, three forces
//             <br className="hidden sm:block" /> pushing every build forward.
//           </h2>
//         </motion.div>

//         {/* ============ DESKTOP: hub-and-spoke diagram ============ */}
//         <div className="hidden md:block relative w-full aspect-[16/9] max-w-5xl mx-auto">
//           <svg
//             viewBox="0 0 600 340"
//             className="absolute inset-0 w-full h-full overflow-visible"
//             fill="none"
//           >
//             <defs>
//               <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#2F6FED" />
//                 <stop offset="50%" stopColor="#0FB5AE" />
//                 <stop offset="100%" stopColor="#F5A524" />
//               </linearGradient>
//             </defs>

//             {/* base static spine (quiet) */}
//             <path
//               d="M120,170 C210,170 190,34 340,34"
//               stroke="#E2E8F0"
//               strokeWidth="2"
//               fill="none"
//             />
//             <path
//               d="M120,170 L340,170"
//               stroke="#E2E8F0"
//               strokeWidth="2"
//               fill="none"
//             />
//             <path
//               d="M120,170 C210,170 190,306 340,306"
//               stroke="#E2E8F0"
//               strokeWidth="2"
//               fill="none"
//             />

//             {/* animated current (signature element) */}
//             <path
//               id="flow-top"
//               d="M120,170 C210,170 190,34 340,34"
//               stroke="url(#flowGradient)"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeDasharray="6 10"
//               fill="none"
//               className="animate-flow"
//             />
//             <path
//               d="M120,170 L340,170"
//               stroke="url(#flowGradient)"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeDasharray="6 10"
//               fill="none"
//               className="animate-flow"
//             />
//             <path
//               d="M120,170 C210,170 190,306 340,306"
//               stroke="url(#flowGradient)"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeDasharray="6 10"
//               fill="none"
//               className="animate-flow"
//             />

//             {/* branch dots */}
//             {[
//               [190, 100],
//               [190, 170],
//               [190, 240],
//             ].map(([cx, cy], i) => (
//               <circle key={i} cx={cx} cy={cy} r="4" fill="#94A3B8" />
//             ))}
//           </svg>

//           {/* Hub */}
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={hubVariant}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
//           >
//             <motion.div
//               whileHover={{ scale: 1.06, rotate: -3 }}
//               transition={{ type: "spring", stiffness: 260, damping: 18 }}
//               className="relative flex items-center justify-center h-36 w-36 lg:h-40 lg:w-40 rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100"
//             >
//               <motion.span
//                 aria-hidden
//                 className="absolute inset-0 rounded-full"
//                 style={{
//                   background:
//                     "conic-gradient(from 0deg, #2F6FED, #0FB5AE, #F5A524, #2F6FED)",
//                   opacity: 0.15,
//                 }}
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
//               />
//               <Building2 className="h-12 w-12 lg:h-14 lg:w-14 text-[#0F172A] relative z-10" strokeWidth={1.5} />
//             </motion.div>
//           </motion.div>

//           {/* Nodes */}
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={container}
//             className="absolute inset-0"
//           >
//             {ITEMS.map(({ key, label, Icon, color, glow, top, copy }) => (
//               <motion.div
//                 key={key}
//                 variants={nodeVariant}
//                 className="absolute left-[52%] flex items-start gap-5 w-[46%]"
//                 style={{ top, transform: "translateY(-50%)" }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.12, rotate: key === "values" ? 8 : -8 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 14 }}
//                   className="relative shrink-0 flex items-center justify-center h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem] rounded-full bg-white border-2"
//                   style={{ borderColor: color }}
//                 >
//                   <motion.span
//                     aria-hidden
//                     className="absolute -inset-1.5 rounded-full"
//                     style={{ border: `1.5px dashed ${color}`, opacity: 0.5 }}
//                     animate={{ rotate: 360 }}
//                     transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//                   />
//                   <motion.span
//                     aria-hidden
//                     className="absolute inset-0 rounded-full"
//                     style={{ boxShadow: `0 0 0 0 ${glow}` }}
//                     whileHover={{
//                       boxShadow: [`0 0 0 0 ${glow}`, `0 0 0 10px rgba(0,0,0,0)`],
//                     }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                   />
//                   <Icon className="h-7 w-7 lg:h-8 lg:w-8 relative z-10" style={{ color }} strokeWidth={1.75} />
//                 </motion.div>

//                 <div className="pt-1">
//                   <h3
//                     className="text-lg font-semibold mb-1.5"
//                     style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}
//                   >
//                     {label}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
//                     {copy}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* ============ MOBILE: vertical flow ============ */}
//         <div className="md:hidden relative">
//           {/* hub */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             className="flex justify-center mb-6"
//           >
//             <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100">
//               <span
//                 className="absolute inset-0 rounded-full opacity-15"
//                 style={{
//                   background:
//                     "conic-gradient(from 0deg, #2F6FED, #0FB5AE, #F5A524, #2F6FED)",
//                 }}
//               />
//               <Building2 className="h-9 w-9 text-[#0F172A] relative z-10" strokeWidth={1.5} />
//             </div>
//           </motion.div>

//           {/* vertical animated spine */}
//           <div className="absolute left-1/2 top-24 bottom-0 -translate-x-1/2 w-px">
//             <div className="h-full w-full bg-slate-200" />
//             <motion.div
//               className="absolute top-0 left-0 w-full"
//               style={{
//                 background:
//                   "linear-gradient(to bottom, #2F6FED, #0FB5AE 50%, #F5A524)",
//                 height: "40%",
//               }}
//               animate={{ y: ["0%", "150%"] }}
//               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
//             />
//           </div>

//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={container}
//             className="flex flex-col gap-10 pt-4"
//           >
//             {ITEMS.map(({ key, label, Icon, color, top, copy }) => (
//               <motion.div
//                 key={key}
//                 variants={nodeVariant}
//                 className="relative flex items-start gap-4 pl-2"
//               >
//                 <div
//                   className="relative shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-white border-2 z-10"
//                   style={{ borderColor: color }}
//                 >
//                   <Icon className="h-6 w-6" style={{ color }} strokeWidth={1.75} />
//                 </div>
//                 <div className="pt-1">
//                   <h3
//                     className="text-base font-semibold mb-1"
//                     style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}
//                   >
//                     {label}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-slate-500">{copy}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* keyframes for the flowing "current" along the desktop spine */}
//       <style>{`
//         @keyframes dashflow {
//           to { stroke-dashoffset: -160; }
//         }
//         .animate-flow {
//           animation: dashflow 3.5s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .animate-flow { animation: none; }
//         }
//       `}</style>
//     </section>
  

//   );
// }
import React from "react";
import about from "../assets/about.png"; // apna image path yahan set karein
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCode, FaRocket, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { Building2, Rocket, Eye, Coins } from "lucide-react";

/* ============================================================
   ABOUT.jsx — poora About page ek hi file me
   Sections: 1) Hero   2) Mission / Vision / Values
   Stack: React + Tailwind CSS + Framer Motion
   Install: npm install framer-motion lucide-react react-icons
   ============================================================ */

/* ---------------------- Hero section data ---------------------- */
const cards = [
  {
    icon: <FaCode />,
    title: "Website Development",
    desc: "Fast, responsive and scalable websites.",
  },
  {
    icon: <FaRocket />,
    title: "Digital Growth",
    desc: "SEO, marketing and business growth solutions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable Support",
    desc: "Maintenance and lifetime technical support.",
  },
];

function AboutHero() {
   const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] text-black">
      {/* Background blur */}
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      {/* Floating circles */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-24 right-10 sm:right-24 h-8 w-8 rounded-full bg-blue-500"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-6 sm:left-10 bottom-40 h-5 w-5 rounded-full bg-blue-500"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Building
              <span className="text-blue-500"> Digital </span>
              Experiences That Grow Businesses
            </h1>

            <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl">
              We create premium websites, web applications, eCommerce
              stores and digital experiences that help brands grow
              online.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-5 mt-8 sm:mt-10">
              <motion.button
              onClick={() => navigate("/services")}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                Our Services
                <FaArrowRight />
              </motion.button>

              <motion.button
              onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
                className="border border-black/30 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.04 }}
            className="relative mt-4 lg:mt-0"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
            />
            <img src={about} alt="Our team at work" className="relative rounded-3xl w-full" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.04, rotateX: 5 }}
              className="bg-black/5 backdrop-blur-xl border border-black/10 rounded-3xl p-6 sm:p-8 group cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl text-blue-500 mb-4 sm:mb-5 group-hover:rotate-12 transition">
                {card.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">{card.title}</h2>
              <p className="mt-3 sm:mt-4 text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Mission / Vision / Values data ------------------ */
const ITEMS = [
  {
    key: "mission",
    label: "Mission",
    Icon: Rocket,
    color: "#2F6FED",
    glow: "rgba(47,111,237,0.35)",
    top: "10%",
    copy:
      "We turn ambitious ideas into digital products people actually want to use — combining strategy, design and engineering into one seamless build.",
  },
  {
    key: "vision",
    label: "Vision",
    Icon: Eye,
    color: "#0FB5AE",
    glow: "rgba(15,181,174,0.35)",
    top: "50%",
    copy:
      "To be the studio ambitious brands call first — the standing partner behind their next decade of digital growth, not a one-off vendor.",
  },
  {
    key: "values",
    label: "Values",
    Icon: Coins,
    color: "#F5A524",
    glow: "rgba(245,165,36,0.35)",
    top: "90%",
    copy:
      "Transparency, craftsmanship and relentless curiosity. We say what we mean, ship what we promise, and never stop sharpening the work.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const nodeVariant = {
  hidden: { opacity: 0, x: 24, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const hubVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function MissionVisionValues() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-28 px-6 overflow-hidden">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #2F6FED, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #F5A524, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 max-w-2xl"
        >
          <span
            className="inline-block text-xs tracking-[0.25em] uppercase font-medium text-[#2F6FED] mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            What Drives Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-[#0F172A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            One studio, three forces
            <br className="hidden sm:block" /> pushing every build forward.
          </h2>
        </motion.div>

        {/* ============ DESKTOP: hub-and-spoke diagram ============ */}
        <div className="hidden md:block relative w-full aspect-[16/9] max-w-5xl mx-auto">
          <svg
            viewBox="0 0 600 340"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2F6FED" />
                <stop offset="50%" stopColor="#0FB5AE" />
                <stop offset="100%" stopColor="#F5A524" />
              </linearGradient>
            </defs>

            {/* base static spine (quiet) */}
            <path d="M120,170 C210,170 190,34 340,34" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M120,170 L340,170" stroke="#E2E8F0" strokeWidth="2" fill="none" />
            <path d="M120,170 C210,170 190,306 340,306" stroke="#E2E8F0" strokeWidth="2" fill="none" />

            {/* animated current (signature element) */}
            <path
              d="M120,170 C210,170 190,34 340,34"
              stroke="url(#flowGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 10"
              fill="none"
              className="animate-flow"
            />
            <path
              d="M120,170 L340,170"
              stroke="url(#flowGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 10"
              fill="none"
              className="animate-flow"
            />
            <path
              d="M120,170 C210,170 190,306 340,306"
              stroke="url(#flowGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 10"
              fill="none"
              className="animate-flow"
            />

            {/* branch dots */}
            {[
              [190, 100],
              [190, 170],
              [190, 240],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="#94A3B8" />
            ))}
          </svg>

          {/* Hub */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={hubVariant}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="relative flex items-center justify-center h-36 w-36 lg:h-40 lg:w-40 rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100"
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #2F6FED, #0FB5AE, #F5A524, #2F6FED)",
                  opacity: 0.15,
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              />
              <Building2 className="h-12 w-12 lg:h-14 lg:w-14 text-[#0F172A] relative z-10" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Nodes */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="absolute inset-0"
          >
            {ITEMS.map(({ key, label, Icon, color, glow, top, copy }) => (
              <motion.div
                key={key}
                variants={nodeVariant}
                className="absolute left-[52%] flex items-start gap-5 w-[46%]"
                style={{ top, transform: "translateY(-50%)" }}
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: key === "values" ? 8 : -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  className="relative shrink-0 flex items-center justify-center h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem] rounded-full bg-white border-2"
                  style={{ borderColor: color }}
                >
                  <motion.span
                    aria-hidden
                    className="absolute -inset-1.5 rounded-full"
                    style={{ border: `1.5px dashed ${color}`, opacity: 0.5 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  />
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 0 0 ${glow}` }}
                    whileHover={{ boxShadow: [`0 0 0 0 ${glow}`, `0 0 0 10px rgba(0,0,0,0)`] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                  <Icon className="h-7 w-7 lg:h-8 lg:w-8 relative z-10" style={{ color }} strokeWidth={1.75} />
                </motion.div>

                <div className="pt-1">
                  <h3
                    className="text-lg font-semibold mb-1.5"
                    style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 max-w-xs">{copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============ MOBILE: vertical flow ============ */}
        <div className="md:hidden relative">
          {/* hub */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start mb-6"
          >
            <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100">
              <span
                className="absolute inset-0 rounded-full opacity-15"
                style={{ background: "conic-gradient(from 0deg, #2F6FED, #0FB5AE, #F5A524, #2F6FED)" }}
              />
              <Building2 className="h-9 w-9 text-[#0F172A] relative z-10" strokeWidth={1.5} />
            </div>
          </motion.div> */}
          {/* hub */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  className="flex pl-2 mb-4"
>
  <div className="relative flex items-center justify-center h-15 w-15 rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100">
    <span
      className="absolute inset-0 rounded-full opacity-15"
      style={{ background: "conic-gradient(from 0deg, #2F6FED, #0FB5AE, #F5A524, #2F6FED)" }}
    />
    <Building2 className="h-7 w-7 text-[#0F172A] relative z-10" strokeWidth={1.5} />
  </div>
</motion.div>

          {/* vertical animated spine */}
          {/* <div className="absolute left-1/2 top-24 bottom-0 -translate-x-1/2 w-px">
            <div className="h-full w-full bg-slate-200" />
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ background: "linear-gradient(to bottom, #2F6FED, #0FB5AE 50%, #F5A524)", height: "40%" }}
              animate={{ y: ["0%", "150%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div> */}
          {/* vertical animated spine */}
<div className="absolute left-9 top-[4.5rem] bottom-0 w-px">
  <div className="h-full w-full bg-slate-200" />
  <motion.div
    className="absolute top-0 left-0 w-full"
    style={{ background: "linear-gradient(to bottom, #2F6FED, #0FB5AE 50%, #F5A524)", height: "40%" }}
    animate={{ y: ["0%", "150%"] }}
    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
  />
</div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="flex flex-col gap-10 pt-4"
          >
            {ITEMS.map(({ key, label, Icon, color, copy }) => (
              <motion.div key={key} variants={nodeVariant} className="relative flex items-start gap-4 pl-2">
                <div
                  className="relative shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-white border-2 z-10"
                  style={{ borderColor: color }}
                >
                  <Icon className="h-6 w-6" style={{ color }} strokeWidth={1.75} />
                </div>
                <div className="pt-1">
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">{copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* keyframes for the flowing "current" along the desktop spine */}
      <style>{`
        @keyframes dashflow {
          to { stroke-dashoffset: -160; }
        }
        .animate-flow {
          animation: dashflow 3.5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-flow { animation: none; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------- Final combined page ---------------------- */
export default function About() {
  return (
    <main>
      <AboutHero />
      <MissionVisionValues />
    </main>
  );
}