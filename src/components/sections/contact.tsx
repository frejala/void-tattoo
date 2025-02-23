"use client";

import { contactData } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Link from "next/link";

export function Contact() {
  const { title, info, form } = contactData;

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            {/* Get in touch with me */}
            <h2 className="h2 max-w-122.5">{title}</h2>
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, index) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  <div key={index}>
                    <div className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </div>
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    <div className="flex flex-col gap-y-3 mb-8">
                      {/* Address */}
                      <div className="flex items-center gap-2.5">
                        <div>{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      {/* Phone */}
                      <div className="flex items-center gap-2.5">
                        <div>{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      {/* Email */}
                      <div className="flex items-center gap-2.5">
                        <div>{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                    {/* Link */}
                    <Link
                      className="font-medium border-b border-dark pb-1.25"
                      href="/"
                    >
                      {link}
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-10 flex justify-center items-center "
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder={form.name}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder={form.email}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-7.5"
                type="text"
                placeholder={form.message}
              />
              <button className="self-start btn btn-sm btn-dark">
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
