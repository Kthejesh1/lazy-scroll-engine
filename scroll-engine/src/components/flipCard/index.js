import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
const FlipComponent = (props) => {
  const { children } = props;
  const [flip, setFlip] = useState(false);

  return (
    <Container flip={flip} onClick={() => setFlip((flip) => !flip)}>
      <div className="front">Front</div>
      <div className="back">Back</div>
    </Container>
  );
};

export default FlipComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s;
  transform: ${(props) => (props?.flip ? "rotateY(180deg)" : "rotateY(0)")};
  transform-style: preserve-3d;
  div {
    display: flex;
    width: 20rem;
    height: 15rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    backface-visibility: hidden;
  }
  .front {
    background-color: lightblue;
    z-index: ${(props) => (props?.flip ? 0 : 1)};
    /* transform: rotateY(180deg); */
  }
  .back {
    background-color: lightgreen;
    z-index: ${(props) => (props?.flip ? 1 : 0)};
    transform: rotateY(180deg);
  }
`;

// const flipSmoot = keyframes`
//     0% {
//         transform: rotateY(0deg);

//     }
//     50%{

//     }
//     100% {
//         transform: rotateY(180deg);

//     }
// `;
