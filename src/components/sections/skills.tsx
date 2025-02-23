"use client";

import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { CircularProgress } from "@/components/ui/circular-progress";

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, temporary, fullColor]);

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className="section font-primary"
      id="skills"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <div className="w-37.5 lg:w-68.75 flex flex-col justify-center items-center gap-y-6">
            <CircularProgress value={fullBody} />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Full Body Tattoo
            </div>
          </div>
          <div className="w-37.5 lg:w-68.75 flex flex-col justify-center items-center gap-y-6">
            <CircularProgress value={piercing} />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Safely Piercing
            </div>
          </div>
          <div className="w-37.5 lg:w-68.75 flex flex-col justify-center items-center gap-y-6">
            <CircularProgress value={fullColor} />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Full Colour Tattoo
            </div>
          </div>
          <div className="w-37.5 lg:w-68.75 flex flex-col justify-center items-center gap-y-6">
            <CircularProgress value={temporary} />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Temporary Tattoo
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
