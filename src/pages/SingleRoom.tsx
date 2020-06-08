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
          </article>
        </div>
      </section>
    </>
  );
};
