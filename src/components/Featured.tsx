import React from "react";
import { RoomsContext } from "../context";
import { Loading } from "./Loading";
import { Room } from "./Room";
import { Title } from "./Title";

export const Featured = () => {
  const { featuredRooms, isLoading } = React.useContext(RoomsContext);
  return (
    <section className="featured-rooms">
      <Title title="feature rooms" />
      <div className="featured-rooms-center">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          featuredRooms.map((room: any) => (
            <Room key={room.id} room={room}></Room>
          ))
        )}
      </div>
    </section>
  );
};
