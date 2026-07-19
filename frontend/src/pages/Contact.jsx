// // import React from "react";
// // import { motion } from "framer-motion";


// // // import {
// // //   Phone,
// // //   Mail,
// // //   MapPin,
// // //   Clock,
// // //   Send,
// // //   ArrowRight,
// // //   Facebook,
// // //   Instagram,
// // //   Linkedin,
// // //   Globe,
// // // } from "react-icons/fi";
// // // ✅ Sahi - generic icons lucide-react se
// // import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Globe } from "lucide-react";

// // // ✅ Sahi - social brand icons react-icons/fa se
// // import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// // const contactCards = [
// //   {
// //     icon: Phone,
// //     title: "Call Us",
// //     value: "+91 98765 43210",
// //   },
// //   {
// //     icon: Mail,
// //     title: "Email",
// //     value: "contact@apsolutions.in",
// //   },
// //   {
// //     icon: MapPin,
// //     title: "Location",
// //     value: "Faridabad, Haryana",
// //   },
// //   {
// //     icon: Clock,
// //     title: "Working Hours",
// //     value: "Mon - Sat : 9AM - 7PM",
// //   },
// // ];

// // function Contact() {
// //   return (
// //     <section className="relative overflow-hidden bg-[#08111F] text-white py-28">

// //       {/* Background */}
// //       <div className="absolute inset-0 overflow-hidden">

// //         <motion.div
// //           animate={{
// //             x: [0, 120, 0],
// //             y: [0, -120, 0],
// //           }}
// //           transition={{
// //             duration: 15,
// //             repeat: Infinity,
// //           }}
// //           className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full top-10 left-10"
// //         />

// //         <motion.div
// //           animate={{
// //             x: [0, -150, 0],
// //             y: [0, 120, 0],
// //           }}
// //           transition={{
// //             duration: 18,
// //             repeat: Infinity,
// //           }}
// //           className="absolute w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full bottom-0 right-0"
// //         />

// //       </div>

// //       <div className="relative max-w-7xl mx-auto px-6">

// //         {/* Heading */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 80 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: .7 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-20"
// //         >

// //           <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">

// //             CONTACT AP SOLUTIONS

// //           </span>

// //           <h2 className="text-5xl md:text-6xl font-black mt-8">

// //             Let's Build Something Amazing

// //           </h2>

// //           <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

// //             Need a modern website, Shopify store, WordPress website,
// //             SEO, or Digital Marketing? Let's discuss your project.

// //           </p>

// //         </motion.div>

// //         <div className="grid lg:grid-cols-2 gap-16">

// //           {/* Left */}

// //           <motion.div
// //             initial={{ opacity: 0, x: -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: .8 }}
// //             viewport={{ once: true }}
// //           >

// //             <h3 className="text-3xl font-bold mb-10">

// //               Contact Information

// //             </h3>

// //             <div className="grid gap-6">

// //               {contactCards.map((item, i) => {
// //                 const Icon = item.icon;

// //                 return (
// //                   <motion.div
// //                     whileHover={{
// //                       scale: 1.03,
// //                       x: 10,
// //                     }}
// //                     key={i}
// //                     className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition"
// //                   >

// //                     <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:rotate-12 transition">

// //                       <Icon size={28} />

// //                     </div>

// //                     <div>

// //                       <h4 className="font-bold text-xl">

// //                         {item.title}

// //                       </h4>

// //                       <p className="text-gray-400">

// //                         {item.value}

// //                       </p>

// //                     </div>

// //                   </motion.div>
// //                 );
// //               })}

// //             </div>

// //             {/* Social */}

// //             <div className="flex gap-5 mt-12">
// // {[FaFacebookF, FaInstagram, FaLinkedinIn, Globe].map((Icon, i) => (

// //                 <motion.div
// //                   whileHover={{
// //                     y: -8,
// //                     rotate: 8,
// //                   }}
// //                   key={i}
// //                   className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center border border-white/10 hover:bg-cyan-500 cursor-pointer transition"
// //                 >

// //                   <Icon />

// //                 </motion.div>

// //               ))}

// //             </div>

// //           </motion.div>

// //           {/* Form */}

// //           <motion.div
// //             initial={{ opacity: 0, x: 80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: .8 }}
// //             viewport={{ once: true }}
// //             className="relative"
// //           >

// //             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-30 rounded-3xl"></div>

// //             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

// //               <h3 className="text-3xl font-bold mb-8">

// //                 Send Message

// //               </h3>

// //               <form className="space-y-6">

// //                 <input
// //                   type="text"
// //                   placeholder="Your Name"
// //                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
// //                 />

// //                 <input
// //                   type="email"
// //                   placeholder="Email Address"
// //                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
// //                 />

// //                 <input
// //                   type="text"
// //                   placeholder="Phone Number"
// //                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
// //                 />

// //                 <input
// //                   type="text"
// //                   placeholder="Project Type"
// //                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
// //                 />

// //                 <textarea
// //                   rows="6"
// //                   placeholder="Tell us about your project..."
// //                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
// //                 ></textarea>

// //                 <motion.button
// //                   whileHover={{
// //                     scale: 1.03,
// //                   }}
// //                   whileTap={{
// //                     scale: .95,
// //                   }}
// //                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-5 rounded-xl font-bold flex justify-center items-center gap-3 hover:shadow-[0_0_40px_rgba(0,255,255,.4)] transition"
// //                 >

// //                   Send Message

// //                   <Send size={20} />

// //                 </motion.button>

// //               </form>

// //             </div>

// //           </motion.div>

// //         </div>

// //         {/* Bottom CTA */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 70 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: .8 }}
// //           viewport={{ once: true }}
// //           className="mt-28 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 flex flex-col lg:flex-row justify-between items-center gap-8"
// //         >

// //           <div>

// //             <h2 className="text-4xl font-black">

// //               Ready To Grow Your Business?

// //             </h2>

// //             <p className="text-lg mt-4 text-white/90">

// //               AP SOLUTIONS creates high-performing websites,
// //               eCommerce stores, and digital marketing solutions
// //               that help businesses grow online.

// //             </p>

// //           </div>

// //           <motion.button
// //             whileHover={{
// //               x: 8,
// //             }}
// //             className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center gap-3"
// //           >

// //             Start Your Project

// //             <ArrowRight />

// //           </motion.button>

// //         </motion.div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Contact;
// import React from "react";
// import { motion } from "framer-motion";

// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   ArrowRight,
//   Globe,
// } from "lucide-react";

// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const contactCards = [
//   {
//     icon: Phone,
//     title: "Call Us",
//     value: "+91 98765 43210",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     value: "contact@apsolutions.in",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Faridabad, Haryana",
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     value: "Mon - Sat : 9AM - 7PM",
//   },
// ];

// function Contactus() {
//   return (
//     <section className="relative overflow-hidden bg-[#08111F] text-white py-28">

//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden">

//         <motion.div
//           animate={{
//             x: [0, 120, 0],
//             y: [0, -120, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//           }}
//           className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full top-10 left-10"
//         />

//         <motion.div
//           animate={{
//             x: [0, -150, 0],
//             y: [0, 120, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//           }}
//           className="absolute w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full bottom-0 right-0"
//         />

//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: .7 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >

//           <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">

//             CONTACT AP SOLUTIONS

//           </span>

//           <h2 className="text-5xl md:text-6xl font-black mt-8">

//             Let's Build Something Amazing

//           </h2>

//           <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

//             Need a modern website, Shopify store, WordPress website,
//             SEO, or Digital Marketing? Let's discuss your project.

//           </p>

//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16">

//           {/* Left */}

//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//             viewport={{ once: true }}
//           >

//             <h3 className="text-3xl font-bold mb-10">

//               Contact Information

//             </h3>

//             <div className="grid gap-6">

//               {contactCards.map((item, i) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     whileHover={{
//                       scale: 1.03,
//                       x: 10,
//                     }}
//                     key={i}
//                     className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition"
//                   >

//                     <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:rotate-12 transition">

//                       <Icon size={28} />

//                     </div>

//                     <div>

//                       <h4 className="font-bold text-xl">

//                         {item.title}

//                       </h4>

//                       <p className="text-gray-400">

//                         {item.value}

//                       </p>

//                     </div>

//                   </motion.div>
//                 );
//               })}

//             </div>

//           </motion.div>

//           {/* Form */}

//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//             viewport={{ once: true }}
//             className="relative w-full max-w-xl mx-auto"
//           >

//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-30 rounded-3xl"></div>

//             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

//               <h3 className="text-3xl font-bold mb-8">

//                 Send Message

//               </h3>

//               <form className="space-y-6">

//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Project Type"
//                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 />

//                 <textarea
//                   rows="6"
//                   placeholder="Tell us about your project..."
//                   className="w-full bg-[#101D30] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 ></textarea>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.03,
//                   }}
//                   whileTap={{
//                     scale: .95,
//                   }}
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-5 rounded-xl font-bold flex justify-center items-center gap-3 hover:shadow-[0_0_40px_rgba(0,255,255,.4)] transition"
//                 >

//                   Send Message

//                   <Send size={20} />

//                 </motion.button>

//               </form>

//             </div>

//           </motion.div>

//         </div>

//         {/* Social Icons Row - below form, centered, responsive */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: .8 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-5 mt-16"
//         >

//           {[FaFacebookF, FaInstagram, FaLinkedinIn, Globe].map((Icon, i) => (

//             <motion.div
//               whileHover={{
//                 y: -8,
//                 rotate: 8,
//               }}
//               key={i}
//               className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center border border-white/10 hover:bg-cyan-500 cursor-pointer transition"
//             >

//               <Icon />

//             </motion.div>

//           ))}

//         </motion.div>

//         {/* Bottom CTA */}

//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: .8 }}
//           viewport={{ once: true }}
//           className="mt-28 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 flex flex-col lg:flex-row justify-between items-center gap-8"
//         >

//           <div>

//             <h2 className="text-4xl font-black">

//               Ready To Grow Your Business?

//             </h2>

//             <p className="text-lg mt-4 text-white/90">

//               AP SOLUTIONS creates high-performing websites,
//               eCommerce stores, and digital marketing solutions
//               that help businesses grow online.

//             </p>

//           </div>

//           <motion.button
//             whileHover={{
//               x: 8,
//             }}
//             className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center gap-3"
//           >

//             Start Your Project

//             <ArrowRight />

//           </motion.button>

//         </motion.div>

//       </div>

//     </section>
//   );
// }

// export default Contactus;
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   ArrowRight,
//   Globe,
// } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const contactCards = [
//   {
//     icon: Phone,
//     title: "Call Us",
//     value: "+91 98765 43210",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     value: "contact@apsolutions.in",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Faridabad, Haryana",
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     value: "Mon - Sat : 9AM - 7PM",
//   },
// ];

// function Contactus() {
//   return (
//     <section className="relative overflow-hidden bg-[#f7fbff] text-black py-20 md:py-28">
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             x: [0, 120, 0],
//             y: [0, -120, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//           }}
//           className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-10"
//         />
//         <motion.div
//           animate={{
//             x: [0, -150, 0],
//             y: [0, 120, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//           }}
//           className="absolute w-96 h-96 bg-[#f7fbff] rounded-full bottom-0 right-0"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 md:mb-20"
//         >
//           <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-black-400 border border-cyan-500/30">
//             CONTACT AP SOLUTIONS
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mt-8">
//             Let's Build Something Amazing
//           </h2>
//           <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-base md:text-lg">
//             Need a modern website, Shopify store, WordPress website, SEO, or Digital Marketing? Let's discuss your project.
//           </p>
//         </motion.div>

//         <div className="flex flex-col items-center gap-12">
//           {/* Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative w-full max-w-2xl mx-auto order-1"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-30 rounded-3xl"></div>
//             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
//                 Send Message
//               </h3>

//               <form className="space-y-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Project Type"
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                 </div>

//                 <textarea
//                   rows="6"
//                   placeholder="Tell us about your project..."
//                   className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 ></textarea>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.03,
//                   }}
//                   whileTap={{
//                     scale: 0.95,
//                   }}
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 sm:py-5 rounded-xl font-bold flex justify-center items-center gap-3 hover:shadow-[0_0_40px_rgba(0,255,255,.4)] transition"
//                 >
//                   Send Message
//                   <Send size={20} />
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full order-2"
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
//               Contact Information
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {contactCards.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     whileHover={{
//                       scale: 1.03,
//                       x: 6,
//                     }}
//                     key={i}
//                     className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition"
//                   >
//                     <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:rotate-12 transition">
//                       <Icon size={26} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl">
//                         {item.title}
//                       </h4>
//                       <p className="text-gray-400 text-sm sm:text-base">
//                         {item.value}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Social Icons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-5 order-3"
//           >
//             {[FaFacebookF, FaInstagram, FaLinkedinIn, Globe].map((Icon, i) => (
//               <motion.div
//                 whileHover={{
//                   y: -8,
//                   rotate: 8,
//                 }}
//                 key={i}
//                 className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center border border-white/10 hover:bg-cyan-500 cursor-pointer transition"
//               >
//                 <Icon />
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full order-4 mt-8 md:mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] md:rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8"
//           >
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center lg:text-left">
//                 Ready To Grow Your Business?
//               </h2>
//               <p className="text-base md:text-lg mt-4 text-white/90 text-center lg:text-left">
//                 AP SOLUTIONS creates high-performing websites, eCommerce stores, and digital marketing solutions that help businesses grow online.
//               </p>
//             </div>

//             <motion.button
//               whileHover={{
//                 x: 8,
//               }}
//               className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold flex items-center gap-3"
//             >
//               Start Your Project
//               <ArrowRight />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contactus;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   ArrowRight,
//   Globe,
// } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";

// const contactCards = [
// //   { icon: FaWhatsapp, title: "whats app", value: "7398696706" },
// //   { icon: Mail, title: "Email", value: "mohan0998pal@gmail.com" },
// //   { icon: MapPin, title: "Location", value: "Faridabad, Haryana" },
// //   { icon: Clock, title: "Working Hours", value: "Mon - Sat : 9AM - 7PM" },
// // ];
//  { icon: FaEnvelope, link: "mailto:mohan0998pal@gmail.com", type: "mail" },
//  { icon: FaWhatsapp, link: "https://wa.me/7398696706", type: "whatsapp" },
//  { icon: FaMapMarkerAlt, link: "https://maps.google.com/?q=Your+Location", type: "location" },
//   ].map((item, i) => (
//     <motion.div
//       whileHover={{ y: -8, rotate: 8 }}
//       key={i}
//       onClick={() => window.open(item.link, "_blank")}
//       className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center border border-white/10 hover:bg-cyan-500 cursor-pointer transition"
//     >
//       <item.icon />
//     </motion.div>
//     ));
// function Contactus() {
//   // ✅ NAYA: form data track karne ke liye state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ NAYA: input change hone par state update karna
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ NAYA: form submit karke backend ko data bhejna
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");
//     try {
//       const res = await fetch("http://localhost:5000/api/Contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#f7fbff] text-black py-20 md:py-28">
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
//           transition={{ duration: 15, repeat: Infinity }}
//           className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-10"
//         />
//         <motion.div
//           animate={{ x: [0, -150, 0], y: [0, 120, 0] }}
//           transition={{ duration: 18, repeat: Infinity }}
//           className="absolute w-96 h-96 bg-[#f7fbff] rounded-full bottom-0 right-0"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 md:mb-20"
//         >
//           <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-black-400 border border-cyan-500/30">
//             CONTACT AP SOLUTIONS
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mt-8">
//             Let's Build Something Amazing
//           </h2>
//           <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-base md:text-lg">
//             Need a modern website, Shopify store, WordPress website, SEO, or Digital Marketing? Let's discuss your project.
//           </p>
//         </motion.div>

//         <div className="flex flex-col items-center gap-12">
//           {/* Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative w-full max-w-2xl mx-auto order-1"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-30 rounded-3xl"></div>
//             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
//                 Send Message
//               </h3>

//               {/* ✅ NAYA: onSubmit handler add kiya */}
//               <form className="space-y-5" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <input
//                     type="text"
//                     name="name"                      /* ✅ NAYA */
//                     value={formData.name}             /* ✅ NAYA */
//                     onChange={handleChange}           /* ✅ NAYA */
//                     placeholder="Your Name"
//                     required
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                   <input
//                     type="email"
//                     name="email"                      /* ✅ NAYA */
//                     value={formData.email}            /* ✅ NAYA */
//                     onChange={handleChange}           /* ✅ NAYA */
//                     placeholder="Email Address"
//                     required
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <input
//                     type="text"
//                     name="phone"                      /* ✅ NAYA */
//                     value={formData.phone}            /* ✅ NAYA */
//                     onChange={handleChange}           /* ✅ NAYA */
//                     placeholder="Phone Number"
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                   <input
//                     type="text"
//                     name="projectType"                /* ✅ NAYA */
//                     value={formData.projectType}      /* ✅ NAYA */
//                     onChange={handleChange}           /* ✅ NAYA */
//                     placeholder="Project Type"
//                     className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                   />
//                 </div>

//                 <textarea
//                   rows="6"
//                   name="message"                      /* ✅ NAYA */
//                   value={formData.message}            /* ✅ NAYA */
//                   onChange={handleChange}             /* ✅ NAYA */
//                   placeholder="Tell us about your project..."
//                   required
//                   className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
//                 ></textarea>

//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"                       /* ✅ NAYA */
//                   disabled={loading}                  /* ✅ NAYA */
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 sm:py-5 rounded-xl font-bold flex justify-center items-center gap-3 hover:shadow-[0_0_40px_rgba(0,255,255,.4)] transition disabled:opacity-60"
//                 >
//                   {loading ? "Sending..." : "Send Message"}
//                   <Send size={20} />
//                 </motion.button>

//                 {/* ✅ NAYA: success/error message */}
//                 {status === "success" && (
//                   <p className="text-green-500 text-center font-medium">
//                     Message sent successfully! We'll get back to you soon.
//                   </p>
//                 )}
//                 {status === "error" && (
//                   <p className="text-red-500 text-center font-medium">
//                     Something went wrong. Please try again.
//                   </p>
//                 )}
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full order-2"
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
//               Contact Information
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {contactCards.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     whileHover={{ scale: 1.03, x: 6 }}
//                     key={i}
//                     className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition"
//                   >
//                     <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:rotate-12 transition">
//                       <Icon size={26} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl">{item.title}</h4>
//                       <p className="text-gray-400 text-sm sm:text-base">{item.value}</p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Social Icons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-5 order-3"
//           >
//             {[FaFacebookF, FaInstagram, FaLinkedinIn, Globe].map((Icon, i) => (
//               <motion.div
//                 whileHover={{ y: -8, rotate: 8 }}
//                 key={i}
//                 className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center border border-white/10 hover:bg-cyan-500 cursor-pointer transition"
//               >
//                 <Icon />
//               </motion.div>
//             ))}
//           </motion.div>
//           {/* Social Icons */}


//           {/* Bottom CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full order-4 mt-8 md:mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] md:rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8"
//           >
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center lg:text-left">
//                 Ready To Grow Your Business?
//               </h2>
//               <p className="text-base md:text-lg mt-4 text-white/90 text-center lg:text-left">
//                 AP SOLUTIONS creates high-performing websites, eCommerce stores, and digital marketing solutions that help businesses grow online.
//               </p>
//             </div>
//             <motion.button whileHover={{ x: 8 }} className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold flex items-center gap-3">
//               Start Your Project
//               <ArrowRight />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contactus;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Send, ArrowRight, Globe } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// ✅ FIX: contactCards ab ek proper array of objects hai (pehle isme .map()
// seedha const declaration ke andar chal raha tha, jo JSX return karta tha
// data objects ki jagah — isi wajah se item.icon/title/value undefined aa rahe the)
const contactCards = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "mohan0998pal@gmail.com",
    link: "mailto:mohan0998pal@gmail.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "7398696706",
    link: "https://wa.me/917398696706",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Faridabad, Haryana",
    link: "https://maps.google.com/?q=Your+Location",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat : 9AM - 7PM",
    link: null,
  },
];

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus("");
  //   try {
  //     const res = await fetch("http://localhost:5000/api/Contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //       setStatus("success");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         projectType: "",
  //         message: "",
  //       });
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch (err) {
  //     setStatus("error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] text-black py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-10"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 120, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute w-96 h-96 bg-[#f7fbff] rounded-full bottom-0 right-0"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-black-400 border border-cyan-500/30 mt-10">
            CONTACT AP SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mt-8">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-base md:text-lg">
            Need a modern website, Shopify store, WordPress website, SEO, or
            Digital Marketing? Let's discuss your project.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full max-w-2xl mx-auto order-1"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-30 rounded-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Send Message
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
                  />
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Project Type"
                    className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
                  />
                </div>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full bg-[#f7fbff] border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-400"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 sm:py-5 rounded-xl font-bold flex justify-center items-center gap-3 hover:shadow-[0_0_40px_rgba(0,255,255,.4)] transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={20} />
                </motion.button>

                {status === "success" && (
                  <p className="text-green-500 text-center font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactCards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    whileHover={{ scale: 1.03, x: 6 }}
                    key={i}
                    onClick={() => item.link && window.open(item.link, "_blank")}
                    className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition ${
                      item.link ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:rotate-12 transition">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-5 order-3"
          >
            {[FaFacebookF, FaInstagram, FaLinkedinIn, Globe].map((Icon, i) => (
              <motion.div
                whileHover={{ y: -8, rotate: 8 }}
                key={i}
                className="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center border border-white/10 hover:bg-cyan-500 cursor-pointer transition"
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full order-4 mt-8 md:mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] md:rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center lg:text-left">
                Ready To Grow Your Business?
              </h2>
              <p className="text-base md:text-lg mt-4 text-white/90 text-center lg:text-left">
                AP SOLUTIONS creates high-performing websites, eCommerce
                stores, and digital marketing solutions that help businesses
                grow online.
              </p>
            </div>
            <motion.button
              whileHover={{ x: 8 }}
              className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold flex items-center gap-3"
            >
              Start Your Project
              <ArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;