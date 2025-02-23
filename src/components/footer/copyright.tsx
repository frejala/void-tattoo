"use client";

import { motion } from "framer-motion";

export function Copyright() {
  return (
    <div className="bg-dark text-[#dbdbdb] py-6 border-t border-[#2b2b2b] px-10">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <div className="tracking-[0.02em] text-base">
          &copy; 2025{" "}
          <span className="font-semibold text-white">The void Tattoo.</span>
          All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
