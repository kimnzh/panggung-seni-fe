import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

function Badge({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        "inline-flex items-center justify-center rounded-full p-0.5 text-s8 md:text-b7 font-jakarta-sans bg-light-gold-gradient relative font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
        className
      )}
      children={
        <>
          <div className="bg-light-black px-4 py-2 md:px-5 md:py-3 rounded-full">
            <span className="bg-clip-text bg-light-gold-gradient text-transparent">
              {children}
            </span>
          </div>
        </>
      }
      {...props}
    />
  );
}

export { Badge };
