"use client";

import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmoothScrollButtonProps extends ButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export const SmoothScrollButton = ({
  targetId,
  children,
  className,
  ...props
}: SmoothScrollButtonProps) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button 
      onClick={handleScroll}
      className={cn(
        "cursor-pointer transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}; 