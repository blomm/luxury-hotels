import React from "react";

interface HeroProps {
  hero?: string;
}

export const Hero: React.FC<HeroProps> = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};
