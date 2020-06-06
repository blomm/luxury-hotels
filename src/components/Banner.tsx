import React from "react";

interface BannerProps {
  title: string;
  subTitle?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subTitle}</p>
      {children}
    </div>
  );
};
