"use client";

import { testimonialData } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/variants";
import Autoplay from "embla-carousel-autoplay";

export function Testimonial() {
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="pb-10 pt-10 lg:pb-40 lg:pt-0 px-10"
      id="testimonial"
    >
      <div className="container mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonialData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="max-w-300 cursor-pointer text-black mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-9.5">
                  <div className="w-38.5 h-27.25 mb-5">
                    <Image src={item.quoteImg} alt="Image" />
                  </div>
                  <div>
                    <div className="flex-1 lg:mt-13.5">
                      <div className="text-2xl lg:text-4xl leading-normal mb-6 lg:mb-12">
                        {item.message}
                      </div>
                      <div className="flex items-center text-xl lg:text-2xl font-primary">
                        <div className="font-semibold">{item.name}</div>
                        <span className="mx-4">|</span>
                        <div className="font-light">{item.occupation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
}
