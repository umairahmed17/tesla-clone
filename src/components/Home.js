import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = ({ toggleMenu }) => {
  return (
    <Container className={toggleMenu && "menu--active"}>
      <Section
        title="Model S"
        description="Order Online"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        showArrow={true}
      />
      <Section
        title="Model Y"
        description="Order Online"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  &.menu--active {
    filter: blur(10px);
    pointer-events: none;
  }
`;
