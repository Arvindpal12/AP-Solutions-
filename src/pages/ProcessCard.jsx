import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  PenTool,
  Code2,
  PackageSearch,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Compass,
    title: "Discovery & strategy",
    description:
      "We map your goals, audience, and competitors to define what the site needs to do before a single pixel is drawn.",
    tags: ["Research", "Sitemap", "Goals"],
  },
  {
    id: "02",
    icon: PenTool,
    title: "Wireframes & design",
    description:
      "Layouts, brand system, and UI screens come together in Figma — approved by you before development starts.",
    tags: ["UX", "UI", "Prototype"],
  },
  {
    id: "03",
    icon: Code2,
    title: "Development & build",
    description:
      "Hand-coded or platform-built (Shopify, WordPress, custom stack) — fast, responsive, and true to the design.",
    tags: ["Frontend", "Backend", "CMS"],
  },
  {
    id: "04",
    icon: PackageSearch,
    title: "Content, products & SEO",
    description:
      "Copy, images, and product catalogs go in. On-page SEO and technical foundations are set from day one.",
    tags: ["Copy", "Catalog", "SEO"],
  },
  {
    id: "05",
    icon: ShieldCheck,
    title: "Testing & QA",
    description:
      "Cross-browser checks, speed audits, checkout tests, and mobile passes — nothing ships with rough edges.",
    tags: ["QA", "Performance", "Devices"],
  },
  {
    id: "06",
    icon: Rocket,
    title: "Launch & grow",
    description:
      "We go live, connect analytics, and hand off — or keep running ads and SEO to bring in the first customers.",
    tags: ["Launch", "Analytics", "Ads"],
  },
];

const cardVariants = {
  offscreen: (fromLeft) => ({
    opacity: 0,
    x: fromLeft ? -40 : 40,
    y: 20,
  }),
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function StepCard({ step, index }) {
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start md:items-center gap-6 md:gap-0">
      {/* mobile / left rail marker */}
      <div className="flex md:hidden flex-col items-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.12 }}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-400 bg-white text-blue-600 shadow-sm"
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </motion.div>
      </div>

      {/* desktop grid: left content | center rail | right content */}
      <div className="hidden md:grid w-full grid-cols-[1fr_64px_1fr] items-center">
        <div className={isEven ? "flex justify-end pr-10" : ""}>
          {isEven && (
            <StepContent step={step} index={index} fromLeft align="right" />
          )}
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
            className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-blue-400 bg-white text-blue-600 shadow-md"
          >
            <Icon className="h-6 w-6" strokeWidth={1.8} />
            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 font-mono text-[10px] font-bold text-white">
              {step.id}
            </span>
          </motion.div>
        </div>

        <div className={!isEven ? "flex justify-start pl-10" : ""}>
          {!isEven && (
            <StepContent step={step} index={index} fromLeft={false} align="left" />
          )}
        </div>
      </div>

      {/* mobile content */}
      <div className="md:hidden flex-1 pb-2">
        <StepContent step={step} index={index} fromLeft align="left" mobile />
      </div>
    </div>
  );
}

function StepContent({ step, fromLeft, align, mobile }) {
  return (
    <motion.div
      custom={fromLeft}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={mobile ? undefined : cardVariants}
      whileHover="hover"
      className={`group relative w-full ${mobile ? "" : "max-w-md"}`}
    >
      <motion.div
        variants={{
          hover: {
            y: -6,
            boxShadow:
              "0 18px 36px -14px rgba(59,91,219,0.35), 0 0 0 1px rgba(59,91,219,0.35)",
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 sm:p-6 shadow-sm transition-colors duration-300 group-hover:border-blue-300"
      >
        <motion.div
          aria-hidden="true"
          variants={{
            hover: { x: "160%", transition: { duration: 0.8, ease: "easeInOut" } },
          }}
          initial={{ x: "-60%" }}
          className="pointer-events-none absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-blue-100/60 to-transparent"
        />

        <div className={`flex items-center gap-2 ${align === "right" ? "md:justify-end" : ""}`}>
          <span className="md:hidden font-mono text-xs tracking-widest text-blue-500">
            {step.id}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
            Step {step.id}
          </span>
        </div>

        <h3 className="relative mt-2 text-lg font-bold text-slate-900 tracking-tight">
          {step.title}
        </h3>

        <p className="relative mt-2 text-[15px] leading-relaxed text-slate-500">
          {step.description}
        </p>

        <div className={`relative mt-4 flex flex-wrap gap-2 ${align === "right" ? "md:justify-end" : ""}`}>
          {step.tags.map((tag, i) => (
            <motion.span
              key={tag}
              variants={{
                hover: {
                  y: -3,
                  borderColor: "rgb(96,165,250)",
                  color: "rgb(37,99,235)",
                  backgroundColor: "rgb(239,246,255)",
                  transition: { delay: i * 0.05, duration: 0.25 },
                },
              }}
              className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] tracking-wide text-slate-500"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#eef1fc] to-[#e9edfb] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            How we build it
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Six steps, one straight line from idea to a live website or store
            taking orders.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* center connecting line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300/70">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-blue-400 to-blue-500"
            />
          </div>

          {/* left rail line - mobile */}
          <div className="md:hidden absolute left-6 top-0 h-full w-px -translate-x-1/2 bg-slate-300/70">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-blue-400 to-blue-500"
            />
          </div>

          <div className="flex flex-col gap-10 md:gap-4">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}