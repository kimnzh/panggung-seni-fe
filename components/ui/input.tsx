import * as React from "react";

import { cn } from "@/lib/utils";
import { AlertTriangle, Search } from "lucide-react";

function Input({
  className,
  type,
  variant = "search",
  status = "default",
  errorText = "Error Message",
  ...props
}: React.ComponentProps<"input"> & {
  variant?: "default" | "search";
  status?: "default" | "error";
  errorText?: string;
}) {
  return (
    <div
      data-variant={variant}
      data-status={status}
      className="w-full flex items-center relative group text-normal-gold data-[status=error]:text-[#FF7474] "
    >
      <Search className="absolute left-5 size-3 md:size-4 group-data-[variant=default]:hidden z-20" />
      <input
        type={type}
        data-slot="input"
        className={cn(
          "peer z-10 file:text-foreground placeholder:text-normal-gold/40 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-light-gold w-full min-w-0 rounded-lg border bg-transparent pl-11 group-data-[variant=default]:pl-5 pr-5 py-3 text-b9 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-b7",
          "group-data-[status=default]:focus-visible:border-transparent focus-visible:bg-light-black",
          "group-data-[status=error]:border-error-message group-data-[status=error]:bg-error-message/20 group-data-[status=error]:placeholder:text-[#FF7474]/60 group-data-[status=error]:focus-visible:border-error-message group-data-[status=error]:focus-visible:bg-error-message/10",
          "aria-invalid:ring-error-message/20 dark:aria-invalid:ring-error-message/40 aria-invalid:border-error-message",
          className
        )}
        aria-invalid={status === "error"}
        {...props}
      />
      <div className="pointer-events-none z-0 w-[calc(100%+4px)] h-[calc(100%+4px)] group-data-[status=error]:hidden bg-normal-gold-gradient opacity-0 peer-focus:opacity-100 group-data-[status=error]:opacity-0 absolute rounded-[14px] -translate-x-0.5" />
      {status === "error" && (
        <div className="absolute -bottom-5 left-0 text-error-message text-b9 md:text-b8 flex gap-1 items-center">
          <AlertTriangle className="size-4" />
          {errorText}
        </div>
      )}
    </div>
  );
}

export { Input };
