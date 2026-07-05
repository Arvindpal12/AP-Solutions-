import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
  ];

  const services = [
    "Website Development",
    "WordPress Development",
    "Shopify Development",
    "UI/UX Design",
    "SEO & Marketing",
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaGithub />, url: "#" },
    { icon: <FaXTwitter />, url: "#" },
  ];

  return (
    <footer className="bg-[#0B1120] text-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              AP Solutions
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We create modern websites, WordPress solutions,
              Shopify stores and software that help businesses
              grow online.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 10 }}
                >
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 10 }}
                >
                  <a
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                    y: -6,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl hover:bg-blue-600 transition duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <p className="mt-6 text-gray-400 text-sm leading-7">
              Stay connected with us for the latest updates,
              projects, and technology insights.
            </p>
          </motion.div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AP Solutions. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-500">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;