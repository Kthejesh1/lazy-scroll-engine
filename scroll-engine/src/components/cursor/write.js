import React, { useState } from "react";
import styled from "styled-components";

const CursorWrite = () => {
  const [touchDown, setTouchDown] = useState(false);
  const [dots, setDots] = useState(
    Array(400)
      .fill()
      .map((el, ind) => ({ ind, selected: false })),
  );

  const handleMouseOver = (event, ind) => {
    if(touchDown) {
        setDots((prevDots) => {
        const newDots = structuredClone(prevDots);
        newDots[ind] = {...newDots[ind], selected: true}
        return newDots;
        });
    }
  };
  return (
    <Container >
      {dots.map((dot, ind) => {
        return (
          <Dot
            selected={dot.selected}
            onMouseDown={() => setTouchDown(true)}
            onMouseUp={() => setTouchDown(false)}
            onMouseOver={(e) => handleMouseOver(e, ind)}
          />
        );
      })}
    </Container>
  );
};

export default CursorWrite;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 1fr 2fr 3fr);
  width: max-content;
  height: max-content;
  position: relative;
  background-color: white;
  margin: 10rem 5rem;
  gap: 0.1rem;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${props => props?.selected ? 'red':'aliceblue'}
`;
