import React from "react";
import styled, { keyframes } from "styled-components";

const DotAnimation = () => {
  return (
    <Container>
      <Dot className="dot" delay={0} />
      <Dot className="dot" delay={0.2} />
      <Dot className="dot" delay={0.4} />
    </Container>
  );
};

export default DotAnimation;

const animMove = keyframes`
    50%{
        transform: translateY(3rem);
    }
`;

const anim = keyframes`
    50%{
        opacity: 0.5;
    }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: black;
  border-radius: 1rem;
  animation: ${anim} 1s ${(props) => props?.delay}s infinite;
`;
