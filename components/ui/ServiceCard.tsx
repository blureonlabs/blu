"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 hover:border-blululu-red hover:shadow-xl transition-all duration-300"
    >
      {/* Optional Icon */}
      {icon && (
        <div className="mb-6 text-blululu-red">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl lg:text-3xl font-bold text-blululu-black mb-4 group-hover:text-blululu-red transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>

      {/* Hover indicator */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-blululu-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
