import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer group inline-flex font-jakarta-sans !text-s7 items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-white focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-normal-gold-gradient hover:bg-hover-gold-gradient disabled:bg-disabled-gold-gradient text-white hover:text-gray",
        secondary:
          "bg-light-gold-gradient hover:bg-hover-gold-gradient disabled:bg-disabled-gold-gradient text-white hover:text-gray p-px!",
      },
      size: {
        default: "h-10 md:h-12 gap-3 py-3 px-4 md:py-3 md:px-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      children={
        variant === "secondary" ? (
          <div className="gap-3 py-3 px-4 md:py-3 md:px-7 flex justify-center items-center w-full h-full bg-light-black rounded-[11px] group-hover:bg-dark-black">
            <span className="bg-light-gold-gradient bg-clip-text text-transparent group-hover:bg-hover-gold-gradient">
              {children}
            </span>
          </div>
        ) : (
          children
        )
      }
      {...props}
    />
  );
}

export { Button, buttonVariants };
