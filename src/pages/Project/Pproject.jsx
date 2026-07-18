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

// const services = [
//   {
//     id: "SVC-01",
//     icon: Code2,
//     title: "Custom Web Development",
//     description:
//       "Hand-built with real code, not templates. Fast, scalable sites engineered exactly to your spec.",
//     tags: ["React", "Node.js", "Next.js"],
//     featured: false,
//   },
//   {
//     id: "SVC-02",
//     icon: User,
//     title: "Portfolio Websites",
//     description:
//       "Clean, personal sites that put your work front and center — built to make the right first impression.",
//     tags: ["Design", "Animation", "Framer"],
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
//   hidden: { opacity: 0, y: 60, scale: 0.95 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   }),
// };

// function ServiceCard({ service, index }) {
//   const Icon = service.icon;

//   return (
//     <motion.div
//       custom={index}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       variants={cardVariants}
//       whileHover={{ scale: 1.04, y: -12 }}
//       className="group relative"
//     >
//       {/* Background Glow */}
//       <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

//       {/* Corner Decorations */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//         className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-blue-400 rounded-tl-xl z-10"
//       />
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//         className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-blue-400 rounded-br-xl z-10"
//       />

//       <motion.div
//         whileHover={{
//           boxShadow: "0 30px 60px -15px rgba(59, 130, 246, 0.4)",
//         }}
//         className={`relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg border transition-all duration-500
//           ${service.featured 
//             ? "border-blue-400 ring-2 ring-blue-200/60" 
//             : "border-slate-200 hover:border-blue-300"
//           }`}
//       >
//         {/* Moving Sheen Effect */}
//         <motion.div
//           initial={{ x: "-100%" }}
//           whileHover={{ x: "200%" }}
//           transition={{ duration: 1.1, ease: "easeInOut" }}
//           className="absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 pointer-events-none"
//         />

//         {/* Floating Icon Container */}
//         <motion.div
//           whileHover={{
//             rotate: [0, -12, 12, -8, 0],
//             scale: 1.15,
//           }}
//           transition={{ duration: 0.6 }}
//           className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all
//             ${service.featured 
//               ? "bg-blue-50 border-2 border-blue-400" 
//               : "bg-slate-50 group-hover:bg-blue-50 border border-slate-200 group-hover:border-blue-300"
//             }`}
//         >
//           <Icon className="h-9 w-9 text-blue-600" strokeWidth={1.6} />
//         </motion.div>

//         {/* Service ID */}
//         <div className="flex items-center gap-3 mb-4">
//           <span className="font-mono text-xs tracking-[3px] text-slate-400 font-medium">
//             {service.id}
//           </span>
//           <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
//         </div>

//         <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3">
//           {service.title}
//         </h3>

//         <p className="text-slate-600 leading-relaxed mb-6">
//           {service.description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {service.tags.map((tag, i) => (
//             <motion.span
//               key={tag}
//               whileHover={{ scale: 1.1, y: -2 }}
//               className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
//             >
//               {tag}
//             </motion.span>
//           ))}
//         </div>

//         {/* Featured Badge */}
//         {service.featured && (
//           <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold tracking-wider rounded-full shadow-lg">
//             MOST POPULAR
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function ServicesSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#e9edfb] to-[#f0f4ff] py-20 sm:py-28">
//       {/* Background Decorative Elements */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//         className="absolute top-20 -left-20 w-96 h-96 border border-blue-200/30 rounded-full"
//       />
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-10 -right-20 w-[500px] h-[500px] border border-purple-200/20 rounded-full"
//       />

//       <div className="mx-auto max-w-6xl px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-slate-900 mb-4">
//             What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build</span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-slate-600">
//             Six powerful services. One mission — help your business grow faster with beautiful, high-performing digital experiences.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
import {
  Code2,
  Globe,
  ShoppingBag,
  ArrowUpRight,
  LayoutDashboard,
  Building2,
  UtensilsCrossed,
  HeartHandshake,
  Shirt,
  Cpu,
  PackageOpen,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data — replace the `url` fields with your real project links      */
/* ------------------------------------------------------------------ */

const customProjects = [
  {
    id: "CODE-01",
    icon: LayoutDashboard,
    title: "FinTech Analytics Dashboard",
    description:
      "A real-time data dashboard for a fintech client — custom charting engine, role-based access, and sub-200ms query response.",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "https://example.com/projects/fintech-dashboard",
  },
  {
    id: "CODE-02",
    icon: Code2,
    title: "SaaS Booking Platform",
    description:
      "Multi-tenant scheduling SaaS built from the ground up — Stripe billing, calendar sync, and a public API for partners.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    url: "https://example.com/projects/saas-booking-platform",
  },
  {
    id: "CODE-03",
    icon: Building2,
    title: "Real Estate Marketplace",
    description:
      "A high-traffic property marketplace with map-based search, saved listings, and an agent CRM built into the same codebase.",
    tags: ["React", "Node.js", "Mapbox"],
    url: "https://example.com/projects/real-estate-marketplace",
  },
];

const wordpressProjects = [
  {
    id: "WP-01",
    icon: Globe,
    title: "Corporate Site Redesign",
    description:
      "A full brand-to-web overhaul for a professional services firm — editable by their marketing team, no developer required.",
    tags: ["WordPress", "Elementor", "ACF"],
    url: "https://example.com/projects/corporate-redesign",
  },
  {
    id: "WP-02",
    icon: UtensilsCrossed,
    title: "Restaurant Booking Site",
    description:
      "A reservations-first restaurant site with live table availability, menu management, and location-based landing pages.",
    tags: ["WordPress", "WooCommerce", "Custom Plugin"],
    url: "https://example.com/projects/restaurant-booking",
  },
  {
    id: "WP-03",
    icon: HeartHandshake,
    title: "Nonprofit Donation Portal",
    description:
      "A donation-driven nonprofit site with recurring giving, campaign pages, and full accessibility compliance.",
    tags: ["WordPress", "Give", "Accessibility"],
    url: "https://example.com/projects/nonprofit-portal",
  },
];

const shopifyProjects = [
  {
    id: "SHOP-01",
    icon: Shirt,
    title: "Fashion Boutique Store",
    description:
      "A conversion-focused fashion storefront with a custom filtering system, lookbook sections, and a sub-2s load time.",
    tags: ["Shopify", "Liquid", "Custom Theme"],
    url: "https://example.com/projects/fashion-boutique",
  },
  {
    id: "SHOP-02",
    icon: Cpu,
    title: "Electronics & Gadgets Store",
    description:
      "A spec-heavy electronics store with comparison tables, dynamic bundles, and integrated review syndication.",
    tags: ["Shopify", "Apps", "Metafields"],
    url: "https://example.com/projects/electronics-store",
  },
  {
    id: "SHOP-03",
    icon: PackageOpen,
    title: "Subscription Box Store",
    description:
      "A recurring-revenue subscription store with plan management, skip/swap flows, and a frictionless one-click checkout.",
    tags: ["Shopify", "Subscriptions", "Checkout Extensibility"],
    url: "https://example.com/projects/subscription-box",
  },
];

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

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

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------------------------------------------------------ */
/*  Project card                                                       */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, index, accent }) {
  const Icon = project.icon;

  const accentClasses = {
    blue: {
      glow: "from-blue-500/20 to-cyan-500/20",
      corner: "border-blue-400",
      iconBg: "bg-blue-50 border-blue-200 group-hover:border-blue-400",
      iconColor: "text-blue-600",
      tagHover: "hover:bg-blue-100 hover:text-blue-700",
      button:
        "bg-slate-900 group-hover:bg-blue-600 text-white",
      idColor: "text-blue-500",
    },
    indigo: {
      glow: "from-indigo-500/20 to-blue-500/20",
      corner: "border-indigo-400",
      iconBg: "bg-indigo-50 border-indigo-200 group-hover:border-indigo-400",
      iconColor: "text-indigo-600",
      tagHover: "hover:bg-indigo-100 hover:text-indigo-700",
      button:
        "bg-slate-900 group-hover:bg-indigo-600 text-white",
      idColor: "text-indigo-500",
    },
    emerald: {
      glow: "from-emerald-500/20 to-green-500/20",
      corner: "border-emerald-400",
      iconBg: "bg-emerald-50 border-emerald-200 group-hover:border-emerald-400",
      iconColor: "text-emerald-600",
      tagHover: "hover:bg-emerald-100 hover:text-emerald-700",
      button:
        "bg-slate-900 group-hover:bg-emerald-600 text-white",
      idColor: "text-emerald-500",
    },
  }[accent];

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -10 }}
      className="group relative h-full"
    >
      {/* Background Glow */}
      <div
        className={`absolute -inset-2 bg-gradient-to-br ${accentClasses.glow} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
      />

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 ${accentClasses.corner} rounded-tl-xl z-10 pointer-events-none`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 ${accentClasses.corner} rounded-br-xl z-10 pointer-events-none`}
      />

      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open project: ${project.title}`}
        whileHover={{
          boxShadow: "0 30px 60px -15px rgba(15, 23, 42, 0.25)",
        }}
        className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:border-slate-300"
      >
        {/* Moving Sheen Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="pointer-events-none absolute top-0 left-0 z-10 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.12 }}
          transition={{ duration: 0.6 }}
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all ${accentClasses.iconBg}`}
        >
          <Icon className={`h-7 w-7 ${accentClasses.iconColor}`} strokeWidth={1.6} />
        </motion.div>

        {/* Project ID */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className={`font-mono text-xs font-medium tracking-[3px] ${accentClasses.idColor}`}
          >
            {project.id}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        </div>

        <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mb-6 flex-1 leading-relaxed text-slate-600">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors ${accentClasses.tagHover}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <span
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300 ${accentClasses.button}`}
        >
          View Live Project
          <motion.span
            className="inline-flex"
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </span>
      </motion.a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Category block (heading + 3-card grid)                            */
/* ------------------------------------------------------------------ */

function CategoryBlock({ eyebrow, title, highlight, description, projects, accent }) {
  return (
    <div className="mb-24 last:mb-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="mb-12 text-center"
      >
        <span className="mb-3 inline-block font-mono text-xs font-semibold tracking-[4px] text-slate-400">
          {eyebrow}
        </span>
        <h3 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          {title}{" "}
          <span
            className={
              accent === "blue"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                : accent === "indigo"
                ? "bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent"
            }
          >
            {highlight}
          </span>
        </h3>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            accent={accent}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function ProjectsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#e9edfb] to-[#f0f4ff] py-20 sm:py-28">
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full border border-blue-200/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 bottom-10 h-[500px] w-[500px] rounded-full border border-purple-200/20"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl font-black tracking-tighter text-slate-900 sm:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A closer look at what we've shipped — real projects across custom
            code, WordPress, and Shopify. Click any card to view it live.
          </p>
        </motion.div>

        {/* Custom Coding Projects */}
        <CategoryBlock
          eyebrow="CUSTOM DEVELOPMENT"
          title="Custom Coding"
          highlight="Projects"
          description="Hand-built applications engineered from scratch — no page builders, no shortcuts."
          projects={customProjects}
          accent="blue"
        />

        {/* WordPress Projects */}
        <CategoryBlock
          eyebrow="CMS DEVELOPMENT"
          title="WordPress"
          highlight="Projects"
          description="Flexible, editable sites your team can manage with confidence after launch."
          projects={wordpressProjects}
          accent="indigo"
        />

        {/* Shopify Projects */}
        <CategoryBlock
          eyebrow="ECOMMERCE DEVELOPMENT"
          title="Shopify"
          highlight="Projects"
          description="Storefronts engineered to convert — from first click to completed checkout."
          projects={shopifyProjects}
          accent="emerald"
        />
      </div>
    </section>
  );
}