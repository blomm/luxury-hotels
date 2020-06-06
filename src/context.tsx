import React, { useState } from "react";
import items from "./data";

export const RoomsContext = React.createContext({} as any);

export const RoomsProvider: React.FC = ({ children }) => {
  const [rooms, setRooms] = useState([] as any);
  const [sortedRooms, setSortedRooms] = useState([] as any);
  const [featuredRooms, setFeaturedRooms] = useState([] as any);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    let newRooms = items.map((h) => {
      let id = h.sys.id;
      let images = h.fields.images.map((image) => image.fields.file.url);
      return { ...h.fields, id, images };
    });
    setRooms(newRooms);
    setFeaturedRooms(newRooms.filter((h) => h.featured));
    setSortedRooms(newRooms);
    setIsLoading(false);
  }, []);

  return (
    <RoomsContext.Provider
      value={{ rooms, sortedRooms, featuredRooms, isLoading }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
