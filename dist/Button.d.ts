import { type VariantProps } from "class-variance-authority";
import React from "react";
declare const button: (props?: ({
    intent?: "primary" | "secondary" | "outline" | "primaryOutline" | null | undefined;
    size?: "small" | "outlineSmall" | "medium" | "action" | "modalAction" | "large" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, VariantProps<typeof button> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    href?: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map