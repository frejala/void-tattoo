"use client";

import { interviewData } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function Interview() {
  const { title } = interviewData;

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-203 px-10"
      id="interview"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-220">
            <motion.h3
              variants={fadeIn("down")}
              className="text-white text-[40px] lg:text-6xl leading-[1.1] font-tertiary -tracking-[1.5px] capitalize  mb-8"
            >
              {title}
            </motion.h3>
            <motion.div variants={fadeIn("down")} className="w-full">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=_l1mqYQuNf8"
                width={"100%"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
