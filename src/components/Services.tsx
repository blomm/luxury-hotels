import React, { useState } from "react";
import { Title } from "../components/Title";
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from "react-icons/fa";

export const Services: React.FC = () => {
  let initialServices = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque?",
    },
    {
      icon: <FaBeer />,
      title: "Lots of Beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque?",
    },
    {
      icon: <FaHiking />,
      title: "Great Hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque?",
    },
    {
      icon: <FaShuttleVan />,
      title: "Airport Shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque?",
    },
  ];
  const [services, setServices] = useState(initialServices);

  return (
    <section className="services">
      <Title title="services"></Title>
      <div className="services-center">
        {services.map((serviceItem, index) => (
          <article key={index} className="service">
            <span>{serviceItem.icon}</span>
            <h6>{serviceItem.title}</h6>
            <p>{serviceItem.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
