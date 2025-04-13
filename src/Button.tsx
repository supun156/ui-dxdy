"use client";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(
  "button font-open-sans font-semibold flex items-center justify-evenly rounded-[4px] border",
  {
    variants: {
      intent: {
        primary: [
          "bg-[#F34147]",
          "text-white",
          "border-transparent",
          "hover:bg-[#cd0d13]",
        ],
        secondary: [
          "bg-[#333333]",
          "text-[#FFFFFF]",
          "border-gray-400",
          "hover:bg-[#474747]",
        ],
        outline: [
          "bg-[#FFFFFF]",
          "text-[#333333]",
          "border-[#D9D9D9]",
          "hover:bg-[#333333]",
          "hover:text-[#FFFFFF]",
        ],
        primaryOutline: [
          "bg-white",
          "text-[#F34147]",
          "border-[#F34147]",
          "hover:bg-[#F34147]",
          "hover:text-white",
        ],
      },
      size: {
        small: ["text-[12px]", "h-[30px]", "w-[99px]"],
        outlineSmall: ["text-[14px]", "h-[32px]", "w-[133px]"],
        medium: ["text-[14px]", "h-[50px]", "w-full"],
        action: ["text-[16px]", "h-[44px]", "w-[154px]"],
        modalAction: ["text-[14px]", "h-[44px]", "min-w-[100px]"],
        large: [
          "text-[16px]",
          "xl:text-[20px]",
          "h-[75px]",
          "xl:h-[126px]",
          "w-full",
        ],
      },
      disabled: {
        false: null,
        true: ["cursor-not-allowed"],
      },
    },

    // Compound Variants for specific disabled states
    compoundVariants: [
      // --- Disabled state for SECONDARY intent (matching your Figma) ---
      {
        intent: "secondary",
        disabled: true,
        className: [
          "bg-[#333333]",
          "border-[#333333]",
          "text-[#333333]",
          "hover:bg-[#333333]",
        ],
      },
      // ---  Disabled state for PRIMARY intent (you might want a different look) ---
      {
        intent: "primary",
        disabled: true,
        className: [
          "bg-[rgba(51,51,51,0.5)]", // Background with 50% opacity
          "border-[rgba(51,51,51,0.5)]", // Border with 50% opacity
          "text-[rgba(51,51,51,0.5)]", // Text with 50% opacity
          "hover:bg-[rgba(51,51,51,0.5)]", // Hover background with 50% opacity
        ],
      },
      // ---  Disabled state for OUTLINE intent ---
      {
        intent: "outline",
        disabled: true,
        className: [
          "bg-[#E9E9E9]",
          "text-[#333333]",
          "border-[#D9D9D9]",
          "hover:bg-[#E9E9E9]",
          "hover:text-[#333333]",
          "hover:border-[#D9D9D9]",
        ],
      },
      {
        intent: "primaryOutline",
        disabled: true,
        className: [
          "disabled:bg-[rgba(233,233,233)]", // Equivalent to #E9E9E9/50
          "disabled:border-[rgba(51,51,51,0.5)]", // Equivalent to #333333/50
          "disabled:text-[rgba(51,51,51,0.5)]",
          "disabled:hover:bg-[rgba(233,233,233)]",
          "disabled:hover:border-[rgba(51,51,51,0.5)]",
          "disabled:hover:text-[rgba(51,51,51,0.5)]",
        ],
      },
    ],

    defaultVariants: {
      disabled: false,
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  iconLeft,
  iconRight,
  href,
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={button({ intent, size, disabled, className })}
      disabled={disabled || undefined}
      {...props}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
