import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
  showArrow,
}) {
  return (
    <Wrap bgImg={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonWrapper>
            <LeftButton>{leftBtnText}</LeftButton>
            <RightButton>{rightBtnText}</RightButton>
          </ButtonWrapper>
        </Fade>
        {showArrow && <DownArrow src="/images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ bgImg }) => `url("/images/${bgImg}")`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  font-weight: 600;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: rgba(23, 26, 32, 0.8);
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow: hidden;
`;

const Buttons = styled.div``;
