import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} className="size-8" />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  children,
  className,
  isActive,
  disabled = false,
  ...props
}: PaginationLinkProps & { disabled?: boolean }) {
  const { onClick, href, ...rest } = props as React.ComponentProps<"a">;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled || undefined}
      data-slot="pagination-link"
      data-active={isActive}
      tabIndex={disabled ? -1 : 0}
      href={disabled ? undefined : href}
      onClick={handleClick}
      className={cn(
        "text-transparent",
        disabled && "cursor-not-allowed",
        className
      )}
      children={
        <div
          className={`${
            disabled ? "bg-light-black" : "bg-normal-gold-gradient"
          } font-jakarta-sans p-px text-s8 size-8 rounded-xs`}
        >
          <div
            className={`${
              disabled
                ? "bg-light-black"
                : isActive
                ? "text-white"
                : "bg-dark-black"
            } h-full rounded-[3px] flex justify-center items-center`}
          >
            <span className="bg-clip-text bg-normal-gold-gradient">
              {children}
            </span>
          </div>
        </div>
      }
      {...rest}
    />
  );
}

function PaginationPrevious({
  disabled = false,
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { disabled?: boolean }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("bg-light-black", className)}
      disabled={disabled}
      {...props}
    >
      <ChevronLeftIcon
        className={`${
          disabled ? "text-[#C4CDD5] pointer-events-none" : "text-normal-gold"
        } size-4`}
      />
    </PaginationLink>
  );
}

function PaginationNext({
  disabled = false,
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { disabled?: boolean }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("bg-light-black", className)}
      disabled={disabled}
      {...props}
    >
      <ChevronRightIcon
        className={`${
          disabled ? "text-[#C4CDD5] pointer-events-none" : "text-normal-gold"
        } size-4`}
      />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex items-center justify-center bg-dark-black h-full rounded-[3px]",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="text-normal-gold size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
