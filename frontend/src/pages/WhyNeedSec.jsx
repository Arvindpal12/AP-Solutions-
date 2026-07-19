  // import React from "react";
  // import { useNavigate } from "react-router-dom";
  // import { motion } from "framer-motion";

  // import {
  //   Globe,
  //   TrendingUp,
  //   Smartphone,
  //   ShieldCheck,
  //   Clock,
  //   Users,
  // } from "lucide-react";

  // const cards = [
  //   {
  //     icon: Globe,
  //     title: "Build Your Online Presence",
  //     desc: "Your website works 24/7, helping customers discover your business anytime, anywhere.",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Increase Sales",
  //     desc: "Convert visitors into customers with a modern website optimized for conversions.",
  //   },
  //   {
  //     icon: Smartphone,
  //     title: "Responsive Design",
  //     desc: "Reach users across desktop, tablet and mobile with a seamless experience.",
  //   },
  //   {
  //     icon: ShieldCheck,
  //     title: "Build Trust",
  //     desc: "A professional website instantly increases your brand's credibility.",
  //   },
  //   {
  //     icon: Clock,
  //     title: "Always Available",
  //     desc: "Unlike a physical office, your website never closes and keeps generating leads.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Reach More Customers",
  //     desc: "Expand beyond your local area and attract clients from anywhere in the world.",
  //   },
  // ];

  // export default function WhyWebsite() {
  //   const navigate = useNavigate();

  //   return (
  //     <section className="relative overflow-hidden bg-[#f7fbff] py-24 px-6">
  //       {/* Background Glow */}
  //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-300/30 blur-[120px]" />

  //       <div className="relative max-w-7xl mx-auto">

  //         {/* Heading */}

  //         <motion.div
  //           initial={{ opacity: 0, y: 70 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: .7 }}
  //           viewport={{ once: true }}
  //           className="text-center"
  //         >
  //           <span className="text-blue-500 font-semibold uppercase tracking-[5px]">
  //             Why Website?
  //           </span>

  //           <h2 className="text-4xl md:text-6xl font-bold text-black mt-4 leading-tight">
  //             Why Every Business
  //             <span className="text-blue-500"> Needs A Website</span>
  //           </h2>

  //           <p className="text-black-400 mt-6 max-w-3xl mx-auto text-lg">
  //             A website is more than just an online presence. It's your digital
  //             office, your best salesperson, and the fastest way to grow your
  //             business.
  //           </p>
  //         </motion.div>

  //         {/* Cards */}

  //         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

  //           {cards.map((card, index) => {

  //             const Icon = card.icon;

  //             return (

  //               <motion.div
  //                 key={index}
  //                 initial={{ opacity:0, y:80 }}
  //                 whileInView={{ opacity:1, y:0 }}
  //                 transition={{
  //                   duration:.6,
  //                   delay:index * .15,
  //                 }}
  //                 viewport={{ once:true }}
  //                 // whileHover={{
  //                 //   y:-12,
  //                 //   scale:1.03,
  //                 // }}
  //                 whileHover={{
  //   y: -12,
  //   scale: 1.03,
  // }}
  // whileTap={{
  //   y: -12,
  //   scale: 1.03,
  // }}
  //                 className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden"
  //               >

  //                 {/* Glow */}

  //                 {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10"/> */}
  //               <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 group-hover:rotate-12 transition"/>

  //                 <div className="relative z-10">

  //                   <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 group-hover:rotate-12 transition">

  //                     <Icon className="text-blue-500" size={34}/>
  //                   </div>

  //                   <h3 className="text-2xl font-bold text-blue mb-4">
  //                     {card.title}
  //                   </h3>

  //                   <p className="text-black-400 leading-8">
  //                     {card.desc}
  //                   </p>

  //                 </div>

  //               </motion.div>

  //             )

  //           })}

  //         </div>

  //         {/* Bottom CTA */}

  //         <motion.div
  //           initial={{ opacity:0, y:70 }}
  //           whileInView={{ opacity:1, y:0 }}
  //           transition={{ duration:.8 }}
  //           viewport={{ once:true }}
  //           className="mt-24"
  //         >

  //           <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 backdrop-blur-xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

  //             <div>

  //               <h2 className="text-blue text-4xl font-bold">
  //                 Ready to Grow Your Business?
  //               </h2>

  //               <p className="text-black-400 mt-4 max-w-xl">
  //                 Let's build a high-performing website that attracts customers,
  //                 increases sales and grows your brand online.
  //               </p>

  //             </div>

  //             <motion.button
  //             onClick={() => navigate("/pages/contact")}
  //               whileHover={{
  //                 scale:1.05
  //               }}
  //               whileTap={{
  //                 scale:.95
  //               }}
  //               className="px-10 py-5 rounded-full bg-blue-600 text-white font-semibold shadow-xl hover:bg-blue-500 transition"
  //             >
  //               Let's Build Your Website
  //             </motion.button>

  //           </div>

  //         </motion.div>

  //       </div>
  //     </section>
  //   );
  // }

  import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Globe,
  TrendingUp,
  Smartphone,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Build Your Online Presence",
    desc: "Your website works 24/7, helping customers discover your business anytime, anywhere.",
  },
  {
    icon: TrendingUp,
    title: "Increase Sales",
    desc: "Convert visitors into customers with a modern website optimized for conversions.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Reach users across desktop, tablet and mobile with a seamless experience.",
  },
  {
    icon: ShieldCheck,
    title: "Build Trust",
    desc: "A professional website instantly increases your brand's credibility.",
  },
  {
    icon: Clock,
    title: "Always Available",
    desc: "Unlike a physical office, your website never closes and keeps generating leads.",
  },
  {
    icon: Users,
    title: "Reach More Customers",
    desc: "Expand beyond your local area and attract clients from anywhere in the world.",
  },
];

export default function WhyWebsite() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-24 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-300/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-blue-500 font-semibold uppercase tracking-[5px]">
            Why Website?
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-black mt-4 leading-tight">
            Why Every Business
            <span className="text-blue-500"> Needs A Website</span>
          </h2>

          <p className="text-black-400 mt-6 max-w-3xl mx-auto text-lg">
            A website is more than just an online presence. It's your digital
            office, your best salesperson, and the fastest way to grow your
            business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                whileTap={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden active:scale-[1.03] active:-translate-y-3 transition-transform duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 group-hover:rotate-12 group-active:rotate-12 transition-transform duration-300">
                    <Icon className="text-blue-500" size={34} />
                  </div>

                  <h3 className="text-2xl font-bold text-blue mb-4">
                    {card.title}
                  </h3>

                  <p className="text-black-400 leading-8">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 backdrop-blur-xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-blue text-4xl font-bold">
                Ready to Grow Your Business?
              </h2>
              <p className="text-black-400 mt-4 max-w-xl">
                Let's build a high-performing website that attracts customers,
                increases sales and grows your brand online.
              </p>
            </div>

            <motion.button
              onClick={() => navigate("/pages/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-blue-600 text-white font-semibold shadow-xl hover:bg-blue-500 transition"
            >
              Let's Build Your Website
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}