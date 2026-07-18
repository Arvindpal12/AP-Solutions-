import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "../pages/About" },
  { name: "Services", path: "../pages/Services" },
  { name: "Portfolio", path: "../pages/Portfolio" },
  { name: "Contact", path: "../pages/Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] lg:w-[85%] xl:w-[75%] z-50">

        <div className="bg-black rounded-full px-6 py-4 shadow-2xl flex items-center justify-between">

          {/* Logo */}

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="AP Solutions"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h1 className="text-white text-2xl font-bold hidden sm:block">
              AP Solutions
            </h1>
          </motion.div>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-8">

            {links.map((item) => (

              <motion.li
                key={item.name}
                whileHover={{
                  scale: 0.92,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <a
                  href={item.path}
                  className="text-white border border-gray-600 px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300"
                >
                  {item.name}
                </a>
              </motion.li>

            ))}

          </ul>

          {/* Desktop Button */}

          {/* <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden md:block bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Get Quote
          </motion.button> */}
          <motion.button
        onClick={() => navigate("/pages/contact")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-white text-black px-6 py-3 rounded-full font-semibold"
      >
        Get Quote
      </motion.button>

          {/* Mobile Icon */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] bg-black rounded-3xl shadow-2xl p-8 z-40 md:hidden"
          >

            <ul className="flex flex-col gap-5">

              {links.map((item) => (

                <motion.li
                  key={item.name}
                  whileHover={{ scale: 0.95 }}
                >
                  <a
                    href={item.path}
                    onClick={() => setOpen(true)}
                    className="block text-center text-white border border-gray-600 rounded-full py-3 hover:bg-white hover:text-black duration-300"
                  >
                    {item.name}
                  </a>
                </motion.li>

              ))}

            </ul>

            <button className="mt-8 w-full bg-white text-black py-3 rounded-full font-bold">
              Get Quote
            </button>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}