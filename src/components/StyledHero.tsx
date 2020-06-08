import styled from "styled-components";
import { Hero } from "./Hero";

export const StyledHero = styled(Hero)`
  min-height: 60vh;
  background: url("${(props: { img: string }) =>
    props.img}") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
