import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  const underlineColor = active
    ? "from-purple-500 to-pink-500"
    : "from-transparent to-transparent";

  return (
    <button onClick={selectTab} className="relative">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 bg-gradient-to-r ${underlineColor} mt-2 absolute left-0 right-0 mr-3`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
