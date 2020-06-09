import React from "react";
import { RoomsContext } from "../context";
import { useParams, Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Banner } from "../components/Banner";
import { StyledHero } from "../components/StyledHero";

export const SingleRoom = () => {
  const { getRoom } = React.useContext(RoomsContext);

  // we can use the new useParams hook
  // https://reacttraining.com/react-router/web/api/Hooks
  let hookParams: any = useParams();

  let room = getRoom(hookParams.slug);
  if (!room) {
    return <Loading />;
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImage, ...secondaryImages] = images;
  // normal hero would take the className, but StyledHero just uses the
  // css from the StyledHero component
  return (
    <>
      <StyledHero img={mainImage}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {secondaryImages.map((item: string, index: number) => (
            <img key={index} src={item} alt={name}></img>
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: £{price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((extra: string, index: number) => (
            <li key={index}>- {extra}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
