import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaWordpress,
  FaShopify,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const technologies = [
  {
    title: "Custom React Development",
    icon: <FaReact />,
    color: "text-cyan-400",
    desc: "High-performance, responsive and scalable websites built with modern React architecture.",
  },
  {
    title: "WordPress Development",
    icon: <FaWordpress />,
    color: "text-blue-500",
    desc: "Professional business websites, blogs, portfolios and CMS powered by WordPress.",
  },
  {
    title: "Shopify Store",
    icon: <FaShopify />,
    color: "text-green-500",
    desc: "Custom Shopify stores optimized for conversions, speed and seamless shopping experience.",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    desc: "Pixel-perfect UI with responsive layouts and modern utility-first styling.",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    desc: "Interactive web applications with clean and optimized JavaScript.",
  },
  {
    title: "Node & Express",
    icon: <FaNodeJs />,
    color: "text-green-400",
    desc: "Powerful backend APIs and scalable server-side applications.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
    desc: "Secure cloud database solutions for dynamic web applications.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <SiExpress />,
    color: "text-orange-400",
    desc: "Complete online store development with payment gateways and inventory management.",
  },
];

const TechStack = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-blue-500 uppercase tracking-[5px] font-semibold">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-black mt-4">
            Technologies
            <span className="text-blue-500"> We Use</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">
            We build lightning-fast websites and powerful e-commerce solutions
            using modern technologies that deliver exceptional user experiences
            and long-term business growth.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {technologies.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-blue-300/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400"
            >

              <div
                className={`text-6xl ${item.color} transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

              <div className="mt-8 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TechStack;