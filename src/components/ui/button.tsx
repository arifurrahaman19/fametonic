import { cn } from "@/lib/utils";
import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
};

const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 cursor-pointer disabled:pointer-events-none";

const variantStyles: Record<string, string> = {
	primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
	secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
	outline: "border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 focus:ring-gray-400",
};

const sizeStyles: Record<string, string> = {
	sm: "px-3 py-1.5 text-sm",
	md: "px-4 py-2 text-base",
	lg: "px-6 py-3 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = "primary", size = "md", className, children, ...props }, ref) => {
	return (
		<button ref={ref} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...props}>
			{children}
		</button>
	);
});

Button.displayName = "Button";

export default Button;
