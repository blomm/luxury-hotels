import React from "react";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
};
