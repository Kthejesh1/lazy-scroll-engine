import React, { useState } from "react";
import styled from "styled-components";

const DotHighlight = () => {
    const [pos, setPos] = useState([]);

    const handlePointerMove = (event) => {
        console.log('Block event', event);

        setPos({left: event?.clientX, top: event?.clientY})
    }
  return (
    <Container onPointerMove={handlePointerMove}>
        <Dot  data={pos} />
    </Container>
  );
};

export default DotHighlight;

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
    background-color: white;
    position: fixed;
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
    left: ${props => props?.data?.left+'px'};
    top: ${props => props?.data?.top+'px'};
    transform: translate(-0.5rem, -0.5rem);
`