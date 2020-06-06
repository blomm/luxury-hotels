import React from "react";
import { useParams } from "react-router-dom";

interface SingleRoomProps {
  match: any;
}

export const SingleRoom: React.FC<SingleRoomProps> = ({ match }) => {
  let hookParams = useParams();
  console.log(hookParams);
  console.log(match.params);
  return <div>Hello from single room: {match.params.slug}</div>;
};
