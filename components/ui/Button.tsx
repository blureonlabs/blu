"use client";

import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-blululu-red text-white hover:bg-red-600 focus:ring-blululu-red shadow-lg shadow-blululu-red/25 hover:shadow-xl hover:shadow-blululu-red/40",
    secondary: "bg-white text-[#0a0a0a] hover:bg-neutral-200 focus:ring-white shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-[#0a0a0a] focus:ring-white shadow-md hover:shadow-lg",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-6 py-3 text-base rounded-full",
    lg: "px-8 py-4 text-lg rounded-full",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.create(Link);

  const animationProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={combinedClassName}
        {...animationProps}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
      {...animationProps}
    >
      {children}
    </MotionButton>
  );
}
