import React from "react";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import "./popupLayout.scss";

const PopupLayout = ({ setShowProjects, children }) => {
  return (
    <motion.div
      className="layout-container"
      initial={{ opacity: 0.3, bottom: -1000 }}
      animate={{ opacity: 1, bottom: 0 }}
      exit={{ opacity: 0.4, bottom: -900 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <div className="layout-container__wrapper">{children}</div>
    </motion.div>
  );
};

export default PopupLayout;
