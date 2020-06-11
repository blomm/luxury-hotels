import React, { useContext } from "react";
import { RoomsContext } from "../context";
import { Title } from "./Title";

interface RoomsFilterProps {
  rooms: [];
}
export const RoomsFilter: React.FC<RoomsFilterProps> = ({ rooms }) => {
  const { handleFilterChange, filters } = useContext(RoomsContext);

  const types = ["all", ...Array.from(new Set(rooms.map((r: any) => r.type)))];
  const capacities = Array.from(new Set(rooms.map((r: any) => r.capacity)));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      {/* room type select */}
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={filters.type}
            className="form-control"
            onChange={handleFilterChange}
          >
            {types.map((roomType: any, index: number) => (
              <option key={index} value={roomType}>
                {roomType}
              </option>
            ))}
          </select>
        </div>
        {/* guests select */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={filters.capacity}
            className="form-control"
            onChange={handleFilterChange}
          >
            {capacities.map((capacityNumber: any, index: number) => (
              <option key={index} value={capacityNumber}>
                {capacityNumber}
              </option>
            ))}
          </select>
        </div>
        {/* price range */}
        <div className="form-group">
          <label htmlFor="price">room price £{filters.price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={filters.price}
            min={filters.minPrice}
            max={filters.maxPrice}
            onChange={handleFilterChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">size</label>
          <input
            type="number"
            onChange={handleFilterChange}
            name="minSize"
            id="size"
            value={filters.minSize}
            className="size-input"
          />
          <input
            type="number"
            onChange={handleFilterChange}
            name="maxSize"
            id="size"
            value={filters.maxSize}
            className="size-input"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              onChange={handleFilterChange}
              value={filters.breakfast}
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast">breakfast included</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              onChange={handleFilterChange}
              value={filters.pets}
              name="pets"
              id="pets"
            />
            <label htmlFor="pets">pets allowed</label>
          </div>
        </div>
      </form>
    </section>
  );
};
