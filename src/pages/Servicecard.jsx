// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Code2,
//   User,
//   ShoppingCart,
//   Globe,
//   Search,
//   Megaphone,
// } from "lucide-react";

// const services = 
//   {
//     id: "SVC-01",
//     icon: Code2,
//     title: "Custom Web Development",
//     description:
//       "Hand-built with real code, not templates. Fast, scalable sites engineered exactly to your spec.",
//     tags: ["React", "Node.js", "Custom Code"],
//     featured: false,
//   },
//   {
//     id: "SVC-02",
//     icon: User,
//     title: "Portfolio Websites",
//     description:
//       "Clean, personal sites that put your work front and center — built to make the right first impression.",
//     tags: ["Design", "Animation", "CMS"],
//     featured: false,
//   },
//   {
//     id: "SVC-03",
//     icon: ShoppingCart,
//     title: "Shopify Stores",
//     description:
//       "Storefronts engineered to convert — from product pages to a frictionless checkout.",
//     tags: ["Shopify", "Liquid", "Apps"],
//     featured: false,
//   },
//   {
//     id: "SVC-04",
//     icon: Globe,
//     title: "WordPress Development",
//     description:
//       "Flexible, editable sites your team can manage confidently — no developer required after launch.",
//     tags: ["WordPress", "WooCommerce", "Elementor"],
//     featured: false,
//   },
//   {
//     id: "SVC-05",
//     icon: Search,
//     title: "SEO Optimization",
//     description:
//       "On-page, technical, and content SEO built to move rankings — and keep them moving.",
//     tags: ["Technical SEO", "Content", "Analytics"],
//     featured: true,
//   },
//   {
//     id: "SVC-06",
//     icon: Megaphone,
//     title: "Google & Meta Ads",
//     description:
//       "Paid campaigns tuned for return on spend, not vanity clicks — measured, reported, optimized.",
//     tags: ["Google Ads", "Meta Ads", "Retargeting"],
//     featured: false,
//   },
// ];

// const cardVariants = {
//   offscreen: { opacity: 0, y: 28 },
//   onscreen: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// function ServiceCard({ service, index }) {
//   const Icon = service.icon;

//   return (
//     <motion.div
//       custom={index}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={cardVariants}
//       whileHover="hover"
//       className="group relative"
//     >
//       {/* corner brackets */}
//       <motion.span
//         variants={{ hover: { opacity: 1, x: 0, y: 0 } }}
//         initial={{ opacity: 0.6 }}
//         className="pointer-events-none absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-blue-400 rounded-tl-md"
//       />
//       <motion.span
//         variants={{ hover: { opacity: 1, x: 0, y: 0 } }}
//         initial={{ opacity: 0.6 }}
//         className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-blue-400 rounded-br-md"
//       />

//       <motion.div
//         variants={{
//           hover: {
//             y: -10,
//             scale: 1.02,
//             boxShadow:
//               "0 20px 40px -12px rgba(59,91,219,0.35), 0 0 0 1px rgba(59,91,219,0.4)",
//             transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
//           },
//         }}
//         className={`relative h-full overflow-hidden rounded-2xl border bg-white p-6 sm:p-7 shadow-sm transition-colors duration-300
//           ${
//             service.featured
//               ? "border-blue-300 ring-1 ring-blue-200"
//               : "border-slate-200/70"
//           }
//           group-hover:border-blue-300`}
//       >
//         {/* animated sheen sweep */}
//         <motion.div
//           aria-hidden="true"
//           variants={{
//             hover: {
//               x: "160%",
//               transition: { duration: 0.9, ease: "easeInOut" },
//             },
//           }}
//           initial={{ x: "-60%" }}
//           className="pointer-events-none absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-blue-100/60 to-transparent"
//         />

//         {/* soft glow blob */}
//         <motion.div
//           aria-hidden="true"
//           variants={{
//             hover: { opacity: 1, scale: 1.4 },
//           }}
//           initial={{ opacity: 0, scale: 0.6 }}
//           transition={{ duration: 0.5 }}
//           className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"
//         />

//         <div className="relative flex items-center justify-between">
//           <span className="font-mono text-xs tracking-widest text-slate-400">
//             {service.id}
//           </span>
//           <span className="h-px flex-1 mx-3 border-t border-dashed border-slate-300" />
//           <motion.span
//             variants={{ hover: { scale: 1.3, opacity: 1 } }}
//             initial={{ opacity: 0.5 }}
//             className="h-1.5 w-1.5 rounded-full bg-blue-400"
//           />
//         </div>

//         <motion.div
//           variants={{
//             hover: {
//               rotate: [0, -8, 8, -4, 0],
//               scale: 1.08,
//               transition: { duration: 0.6, ease: "easeInOut" },
//             },
//           }}
//           className={`relative mt-6 flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300
//             ${
//               service.featured
//                 ? "border-blue-400 text-blue-600 bg-blue-50"
//                 : "border-slate-200 text-slate-600 bg-slate-50 group-hover:border-blue-300 group-hover:text-blue-600 group-hover:bg-blue-50"
//             }`}
//         >
//           <Icon className="h-5 w-5" strokeWidth={1.8} />
//         </motion.div>

//         <h3 className="relative mt-5 text-lg font-bold text-slate-900 tracking-tight">
//           {service.title}
//         </h3>

//         <p className="relative mt-2 text-[15px] leading-relaxed text-slate-500">
//           {service.description}
//         </p>

//         <div className="relative mt-5 flex flex-wrap gap-2">
//           {service.tags.map((tag, i) => (
//             <motion.span
//               key={tag}
//               variants={{
//                 hover: {
//                   y: -3,
//                   borderColor: "rgb(96,165,250)",
//                   color: "rgb(37,99,235)",
//                   backgroundColor: "rgb(239,246,255)",
//                   transition: { delay: i * 0.05, duration: 0.25 },
//                 },
//               }}
//               className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] tracking-wide text-slate-500"
//             >
//               {tag}
//             </motion.span>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function ServicesSection() {
//   return (
//     <section className="w-full bg-gradient-to-b from-[#e9edfb] to-[#eef1fc] px-4 py-16 sm:py-24">
//       <div className="mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="max-w-2xl"
//         >
//           <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
//             What we build
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-slate-500">
//             Six disciplines, one team. From the first line of code to the ad
//             that brings the first customer through the door.
//           </p>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <ServiceCard key={service.id} service={service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  User,
  ShoppingCart,
  Globe,
  Search,
  Megaphone,
} from "lucide-react";

const services = [
  {
    id: "SVC-01",
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Hand-built with real code, not templates. Fast, scalable sites engineered exactly to your spec.",
    tags: ["React", "Node.js", "Next.js"],
    featured: false,
  },
  {
    id: "SVC-02",
    icon: User,
    title: "Portfolio Websites",
    description:
      "Clean, personal sites that put your work front and center — built to make the right first impression.",
    tags: ["Design", "Animation", "Framer"],
    featured: false,
  },
  {
    id: "SVC-03",
    icon: ShoppingCart,
    title: "Shopify Stores",
    description:
      "Storefronts engineered to convert — from product pages to a frictionless checkout.",
    tags: ["Shopify", "Liquid", "Apps"],
    featured: false,
  },
  {
    id: "SVC-04",
    icon: Globe,
    title: "WordPress Development",
    description:
      "Flexible, editable sites your team can manage confidently — no developer required after launch.",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    featured: false,
  },
  {
    id: "SVC-05",
    icon: Search,
    title: "SEO Optimization",
    description:
      "On-page, technical, and content SEO built to move rankings — and keep them moving.",
    tags: ["Technical SEO", "Content", "Analytics"],
    featured: true,
  },
  {
    id: "SVC-06",
    icon: Megaphone,
    title: "Google & Meta Ads",
    description:
      "Paid campaigns tuned for return on spend, not vanity clicks — measured, reported, optimized.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ServiceCard({ service, index }) {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.04, y: -12 }}
      className="group relative"
    >
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-blue-400 rounded-tl-xl z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-blue-400 rounded-br-xl z-10"
      />

      <motion.div
        whileHover={{
          boxShadow: "0 30px 60px -15px rgba(59, 130, 246, 0.4)",
        }}
        className={`relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg border transition-all duration-500
          ${service.featured 
            ? "border-blue-400 ring-2 ring-blue-200/60" 
            : "border-slate-200 hover:border-blue-300"
          }`}
      >
        {/* Moving Sheen Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 pointer-events-none"
        />

        {/* Floating Icon Container */}
        <motion.div
          whileHover={{
            rotate: [0, -12, 12, -8, 0],
            scale: 1.15,
          }}
          transition={{ duration: 0.6 }}
          className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all
            ${service.featured 
              ? "bg-blue-50 border-2 border-blue-400" 
              : "bg-slate-50 group-hover:bg-blue-50 border border-slate-200 group-hover:border-blue-300"
            }`}
        >
          <Icon className="h-9 w-9 text-blue-600" strokeWidth={1.6} />
        </motion.div>

        {/* Service ID */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-[3px] text-slate-400 font-medium">
            {service.id}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3">
          {service.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, y: -2 }}
              className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Featured Badge */}
        {service.featured && (
          <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold tracking-wider rounded-full shadow-lg">
            MOST POPULAR
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#e9edfb] to-[#f0f4ff] py-20 sm:py-28">
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -left-20 w-96 h-96 border border-blue-200/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 -right-20 w-[500px] h-[500px] border border-purple-200/20 rounded-full"
      />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-slate-900 mb-4">
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Six powerful services. One mission — help your business grow faster with beautiful, high-performing digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}