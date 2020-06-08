import React from "react";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};
