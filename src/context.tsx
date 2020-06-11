import React, { useState } from "react";
import items from "./data";
import { type } from "os";

export const RoomsContext = React.createContext({} as any);

export const RoomsProvider: React.FC = ({ children }) => {
  const [rooms, setRooms] = useState([] as any);
  const [sortedRooms, setSortedRooms] = useState([] as any);
  const [featuredRooms, setFeaturedRooms] = useState([] as any);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

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
    const maxPrice = Math.max(...newRooms.map((room) => room.price));
    const minPrice = Math.min(...newRooms.map((room) => room.price));

    const maxSize = Math.max(...newRooms.map((room) => room.size));
    const minSize = Math.min(...newRooms.map((room) => room.size));

    setFilters({
      ...filters,
      maxPrice,
      minPrice,
      maxSize,
      minSize,
      price: maxPrice,
    });
  }, []);

  // whenever a filter prop changes, useEffect will trigger a call to filterRooms
  React.useEffect(() => {
    filterRooms();
  }, [filters]);

  const getRoom = (slug: string) => {
    return rooms.find((room: any) => room.slug === slug);
  };

  const handleFilterChange = (event: any) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFilters({ ...filters, [name]: value });
  };

  const filterRooms = () => {
    let tempRooms = rooms;
    if (filters.type !== "all") {
      tempRooms = tempRooms.filter((r: any) => r.type === filters.type);
    }
    if (filters.capacity !== 1) {
      tempRooms = tempRooms.filter((r: any) => r.capacity >= filters.capacity);
    }
    // price
    tempRooms = tempRooms.filter((r: any) => r.price <= filters.price);
    // size
    tempRooms = tempRooms.filter(
      (r: any) => r.size <= filters.maxSize && r.size >= filters.minSize
    );
    // breakfast
    if (filters.breakfast) {
      tempRooms = tempRooms.filter((r: any) => r.breakfast);
    }
    // pets
    if (filters.pets) {
      tempRooms = tempRooms.filter((r: any) => r.pets);
    }

    setSortedRooms(tempRooms);
  };

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        isLoading,
        filters,
        getRoom,
        handleFilterChange,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
