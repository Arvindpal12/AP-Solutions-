// import React from "react";
// import {
//   FaSearch,
//   FaPenNib,
//   FaCode,
//   FaRocket,
//   FaArrowRight,
//   FaPlay,
//   FaCheckCircle,
//   FaStar,
//   FaLock,
//   FaComments,
//   FaChartLine,
//     FaSearch,
//   FaPenNib,
//   FaCode,
//   FaRocket,
//   FaArrowRight,
//   FaPlay,
//   FaCheckCircle,
//   FaStar,
//   FaLock,
//   FaComments,
//   FaChartLine,
//   FaMobileAlt,
//   FaMobileAlt,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// /* ---------------------------------------------------
//    Floating Product Showcase (phone mockup + floating cards)
// --------------------------------------------------- */
// const FloatingProductShowcase = () => {
//   return (
//     <div className="relative w-[220px] h-[380px] sm:w-[260px] sm:h-[440px] md:w-[300px] md:h-[500px] flex items-center justify-center">
//       {/* Phone mockup (black screen) */}
//       <div className="relative w-full h-full bg-black rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden shadow-2xl z-10">
//         <img
//           src="/your-app-screenshot.png"
//           alt="Website preview"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Top-left card */}
//       <motion.div
//         animate={{ y: [0, -12, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute top-[6%] -left-[10%] sm:-left-[12%] bg-white shadow-xl rounded-2xl w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center z-20"
//       >
//         <FaRocket className="text-blue-600 text-base sm:text-lg md:text-xl" />
//       </motion.div>

//       {/* Top-right big card */}
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         className="absolute top-[8%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 flex flex-col items-center justify-center gap-1 z-20"
//       >
//         <FaMobileAlt className="text-blue-600 text-lg sm:text-xl" />
//         <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-700 text-center px-1">
//           Responsive
//         </p>
//       </motion.div>

//       {/* Middle-left card */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 3.5, repeat: Infinity }}
//         className="absolute top-[42%] -left-[16%] sm:-left-[18%] bg-white shadow-xl rounded-2xl w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center z-20"
//       >
//         <FaStar className="text-yellow-400 text-sm sm:text-base md:text-lg" />
//       </motion.div>

//       {/* Middle-right small card */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 4.5, repeat: Infinity }}
//         className="absolute top-[48%] -right-[10%] bg-white shadow-xl rounded-2xl w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
//       >
//         <FaLock className="text-blue-600 text-xs sm:text-sm" />
//       </motion.div>

//       {/* Bottom-left card */}
//       <motion.div
//         animate={{ y: [0, -14, 0] }}
//         transition={{ duration: 5.5, repeat: Infinity }}
//         className="absolute bottom-[10%] -left-[12%] sm:-left-[14%] bg-white shadow-xl rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center z-20"
//       >
//         <FaComments className="text-blue-600 text-base sm:text-lg" />
//       </motion.div>

//       {/* Bottom-right card */}
//       <motion.div
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute bottom-[4%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center gap-1 z-20"
//       >
//         <FaChartLine className="text-blue-600 text-base sm:text-lg" />
//         <p className="text-[9px] sm:text-[10px] font-semibold text-gray-700">SEO</p>
//       </motion.div>
//     </div>
//   );
// };

// /* ---------------------------------------------------
//    Hero Section
// --------------------------------------------------- */
// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#f7fbff] min-h-screen flex items-center">
//       <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-300/30 blur-[120px] rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/30 blur-[120px] rounded-full" />

// // //         mouseX={mouseX}
// // //         mouseY={mouseY}
// // //         depth={1.8}
// // //         duration={4.5}
// // //         delay={0.6}
// // //         style={{ left: "-8%", top: "42%", width: 66, height: 66, borderRadius: "50%", zIndex: 7, ...cardBase }}
// // //       />
// // //       <FloatingCard
// // //         mouseX={mouseX}
// // //         mouseY={mouseY}
// // //         depth={1.2}
// // //         duration={5.8}
// // //         delay={0.15}
// // //         style={{ right: "-8%", top: "48%", width: 58, height: 58, zIndex: 6, ...cardBase }}
// // //       />
// // //       <FloatingCard
// // //         mouseX={mouseX}
// // //         mouseY={mouseY}
// // //         depth={1.6}
// // //         duration={5.2}
// // //         delay={0.4}
// // //         style={{ left: "-2%", bottom: "6%", width: 72, height: 72, zIndex: 8, ...cardBase }}
// // //       />
// // //       <FloatingCard
// // //         mouseX={mouseX}
// // //         mouseY={mouseY}
// // //         depth={1.3}
// // //         duration={6}
// // //         delay={0.2}
// // //         style={{ right: "-4%", bottom: "0%", width: 88, height: 88, zIndex: 9, ...cardBase }}
// // //       />
// // //     </div>
// // //   );
// // // }
// // <motion.div
// //   initial={{ opacity: 0, x: 80 }}
// //   whileInView={{ opacity: 1, x: 0 }}
// //   transition={{ duration: 0.9 }}
// //   className="relative flex justify-center items-center w-full max-w-lg mx-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
// // >
// //   <div className="absolute w-[300px] sm:w-[400px] md:w-[480px] h-[300px] sm:h-[400px] md:h-[480px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20" />

// //   <div className="absolute inset-0 z-20 flex items-center justify-center">
// //     <FloatingProductShowcase />
// //   </div>

// //   <motion.div
// //     animate={{ y: [0, 15, 0] }}
// //     transition={{ duration: 5, repeat: Infinity }}
// //     className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-0 bg-white shadow-2xl rounded-2xl p-3 sm:p-4 md:p-5 z-30 text-center"
// //   >
// //     <h3 className="font-bold text-blue-600 text-base sm:text-lg">24/7</h3>
// //     <p className="text-gray-500 text-xs sm:text-sm">Support</p>
// //   </motion.div>
// // </motion.div>
// // "use client";
// // import { motion } from "framer-motion";
// // import { FaRocket, FaStar, FaLock, FaComments, FaChartLine, FaMobileAlt } from "react-icons/fa";

// // const FloatingProductShowcase = () => {
// //   return (
// //     <div className="relative w-[220px] h-[380px] sm:w-[260px] sm:h-[440px] md:w-[300px] md:h-[500px] flex items-center justify-center">

// //       {/* Phone mockup (black screen) */}
// //       <div className="relative w-full h-full bg-black rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden shadow-2xl z-10">
// //         {/* YAHAN APNI IMAGE DAALNI HAI 👇 */}
// //         <img
// //           src="/your-app-screenshot.png"
// //           alt="Website preview"
// //           className="w-full h-full object-cover"
// //         />
// //       </div>

// //       {/* Top-left card */}
// //       <motion.div
// //         animate={{ y: [0, -12, 0] }}
// //         transition={{ duration: 4, repeat: Infinity }}
// //         className="absolute top-[6%] -left-[10%] sm:-left-[12%] bg-white shadow-xl rounded-2xl
// //                    w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaRocket className="text-blue-600 text-base sm:text-lg md:text-xl" />
// //       </motion.div>

// //       {/* Top-right big card */}
// //       <motion.div
// //         animate={{ y: [0, 15, 0] }}
// //         transition={{ duration: 5, repeat: Infinity }}
// //         className="absolute top-[8%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl
// //                    w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28
// //                    flex flex-col items-center justify-center gap-1 z-20"
// //       >
// //         <FaMobileAlt className="text-blue-600 text-lg sm:text-xl" />
// //         <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-700 text-center px-1">
// //           Responsive
// //         </p>
// //       </motion.div>

// //       {/* Middle-left card */}
// //       <motion.div
// //         animate={{ y: [0, -10, 0] }}
// //         transition={{ duration: 3.5, repeat: Infinity }}
// //         className="absolute top-[42%] -left-[16%] sm:-left-[18%] bg-white shadow-xl rounded-2xl
// //                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaStar className="text-yellow-400 text-sm sm:text-base md:text-lg" />
// //       </motion.div>

// //       {/* Middle-right small card */}
// //       <motion.div
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 4.5, repeat: Infinity }}
// //         className="absolute top-[48%] -right-[10%] bg-white shadow-xl rounded-2xl
// //                    w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaLock className="text-blue-600 text-xs sm:text-sm" />
// //       </motion.div>

// //       {/* Bottom-left card */}
// //       <motion.div
// //         animate={{ y: [0, -14, 0] }}
// //         transition={{ duration: 5.5, repeat: Infinity }}
// //         className="absolute bottom-[10%] -left-[12%] sm:-left-[14%] bg-white shadow-xl rounded-2xl
// //                    w-14 h-14 sm:w-16 sm:h-16
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaComments className="text-blue-600 text-base sm:text-lg" />
// //       </motion.div>

// //       {/* Bottom-right card */}
// //       <motion.div
// //         animate={{ y: [0, 12, 0] }}
// //         transition={{ duration: 6, repeat: Infinity }}
// //         className="absolute bottom-[4%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl
// //                    w-16 h-16 sm:w-20 sm:h-20
// //                    flex flex-col items-center justify-center gap-1 z-20"
// //       >
// //         <FaChartLine className="text-blue-600 text-base sm:text-lg" />
// //         <p className="text-[9px] sm:text-[10px] font-semibold text-gray-700">SEO</p>
// //       </motion.div>

// //     </div>
// //   );
// // };

// // export default FloatingProductShowcase;

// // const Hero = () => {
// //   return (
// //     <section className="relative overflow-hidden bg-[#f7fbff] min-h-screen flex items-center">
// //       <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-300/30 blur-[120px] rounded-full" />
// //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/30 blur-[120px] rounded-full" />

// //       <motion.div
// //         animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
// //         transition={{ duration: 8, repeat: Infinity }}
// //         className="absolute top-24 right-40 w-20 h-20 bg-blue-200 rounded-full opacity-40"
// //       />

// //       <motion.div
// //         animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
// //         transition={{ duration: 10, repeat: Infinity }}
// //         className="absolute bottom-24 right-24 w-32 h-32 bg-cyan-200 rounded-full opacity-30"
// //       />

// //       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center mt-5">
// //         <motion.div
// //           initial={{ opacity: 0, x: -70 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-4 mt-5">
// //             <FaCheckCircle />
// //             Trusted Digital Agency
// //           </div>

// //           <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
// //             Building
// //             <br />
// //             <span className="text-blue-600">Modern Websites</span>
// //             <br />
// //             That Grow
// //             <br />
// //             Your Business
// //           </h1>

// //           <p className="text-gray-600 text-lg mt-8 max-w-xl leading-8">
// //             AP Solutions helps startups and businesses create beautiful,
// //             high-converting websites, Shopify stores, WordPress solutions, and
// //             custom web applications for grow our businesses and startups with
// //             premium user experiences.
// //           </p>

// //           <div className="flex flex-wrap gap-5 mt-10">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl"
// //             >
// //               Get Started
// //               <FaArrowRight />
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="border-2 border-gray-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:border-blue-500"
// //             >
// //               <FaPlay />
// //               Watch Demo
// //             </motion.button>
// //           </div>

// //           <div className="grid grid-cols-3 gap-8 mt-12">
// //             <div>
// //               <h2 className="text-4xl font-bold text-blue-600">150+</h2>
// //               <p className="text-gray-600 mt-2">Projects</p>
// //             </div>
// //             <div>
// //               <h2 className="text-4xl font-bold text-blue-600">100+</h2>
// //               <p className="text-gray-600 mt-2">Happy Clients</p>
// //             </div>
// //             <div>
// //               <h2 className="text-4xl font-bold text-blue-600">5+</h2>
// //               <p className="text-gray-600 mt-2">Years Experience</p>
// //             </div>
// //           </div>
// //         </motion.div>

// //         <div className="relative">
// //           <FloatingProductShowcase />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const process = [
// //   {
// //     id: "01",
// //     title: "Choose a Service",
// //     desc: "Select the service that best fits your business requirements.",
// //     icon: <FaSearch />,
// //   },
// //   {
// //     id: "02",
// //     title: "Make Requirements",
// //     desc: "Tell us your goals and project expectations.",
// //     icon: <FaPenNib />,
// //   },
// //   {
// //     id: "03",
// //     title: "Agreement Meeting",
// //     desc: "We discuss the complete roadmap and finalize everything.",
// //     icon: <FaCode />,
// //   },
// //   {
// //     id: "04",
// //     title: "Final Solution",
// //     desc: "We develop, test and deliver your project successfully.",
// //     icon: <FaRocket />,
// //   },
// // ];

// // const cardVariant = {
// //   hidden: { opacity: 0, y: 80 },
// //   visible: (i) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       delay: i * 0.25,
// //       duration: 0.8,
// //       ease: "easeOut",
// //     },
// //   }),
// // };

// // const ProcessSection = () => {
// //   return (
// //     <section className="relative overflow-hidden bg-[#F8F9FF] py-24">
// //       <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-blue-200 opacity-20 blur-[120px]" />
// //       <div className="absolute right-0 bottom-10 h-60 w-60 rounded-full bg-indigo-200 opacity-20 blur-[120px]" />

// //       <div className="mx-auto max-w-7xl px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 60 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="mb-20 text-center"
// //         >
// //           <p className="text-blue-600 font-semibold tracking-widest uppercase">Workflow</p>
// //           <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">Our Working Process</h2>
// //           <p className="mx-auto mt-5 max-w-2xl text-gray-500">
// //             We follow a simple and professional process that transforms your
// //             ideas into powerful digital solutions.
// //           </p>
// //         </motion.div>

// //         <div className="relative hidden lg:block">
// //           <svg
// //             className="absolute top-20 left-0 w-full"
// //             height="160"
// //             viewBox="0 0 1200 160"
// //             preserveAspectRatio="none"
// //           >
// //             <path
// //               d="M0 90 C150 10 250 150 400 80 S650 20 800 90 S1050 150 1200 60"
// //               stroke="#4F46E5"
// //               strokeWidth="4"
// //               fill="none"
// //               strokeDasharray="8 10"
// //             />
// //           </svg>

// //           <div className="grid grid-cols-4 gap-8">
// //             {process.map((item, index) => (
// //               <motion.div
// //                 key={item.id}
// //                 custom={index}
// //                 variants={cardVariant}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 whileHover={{ y: -10 }}
// //                 className={`relative ${index % 2 === 0 ? "mt-0" : "mt-24"}`}
// //               >
// //                 <div className="rounded-3xl bg-white p-8 shadow-xl transition">
// //                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg">
// //                     {item.icon}
// //                   </div>
// //                   <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
// //                   <p className="mt-3 text-gray-500 text-sm leading-7">{item.desc}</p>
// //                   <div className="mt-5 font-bold text-blue-600">{item.id}</div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="space-y-10 lg:hidden">
// //           {process.map((item, index) => (
// //             <motion.div
// //               key={item.id}
// //               custom={index}
// //               variants={cardVariant}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               whileHover={{ scale: 1.02 }}
// //               className="relative flex gap-5"
// //             >
// //               {index !== process.length - 1 && (
// //                 <div className="absolute left-8 top-16 h-full border-l-2 border-dashed border-blue-500" />
// //               )}

// //               <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xl shadow-lg">
// //                 {item.icon}
// //               </div>

// //               <div className="rounded-2xl bg-white p-6 shadow-lg">
// //                 <span className="font-bold text-blue-600">{item.id}</span>
// //                 <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
// //                 <p className="mt-2 text-gray-500">{item.desc}</p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default function Home() {
// //   return (
// //     <>
// //       <Hero />
// //       <ProcessSection />
// //     </>
// //   );
// // }


// // /* ---------------------------------------------------
// //    Floating Product Showcase (phone mockup + floating cards)
// // --------------------------------------------------- */
// // const FloatingProductShowcase = () => {
// //   return (
// //     <div className="relative w-[220px] h-[380px] sm:w-[260px] sm:h-[440px] md:w-[300px] md:h-[500px] flex items-center justify-center">
// //       {/* Phone mockup (black screen) */}
// //       <div className="relative w-full h-full bg-black rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden shadow-2xl z-10">
// //         {/* 👇 Apni website/app screenshot yahan daalein */}
// //         <img
// //           src="/your-app-screenshot.png"
// //           alt="Website preview"
// //           className="w-full h-full object-cover"
// //         />
// //       </div>

// //       {/* Top-left card */}
// //       <motion.div
// //         animate={{ y: [0, -12, 0] }}
// //         transition={{ duration: 4, repeat: Infinity }}
// //         className="absolute top-[6%] -left-[10%] sm:-left-[12%] bg-white shadow-xl rounded-2xl
// //                    w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaRocket className="text-blue-600 text-base sm:text-lg md:text-xl" />
// //       </motion.div>

// //       {/* Top-right big card */}
// //       <motion.div
// //         animate={{ y: [0, 15, 0] }}
// //         transition={{ duration: 5, repeat: Infinity }}
// //         className="absolute top-[8%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl
// //                    w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28
// //                    flex flex-col items-center justify-center gap-1 z-20"
// //       >
// //         <FaMobileAlt className="text-blue-600 text-lg sm:text-xl" />
// //         <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-700 text-center px-1">
// //           Responsive
// //         </p>
// //       </motion.div>

// //       {/* Middle-left card */}
// //       <motion.div
// //         animate={{ y: [0, -10, 0] }}
// //         transition={{ duration: 3.5, repeat: Infinity }}
// //         className="absolute top-[42%] -left-[16%] sm:-left-[18%] bg-white shadow-xl rounded-2xl
// //                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaStar className="text-yellow-400 text-sm sm:text-base md:text-lg" />
// //       </motion.div>

// //       {/* Middle-right small card */}
// //       <motion.div
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 4.5, repeat: Infinity }}
// //         className="absolute top-[48%] -right-[10%] bg-white shadow-xl rounded-2xl
// //                    w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaLock className="text-blue-600 text-xs sm:text-sm" />
// //       </motion.div>

// //       {/* Bottom-left card */}
// //       <motion.div
// //         animate={{ y: [0, -14, 0] }}
// //         transition={{ duration: 5.5, repeat: Infinity }}
// //         className="absolute bottom-[10%] -left-[12%] sm:-left-[14%] bg-white shadow-xl rounded-2xl
// //                    w-14 h-14 sm:w-16 sm:h-16
// //                    flex items-center justify-center z-20"
// //       >
// //         <FaComments className="text-blue-600 text-base sm:text-lg" />
// //       </motion.div>

// //       {/* Bottom-right card */}
// //       <motion.div
// //         animate={{ y: [0, 12, 0] }}
// //         transition={{ duration: 6, repeat: Infinity }}
// //         className="absolute bottom-[4%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl
// //                    w-16 h-16 sm:w-20 sm:h-20
// //                    flex flex-col items-center justify-center gap-1 z-20"
// //       >
// //         <FaChartLine className="text-blue-600 text-base sm:text-lg" />
// //         <p className="text-[9px] sm:text-[10px] font-semibold text-gray-700">SEO</p>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // /* ---------------------------------------------------
// //    Hero Section
// // --------------------------------------------------- */
// // const Hero = () => {
// //   return (
// //     <section className="relative overflow-hidden bg-[#f7fbff] min-h-screen flex items-center">
// //       <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-300/30 blur-[120px] rounded-full" />
// //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/30 blur-[120px] rounded-full" />

// //       <motion.div
// //         animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
// //         transition={{ duration: 8, repeat: Infinity }}
// //         className="absolute top-24 right-40 w-20 h-20 bg-blue-200 rounded-full opacity-40 hidden md:block"
// //       />

// //       <motion.div
// //         animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
// //         transition={{ duration: 10, repeat: Infinity }}
// //         className="absolute bottom-24 right-24 w-32 h-32 bg-cyan-200 rounded-full opacity-30 hidden md:block"
// //       />

//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center mt-5">
//         {/* Left column - text content */}
//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-4 mt-5 text-sm sm:text-base">
//             <FaCheckCircle />
//             Trusted Digital Agency
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-gray-900">
//             Building
//             <br />
//             <span className="text-blue-600">Modern Websites</span>
//             <br />
//             That Grow
//             <br />
//             Your Business
//           </h1>

//           <p className="text-gray-600 text-base sm:text-lg mt-6 sm:mt-8 max-w-xl leading-7 sm:leading-8">
//             AP Solutions helps startups and businesses create beautiful,
//             high-converting websites, Shopify stores, WordPress solutions, and
//             custom web applications for grow our businesses and startups with
//             premium user experiences.
//           </p>

//           <div className="flex flex-wrap gap-4 sm:gap-5 mt-8 sm:mt-10">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl text-sm sm:text-base"
//             >
//               Get Started
//               <FaArrowRight />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="border-2 border-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:border-blue-500 text-sm sm:text-base"
//             >
//               <FaPlay />
//               Watch Demo
//             </motion.button>
//           </div>

//           <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">150+</h2>
//               <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">Projects</p>
//             </div>
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">100+</h2>
//               <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">Happy Clients</p>
//             </div>
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">5+</h2>
//               <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">Years Experience</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right column - floating showcase */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="w-full flex justify-center lg:justify-end"
//         >
//           <div className="relative mt-10 sm:mt-0">
//             {/* scale/position responsively */}
//             <div className="transform scale-90 sm:scale-100 md:scale-105">
//               <FloatingProductShowcase />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };


// /* ---------------------------------------------------
//    Process Section
// --------------------------------------------------- */
// const process = [
//   {
//     id: "01",
//     title: "Choose a Service",
//     desc: "Select the service that best fits your business requirements.",
//     icon: <FaSearch />,
//   },
//   {
//     id: "02",
//     title: "Make Requirements",
//     desc: "Tell us your goals and project expectations.",
//     icon: <FaPenNib />,
//   },
//   {
//     id: "03",
//     title: "Agreement Meeting",
//     desc: "We discuss the complete roadmap and finalize everything.",
//     icon: <FaCode />,
//   },
//   {
//     id: "04",
//     title: "Final Solution",
//     desc: "We develop, test and deliver your project successfully.",
//     icon: <FaRocket />,
//   },
// ];

// const cardVariant = {
//   hidden: { opacity: 0, y: 80 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.25,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// const ProcessSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F9FF] py-16 sm:py-20 md:py-24">
//       <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-blue-200 opacity-20 blur-[120px]" />
//       <div className="absolute right-0 bottom-10 h-60 w-60 rounded-full bg-indigo-200 opacity-20 blur-[120px]" />

//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 sm:mb-20 text-center"
//         >
//           <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm sm:text-base">
//             Workflow
//           </p>
//           <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
//             Our Working Process
//           </h2>
//           <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-gray-500 text-sm sm:text-base">
//             We follow a simple and professional process that transforms your
//             ideas into powerful digital solutions.
//           </p>
//         </motion.div>

//         {/* Desktop / large screens */}
//         <div className="relative hidden lg:block">
//           <svg
//             className="absolute top-20 left-0 w-full"
//             height="160"
//             viewBox="0 0 1200 160"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M0 90 C150 10 250 150 400 80 S650 20 800 90 S1050 150 1200 60"
//               stroke="#4F46E5"
//               strokeWidth="4"
//               fill="none"
//               strokeDasharray="8 10"
//             />
//           </svg>

//           <div className="grid grid-cols-4 gap-8">
//             {process.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 custom={index}
//                 variants={cardVariant}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className={`relative ${index % 2 === 0 ? "mt-0" : "mt-24"}`}
//               >
//                 <div className="rounded-3xl bg-white p-8 shadow-xl transition">
//                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg">
//                     {item.icon}
//                   </div>
//                   <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
//                   <p className="mt-3 text-gray-500 text-sm leading-7">{item.desc}</p>
//                   <div className="mt-5 font-bold text-blue-600">{item.id}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile / tablet screens */}
//         <div className="space-y-8 sm:space-y-10 lg:hidden">
//           {process.map((item, index) => (
//             <motion.div
//               key={item.id}
//               custom={index}
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//               className="relative flex gap-4 sm:gap-5"
//             >
//               {index !== process.length - 1 && (
//                 <div className="absolute left-7 sm:left-8 top-14 sm:top-16 h-full border-l-2 border-dashed border-blue-500" />
//               )}

//               <div className="z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-lg sm:text-xl shadow-lg">
//                 {item.icon}
//               </div>

//               <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg">
//                 <span className="font-bold text-blue-600 text-sm sm:text-base">{item.id}</span>
//                 <h3 className="mt-2 text-lg sm:text-xl font-bold">{item.title}</h3>
//                 <p className="mt-2 text-gray-500 text-sm sm:text-base">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ---------------------------------------------------
//    Home Page (single default export)
// --------------------------------------------------- */
// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <ProcessSection />
//     </>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.jpg";
import WhyneedSec from "./WhyNeedSec";

import {
  FaSearch,
  FaPenNib,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaLock,
  FaComments,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ---------------------------------------------------
   Floating Product Showcase (phone mockup + floating cards)
--------------------------------------------------- */
const FloatingProductShowcase = () => {
  return (
    <div className="relative w-[220px] h-[380px] sm:w-[260px] sm:h-[440px] md:w-[300px] md:h-[500px] flex items-center justify-center mb-50 mr-5">
      {/* Phone mockup (black screen) */}
      <div className="relative w-full h-full bg-black rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden shadow-2xl z-10 object-cover">
        <img
          src={image}
          alt="Website preview"
          className="w-full h-full object-cover object-center scale-100"
        />
      </div>
      {/* Top-left card */}
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="absolute top-[6%] -left-[10%] sm:-left-[12%] z-20"
>
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="bg-white shadow-xl rounded-2xl w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
  >
    <FaRocket className="text-blue-600 text-base sm:text-lg md:text-xl" />
  </motion.div>
</motion.div>

      {/* Top-left card */}
      {/* <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[6%] -left-[10%] sm:-left-[12%] bg-white shadow-xl rounded-2xl w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center z-20"
      >
        <FaRocket className="text-blue-600 text-base sm:text-lg md:text-xl" />
      </motion.div> */}

      {/* Top-right big card */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[8%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 flex flex-col items-center justify-center gap-1 z-20"
      >
        <FaMobileAlt className="text-blue-600 text-lg sm:text-xl" />
        <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-700 text-center px-1">
          Responsive
        </p>
      </motion.div>

      {/* Middle-left card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute top-[42%] -left-[16%] sm:-left-[18%] bg-white shadow-xl rounded-2xl w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center z-20"
      >
        <FaStar className="text-yellow-400 text-sm sm:text-base md:text-lg" />
      </motion.div>

      {/* Middle-right small card */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute top-[48%] -right-[10%] bg-white shadow-xl rounded-2xl w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
      >
        <FaLock className="text-blue-600 text-xs sm:text-sm" />
      </motion.div>

      {/* Bottom-left card */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity }}
        className="absolute bottom-[10%] -left-[12%] sm:-left-[14%] bg-white shadow-xl rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center z-20"
      >
        <FaComments className="text-blue-600 text-base sm:text-lg" />
      </motion.div>

      {/* Bottom-right card */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[4%] -right-[12%] sm:-right-[14%] bg-white shadow-xl rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center gap-1 z-20"
      >
        <FaChartLine className="text-blue-600 text-base sm:text-lg" />
        <p className="text-[9px] sm:text-[10px] font-semibold text-gray-700">SEO</p>
      </motion.div>
    </div>
  );
};

/* ---------------------------------------------------
   Hero Section
--------------------------------------------------- */
const Hero = () => {
   const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] min-h-screen flex items-center">
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-300/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center mt-5">
        {/* Left column - text content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-4 mt-5 text-sm sm:text-base">
            <FaCheckCircle />
            Trusted Digital Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-gray-900">
            Building
            <br />
            <span className="text-blue-600">Modern Websites</span>
            <br />
            That Grow
            <br />
            Your Business
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mt-6 sm:mt-8 max-w-xl leading-7 sm:leading-8">
            AP Solutions helps startups and businesses create beautiful,
            high-converting websites, Shopify stores, WordPress solutions, and
            custom web applications for grow our businesses and startups with
            premium user experiences.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 mt-8 sm:mt-10">
            <motion.button
            onClick={() => navigate("/pages/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl text-sm sm:text-base"
            >
              Get Started
              <FaArrowRight />
            </motion.button>

            <motion.button
              onClick={() => navigate("/pages/Portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:border-blue-500 text-sm sm:text-base"
            >
              <FaPlay />
              Watch Demo
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">150+</h2>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">Projects</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">100+</h2>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">5+</h2>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right column - floating showcase */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="relative mt-10 sm:mt-0">
            <div className="transform scale-90 sm:scale-100 md:scale-105">
              <FloatingProductShowcase />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------
   Process Section
--------------------------------------------------- */
const process = [
  {
    id: "01",
    title: "Choose a Service",
    desc: "Select the service that best fits your business requirements.",
    icon: <FaSearch />,
  },
  {
    id: "02",
    title: "Make Requirements",
    desc: "Tell us your goals and project expectations.",
    icon: <FaPenNib />,
  },
  {
    id: "03",
    title: "Agreement Meeting",
    desc: "We discuss the complete roadmap and finalize everything.",
    icon: <FaCode />,
  },
  {
    id: "04",
    title: "Final Solution",
    desc: "We develop, test and deliver your project successfully.",
    icon: <FaRocket />,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FF] py-16 sm:py-20 md:py-24">
      <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-blue-200 opacity-20 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-60 w-60 rounded-full bg-indigo-200 opacity-20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20 text-center"
        >
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm sm:text-base">
            Workflow
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our Working Process
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-gray-500 text-sm sm:text-base">
            We follow a simple and professional process that transforms your
            ideas into powerful digital solutions.
          </p>
        </motion.div>

        {/* Desktop / large screens */}
        <div className="relative hidden lg:block">
          <svg
            className="absolute top-20 left-0 w-full"
            height="160"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            <path
              d="M0 90 C150 10 250 150 400 80 S650 20 800 90 S1050 150 1200 60"
              stroke="#4F46E5"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8 10"
            />
          </svg>

          <div className="grid grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative ${index % 2 === 0 ? "mt-0" : "mt-24"}`}
              >
                <div className="rounded-3xl bg-white p-8 shadow-xl transition">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-gray-500 text-sm leading-7">{item.desc}</p>
                  <div className="mt-5 font-bold text-blue-600">{item.id}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet screens */}
        <div className="space-y-8 sm:space-y-10 lg:hidden">
          {process.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative flex gap-4 sm:gap-5"
            >
              {index !== process.length - 1 && (
                <div className="absolute left-7 sm:left-8 top-14 sm:top-16 h-full border-l-2 border-dashed border-blue-500" />
              )}

              <div className="z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-lg sm:text-xl shadow-lg">
                {item.icon}
              </div>

              <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg">
                <span className="font-bold text-blue-600 text-sm sm:text-base">{item.id}</span>
                <h3 className="mt-2 text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------
   Home Page (single default export)
--------------------------------------------------- */
export default function Home() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <WhyneedSec />
    </>
  );
}
