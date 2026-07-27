import React, { useState } from "react";
import styled from "styled-components";

const AddDotOnClick = () => {
    const [dots, setDots] = useState([]);

    const handleClick = (event) => {
        console.log('Block event', event);

        setDots((prevDots) => {
            const newDots = structuredClone(prevDots);

            return [...newDots, {left: event?.clientX, top: event?.clientY}] 
        })
    }
  return (
    <Container onClick={handleClick}>
      {dots.map(dot => {
        return <Dot key={dot?.left} data={dot} />
      })}
    </Container>
  );
};

export default AddDotOnClick;

const Container = styled.div`
    width: 20rem;
    height: 20rem;
    position: relative;
    background-color: aliceblue;
    margin: 10rem 5rem;
`


const Dot = styled.div`
    width: 1rem;
    height: 1rem;
    position: fixed;
    background-color: red;
    left: ${props => props?.data?.left+'px'};
    top: ${props => props?.data?.top+'px'};
`