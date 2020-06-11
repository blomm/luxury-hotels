import React from "react";
import { Room } from "./Room";

interface RoomsListProps {
  rooms: [];
}

export const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  if (!rooms.length) {
    return (
      <div className="empty-search">
        <h3>unfortunately, no rooms match your search</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room, index) => (
          <Room key={index} room={room}></Room>
        ))}
      </div>
    </section>
  );
};
