import React from "react";
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { RoomsContext } from "../context";
import { Loading } from "./Loading";

export const RoomsContainer = () => {
  const { isLoading, sortedRooms, rooms } = React.useContext(RoomsContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
};
