import styled from "styled-components";
import { ReactComponent as HeroIcon } from "../assets/hero-icon.svg";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #004c3f;
  color: #ffffff;

  .text {
    padding: 32px 0;
  }

  .section-header {
    margin-bottom: 8px;
  }

  .section-subheader {
    margin-bottom: 25px;
    color: #d2d5d9;
    font-weight: normal;
  }

  .scroll-button {
    width: 220px;
    height: 45px;
  }

  .scroll-button:hover {
    border: 2px solid var(--primary);
    background-color: black;
  }

  .scroll-button:active {
    border-color: #002e25;
  }

  .hero-icon {
    padding: 32px 0 64px;
  }

  @media only screen and (min-width: 769px) {
    padding: 64px;
    flex-direction: row;

    .hero-icon {
      padding: 0 calc(5% + 9px) 0;
    }
  }
`;

const Hero = () => {
  const handleClick = () => {
    const form = document.querySelector(".tagline-mission-statement-form");
    form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero className="hero">
      <div className="text">
        <h1 className="section-header">
          Tagline and Mission Statement Generator
        </h1>
        <h2 className="section-subheader">
          Create a tagline and mission statement for your business in seconds.
        </h2>
        <button className="scroll-button" onClick={handleClick}>
          Start here
        </button>
      </div>
      <HeroIcon className="hero-icon" />
    </StyledHero>
  );
};

export default Hero;
